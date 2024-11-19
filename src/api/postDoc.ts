import {CreateDoc} from "../types";
import {authAtom} from "../recoil/authAtom";
import {useRecoilValue} from "recoil";

export function Create (data?: { data: CreateDoc }){
    console.log(data);
    const auth = useRecoilValue(authAtom);
    const post = async ({data}: { data: CreateDoc }) => {
        if (data.category === '공지') {
            try {
                const response = await fetch('/api/admin/broadcast', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `${auth.access_Token}`
                    },
                    body: JSON.stringify({
                        title: data.title,
                        content: data.content,
                        category: data.category,
                        userid: auth.username,
                        icon: data.icon
                    })
                });
                return response.ok;
            } catch (error) {
                console.log('on error announcement post', error);
            }
        } else {
            try {
                const response = await fetch('/api/community/doc', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `${auth.access_Token}`
                    },
                    credentials: 'include',
                    body: JSON.stringify({
                        authorId: data.authorId,
                        title: data.title,
                        content: data.content,
                        icon: data.icon,
                        category: data.category
                    })
                });
                return response.ok;
            } catch (error) {
                console.log('on error announcement post', error);
            }
        }
    }
    return post;
}