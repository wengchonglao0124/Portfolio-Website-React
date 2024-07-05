import {useEffect, useState} from "react";
import {Col, Container, Row} from "reactstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import CodingText from "./CodingText";
import {useNavigate} from "react-router-dom";


function BigBanner() {
    const [positionIndex, setPositionIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const positions = ["Software Engineer ⌨", "iOS Developer ", "Web Developer"];
    const [positionText, setPositionText] = useState("");
    const deletingSpeed = 2000; // 2s
    const addingSpeed = 200; // 2s
    const [typingSpeed, setTypingSpeed] = useState(addingSpeed); // 0.2s

    const [waitingChar, setWaitingChar] = useState(" ");

    const tick = () => {
        let fullText = positions[positionIndex];
        let textLength = positionText.length;
        let updateText = isDeleting ? fullText.substring(0, textLength - 1) : fullText.substring(0, textLength + 1);
        setPositionText(updateText);

        if (isDeleting) {
            setTypingSpeed(oldSpeed => (oldSpeed / 2));
        }

        if (!isDeleting && updateText === fullText) {
            setIsDeleting(true);
            setTypingSpeed(deletingSpeed);
        }
        else if (isDeleting && updateText === "") {
            setIsDeleting(false);

            let newPositionIndex = positionIndex + 1;
            if (newPositionIndex >= positions.length) {
                newPositionIndex = 0;
            }
            setPositionIndex(newPositionIndex);
            setTypingSpeed(addingSpeed);
        }
    }
    // Control position typing text
    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        },
            typingSpeed)
        return (() => { clearInterval(ticker); });
    },
        [positionText]);

    const flash = () => {
        if (waitingChar == " ") {
            setWaitingChar("_");
        }
        else {
            setWaitingChar(" ");
        }
    }
    // Control flashing underline
    useEffect(() => {
            let flashing = setInterval(() => {
                    flash();
                },
                addingSpeed)
            return (() => { clearInterval(flashing); });
        },
        [waitingChar]);

    const navigate = useNavigate();

    const welcomeMessage =  {
        commandText: "cd",
        valueTag: "tag-line",
        commandValue: "Welcome to my Portfolio",
    }

    const introductionMessage =  {
        commandText: "ls",
        commandValue: "👋🏻 My name is ",
        specialValueTag: "highlight-line",
        specialValue: "Billy",
    }

    const selfMessage =  {
        commandText: "brew info",
        specialValueTag: "highlight-line2",
        specialValue: "Self",
    }

    return(
        <section className="banner">
            <Container>
                <Row className="align-items-center">
                    <Col className="coding-computer">
                        <CodingText {...welcomeMessage} />

                        <CodingText {...introductionMessage} />
                        <h1>
                            <span className="position">&nbsp;&nbsp;&nbsp;{positionText}</span>
                        </h1>

                        <CodingText {...selfMessage} />
                        <CodingText>
                            <span className="description">
                                --Billy
                                <br/>
                                .based in Australia && skilled in
                                <span className="description-highlight"> SwiftUI</span>
                                ,
                                <span className="description-highlight"> .NET</span>
                                , and
                                <span className="description-highlight"> Node.js</span>
                                <br/>
                                .a shareholder in an
                                <span className="description-highlight"> AI startup</span>
                                <br/>
                                .strengths in problem-solving and time management
                                <br/>
                                .enjoys fishing and badminton, maintaining a healthy
                                <span className="description-highlight"> work-life balance</span>
                            </span>
                        </CodingText>

                        <CodingText commandText="">
                            <button onClick={() => (
                                navigate("/resume")
                            )}>
                                Show More&nbsp;
                                <span className="connect-line"> {waitingChar}</span>
                                <span className="coding-line"><ArrowRightCircle size={20}/></span>
                            </button>
                        </CodingText>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default BigBanner;