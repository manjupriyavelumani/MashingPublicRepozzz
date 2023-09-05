export interface repoDetailsModel {
    fullname?:string;
    description?:string;
    iconUrl?: string;
    watch?: number;
    forks?: number;
    visibility?: string;
    createdOn?: string;
    defaultBranch?: string; 
    branchUrl?: string;
    tagUrl?: string;
    starGazers?:number;
    languageUrl?: string;
    contributorsUrl?: string;

}
export interface contributersDetailsModel {
    contributersName?: string;
    contributersAvatarUrl?:string;
    contributersLink?: string;
}
