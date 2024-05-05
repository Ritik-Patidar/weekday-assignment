import { useCallback, useEffect, useRef, useState } from "react";
import JobCard from "./components/JobCard";
import { FilterObject, Job } from "./types/jobs";
import { Grid } from "@mui/material";
import Filters from "./components/Filters";
import debounce from "./utils/debounce";
import { filterJobs } from "./utils/filter";
import { useFetchJdsMutation } from "./redux/services/job";
import Loader from "./components/Loader";

function App() {
    const [fetchJds, { isLoading }] = useFetchJdsMutation();

    const [jobData, setJobData] = useState<Job[]>([]);
    const [page, setPage] = useState<number>(0);
    const [filteredJobsData, setFilteredJobsData] = useState<Job[]>([]);
    const [filteredObject, setFilteredObject] = useState<FilterObject>();

    const observerTarget = useRef<HTMLDivElement>(null);

    const filter = (jobs: Job[], filterObject: FilterObject) => {
        const filteredJobs = filterJobs(jobs, filterObject);
        setFilteredJobsData(filteredJobs);
    };

    const debouncedFilter = useCallback(debounce(filter, 300), [jobData]);

    /* responsible for triggering the `debouncedFilter` function whenever there are changes in the 
      dependencies specified in the dependency array
    `[debouncedFilter, filteredObject, jobData]`. */
    useEffect(() => {
        if (filteredObject) debouncedFilter(jobData, filteredObject);
    }, [debouncedFilter, filteredObject, jobData]);

    /*  It is an asynchronous function that fetches job data from the server using the `fetchJds` function
    provided by the `useFetchJdsMutation` hook. */
    const fetchJobs = useCallback(async (): Promise<void> => {
        const response = await fetchJds({ offset: page, limit: 10 });
        const { data } = response as unknown as { data: { jdList: Job[] } };

        setJobData((prevPosts: Job[]) => [...prevPosts, ...data.jdList]);
        setFilteredJobsData((prevPosts: Job[]) => [
            ...prevPosts,
            ...data.jdList,
        ]);
        setPage((prevPage) => prevPage + 1);
    }, [fetchJds, page]);

    /* It is a side effect that is responsible for observing the target element and calling the `fetchJobs` function
    whenever the target element is intersecting with the viewport. it is used for infinity scroll */
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
                {isLoading && <Loader />}
            </Grid>
            <div className="mb-5" ref={observerTarget}></div>
        </>
    );
}

export default App;
