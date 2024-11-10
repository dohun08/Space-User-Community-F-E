import {atom, selector} from "recoil";
import {Auth} from "../types";

const loadAccessToken = () => {
    const savedAccessToken = localStorage.getItem('accessToken');
    return savedAccessToken || null; // 없으면 빈 문자열 반환
};
const loadUsername = () => {
    const savedUsername = localStorage.getItem('username');
    return savedUsername || '';
}

export const authAtom = atom<Auth>({
    key:'authState',
    default:{
        username:loadUsername(),
        access_Token: loadAccessToken(),
        isAdmin:false
    },
    effects_UNSTABLE: [
        ({onSet}) =>{
            onSet((newState:Auth) => {
                if (typeof newState.access_Token === "string") {
                    localStorage.setItem('accessToken', newState.access_Token);
                }
                localStorage.setItem('username', newState.username);
            });
        }
    ]
});

export const isLoginSelector = selector<boolean>({
    key: 'isLoginSelector',
    get: ({get}):boolean => {
        const auth = get(authAtom);
        return auth.access_Token !== null;
    }
})