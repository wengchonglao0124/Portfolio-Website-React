import {
    createContext,
    useContext,
    useEffect
} from 'react';
import {useGithubProjects} from "../../services/githubAPIService";


const ProjectsContext = createContext();

export function useProjects() {
    return useContext(ProjectsContext);
}

export const ProjectsProvider = ({ children }) => {
    const { projects} = useGithubProjects();

    useEffect(() => {
        console.log("Projects Loaded: ", projects);
    },
        [projects]);

    return (
        <ProjectsContext.Provider value={{ projects }}>
            {children}
        </ProjectsContext.Provider>
    );
};