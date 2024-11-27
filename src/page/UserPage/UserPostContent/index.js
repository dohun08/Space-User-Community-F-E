import styled from "styled-components";
import React, {useEffect, useState} from "react";
import Document from "../../../components/Documents/Long";
import PageScroll from "../../../components/pageScroll";
import {useNavigate} from "react-router-dom";


export default function UserPostContent({id}){
    const navigate = useNavigate();
    const [page, setPage] = useState(1);
    const [Posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    const getPostData = async ()=>{
        try {
            const response = await fetch(`/api/community/doclist/${id}`, {
                method:'GET',
            })

            if(response.ok){
                const data = await response.json();
                console.log("유저 게시물 조회 성공")
                setPosts(data);
            }
        } catch (err) {
            console.log(err);
            navigate('/error');
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getPostData();
    }, [id]);

    return (
        <>
            {loading? <></>:(
                <Container>
                    <PostWrapper>
                        {Posts.length < 1 ? <></> :
                            Array.from({ length: 9 }).map((_, index) => {
                                const item = Posts[(page - 1) * 9 + index];
                                return item ? (
                                    <Document data={item} key={item.id}/>
                                ) : null;
                            })
                        }
                    </PostWrapper>
                    <PageScroll page={page} setPage={setPage} contentLength={Posts.length/9} />
                </Container>
            )}
        </>
    );
}

const Container = styled.div`
    flex-grow: 1;
    flex-shrink: 1;
    border: 3px solid #DFDFDF;
    border-radius: 30px;
    display: flex;
    width: 350px;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 30px 30px 12px 30px;
`

const PostWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
`