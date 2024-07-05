import {Container, Row} from "reactstrap";
import {useProjects} from "./ProjectsProvider";
import {useEffect, useState} from "react";
import ProjectCard from "./ProjectCard";


function ProjectsDashboard({filter}) {
    const { projects } = useProjects();
    const [projectsData, setProjectsData] = useState([]);

    useEffect(() => {
        if (projects !== undefined && projects !== null) {
            const filteredProjects = projects.filter(project =>
                project.name.toLowerCase().includes(filter.toLowerCase()) ||
                project.description.toLowerCase().includes(filter.toLowerCase()) ||
                Object.keys(project.languages).some(key =>
                    key.toLowerCase().includes(filter.toLowerCase())
                )
            );
            setProjectsData(filteredProjects);
        }
    },
        [projects, filter]);

    return(
        <Container className="projects-dashboard">
            <Row>
                {projectsData &&
                    projectsData.map((project, index) => (
                        <ProjectCard
                            key={`${project}-${index}`}
                            {...project}
                        />
                    ))
                }
            </Row>
        </Container>
    );
}

export default ProjectsDashboard;