import { useEffect, useState } from "react";

const useFetchJobs =  (apiEndpoint) => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const fetchJobs = async (apiEndpoint) => {
            try {
                await fetch (apiEndpoint)
                .then((res) => res.json())
                .then((data) => setJobs(data))
            } catch (err) {
                console.log(err.message)
            }
        }
        fetchJobs(apiEndpoint);
    }, [])

    return [jobs, setJobs]
}

export default useFetchJobs;