import {atom} from "recoil";

export const authAtom = atom({
    key:'authState',
    default:{
        isLogin:false,
        token:null,
        username:null
    }
});