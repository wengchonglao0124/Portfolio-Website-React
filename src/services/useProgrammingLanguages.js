import {useEffect, useState} from "react";


export function useProgrammmingLanguages(projects) {

    const [ programmingLanguages, setProgrammingLanguages ] = useState([]);

    useEffect(() => {
            if (projects !== undefined && projects !== null) {
                let languages = projects.map(project => project.languages);

                // Sum up all language counts by key
                let combinedLanguages = languages.reduce((acc, langObj) => {
                    for (let key in langObj) {
                        if (langObj.hasOwnProperty(key)) {
                            if (acc[key]) {
                                acc[key] += langObj[key];
                            } else {
                                acc[key] = langObj[key];
                            }
                        }
                    }
                    return acc;
                }, {});

                // Sort programming languages by their value counts from GitHub public projects
                // In order to display the most frequently used languages first
                const sortedLanguages = Object.keys(combinedLanguages)
                    .sort((a, b) => combinedLanguages[b] - combinedLanguages[a]);

                setProgrammingLanguages(sortedLanguages);
            }
        },
        [projects]);

    return {
      programmingLanguages
    };
}