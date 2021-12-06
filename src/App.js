//import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react'
import { GoogleLogout, GoogleLogin } from 'react-google-login'
import GoogleAd from 'react-google-ad'
import Navbar from './components/Navbar';
//import List from './components/List';

<GoogleAd client="1010856078470-q0a4jhfegg8p5ct6vtr17a35gqihv9en.apps.googleusercontent.com" slot="xxx" format="xxx" />

const clientId = '1010856078470-q0a4jhfegg8p5ct6vtr17a35gqihv9en.apps.googleusercontent.com'
/*
 * Create form to request access token from Google's OAuth 2.0 server.
 */
function oauthSignIn() {
  // Google's OAuth 2.0 endpoint for requesting an access token
  var oauth2Endpoint = 'https://accounts.google.com/o/oauth2/v2/auth';

  // Create <form> element to submit parameters to OAuth 2.0 endpoint.
  var form = document.createElement('form');
  form.setAttribute('method', 'GET'); // Send as a GET request.
  form.setAttribute('action', oauth2Endpoint);

  // Parameters to pass to OAuth 2.0 endpoint.
  var params = {
    'client_id': '1010856078470-q0a4jhfegg8p5ct6vtr17a35gqihv9en.apps.googleusercontent.com',
    'redirect_uri': 'http://localhost:3000',
    'response_type': 'token',
    'scope': 'https://www.googleapis.com/auth/drive.metadata.readonly',
    'include_granted_scopes': 'true',
    'state': 'pass-through value'
  };

  // Add form parameters as hidden input values.
  for (var p in params) {
    var input = document.createElement('input');
    input.setAttribute('type', 'hidden');
    input.setAttribute('name', p);
    input.setAttribute('value', params[p]);
    form.appendChild(input);
  }

  // Add form to page and submit it to open the OAuth 2.0 endpoint.
  document.body.appendChild(form);
  form.submit();

}

const success = response => {
  console.log(response) // eslint-disable-line
}

const error = response => {
  console.error(response) // eslint-disable-line
}

const loading = () => {
  console.log('loading') // eslint-disable-line
}

const logout = () => {
  console.log('logout') // eslint-disable-line
}

const MountTest = () => {
  const [showButton, toggleShow] = useState(true)

  if (showButton) {
    return (
      <GoogleLogin
        onSuccess={res => {
          toggleShow(false)
          success(res)
        }}
        onFailure={error}
        clientId={clientId}
      >
        Auth then Hide button
      </GoogleLogin>
    )
  }

  return <button onClick={() => toggleShow(true)}>show button</button>
}
function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=5')
      .then(res => res.json())
      .then(
        result => {
          setIsLoading(false);
          setData(result.results);
        },
        error => {
          setIsLoading(false);
          setError(error);
        }
      );
  }, []);
  return (
    //Graphics Components uses for the graphic interface
    <div>
      <Navbar />
      {/* <List /> */}
      <MountTest />
      <br />
      <br />
      <GoogleLogin
        clientId={clientId}
        scope="https://www.googleapis.com/auth/analytics"
        onSuccess={success}
        onFailure={error}
        onRequest={loading}
        offline={false}
        approvalPrompt="force"
        responseType="id_token"
        isSignedIn
        theme="dark"
        disabled
      // prompt="consent"
      // className='button'
      // style={{ color: 'red' }}
      >
        <span>Analytics</span>
      </GoogleLogin>
      <br />
      <br />
      <GoogleLogin
        clientId={clientId}
        scope="https://www.googleapis.com/auth/adwords" // Investigamos el scope y es el que arroja la documentacion de ads
        onSuccess={success}
        onFailure={error}
        onRequest={loading}
        approvalPrompt="force"
        responseType="id_token"
        uxMode="redirect"
        //redirectUri="https://ads.google.com/nav/selectaccount?euid=567781341&__u=7997363509&authuser=0&subid=co-es-419-et-g-aw-c-home-awhp_xin1_signin!o2&sourceid=emp"
        redirectUri="http://www.google.com"
        // disabled
        prompt="consent"
        className='button'
      // style={{ color: 'red' }}
      >
        <span>Ads</span>
      </GoogleLogin>
      <br />
      <br />
      <GoogleLogin onSuccess={success} onFailure={error} clientId={clientId} />
      <br />
      <br />
      <GoogleLogin theme="dark" onSuccess={success} onFailure={error} clientId={clientId} />
      <br />
      <br />
      <GoogleLogin theme="dark" style={{ background: 'blue' }} onSuccess={success} onFailure={error} clientId={clientId} />
      <br />
      <br />
      <GoogleLogout buttonText="Logout" onLogoutSuccess={logout} />
    </div>
  );
}
export default App;
// eslint-disable-next-line import/no-anonymous-default-export
// export default () => (
//   <div>
//     <MountTest />
//     <br />
//     <br />
//     <GoogleLogin
//       clientId={clientId}
//       scope="https://www.googleapis.com/auth/analytics"
//       onSuccess={success}
//       onFailure={error}
//       onRequest={loading}
//       offline={false}
//       approvalPrompt="force"
//       responseType="id_token"
//       isSignedIn
//       theme="dark"
//     // disabled
//     // prompt="consent"
//     // className='button'
//     // style={{ color: 'red' }}
//     >
//       <span>Analytics</span>
//     </GoogleLogin>
//     <br />
//     <br />
//     <GoogleLogin
//       clientId={clientId}
//       scope="https://www.googleapis.com/auth/adwords" // Investigamos el scope y es el que arroja la documentacion de ads
//       onSuccess={success}
//       onFailure={error}
//       onRequest={loading}
//       approvalPrompt="force"
//       responseType="id_token"
//       uxMode="redirect"
//       //redirectUri="https://ads.google.com/nav/selectaccount?euid=567781341&__u=7997363509&authuser=0&subid=co-es-419-et-g-aw-c-home-awhp_xin1_signin!o2&sourceid=emp"
//       redirectUri="http://localhost:3000/callback"
//       // disabled
//       prompt="consent"
//       className='button'
//     // style={{ color: 'red' }}
//     >
//       <span>Ads</span>
//     </GoogleLogin>
//     <br />
//     <br />
//     <GoogleLogin onSuccess={success} onFailure={error} clientId={clientId} />
//     <br />
//     <br />
//     <GoogleLogin theme="dark" onSuccess={success} onFailure={error} clientId={clientId} />
//     <br />
//     <br />
//     <GoogleLogin theme="dark" style={{ background: 'blue' }} onSuccess={success} onFailure={error} clientId={clientId} />
//     <br />
//     <br />
//     <GoogleLogout buttonText="Logout" onLogoutSuccess={logout} />
//   </div>
// )