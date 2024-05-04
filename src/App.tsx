import JobCard from "./components/JobCard";

function App() {
    const jobData: any = [
        {
            jdUid: "cfff35ba-053c-11ef-83d3-06301d0a7178-92012",
            jdLink: "https://weekday.works",
            jobDetailsFromCompany:
                "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
            maxJdSalary: 103,
            minJdSalary: 100,
            salaryCurrencyCode: "USD",
            location: "mumbai",
            minExp: null,
            maxExp: null,
            jobRole: "ios",
            companyName: "LG",
            logoUrl: "https://logo.clearbit.com/lg.com",
        },
        {
            jdUid: "cfff35ba-053c-11ef-83d3-06301d0a7178-92012",
            jdLink: "https://weekday.works",
            jobDetailsFromCompany:
                "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
            maxJdSalary: 103,
            minJdSalary: 100,
            salaryCurrencyCode: "USD",
            location: "mumbai",
            minExp: null,
            maxExp: null,
            jobRole: "ios",
            companyName: "LG",
            logoUrl: "https://logo.clearbit.com/lg.com",
        },
    ];
    return (
        <>
            {jobData.map((job, index) => (
                <JobCard
                    key={index}
                    title={job.jobRole}
                    company={job.companyName}
                    minSalary={job.minJdSalary}
                    maxSalary={job.maxJdSalary}
                    description={job.jobDetailsFromCompany}
                    salaryCurrencyCode={job.salaryCurrencyCode}
                    minExp={job.minExp}
                />
            ))}
        </>
    );
}

export default App;
