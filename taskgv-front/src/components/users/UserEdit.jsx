import React, { useRef, useState, useEffect } from "react";
import {useParams} from "react-router-dom";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from 'axios';

const NAME_REGEX = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u; //unicode
const EMAIL_REGEX = /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/; 
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const UserEdit= () => {
    const { id }  = useParams();

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
        let isMounted = true;
        const controller = new AbortController();

        const getUser = async () => {
            try {
                const userUrl = process.env.REACT_APP_USERS_URL + id
                const response = await axios.get(userUrl, {
                    withCredentials: true
                });

               console.log(response.data[0]); isMounted

            } catch (err) {
                console.error(err);
            }
        }
        getUser();

        return () => {
            isMounted = false;
            controller.abort();
        }
    }, [])

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
            const response = await axios.put(process.env.REACT_APP_USERS_URL,
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
            <div className="register_wrapper">
                {success ? (
                    <section>
                        <h1>Enregistrement des modifications réussie !</h1>
                        <p>
                            <a href="#">Re-connectez-vous</a>
                        </p>
                    </section>
                ) : (
                    <section className="register_box">
                        <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                        <h1>Vos informations utilisateur</h1>
                        <form onSubmit={handleSubmit} className="register_form">
                            
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
                                <FontAwesomeIcon icon={faInfoCircle} />
                                4 à 24 charactères.<br />
                                Doit commencer par une lettre.<br />
                                Lettres, nombre, caractères spéciaux autorisés.
                            </p>

                            <label htmlFor="lastName">
                                Nom:
                                <FontAwesomeIcon icon={faCheck} className={validLastName ? "valid" : "hide"} />
                                <FontAwesomeIcon icon={faTimes} className={validLastName || !lastName ? "hide" : "invalid"} />
                            </label>
                            <input
                                // defaultValue={user.lastname}
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
                                <FontAwesomeIcon icon={faInfoCircle} />
                                4 à 24 charactères.<br />
                                Doit commencer par une lettre.<br />
                                Lettres, nombre, caractères spéciaux autorisés.
                            </p>


                            <label htmlFor="email">
                                Email:
                                <FontAwesomeIcon icon={faCheck} className={validEmail ? "valid" : "hide"} />
                                <FontAwesomeIcon icon={faTimes} className={validEmail || !email ? "hide" : "invalid"} />
                            </label>
                            <input
                                // defaultValue={user.email}
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
                                <FontAwesomeIcon icon={faInfoCircle} />
                                4 à 24 charactères.<br />
                                Doit commencer par une lettre.<br />
                                Lettres, nombre, caractères spéciaux autorisés.
                            </p>


                            <label htmlFor="password">
                                Mot de passe:
                                <FontAwesomeIcon icon={faCheck} className={validPassword ? "valid" : "hide"} />
                                <FontAwesomeIcon icon={faTimes} className={validPassword || !password ? "hide" : "invalid"} />
                            </label>
                            <input
                                placeholder="si vous souhaitez le changer"
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
                                <FontAwesomeIcon icon={faInfoCircle} />
                                8 à 24 caractères.<br />
                                Doit contenir au moins une lettre minuscule,<br />
                                une majuscule et un caratère spécial. <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                            </p>


                            <label htmlFor="confirm_password">
                                Confirmez le mot de passe:
                                <FontAwesomeIcon icon={faCheck} className={validMatch && matchPassword ? "valid" : "hide"} />
                                <FontAwesomeIcon icon={faTimes} className={validMatch || !matchPassword ? "hide" : "invalid"} />
                            </label>
                            <input
                                placeholder="confirmez votre saisie"
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
                                <FontAwesomeIcon icon={faInfoCircle} />
                                Le mot de passe et sa confirmation doivent êtres identiques.
                            </p>

                            <button disabled={!validEmail || !validPassword || !validMatch ? true : false}>Valider</button>
                        </form>
                    </section>
                )}
            </div>
        </div>
    )
}

export default UserEdit
