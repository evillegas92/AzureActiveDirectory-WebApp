export const msalConfig = {
    auth: {
        clientId: "2c9d38ef-5b50-4991-886c-040b463779a6",
        authority: "https://login.microsoftonline.com/c790d7c7-78aa-4e91-8b46-42297db024ef", // This is a URL (e.g. https://login.microsoftonline.com/{your tenant ID})
        redirectUri: "https://localhost:44447/",
    },
    cache: {
        cacheLocation: "sessionStorage", // This configures where your cache will be stored
        storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    }
};

// Add scopes here for ID token to be used at Microsoft identity platform endpoints.
export const loginRequest = {
    scopes: ["User.Read"]
};

// Add the endpoints here for Microsoft Graph API services you'd like to use.
export const graphConfig = {
    graphMeEndpoint: "https://graph.microsoft.com/v1.0/me"
};