import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

export const Home = (props) => {

  return (
    <div>
      <h1>Welcome to the .Net 6 with React + Redux and Azure AD Authentication Proof of Concept</h1>
      <p><FontAwesomeIcon icon={faCoffee} /> Welcome to your new single-page application, built with:</p>
      <ul>
        <li><a href='https://get.asp.net/'>ASP.NET Core</a> and <a href='https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx'>C#</a> for cross-platform server-side code</li>
        <li><a href='https://facebook.github.io/react/'>React</a> for client-side code</li>
        <li><a href='http://getbootstrap.com/'>Bootstrap</a> for layout and styling, and <a href="https://fontawesome.com/">Fontawesome</a> for icons.</li>
        <li><a href='https://redux.js.org/tutorials/essentials/part-1-overview-concepts'>Redux</a> for application state management.</li>
        <li><a href='https://azure.microsoft.com/en-us/services/active-directory/'>Azure Active directory</a> for client-side authentication and API authorization.</li>
      </ul>
      <p>We have also set up:</p>
      <ul>
        <li><strong>Client-side navigation</strong>. For example, click <em>Counter</em> then <em>Back</em> to return here.</li>
        <li><strong>Development server integration</strong>. In development mode, the development server from <code>create-react-app</code> runs in the background automatically, so your client-side resources are dynamically built on demand and the page refreshes when you modify any file.</li>
        <li><strong>Efficient production builds</strong>. In production mode, development-time features are disabled, and your <code>dotnet publish</code> configuration produces minified, efficiently bundled JavaScript files.</li>
      </ul>
      <p>
        Press Sign In in the navigation bar to kick off the authentication process. Then try to access the secure resource Fetch Data.
      </p>
    </div>
  );
}
