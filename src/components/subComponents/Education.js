import {
    VerticalTimeline,
    VerticalTimelineElement
} from "react-vertical-timeline-component";
import {List} from "reactstrap";
import {useEducation} from "../../services/googleSheetAPIService";
import {useEffect, useState} from "react";

import school from "../../assets/school.svg";


const colorStyle = {
    background: "#363439",
    color: "#fff",
}

function Education() {
    const { education} = useEducation();
    const [educationData, setEducationData] = useState([]);

    useEffect(() => {
            if (education !== undefined && education !== null) {
                setEducationData(education);
            }
        },
        [education]);

    return(
        <div className="education">
            <h2>Education</h2>

            {education &&
                <VerticalTimeline>
                    {educationData.map(experience => (
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={colorStyle}
                        contentArrowStyle={{ borderRight: `7px solid ${colorStyle.background}` }}
                        date={experience.date}
                        iconStyle={colorStyle}
                        icon={
                            <img className="vertical-timeline-element-icon" src={school} alt="school image" />
                        }
                        key={experience.url}
                    >
                        <a href={experience.url}>
                            <h3 className="vertical-timeline-element-title">
                                {experience.degree}
                                {experience.major.trim() !== "" ? <span> -</span> : null}
                            </h3>
                            <h4 className="vertical-timeline-element-title">
                                {experience.major}
                            </h4>
                            <h6 className="vertical-timeline-element-subtitle">
                                {experience.school} - {experience.location}
                            </h6>

                            <List>
                                {experience.highlight.map(((item, index) => (
                                    <li key={index}>
                                        {item}
                                    </li>
                                )))}
                            </List>
                        </a>
                    </VerticalTimelineElement>
                    ))}
                </VerticalTimeline>
            }
        </div>
    );
}

export default Education;