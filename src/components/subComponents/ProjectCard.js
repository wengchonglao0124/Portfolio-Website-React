import { Col } from "reactstrap";
import project from "../../assets/project.svg";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";


function ProjectCard(props) {
    const url = `https://raw.githubusercontent.com/wengchonglao0124/${props.name}/demonstration/demo.png`;
    const [imageURL, setImageURL] = useState("");
    const defaultImage = project;

    useEffect(() => {
        const image = new Image();
        image.onload = () => setImageURL(url); // once image is loaded, update component to this image
        image.onerror = () => setImageURL(defaultImage); // on error, update component to default image
        image.src = url;

        return () => {
            image.onload = null;
            image.onerror = null;
        };
    },
        [imageURL, props.name]);

    const navigate = useNavigate();

    return(
        <Col size={12} md={6} lg={4} className="projectCard" onClick={() => (
            navigate("/project/details", {
                state: {
                    name: props.name,
                    languages: props.languages,
                    description: props.description,
                    url: props.url,
                    imageURL: imageURL,
                }})
        )}>
            <div className="project-image-box">
                <img src={imageURL} alt={props.name + " Image"}/>
                <div className="project-text-box">
                    {
                        (Object.keys(props.languages)).map((language, index) => (
                            <p key={index}>{language}</p>
                        ))
                    }
                </div>
            </div>

            <h5>
                {props.name.split("-").map((name, index) => (
                    <span key={index}>{name} </span>
                ))}
            </h5>
            <hr />
        </Col>
    );
}

export default ProjectCard;