import React from "react";
import Select from "react-select";
import { Job } from "../types/jobs";
import { TextField } from "@mui/material";

interface FiltersProps {
    jobData: Job[];
}

const Filters: React.FC<FiltersProps> = ({ jobData }) => {
    const jobRoles = [...new Set(jobData.map((job) => job.jobRole))];
    const experience = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const mode = ["Remote", "In-office", "Hybrid"];
    const minBase = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

    const employees = [
        { value: "1-50", label: "1-50" },
        { value: "51-100", label: "51-100" },
        { value: "101-200", label: "101-200" },
        { value: "201-500", label: "201-500" },
        { value: "501-1000", label: "501-1000" },
        { value: "1001-5000", label: "1001-5000" },
        { value: "5001-10000", label: "5001-10000" },
        { value: "10000+", label: "10000+" },
    ];

    return (
        <div className="flex gap-2 w-full my-4 flex-wrap">
            <Select
                options={jobRoles.map((role) => ({ value: role, label: role }))}
                placeholder="Roles"
                isMulti
            />
            <Select
                options={employees}
                placeholder="Number of Employees"
                isMulti
            />
            <Select
                options={experience.map((company) => ({
                    value: company,
                    label: company,
                }))}
                placeholder="Experience"
                isClearable
            />
            <Select
                options={mode.map((value) => ({
                    value: value,
                    label: value,
                }))}
                placeholder="Remote"
                isMulti
            />
            <Select
                options={minBase.map((value) => ({
                    value: value,
                    label: value + "USD",
                }))}
                placeholder="Minimum Base Pay Salary"
                isClearable
            />
            <TextField
                placeholder="Search Company Name"
                sx={{ minHeight: "38px !important" }}
                variant="outlined"
            />
        </div>
    );
};

export default Filters;
