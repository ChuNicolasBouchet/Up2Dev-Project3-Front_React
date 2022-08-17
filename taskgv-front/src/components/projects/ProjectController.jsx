import axios from "axios";

const getProject = async (id) => {
    try {
        const projectUrl = process.env.REACT_APP_PROJECTS_URL + id
        const response = await axios.get(projectUrl, { withCredentials: true });
        return response.data[0]
    } catch (err) {
        console.error(err);
    }
}

const deleteProject = async (id) => {
    try {
        const projectUrl = process.env.REACT_APP_PROJECTS_URL + id
        await axios.delete(projectUrl, {withCredentials: true});

    } catch (err) {
        console.log(err);
    }
}

const ProjectController = {
    getProject,
    deleteProject
};

export default ProjectController;