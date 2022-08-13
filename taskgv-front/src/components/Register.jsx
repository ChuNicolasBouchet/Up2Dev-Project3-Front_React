import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LandingLogo from "./LandingLogo";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from '../api/httpClient';

const NAME_REGEX = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u; //unicode
const EMAIL_REGEX = /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/; 
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const REGISTER_URL = '/register';

const Register = () => {
    const userRef = useRef();
    const errRef = useRef();
    
    const [firstName, setFirstName] = useState('');
    const [validFirstName, setValidFirstName] = useState(false);
    const [firstNameFocus, setFirstNameFocus] = useState(false);

    const [lastName, setLastName] = useState('');
    const [validLastName, setValidLastName] = useState(false);
    const [lastNameFocus, setLastNameFocus] = useState(false);

    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [password, setPassword] = useState('');
    const [validPassword, setValidPassword] = useState(false);
    const [PasswordFocus, setPasswordFocus] = useState(false);

    const [matchPassword, setMatchPassword] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    const [setApiResponseMessage] = useState('');

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setValidFirstName(NAME_REGEX.test(firstName));
    }, [firstName])

    useEffect(() => {
        setValidLastName(NAME_REGEX.test(lastName));
    }, [lastName])

    useEffect(() => {
        setValidEmail(EMAIL_REGEX.test(email));
    }, [email])

    useEffect(() => {
        setValidPassword(PASSWORD_REGEX.test(password));
        setValidMatch(password === matchPassword);
    }, [password, matchPassword])

    useEffect(() => {
        setErrMsg('');
    }, [firstName, lastName, email, password, matchPassword])

    const handleSubmit = async (e) => {
        e.preventDefault();
        //if button enabled with JS hack
        const testFirstName = NAME_REGEX.test(firstName);
        const testLastName = NAME_REGEX.test(lastName);
        const testEmail = EMAIL_REGEX.test(email);
        const testPassword = PASSWORD_REGEX.test(password);
        if (!testFirstName || !testLastName || !testEmail || !testPassword) {
            setErrMsg("Saisie invalide");
            return;
        }
        try {
            const response = await axios.post(REGISTER_URL,
                JSON.stringify({ firstName, lastName, email, password }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            // TODO: remove console.logs before deployment
            // console.log(JSON.stringify(response?.data));
            //console.log(JSON.stringify(response?.data.message))
            setApiResponseMessage(response?.data.message)
            setSuccess(true);
            //clear state and controlled inputs
            setEmail('');
            setPassword('');
            setMatchPassword('');
        } catch (err) {
            if (!err?.response) {
                setErrMsg('Pas de réponse du serveur');
            } else if (err.response?.status === 409) {
                setErrMsg('Email déjà enregistré');
            } else {
                setErrMsg('L\'enregistrement a échoué')
            }
            errRef.current.focus();
        }
    }

    return (
        <div className="landing__bg">
            <LandingLogo className="landing-logo__register"/>
            <div className="register_wrapper">
                {success ? (
                    <section>
                        <h1>Enregistrement réussi !</h1>
                        <p>
                            <a href="#">Connectez-vous</a>
                        </p>
                    </section>
                ) : (
                    <section className="register_box">
                        <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                        <h1>Inscrivez-vous</h1>
                        <form onSubmit={handleSubmit} className="register_form">
                            <div className="register__form__element register__form__firstname">
                                <label htmlFor="firstName">
                                    Prénom:
                                    <FontAwesomeIcon icon={faCheck} className={validFirstName ? "valid" : "hide"} />
                                    <FontAwesomeIcon icon={faTimes} className={validFirstName || !firstName ? "hide" : "invalid"} />
                                </label>
                                <input
                                    type="text"
                                    id="firstName"
                                    ref={userRef}
                                    autoComplete="off"
                                    onChange={(e) => setFirstName(e.target.value)}
                                    value={firstName}
                                    required
                                    aria-invalid={validFirstName ? "false" : "true"}
                                    aria-describedby="uidnote"
                                    onFocus={() => setFirstNameFocus(true)}
                                    onBlur={() => setFirstNameFocus(false)}
                                />
                                <p id="uidnote" className={firstNameFocus && firstName && !validFirstName ? "instructions" : "offscreen"}>
                                    4 à 24 charactères.<br />
                                    Doit commencer par une lettre.<br />
                                    Lettres, nombre, caractères spéciaux autorisés.
                                </p>
                            </div>
                            <div className="register__form__element register__form__lastname">
                                <label htmlFor="lastName">
                                    Nom:
                                    <FontAwesomeIcon icon={faCheck} className={validLastName ? "valid" : "hide"} />
                                    <FontAwesomeIcon icon={faTimes} className={validLastName || !lastName ? "hide" : "invalid"} />
                                </label>
                                <input
                                    type="text"
                                    id="lastName"
                                    ref={userRef}
                                    autoComplete="off"
                                    onChange={(e) => setLastName(e.target.value)}
                                    value={lastName}
                                    required
                                    aria-invalid={validLastName ? "false" : "true"}
                                    aria-describedby="uidnote"
                                    onFocus={() => setLastNameFocus(true)}
                                    onBlur={() => setLastNameFocus(false)}
                                />
                                <p id="uidnote" className={lastNameFocus && lastName && !validLastName ? "instructions" : "offscreen"}>
                                    4 à 24 charactères.<br />
                                    Doit commencer par une lettre.<br />
                                    Lettres, nombre, caractères spéciaux autorisés.
                                </p>
                            </div>
                            <div className="register__form__element register__form__email">
                                <label htmlFor="email">
                                    Email:
                                    <FontAwesomeIcon icon={faCheck} className={validEmail ? "valid" : "hide"} />
                                    <FontAwesomeIcon icon={faTimes} className={validEmail || !email ? "hide" : "invalid"} />
                                </label>
                                <input
                                    type="text"
                                    id="email"
                                    ref={userRef}
                                    autoComplete="off"
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                    required
                                    aria-invalid={validEmail ? "false" : "true"}
                                    aria-describedby="uidnote"
                                    onFocus={() => setEmailFocus(true)}
                                    onBlur={() => setEmailFocus(false)}
                                />
                                <p id="uidnote" className={emailFocus && email && !validEmail ? "instructions" : "offscreen"}>
                                    4 à 24 charactères.<br />
                                    Doit commencer par une lettre.<br />
                                    Lettres, nombre, caractères spéciaux autorisés.
                                </p>
                            </div>
                            <div className="register__form__element register__form__password">
                                <label htmlFor="password">
                                    Mot de passe:
                                    <FontAwesomeIcon icon={faCheck} className={validPassword ? "valid" : "hide"} />
                                    <FontAwesomeIcon icon={faTimes} className={validPassword || !password ? "hide" : "invalid"} />
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    onChange={(e) => setPassword(e.target.value)}
                                    value={password}
                                    required
                                    aria-invalid={validPassword ? "false" : "true"}
                                    aria-describedby="passwordnote"
                                    onFocus={() => setPasswordFocus(true)}
                                    onBlur={() => setPasswordFocus(false)}
                                />
                                <p id="passwordnote" className={PasswordFocus && !validPassword ? "instructions" : "offscreen"}>
                                    8 à 24 caractères.<br />
                                    Doit contenir au moins une lettre minuscule,<br />
                                    une majuscule et un caratère spécial. <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                                </p>
                            </div>

                            <div className="register__form__element register__form__repassword" >
                                <label htmlFor="confirm_password">
                                    Confirmez le mot de passe:
                                    <FontAwesomeIcon icon={faCheck} className={validMatch && matchPassword ? "valid" : "hide"} />
                                    <FontAwesomeIcon icon={faTimes} className={validMatch || !matchPassword ? "hide" : "invalid"} />
                                </label>
                                <input
                                    type="password"
                                    id="confirm_password"
                                    onChange={(e) => setMatchPassword(e.target.value)}
                                    value={matchPassword}
                                    required
                                    aria-invalid={validMatch ? "false" : "true"}
                                    aria-describedby="confirmnote"
                                    onFocus={() => setMatchFocus(true)}
                                    onBlur={() => setMatchFocus(false)}
                                />
                                <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                                    Le mot de passe et sa confirmation doivent êtres identiques.
                                </p>
                            </div>
                            <div className="register__form__element register__form__button">
                                <div className='btn_wrapper'>
                                    <button className="btn_valid" disabled={!validEmail || !validPassword || !validMatch ? true : false}>Valider</button>
                                </div>
                            </div>
                        </form>
                        <div className="register__ask-registered">
                            <p className='tologin'>Déjà inscrit ?</p>
                            <span className="to-connect">
                            <Link to="/" className="to-connect">Connectez-vous</Link>
                            </span>
                        </div>
                    </section>
                )}
            </div>
        </div>
    )
}

export default Register
