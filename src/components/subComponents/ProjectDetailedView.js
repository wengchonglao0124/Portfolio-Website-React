import "../../stylesheets/ProjectDetailedView.css";
import { useLocation } from "react-router-dom";
import {Badge, Col, Container, Row} from "reactstrap";
import {ArrowRightCircle} from "react-bootstrap-icons";
import gitHubIcon from "../../assets/GitHub.svg";
import React from "react";


function ProjectDetailedView() {
    const location = useLocation();
    const { name, languages, description, url, imageURL } = location.state;

    return (
        <div className="ProjectDetails">
            <h2>{name}</h2>
            <hr />

            <Container className="projectDetails">
                <Row>
                    <Col sm={12} lg={5}>
                        <p className="languages">
                            {
                                (Object.keys(languages)).map((language, index) => (
                                    <span key={index}>
                                        <Badge>{language}</Badge>
                                        <span>{index !== (Object.keys(languages)).length - 1 ? ", " : null}</span>
                                    </span>
                                ))
                            }
                        </p>
                        <p className="description">{description}</p>
                        <p>
                            <a href={url}>
                                <ArrowRightCircle size={20}/>
                                &nbsp;
                                Visit Github page for more information
                                &nbsp;
                                <img src={gitHubIcon} alt="GitHub Icon"/>
                            </a>
                        </p>
                    </Col>
                    <Col sm={0} lg={1}> </Col>

                    <Col className="project-image-box" sm={12} lg={6}>
                    <a href={url}>
                        <img src={imageURL} alt={name + " Image"}/>
                    </a>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default ProjectDetailedView;