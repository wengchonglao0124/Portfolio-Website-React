import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import ExperienceCard from "./ExperienceCard";
import {useWorkExperiences} from "../../services/googleSheetAPIService";
import {useEffect, useState} from "react";


function WorkExperiences() {
    const { experiences} = useWorkExperiences();
    const [workExperiences, setExperiences] = useState([]);

    useEffect(() => {
        if (experiences !== undefined && experiences !== null) {
            setExperiences(experiences);
        }
    },
        [experiences]);

    return(
        <div className="workExperiences">
            <h2>Work Experiences</h2>

            <VerticalTimeline>
                {experiences &&
                    workExperiences.map((experience, index) => (
                        <ExperienceCard key={index} index={index} {...experience} />
                    ))
                }
            </VerticalTimeline>
        </div>
    );
}

export default WorkExperiences;