export interface LoginDataForm{
    email: string
    password: string
}


export interface RegisterDataForm{
    username: string
    email: string
    password: string
}


export interface ApplicantDataForm{

    applicantName: string;
    applicantEmail: string;
    applicantPhone: string;
    applicationDate: Date;
    cvFile: File;
    coverLetterFile: File;
    jobOfferIds: number[];
}

export interface JobOfferDataForm {

    id: number,
    enterpriseName: string,
    title: string,
    shortDescription: string,
    enterpriseIntroduction: string,
    profileSearch: [],
    postMission: [],
    applyMethod: string,
    location: string,
    salary: string,
    postedDate: Date,
    categoryIds: number
}


export interface CategoryDataForm{

    name: string
    description: string
    jobOffers: JobOfferDataForm
}

export interface JobOfferAdminDataForm{
    title: string
    description: string
    location: string
    salary: string
    postDate: Date
    categoryIds: number
    applicantsIds: []
}
