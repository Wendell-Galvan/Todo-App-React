import {useEffect, useContext} from 'react';
import jwt_decode from 'jwt-decode';
import {LoginContext} from '../contexts/LoginContext';

function Login(){

	const {setUser} = useContext(LoginContext);

	const handleCallbackResponse = (response) => {
		console.log("Encoded JWT ID token: " + response.credential);
		var userObject = jwt_decode(response.credential);
		console.log(userObject);
		setUser(userObject);
	};

	useEffect(() => {
		/* global google */
		google.accounts.id.initialize({
			client_id: "801581354533-74juk09ljfc5rkj8mc46fi8nj9r6eibv.apps.googleusercontent.com",
			callback: handleCallbackResponse
		})

		google.accounts.id.renderButton(
			document.getElementById("signInDiv"),
			{theme: "outline", size: "large"}
		);

		google.accounts.id.prompt();
	}, );

	return (
		<div id="signInDiv"></div>
	);
}

export default Login;