import React, { Dispatch, SetStateAction } from "react";
import Select from "react-select";
import { Job, OptionType } from "../types/jobs";
import { TextField } from "@mui/material";

interface FiltersProps {
    jobData: Job[];
    setFilteredData: Dispatch<
        SetStateAction<{ [key: string]: OptionType } | undefined>
    >;
}

const Filters: React.FC<FiltersProps> = ({ jobData, setFilteredData }) => {
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

    const handleFilterChange = (key: string, value: OptionType) => {
        setFilteredData((pre: { [key: string]: OptionType } | undefined) => ({
            ...pre,
            [key]: value,
        }));
    };

    return (
        <div className="flex gap-2 w-full my-4 flex-wrap">
            <Select
                options={jobRoles.map((role) => ({ value: role, label: role }))}
                onChange={(selectedOption) =>
                    handleFilterChange("jobRole", selectedOption)
                }
                placeholder="Roles"
                isMulti
            />
            <Select
                options={employees}
                onChange={(selectedOption) =>
                    handleFilterChange("employees", selectedOption)
                }
                placeholder="Number of Employees"
                isMulti
            />
            <Select
                options={experience.map((company) => ({
                    value: company,
                    label: company,
                }))}
                onChange={(selectedOption) =>
                    handleFilterChange("minExp", selectedOption)
                }
                placeholder="Experience"
                isClearable
            />
            <Select
                options={mode.map((value) => ({
                    value: value,
                    label: value,
                }))}
                onChange={(selectedOption) =>
                    handleFilterChange("location", selectedOption)
                }
                placeholder="Remote"
                isMulti
            />
            <Select
                options={minBase.map((value) => ({
                    value: value,
                    label: value + "USD",
                }))}
                onChange={(selectedOption) =>
                    handleFilterChange("minJdSalary", selectedOption)
                }
                placeholder="Minimum Base Pay Salary"
                isClearable
            />
            <TextField
                placeholder="Search Company Name"
                sx={{ minHeight: "38px !important" }}
                variant="outlined"
                onChange={(e) =>
                    handleFilterChange("companyName", e.target.value)
                }
            />
        </div>
    );
};

export default Filters;
