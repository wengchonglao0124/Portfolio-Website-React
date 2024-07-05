import { useState, useEffect } from "react";
import {useError} from "../components/subComponents/ErrorProvider";

// // Developer Mode only
const headers = {
    'Authorization': process.env.REACT_APP_API_KEY
};

const username = 'wengchonglao0124';

export function useGithubProjects() {
    const [loading, setLoading] = useState(true);
    const [projects, setProjects] = useState([]);
    const [error, setError] = useState(null);

    const { addError } = useError();

    useEffect(
        () => {
            (async () => {
                try {
                    let projects = await getProjects();
                    let updateProjects = await Promise.all((projects.map(async (project) => {
                        const languages = await getProgrammingLanguages(project.languages_url);
                        return {
                            ...project,
                            languages: languages,
                        };
                    })));

                    setProjects(updateProjects);
                    setLoading(false);
                }
                catch (err) {
                    setError(err)
                    console.error('Error fetching public repositories:', err);
                    addError(new Error('Error fetching public repositories'));
                    setLoading(false);
                }
            })();
        },
        []
    );

    return {
        projects
    };
}


async function getProjects() {
    let url = `https://api.github.com/users/${username}/repos`;
    let res = await fetch(url
        , { headers }
    );
    if (!res.ok) {
        if(res.status === 403) {
            console.error('Rate limit exceeded');
            throw new Error(`Rate limit exceeded: ${res.status}`);
        }
        throw new Error(`HTTP error! status: ${res.status}`);
    }
    let projects = await res.json();
    return projects.map((project) => ({
        name: project.name,
        description: project.description,
        languages_url: project.languages_url,
        url: project.html_url,
    }));
}


async function getProgrammingLanguages(languages_url) {
    let res = await fetch(languages_url
        , { headers }
    );
    if (!res.ok) {
        if(res.status === 403) {
            console.error('Rate limit exceeded');
            throw new Error(`Rate limit exceeded: ${res.status}`);
        }
        throw new Error(`HTTP error! status: ${res.status}`);
    }
    let languages = await res.json();
    return languages
}