import { useMutation } from "react-query";
import axios from "axios";
import { authAtom } from "../recoil/authAtom";
import { useRecoilState } from "recoil";
import { decodeJWT } from "../until/authService";

export const usePostDocMutation = (onSuccess: (res: any) => void, onError: (res: any) => void) => {
    const [auth] = useRecoilState(authAtom);

    return useMutation(
        async ({ title, content, icon, category }: { title: string; content: string; icon: number; category: string }) => {
            const jwt = decodeJWT(auth.access_Token);
            if (title === "" || content === "") throw new Error("값이 비어져있습니다.");

            if (category === "공지") {
                const res = await axios.post('/api/broadcast', {
                    authorId: jwt.userId,
                    title: title,
                    content: content,
                }, {
                    headers: {
                        'Authorization': `${auth.access_Token}`,
                        'Content-Type': 'application/json'
                    }
                });
                return res.data; // Return the response data
            } else {
                const res = await axios.post('/api/community/doc', {
                    authorId: jwt.userId,
                    title: title,
                    content: content,
                    icon: icon,
                    category: category
                }, {
                    headers: {
                        'Authorization': `${auth.access_Token}`,
                        'Content-Type': 'application/json'
                    }
                });
                return res.data; // Return the response data
            }
        },
        {
            onSuccess,
            onError,
        }
    );
};