import axiosDataClient from "./axiosClient";
import { API_ENDPOINTS } from "./endpoints";

export const login = async (props)=>{
    try{
        const res = await axiosDataClient.post(`${API_ENDPOINTS.USER}/login`, {
            username:props.email,
            password:props.pw
        });
        if (res.status !== 200) {
            throw new Error(`Login failed with status: ${res}`);
          }
          return res
    }catch(err){
        if (err.response) {
            throw new Error(`Login failed with status: ${err.response.status}`);
          }
          throw err; // 네트워크 에러 등 처리
    }
}

export const logout = async ()=>{
    try{
        const res = await axiosDataClient.get(`${API_ENDPOINTS.USER}/logout`);
        if(!res.status === 200){
            throw new Error(`Login failed with status: ${res}`);
        }
        return res
    }catch(error){
        console.log(error);
    }
}

export const profile = async (id)=>{
    try{
        const res = await axiosDataClient.get(`${API_ENDPOINTS.USER}/profile/${id}`);
        return res;
    }catch(err){
        console.log(err);
    }
}

export const register = async (props) =>{
    try{
        const res = await axiosDataClient.post(`${API_ENDPOINTS.USER}/register`, {
            email: props.email,
            username: props.id,
            password: props.pw,
            age: props.age,
            token: props.valueNumber
        });
        if (res.status !== 201) {
            return Promise.reject({ 
                status: res.status, 
                message: res.message
            });
          }
          return res
    }catch(err){
        if (err.response) {
            throw new Error(`Login failed with status: ${err.response.status}`);
          }
          throw err; // 네트워크 에러 등 처리
    }
}

export const sendEmail = async (email) =>{
    try{
        const res = await axiosDataClient.post(`${API_ENDPOINTS.USER}/sendEmail`, {
            email:email
        });
        if (res.status === 409) {
            return Promise.reject({ 
                status: res.status, 
                message: "이미 등록된 사용자입니다." 
            });
        }
        return res;
    }catch(err){
        throw new Error(`Login failed with status: ${err}`);
    }
}

export const report = async ({title, content}) =>{
    
    try{
        const res = await axiosDataClient.post(`${API_ENDPOINTS.USER}/report`, {
            title : title,
            contents:content
        });
        if(res.status !== 200){
            return Promise.reject({
                status : res.status,
                massage: res.message
            })
        }
        return res;
    }catch(err){
        return Promise.reject(err);
    }
}

export const update = async (props)=>{

    try{
        const res = await axiosDataClient.put(`${API_ENDPOINTS.USER}/update`, props.formData);
        if(res.status !== 200){
            return Promise.reject(res.status);
        };
        return {res, username : props.username};
    }catch(error){
        console.log(error);
    }
}