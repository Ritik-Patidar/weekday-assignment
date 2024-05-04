export interface Job {
    companyName: string;
    jdLink: string;
    jdUid: string;
    jobDetailsFromCompany: string;
    jobRole: string;
    location: string;
    logoUrl: string;
    maxExp: number;
    maxJdSalary: number;
    minExp: number;
    minJdSalary: number;
    salaryCurrencyCode: string;
}

export interface JobCardProps {
    role: string;
    company: string;
    maxSalary: number;
    minSalary: number;
    minExp: number;
    description: string;
    salaryCurrencyCode?: string;
    logoUrl: string;
    location: string;
}