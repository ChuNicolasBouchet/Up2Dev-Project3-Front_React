import React, { useRef, useState, useEffect } from "react";
import {useParams} from "react-router-dom";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {NavLink} from 'react-router-dom';
import axios from 'axios';

const PROJECT_STRING_REGEX = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u; //unicode

const ProjectEdit= () => {
    const { id }  = useParams();
    const projectRef = useRef();
    const errRef = useRef();
    
    const [projectTitle, setProjectTitle] = useState('');
    const [validProjectTitle, setValidProjectTitle] = useState(false);
    const [projectTitleFocus, setProjectTitleFocus] = useState(false);

    const [projectDescription, setProjectDescription] = useState('');
    const [validProjectDescription, setValidProjectDescription] = useState(false);
    const [projectDescriptionFocus, setProjectDescriptionFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    const [setApiResponseMessage] = useState('');

    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();

        const getProject = async () => {
            try {
                const projectUrl = process.env.REACT_APP_PROJECTS_URL + id
                const response = await axios.get(projectUrl, {
                    withCredentials: true
                });
                setProjectTitle(response.data[0].project_title);
                setProjectDescription(response.data[0].project_description); isMounted

            } catch (err) {
                console.error(err);
            }
        }
        getProject();

        return () => {
            isMounted = false;
            controller.abort();
        }
    }, [])

    useEffect(() => {
        projectRef.current.focus();
    }, [])

    useEffect(() => {
        setValidProjectTitle(PROJECT_STRING_REGEX.test(projectTitle));
    }, [projectTitle])

    useEffect(() => {
        setValidProjectDescription(PROJECT_STRING_REGEX.test(projectDescription));
    }, [projectDescription])

    useEffect(() => {
        setErrMsg('');
    }, [projectTitle, projectDescription])

    const handleSubmit = async (e) => {
        e.preventDefault();
        //if button enabled with JS hack
        const testProjectTitle = PROJECT_STRING_REGEX.test(projectTitle);
        const testProjectDescription = PROJECT_STRING_REGEX.test(projectDescription);
        if (!testProjectTitle || !testProjectDescription) {
            setErrMsg("Saisie invalide");
            return;
        }
        try {
            const response = await axios.put(process.env.REACT_APP_PROJECTS_URL,
                JSON.stringify({ projectTitle, projectDescription }),
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

        } catch (err) {
            if (!err?.response) {
                setErrMsg('Pas de réponse du serveur');
            } else if (err.response?.status === 409) {
                setErrMsg('Projet déjà enregistré');
            } else {
                setErrMsg('L\'enregistrement a échoué')
            }
            errRef.current.focus();
        }
    }

    return (
            <div className="project-edit_wrapper">
                {success ? (
                    <section>
                        <h1>Enregistrement des modifications réussie !</h1>
                    </section>
                ) : (
                     <section className="project-edit_box">
                        <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                        <h1>Modification du projet</h1>
                        <form onSubmit={handleSubmit} className="project-edit_form">
                            <div className="project-edit__form__element project-edit__form__project-title">
                                <label htmlFor="project-title">
                                    Titre du projet:
                                    <FontAwesomeIcon icon={faCheck} className={validProjectTitle ? "valid" : "hide"} />
                                    <FontAwesomeIcon icon={faTimes} className={validProjectDescription || !projectDescription ? "hide" : "invalid"} />
                                </label>
                                <input
                                    type="text"
                                    id="project-title"
                                    ref={projectRef}
                                    autoComplete="off"
                                    onChange={(e) => setProjectTitle(e.target.value)}
                                    value={projectTitle}
                                    required
                                    aria-invalid={validProjectTitle ? "false" : "true"}
                                    aria-describedby="uidnote"
                                    onFocus={() => setProjectTitleFocus(true)}
                                    onBlur={() => setProjectTitleFocus(false)}
                                />
                                <p id="uidnote" className={projectTitleFocus && projectTitle && !validProjectTitle ? "instructions" : "offscreen"}>
                                    4 à 24 charactères.<br />
                                    Doit commencer par une lettre.<br />
                                    Lettres, nombre, caractères spéciaux autorisés.
                                </p>
                            </div>
                            <div className="project-edit__form__element project-edit__form__project-description">
                            <label htmlFor="project-description">
                                Nom:
                                <FontAwesomeIcon icon={faCheck} className={validProjectDescription ? "valid" : "hide"} />
                                <FontAwesomeIcon icon={faTimes} className={validProjectDescription || !projectDescription ? "hide" : "invalid"} />
                            </label>
                            <input
                                type="text"
                                id="project-description"
                                ref={projectRef}
                                autoComplete="off"
                                onChange={(e) => setProjectDescription(e.target.value)}
                                value={projectDescription}
                                required
                                aria-invalid={validProjectDescription ? "false" : "true"}
                                aria-describedby="uidnote"
                                onFocus={() => setProjectDescriptionFocus(true)}
                                onBlur={() => setProjectDescriptionFocus(false)}
                            />
                            <p id="uidnote" className={projectDescriptionFocus && projectDescription && !validProjectDescription ? "instructions" : "offscreen"}>
                                <FontAwesomeIcon icon={faInfoCircle} />
                                4 à 24 charactères.<br />
                                Doit commencer par une lettre.<br />
                                Lettres, nombre, caractères spéciaux autorisés.
                            </p>
                            </div>
                            <div className="project-edit__form__element project-edit__form__button">
                                <button>Valider</button>
                            </div>
                            <NavLink to={`/projects`}><button className='cancel-btn'>Annuler</button> </NavLink>
                        </form>
                    </section>
                )}
            </div>
    )
}

export default ProjectEdit
