import "../../stylesheets/Projects.css";
import ProjectsDashboard from "../subComponents/ProjectsDashboard";
import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {useProjects} from "../subComponents/ProjectsProvider";
import {useProgrammmingLanguages} from "../../services/useProgrammingLanguages";
import SearchSection from "../subComponents/SearchSection";


function Projects() {
    const [filter, setFilter] = useState("");

    const location = useLocation();
    const { projects } = useProjects();
    const { programmingLanguages} = useProgrammmingLanguages(projects);

    useEffect(() => {
        // Check if there is a state and a language name property within the state
        if (location.state && location.state.languageName) {
            setFilter(location.state.languageName);
        }
    }, [location]);

    return (
        <div className="Projects">
            <h2>My Projects</h2>
            <SearchSection setFilter={setFilter} filter={filter} filterTags={programmingLanguages} />

            <ProjectsDashboard filter={filter}/>
        </div>
    );
}

export default Projects;