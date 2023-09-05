export interface issueData {
    issueTitle?:string; 
    commentsCount?:number;
    commentsUrl?: string;
};
export interface commentData {
    userName?:string; 
    cmtData?:string;
    userAvatar?: string;
    lastUpdate?:string;
}