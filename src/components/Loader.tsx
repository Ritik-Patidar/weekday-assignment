import { Box, Card, CardContent, Grid, Skeleton } from "@mui/material";

const Loader: React.FC = () => {
    return (
        // <div className="flex justify-center items-center h-screen">
        //     <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
        // </div>
        <>
            <Grid
                item
                xs={12}
                md={6}
                lg={4}
                sx={{
                    display: "flex",
                    justifyContent: "center",
                }}
            >
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
                        <Skeleton variant="text" width={210} height={40} />
                        <Box display="flex" gap={2}>
                            <Skeleton width={40} height={40} />
                            <div>
                                <Skeleton
                                    variant="text"
                                    width={210}
                                    height={40}
                                />
                                <Skeleton
                                    variant="text"
                                    width={210}
                                    height={40}
                                />
                            </div>
                        </Box>
                        <Skeleton variant="text" width={210} height={40} />
                        <Box
                            sx={{
                                height: 250,
                                overflow: "hidden",
                                maskImage:
                                    "linear-gradient(rgb(255, 255, 255), rgb(255, 255, 255), rgba(255, 255, 255, 0))",
                            }}
                        >
                            <Skeleton variant="text" width={210} height={40} />
                            <Skeleton
                                variant="rectangular"
                                width={210}
                                height={100}
                            />
                        </Box>
                        <Box className="relative top-[-20px]">
                            <Skeleton variant="text" width={210} height={40} />
                        </Box>
                        <Box>
                            <Skeleton variant="text" width={210} height={40} />
                            <Skeleton variant="text" width={210} height={40} />
                        </Box>
                        <Skeleton
                            variant="rectangular"
                            width={210}
                            height={40}
                        />
                        <Skeleton
                            variant="rectangular"
                            width={210}
                            height={40}
                        />
                    </CardContent>
                </Card>
            </Grid>
        </>
    );
};

export default Loader;
