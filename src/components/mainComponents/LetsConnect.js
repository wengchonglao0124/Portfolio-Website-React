import "../../stylesheets/LetsConnect.css";
import {useState} from "react";
import {Badge} from "reactstrap";


function LetsConnect() {
    const [isSent, setIsSent] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsSent(true);
    }

    return (
        <div className="LetsConnect">
            <h2>Feel free to leave your contact information</h2>
            {isSent ? <h4><Badge color="warning" pill>Thanks! I will reach out to you soon!</Badge></h4> : null}

            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input type="text" name="user_name"/>
                <label>Email</label>
                <input type="email" name="user_email"/>
                <label>Message</label>
                <textarea name="message"/>
                <input type="submit"/>
            </form>
        </div>
    );
}

export default LetsConnect;