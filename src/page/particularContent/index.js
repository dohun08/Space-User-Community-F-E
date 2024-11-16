import styled from "styled-components";
import PostContent from "./PostContent";
import Header from "../../components/Header";
import FamousPost from "./FamousPost";
import Like from "./Like";
import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";

export default function ParticularContent() {
    const navigate = useNavigate();
    const {id} = useParams();
    const [PostData, setPostData] = useState({})

    const getPost = async ()=>{
        try{
            const response = await fetch(`/community/doc/${id}`, {
                method:'GET',
            })

            const data = await response.json();
            if(data.status===200){
                console.log("글 조회 성공");
                setPostData(data["data"]);
            }
        }catch(error){
            console.log("error on : ",error);
            navigate("/error");
        }
    };

    useEffect(()=>{
        getPost();
    }, []);

    return (
        <Container>
            <Header/>
            <Content>
                <Like likes={PostData["likes"]}/>
                <PostContent data={PostData}/>
                <FamousPost/>
            </Content>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 95vh;
`

const Content = styled.div`
    display: flex;
    gap: 5%;
    justify-content: center;
    height: 80%;
    overflow: scroll;
`