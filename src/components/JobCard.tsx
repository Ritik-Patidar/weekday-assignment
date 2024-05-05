import { Modal, Paper, Box, Typography } from "@mui/material";
import { JobCardProps } from "../types/jobs";
import { useState } from "react";

const JobCard: React.FC<JobCardProps> = ({
    role,
    company,
    maxSalary,
    minSalary,
    minExp,
    description,
    salaryCurrencyCode,
    logoUrl,
    location,
}) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const maxDescriptionLength = 100;
    const truncatedDescription = `${description.slice(
        0,
        maxDescriptionLength
    )}${description.length > maxDescriptionLength ? "..." : ""}`;
    return (
        <>
            <Paper
                square={false}
                elevation={1}
                className="bg-white !rounded-[20px] p-6"
            >
                <h2 className="text-xl font-bold mb-2">{role}</h2>
                <p className="text-gray-600 mb-2">{company}</p>
                <p className="text-green-600 mb-4">
                    Estimated Salary: {minSalary} - {maxSalary}{" "}
                    {salaryCurrencyCode}
                </p>
                <p className="text-gray-700 mb-4">
                    {truncatedDescription}{" "}
                    {description.length > maxDescriptionLength && (
                        <button
                            className="text-blue-500 hover:text-blue-700"
                            onClick={handleOpen}
                        >
                            Show more
                        </button>
                    )}
                </p>
                <div className="flex flex-col gap-2 justify-between">
                    <div>
                        <p className="text-gray-500">Minimum Experience</p>
                        <p>{minExp || 0} Years</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <button className="bg-purple-600 text-white py-2 px-4 rounded-md">
                            Easy Apply
                        </button>
                        <button className="bg-blue-600 text-white py-2 px-4 rounded-md">
                            Unlock internal data
                        </button>
                    </div>
                </div>
            </Paper>
            <Modal open={open} onClose={handleClose}>
                <Box
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        bgcolor: "background.paper",
                        boxShadow: 24,
                        p: 4,
                    }}
                >
                    <Typography variant="h6" component="h2">
                        Job Description
                    </Typography>
                    <Typography sx={{ mt: 2 }}>{description}</Typography>
                </Box>
            </Modal>
        </>
    );
};

export default JobCard;
