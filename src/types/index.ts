export interface Doc{
    id:number
    userId:number,
    title:string,
    content:string,
    icon:number,
    category:string,
    likes:number,
    createdAt:string
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