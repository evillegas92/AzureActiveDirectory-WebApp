import React from "react";
import { useMsal } from "@azure/msal-react";
import { Button } from 'reactstrap';

function handleLogout(instance) {
    instance.logoutRedirect().catch(e => {
        console.error(e);
    });
}

export const SignOutButton = () => {
    const { instance } = useMsal();

    return (
        <Button
          color="secondary"
          size="large"
          onClick={() => handleLogout(instance)}>
          Sign Out
        </Button>
    );
}