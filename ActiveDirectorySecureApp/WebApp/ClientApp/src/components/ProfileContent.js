import React, { useState } from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../authConfig";
import { Button } from 'reactstrap';
import { useDispatch, useSelector } from "react-redux";
import { authTokenAcquired } from '../redux/slices/authSlice';

export const ProfileContent = () => {
    const { instance, accounts, inProgress } = useMsal();
    const accessToken = useSelector(state => state.auth.token);

    const dispatch = useDispatch();

    const name = accounts[0] && accounts[0].name;

    function RequestAccessToken() {
        const request = {
            ...loginRequest,
            account: accounts[0]
        };

        // Silently acquire an access token which is then attached to a request to the Microsoft Graph API.
        // acquireTokenSilent will first look for a cached, unexpired access token then,
        // if needed, use the refresh token to obtain a new access token
        instance.acquireTokenSilent(request)
            .then((response) => {
                dispatch(authTokenAcquired(response.accessToken));
            })
            .catch((e) => {
                /* Calling acquireTokenPopup opens a pop-up window (or acquireTokenRedirect redirects users to the
                    Microsoft identity platform). In that window, users need to interact by confirming their 
                    credentials, giving consent to the required resource, or completing the two-factor authentication. */
                instance.acquireTokenPopup(request)
                    .then((response) => {
                        dispatch(authTokenAcquired(response.accessToken));
                    });
            });
    }

    return (
        <>
            <h5 className="card-title">Welcome {name}</h5>
            {accessToken ?
                <p>Access Token Acquired!</p>
                :
                <Button color="secondary" onClick={RequestAccessToken}>Request Access Token</Button>
            }
        </>
    );
}