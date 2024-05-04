import { useEffect, useState } from "react";
import JobCard from "./components/JobCard";

function App() {
    const [jobData, setJobData] = useState([]);

    useEffect(() => {
        const fetchJobs = async (): Promise<void> => {
            const response = await fetch(
                "https://api.weekday.technology/adhoc/getSampleJdJSON",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ offset: 0, limit: 10 }),
                }
            );
            const data = await response.json();
            console.log("file: App.tsx:189 ~ data:", data.jdList);
            setJobData((prevPosts: Job[]) => [...prevPosts, ...data.jdList]);
        };
        fetchJobs();
    }, []);

    return (
        <>
            {jobData.map((job, index) => (
                <JobCard
                    key={index}
                    title={job.jobRole}
                    company={job.companyName}
                    minSalary={job.minJdSalary}
                    maxSalary={job.maxJdSalary}
                    description={job.jobDetailsFromCompany}
                    salaryCurrencyCode={job.salaryCurrencyCode}
                    minExp={job.minExp}
                />
            ))}
        </>
    );
}

export default App;
