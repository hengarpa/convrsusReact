//import logo from './logo.svg';
import './App.css';
// import { GoogleAdsApi, ResourceNames, enums, resources } from "google-ads-api";
import GoogleLogin from 'react-google-login';


function App() {
  // const client = new GoogleAdsApi({
  //   client_id:
  //     "130187367003-rrae1b66bhu6ncc8aj027uub94m9s7mk.apps.googleusercontent.com",//
  //   client_secret: "JmyatyI8TXcK0x7rkCJ3Tk3P", //Clave secreta de la API
  //   developer_token: "1JF6V5krOpWkuddPo7DKuw", //generado despues de la autenticacion

  // });
  const responseGoogle = (response) => {
    console.log(response);
    //console.log(response.isSignedIn());
    console.log(response.profileObj);
  };


  return (

    <div className="App">
      <br></br>
      <br></br>
      <GoogleLogin
        clientId="1010856078470-q0a4jhfegg8p5ct6vtr17a35gqihv9en.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        isSignedIn={true}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />,
      {/* document.getElementById('googleButton') */}
      <br></br>
      <br></br>

    </div>
  );
}

export default App;
