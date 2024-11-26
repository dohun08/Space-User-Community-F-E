export interface Doc{
    createdAt: string;
    date?: string;
    documentId?:number
    userId?:number,
    authorName?:string,
    title:string,
    content?:string,
    icon:number,
    category:string,
    likes?:number,
    contents?:string
}
export interface User{
    id:string,
    age:number,
    email:string,
    userName:string
}

export interface Auth{
    access_Token:string,
    username:string,
    isAdmin:boolean
}