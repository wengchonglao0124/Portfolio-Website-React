import {useAchievements} from "../../services/googleSheetAPIService";
import {useEffect, useState} from "react";
import {List} from "reactstrap";


function Achievements() {
    const { achievements} = useAchievements();
    const [awards, setAwards] = useState([]);

    useEffect(() => {
            if (achievements !== undefined && achievements !== null) {
                setAwards(achievements);
            }
        },
        [achievements]);

    return(
        <div className="achievements">
            <h2>Achievements</h2>
                <List>
                {achievements &&
                    awards.map((award, index) => (
                        <li key={index}>
                            {award.achievement}
                        </li>
                    ))
                }
                </List>
        </div>
    );
}

export default Achievements;