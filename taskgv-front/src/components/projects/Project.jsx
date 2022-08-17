
import React, {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import ProjectsListTile__BACKUP from "./ProjectsListTile";
import axios from 'axios'


function Project() {
    const { id } = useParams();
    const [project, setProject] = useState([]);

    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();

        const getProject = async () => {
            try {
                const projectUrl = process.env.REACT_APP_USERS_URL + id
                // console.log(userUrl)
                const response = await axios.get(projectUrl, {
                    withCredentials: true
                });

                isMounted && setProject(response.data[0]);
                console.log(response.data);

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

    return (

        <div>
            <article>
                <h2>Fiche Projet</h2>
                <ProjectsListTile__BACKUP
                    key={project.id}
                    firstname={project.project_title}
                    lastname={project.project_description}
                />
            </article>
        </div>
    )
}

export default Project;