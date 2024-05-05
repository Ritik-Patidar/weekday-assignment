import { FilterObject, Job } from "../types/jobs";

/**
 * The function filters an array of job objects based on specified filters.
 * @param {Job[]} jobs - The `jobs` parameter is an array of Job objects, which contains information
 * about different job listings.
 * @param {FilterObject} filters - The `filters` parameter is an object
 * that contains various filter criteria for the job objects. The keys in the `filters` object
 * correspond to different properties of a job, such as `jobRole`, `companyName`, `minJdSalary`,
 * `minExp
 * @returns returns a filtered array of `Job` objects based on the
 * provided `filters` object. The function iterates over each job in the `jobs` array and applies the
 * filtering logic based on the keys in the `filters` object. If a job does not meet the filtering
 * criteria, it is excluded from the final filtered array that is returned.
 */
export const filterJobs = (jobs: Job[], filters: FilterObject) => {
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
                        Array.isArray(filters[key]) &&
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
                            .includes((filters.companyName as string)?.toLowerCase() ?? "")
                    ) {
                        return false;
                    }
                    break;
                case "minJdSalary":
                    if (job.minJdSalary < (filters.minJdSalary?.value ?? 0)) {
                        return false;
                    }
                    break;
                case "minExp":
                    if (job.minExp > (filters.minExp?.value ?? 0)) {
                        return false;
                    }
                    break;
                case "location":
                    if (
                        Array.isArray(filters[key]) &&
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