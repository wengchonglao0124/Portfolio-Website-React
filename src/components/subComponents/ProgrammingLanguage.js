import SWIFT from "../../assets/Swift.svg";
import PYTHON from "../../assets/Python.svg";
import JAVASCRIPT from "../../assets/JavaScript.svg";
import HTML from "../../assets/HTML.svg";
import CSS from "../../assets/CSS.svg";
import JAVA from "../../assets/Java.svg";
import C_SHARP from "../../assets/C_Sharp.svg";
import CODE from "../../assets/Code.svg";
import {useNavigate} from "react-router-dom";


const languages = {
    "Swift": SWIFT,
    "Python": PYTHON,
    "JavaScript": JAVASCRIPT,
    "HTML": HTML,
    "CSS": CSS,
    "Java": JAVA,
    "C#": C_SHARP,
    "Default": CODE,
}

function ProgrammingLanguage(props) {
    const image = languages[props.languageName] || languages["Default"];
    const navigate = useNavigate();

    return (
        <div className="item programmingLanguage"
             onClick={() => (
                 navigate("/projects", {
                     state: {
                         languageName: props.languageName,
                     }})
             )}
        >
            <img src={image} alt={props.languageName + " Image"} />
            <h5>{props.languageName}</h5>
        </div>
    );
}

export default ProgrammingLanguage;