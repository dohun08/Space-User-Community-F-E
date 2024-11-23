export interface Doc{
    id:number
    userId:number,
    authorName?:string,
    title:string,
    content:string,
    icon:number,
    category:string,
    likes:number,
    createdAt:string
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