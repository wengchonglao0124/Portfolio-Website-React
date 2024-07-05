import '../../stylesheets/Resume.css';

import Skills from "../subComponents/Skills";
import { Badge } from "reactstrap";
import WorkExperiences from "../subComponents/WorkExperiences";
import Achievements from "../subComponents/Achievements";


function Resume() {
    return (
        <div className="Resume">
            {/* An overview summary */}
            <div className="overview">
                <p>
                    <h5>
                    As a postgraduate scholar pursuing the Master of <Badge pill>Computer Science</Badge> at QUT,
                    I am enthusiastic in the <Badge pill>Software Engineering</Badge> field, and I treat everything rigorously, carefully and conscientiously.
                    I developed a passion for programming and coding, I was involved in many projects and gained lots of experience from those developments.
                    </h5>
                </p>
            </div>

            <Skills />

            <WorkExperiences />

            <Achievements />
        </div>
    );
}

export default Resume;