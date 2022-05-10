import React from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../../authConfig";
import { Button } from 'reactstrap';

function handleLogin(instance) {
    instance.loginRedirect(loginRequest).catch(e => {
        console.error(e);
    });
}

export const SignInButton = () => {
    const { instance } = useMsal();

    return (
        <Button
          color="success"
          size="large"
          onClick={() => handleLogin(instance)}>
          Sign In
        </Button>
    );
}