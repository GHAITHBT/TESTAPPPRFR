import React, { useState } from 'react';
import { emailValidator, passwordValidator } from '../components/regexValidator';
import {useHistory} from "react-router-dom"
import axios from 'axios'
const Login = () => {
	const history = useHistory()

	const [input, setInput] = React.useState({ email: '', password: '' });
	const [user, setuser] =useState([])
	const [errorMessage, seterrorMessage] = React.useState('');
	const [successMessage, setsuccessMessage] = React.useState('');

const getUser=()=>{
	const url=`http://localhost:5001/User/${input.email}`
		console.log(input.email)
		axios.get(url).then(res => {
		  setuser(res.data);
		 
		  console.log("userlogin",res.data)
		})
}
const handleChange = e => {
		setInput({ ...input, [e.target.name]: e.target.value });
		getUser()
		console.log(localStorage.auth)

	};
	

	const formSubmitter = e => {
		e.preventDefault();
		setsuccessMessage('');
		localStorage.setItem('username',user.fullname)
		
		// setsuccessMessage('Successfully Validated');
		if(user.email==input.email|| user.password==input.password || user.Role=="Admin"){
			localStorage.setItem('username',user.fullname)
		history.push('/App')
		localStorage.setItem('auth', false)	}
		else if(user.email==input.email|| user.password==input.password || user.Role=="Employé"){
			console.log(input.email)
			console.log(user.email)
			console.log(user.password)
			console.log(user.Role)
			history.push('/EMPINTERFACE')
			localStorage.setItem('auth', false)	
			localStorage.setItem('username',user.fullname)
		}
	  };

	return (
		<div>
			<div className="limiter">
				<div className="container-login100" style={{ backgroundImage: 'url("images/test.jpg")' }}>
					<div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
						<form className="login100-form validate-form" onSubmit={formSubmitter}>
							<span className="login100-form-title p-b-49">Connexion</span>
							{errorMessage.length > 0 && <div style={{ marginBottom: '10px', color: 'red' }}>{errorMessage}</div>}
							{successMessage.length > 0 && (
								<div style={{ marginBottom: '10px', color: 'green' }}>{successMessage}</div>
							)}
							<div className="wrap-input100 validate-input m-b-23" data-validate="email is required">
								<span className="label-input100">Nom utilisateur</span>
								<input
									className="input100"
									type="text"
									name="email"
									placeholder="tapez votre nom d'utilisateur"
									onChange={handleChange}
								/>
								<span className="focus-input100" data-symbol="" />
							</div>
							<div className="wrap-input100 validate-input" data-validate="Password is required">
								<span className="label-input100">Mot de passe</span>
								<input
									className="input100"
									type="password"
									name="password"
									placeholder="Tapez votre mot de passe"
									onChange={handleChange}
								/>
								<span className="focus-input100" data-symbol="" />
							</div>
							<div className="container-login100-form-btn">
								<div className="wrap-login100-form-btn">
									<div className="login100-form-bgbtn" />
									<button className="login100-form-btn" style={{ backgroundImage: 'url("images/test.jpg")' }}>Connexion</button>
								</div>
							</div>
						
							{/* <div className="flex-col-c p-t-155">
                <span className="txt1 p-b-17">Or Sign Up Using</span>
                <a href="#" className="txt2">
                  Sign Up
                </a>
							</div> */}
			  </form>
			  </div>
		  </div>
	  </div>
	  <div id="dropDownSelect1" />
  </div>
);
};

export default Login;

