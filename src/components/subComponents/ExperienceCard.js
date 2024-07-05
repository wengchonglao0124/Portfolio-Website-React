import { VerticalTimelineElement } from "react-vertical-timeline-component";

import softwareTypeImage from "../../assets/software.svg";
import tutorTypeImage from "../../assets/tutor.svg";
import civilTypeImage from "../../assets/civil.svg";
import otherTypeImage from "../../assets/otherType.svg";


const typeImages = {
    "software": softwareTypeImage,
    "tutor": tutorTypeImage,
    "civil": civilTypeImage,
    "other": otherTypeImage,
}

const colorStyles = {
    "software": {
        background: "#1d1836",
        color: "#fff",
    },
    "tutor": {
        background: "#362f18",
        color: "#fff",
    },
    "civil": {
        background: "#183633",
        color: "#fff",
    },
    "other": {
        background: "#361818",
        color: "#fff",
    },
}

function ExperienceCard(props) {
    const reference_URL = "https://www.linkedin.com/in/wengchong-lao/";
    const colorStyle = colorStyles[props.type] ? colorStyles[props.type] : colorStyles["other"];

    return(
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={colorStyle}
            contentArrowStyle={{ borderRight: `7px solid ${colorStyle.background}` }}
            date={props.date}
            iconStyle={colorStyle}
            icon={
                <img className="vertical-timeline-element-icon" src={typeImages[props.type] ? typeImages[props.type] : typeImages["other"]} alt={props.type + " type image"} />
            }
        >
            <a href={reference_URL}>
                <h3 className="vertical-timeline-element-title">
                    {props.title}
                </h3>
                <h6 className="vertical-timeline-element-subtitle">
                    {props.location}
                </h6>
                <p>
                    {props.highlight}
                </p>
            </a>
        </VerticalTimelineElement>
    );
}

export default ExperienceCard;