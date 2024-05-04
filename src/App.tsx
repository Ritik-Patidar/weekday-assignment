import { useCallback, useEffect, useRef, useState } from "react";
import JobCard from "./components/JobCard";
import { Job } from "./types/jobs";

function App() {
    const [jobData, setJobData] = useState<Job[]>([]);
    const [page, setPage] = useState<number>(0);

    const observerTarget = useRef<HTMLDivElement>(null);

    const fetchJobs = useCallback(async (): Promise<void> => {
        const response = await fetch(
            "https://api.weekday.technology/adhoc/getSampleJdJSON",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ offset: page, limit: 10 }),
            }
        );
        const data = await response.json();
        console.log("file: App.tsx:189 ~ data:", data.jdList);
        setJobData((prevPosts: Job[]) => [...prevPosts, ...data.jdList]);
        setPage((prevPage) => prevPage + 1);
    }, [page]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    fetchJobs();
                }
            },
            { threshold: 1 }
        );

        if (observerTarget.current) {
            observer.observe(observerTarget.current);
        }

        return () => {
            if (observerTarget.current) {
                observer.unobserve(observerTarget.current);
            }
        };
    }, [fetchJobs, observerTarget]);

    return (
        <>
            {jobData.map((job, index) => (
                <JobCard
                    key={index}
                    role={job.jobRole}
                    company={job.companyName}
                    location={job.location}
                    maxSalary={job.maxJdSalary}
                    minSalary={job.minJdSalary}
                    salaryCurrencyCode={job.salaryCurrencyCode}
                    minExp={job.minExp}
                    description={job.jobDetailsFromCompany}
                    logoUrl={job.logoUrl}
                />
            ))}
            <div className="mb-5" ref={observerTarget}></div>
        </>
    );
}

export default App;
