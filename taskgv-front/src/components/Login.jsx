/* eslint-disable no-undef */
import React, { useRef, useState, useEffect } from "react";
import useAuth from "../hooks/useAuth";
import { Link, useNavigate, useLocation } from "react-router-dom";
import LandingLogo from "./LandingLogo"
import axios from "axios";

const Login = () => {
	const { setAuth } = useAuth();

	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from?.pathname || "/";

	const userRef = useRef();
	const errRef = useRef();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [errMsg, setErrMsg] = useState("");

	useEffect(() => {
		userRef.current.focus();
	}, []);

	useEffect(() => {
		setErrMsg("");
	}, [email, password]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post(
			process.env.REACT_APP_LOGIN_URL,
			JSON.stringify({ email, password }),
			{
				headers: { "Content-Type": "application/json" },
				withCredentials: true,
			}
			);
			setAuth(response.data);
			setEmail("");
			setPassword("");
			navigate(from, { replace: true });
			} catch (err) {
				if (!err?.response) {
					setErrMsg("Pas de réponse du serveur");
				} else if (err.response?.status === 400) {
					setErrMsg("Il manque le nom d'utilisateur ou le mot de passe");
				} else if (err.response?.status === 401) {
					setErrMsg("Vous n'êtes pas autorisé à consulter cette ressource");
				} else {
					setErrMsg("La connection a échouée");
				}
			errRef.current.focus();
		}
	};

	return (
		<div className="landing__bg">
			<LandingLogo className="landing-logo__login"/>
			<div className="login__wrapper">
				<p	ref={errRef}
					className={errMsg ? "errmsg" : "offscreen"}
					aria-live="assertive">
						{errMsg}
				</p>
				<form onSubmit={handleSubmit} className="login__form">
					<div className="login__form__item">
						<label htmlFor="username" className="login__form__label">Email: </label>
						<input
							type="text"
							id="email"
							ref={userRef}
							autoComplete="off"
							onChange={(e) => setEmail(e.target.value)}
							value={email}
							required
						/>
					</div>
					<div className="login__form__item">
						<label htmlFor="password" className="login__form__label">Mot de passe: </label>
						<input
							type="password"
							id="password"
							onChange={(e) => setPassword(e.target.value)}
							value={password}
							required
						/>
					</div>
					<button className="login__form__button">Valider</button>
					<p>
						Nouvel utilisateur ?<br />
						<span className="line">
							<Link to="/register">Inscrivez-vous !</Link>
						</span>
					</p>
				</form>
			</div>
		</div>
	);
};

export default Login;
