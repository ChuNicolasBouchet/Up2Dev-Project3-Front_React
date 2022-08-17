/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation } from "react-router-dom";
import ProjectsListTile from './ProjectsListTile';
import SearchProject from "./SearchProject";
import axios from 'axios'

function ProjectsList() {

    const [projectsList, setProjectsList] = useState([]);
    const [search, setSearch] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();
    const projectsUrl = process.env.REACT_APP_USERPROJECTS_URL
    
    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();

        const getProjects = async () => {
            try {
                const response = await axios.get(projectsUrl, {
                    withCredentials: true
                });
                isMounted && setProjectsList(response.data);
            } catch (err) {
                console.error(err);
                navigate('/login', { state: { from: location }, replace: true });
            }
        }

        getProjects();

        return () => {
            isMounted = false;
            controller.abort();
        }
    }, [])

    useEffect(() => {
        const filteredResults = projectsList.filter((project) =>
            ((project.project_title).toLowerCase()).includes(search.toLowerCase())
            || ((project.project_description).toLowerCase()).includes(search.toLowerCase()));
        setSearchResults(filteredResults.reverse());
    }, [projectsList, search])

    const projectsLength = projectsList.length
    
    return (
    
    <div className="projects-list__main">
            <SearchProject search={search} setSearch={setSearch} />
            <h2 className="projects-list__title">Liste des projets</h2>
            {projectsLength
                ? (
                    <ul className="projects-list__board">
                        {searchResults.map((project) => {
                            return <ProjectsListTile
                                key={project.id}
                                id={project.id}
                                project_title={project.project_title}
                                project_description={project.project_description}
                            />
                        })}
                    </ul>
                ) : <p>Pas de projet à afficher</p>
            }
    </div>

    )
}

export default ProjectsList

