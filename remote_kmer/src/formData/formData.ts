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
    cv: File;
    photo: File;
    coverLetter: File;
    jobOfferIds: number[];
}

export interface JobOfferDataForm {

    id: number
    title: string,
    shortDescription: string,
    enterpriseIntroduction: string,
    postDescription: string,
    principalResponsability: string,
    competencies: string,
    requiredQualifications: string,
    optionalQualifications: string,
    postDetails: string,
    advantage: string,
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
