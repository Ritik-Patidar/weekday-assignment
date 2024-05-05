import {
    Avatar,
    Box,
    Button,
    Card,
    CardContent,
    Modal,
    Typography,
} from "@mui/material";
import { useState } from "react";
import { JobCardProps } from "../types/jobs";

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

    return (
        <>
            <Card
                sx={{
                    maxWidth: 360,
                    overflow: "hidden",
                }}
                className="bg-white !rounded-[20px]"
                elevation={1}
            >
                <CardContent
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 2,
                    }}
                >
                    <span className="border rounded-2xl px-2 py-1">
                        ⏳ Posted 3 days ago
                    </span>
                    <Box display="flex" gap={2}>
                        <img src={logoUrl} alt="logo" className="w-10 h-10" />
                        <div>
                            <div className="text-sm font-semibold text-gray-600 mb-1">
                                <h3 className="MuiBox-root css-rulwqv">
                                    {company}
                                </h3>
                                <h2>{role}</h2>
                            </div>
                            <p className="text-xs font-medium mt-1">
                                {location}
                            </p>
                        </div>
                    </Box>
                    <Typography variant="body2">
                        Estimated Salary: {minSalary} - {maxSalary}{" "}
                        {salaryCurrencyCode} ✅
                    </Typography>
                    <Box
                        sx={{
                            height: 250,
                            overflow: "hidden",
                            maskImage:
                                "linear-gradient(rgb(255, 255, 255), rgb(255, 255, 255), rgba(255, 255, 255, 0))",
                        }}
                    >
                        <Typography variant="body1">About Company:</Typography>
                        <Box>{description}</Box>
                    </Box>
                    <Box className="relative top-[-20px]">
                        <Typography
                            variant="body1"
                            onClick={handleOpen}
                            className="text-blue-500 hover:text-blue-700 cursor-pointer text-center"
                        >
                            Show more
                        </Typography>
                    </Box>
                    <Box>
                        <p className="text-gray-500"> Minimum Experience</p>
                        <p>{minExp || 0} Years</p>
                    </Box>
                    <Button variant="contained" color="primary">
                        ⚡ Easy Apply
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        className="flex gap-1"
                    >
                        <Avatar
                            alt="Remy Sharp"
                            src="https://mui.com/static/images/avatar/1.jpg"
                            sx={{ width: 24, height: 24 }}
                        />
                        <Avatar
                            alt="Travis Howard"
                            src="https://mui.com/static/images/avatar/2.jpg"
                            sx={{ width: 24, height: 24 }}
                        />
                        <Avatar
                            alt="Cindy Baker"
                            src="https://mui.com/static/images/avatar/3.jpg"
                            sx={{ width: 24, height: 24 }}
                        />
                        Unlock referral aks
                    </Button>
                </CardContent>
            </Card>
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
                        minWidth: 400,
                        maxWidth: "80%",
                        maxHeight: "80vh",
                        overflowY: "auto",
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
