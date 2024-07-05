import { useState, useEffect } from "react";
import {useError} from "../components/subComponents/ErrorProvider";


export function useWorkExperiences() {
    const [loading, setLoading] = useState(true);
    const [experiences, setExperiences] = useState([]);
    const [error, setError] = useState(null);

    const { addError } = useError();

    const experiencesAPI = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRPgMm1NqEdZHWQ6UG5gAcRibL3jdfl7ZQpSyUnXxI5wGaPcGDfNxfGRM7qpLRmfIB7T2gwiFSsfpB9/pub?gid=0&single=true&output=csv";

    useEffect(
        () => {
            (async () => {
                try {
                    setExperiences(await getData(experiencesAPI));
                    setLoading(false);
                }
                catch (err) {
                    setError(err)
                    console.error('Error fetching work experiences:', err);
                    addError(new Error('Error fetching work experiences'));
                    setLoading(false);
                }
            })();
        },
        []
    );

    return {
        experiences
    };
}


export function useAchievements() {
    const [loading, setLoading] = useState(true);
    const [achievements, setAchievements] = useState([]);
    const [error, setError] = useState(null);

    const { addError } = useError();

    const achievementsAPI = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRPgMm1NqEdZHWQ6UG5gAcRibL3jdfl7ZQpSyUnXxI5wGaPcGDfNxfGRM7qpLRmfIB7T2gwiFSsfpB9/pub?gid=531052162&single=true&output=csv";

    useEffect(
        () => {
            (async () => {
                try {
                    setAchievements(await getData(achievementsAPI));
                    setLoading(false);
                }
                catch (err) {
                    setError(err)
                    console.error('Error fetching achievements:', err);
                    addError(new Error('Error fetching achievements'));
                    setLoading(false);
                }
            })();
        },
        []
    );
    return {
        achievements
    };
}


export function useEducation() {
    const [loading, setLoading] = useState(true);
    const [education, setEducation] = useState([]);
    const [error, setError] = useState(null);

    const { addError } = useError();

    const educationAPI = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRPgMm1NqEdZHWQ6UG5gAcRibL3jdfl7ZQpSyUnXxI5wGaPcGDfNxfGRM7qpLRmfIB7T2gwiFSsfpB9/pub?gid=1833305845&single=true&output=csv";

    useEffect(
        () => {
            (async () => {
                try {
                    setEducation(await getDataForEducation(educationAPI));
                    setLoading(false);
                }
                catch (err) {
                    setError(err)
                    console.error('Error fetching education:', err);
                    addError(new Error('Error fetching education'));
                    setLoading(false);
                }
            })();
        },
        []
    );
    return {
        education
    };
}


async function getData(url) {
    let res = await fetch(url);
    if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
    }
    let csv = await res.text()
    let data = csvToJson(csv);
    return data;
}


function csvToJson(csv) {
    csv = csv.replace(/\r/g, '');

    const lines = csv.split('\n');
    const result = [];
    const headers = lines[0].split(',');

    for (let i = 1; i < lines.length; i++) {
        const obj = {};
        const currentline = lines[i].split(',');

        for (let j = 0; j < headers.length; j++) {
            obj[headers[j]] = currentline[j];
        }

        result.push(obj);
    }
    return result;
}


async function getDataForEducation(url) {
    let res = await fetch(url);
    if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
    }
    let csv = await res.text()
    let data = csvToJsonForEducation(csv);
    return data;
}


function csvToJsonForEducation(csv) {
    csv = csv.replace(/\r/g, '');

    const lines = csv.split('\n');
    const result = [];
    const headers = lines[0].split(',');

    for (let i = 1; i < lines.length; i++) {
        const obj = {};
        const currentline = lines[i].split(',');

        for (let j = 0; j < headers.length; j++) {
            if (headers[j] === "highlight") {
                const highlights = currentline[j].split(';');
                obj[headers[j]] = highlights;
            }
            else {
                obj[headers[j]] = currentline[j];
            }
        }

        result.push(obj);
    }
    return result;
}