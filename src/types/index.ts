export interface Doc{
    date: string;
    id:number
    userId:number,
    authorName?:string,
    title:string,
    content:string,
    icon:number,
    category:string,
    likes:number
}
export interface CreateDoc{
    title:string,
    content:string,
    category:string
    authorId:number,
    icon:number
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