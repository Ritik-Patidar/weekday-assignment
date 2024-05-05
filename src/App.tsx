import { useCallback, useEffect, useRef, useState } from "react";
import JobCard from "./components/JobCard";
import { FilterObject, Job } from "./types/jobs";
import { Grid } from "@mui/material";
import Filters from "./components/Filters";
import debounce from "./utils/debounce";

function App() {
    const [jobData, setJobData] = useState<Job[]>([]);
    const [page, setPage] = useState<number>(0);
    const [filteredJobsData, setFilteredJobsData] = useState<Job[]>([]);
    const [filteredObject, setFilteredObject] = useState<FilterObject>();

    const observerTarget = useRef<HTMLDivElement>(null);

    const filter = (jobs: Job[], filterObject: FilterObject) => {
        const filterJobs = (jobs: Job[], filters: FilterObject) => {
            return jobs.filter((job) => {
                for (const key in filters) {
                    if (
                        !filters[key] ||
                        (Array.isArray(filters[key]) &&
                            filters[key].length === 0)
                    ) {
                        continue;
                    }
                    switch (key) {
                        case "jobRole":
                            if (
                                !filters[key].some(
                                    (filter: any) => job[key] === filter.value
                                )
                            ) {
                                return false;
                            }
                            break;
                        case "companyName":
                            if (
                                !job.companyName
                                    .toLowerCase()
                                    .includes(filters.companyName.toLowerCase())
                            ) {
                                return false;
                            }
                            break;
                        case "minJdSalary":
                            if (job.minJdSalary < filters.minJdSalary.value) {
                                return false;
                            }
                            break;
                        case "minExp":
                            if (job.minExp < filters.minExp.value) {
                                return false;
                            }
                            break;
                        case "location":
                            if (
                                !filters[key].some(
                                    (filter: any) =>
                                        job[key].toLowerCase() ===
                                        filter.value.toLowerCase()
                                )
                            ) {
                                return false;
                            }
                            break;
                    }
                }
                return true;
            });
        };
        const filteredJobs = filterJobs(jobs, filterObject);
        console.log("file: App.tsx:70 ~ filteredJobs:", filteredJobs);
        setFilteredJobsData(filteredJobs);
    };

    const debouncedFilter = useCallback(debounce(filter, 1000), [jobData]);

    useEffect(() => {
        if (filteredObject) debouncedFilter(jobData, filteredObject);
    }, [debouncedFilter, filteredObject, jobData]);

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

        setJobData((prevPosts: Job[]) => [...prevPosts, ...data.jdList]);
        setFilteredJobsData((prevPosts: Job[]) => [
            ...prevPosts,
            ...data.jdList,
        ]);
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
            <Filters jobData={jobData} setFilteredData={setFilteredObject} />
            <Grid
                container
                spacing={{ xs: 3 }}
                p={2}
                sx={{
                    display: "flex",
                    flexFlow: "wrap",
                    margin: "0 auto",
                    justifyContent: "center",
                }}
            >
                {filteredJobsData.map((job: Job, index: number) => (
                    <Grid
                        item
                        xs={12}
                        md={6}
                        lg={4}
                        key={index}
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <JobCard
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
                    </Grid>
                ))}
            </Grid>
            <div className="mb-5" ref={observerTarget}></div>
        </>
    );
}

export default App;
