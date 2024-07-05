import "../../stylesheets/About.css";

import {Badge, Col, Container, Row} from "reactstrap";
import CirclePhoto from "../subComponents/CirclePhoto";
import Education from "../subComponents/Education";


function About() {
    return (
        <div className="About">
            <Container className="description">
                <Row>
                    <Col lg={9}>
                        <p>
                            <h5>
                                My name is Weng Chong (Billy) LAO, a <Badge pill>postgraduate student</Badge> pursuing
                                a Master of Information Technology with a specialisation in <Badge pill>Computer Science</Badge> at QUT.
                                While initially graduated from Bachelor of Civil Engineering, I transitioned to computer science,
                                honing my programming abilities through online coursework and hands-on electives.
                                In my third year of study in Civil Engineering degree, I initiated an independent project creating a structural analysis software using Python.
                                This undertaking ignited my <Badge pill>passion for programming and coding</Badge>,
                                prompting me to participate in various projects and accumulate significant experience from these pursuits.
                            </h5>
                        </p>
                    </Col>
                    <Col lg={1}>
                    </Col>
                    <Col lg={2}>
                        <CirclePhoto />
                    </Col>
                </Row>
            </Container>

            <Education />
        </div>
    );
}

export default About;