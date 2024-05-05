import { FilterObject, Job } from "../types/jobs";

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