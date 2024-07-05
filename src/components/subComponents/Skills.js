import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Col, Container, Row } from "reactstrap";
import { useProjects } from "./ProjectsProvider";
import { useEffect, useState } from "react";
import ProgrammingLanguage from "./ProgrammingLanguage";
import {useProgrammmingLanguages} from "../../services/useProgrammingLanguages";


const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

function Skills() {
    const { projects } = useProjects();
    const { programmingLanguages} = useProgrammmingLanguages(projects);

    return(
        <section id="skills" className="skill">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx wow zoomIn">
                            <h2>Skills</h2>
                            <p>
                                Click on each language to view relevant projects that highlight my expertise.
                                <br></br>
                            </p>

                            <Carousel responsive={responsive} infinite={true}
                                      className="owl-carousel owl-theme skill-slider">
                                {programmingLanguages &&
                                    programmingLanguages.map((language) => (
                                        <ProgrammingLanguage languageName={language} key={language}/>
                                    ))
                                }

                                {/*
                                    This project - my portfolio is currently private in GitHub, therefore,
                                    I have to manually add JavaScript as my skill here
                                    until this assignment is marked.
                                */}
                                {programmingLanguages &&
                                    <ProgrammingLanguage languageName="JavaScript" key="JavaScript"/>
                                }
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Skills;