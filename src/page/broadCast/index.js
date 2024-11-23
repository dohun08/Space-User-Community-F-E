import styled from "styled-components";
import Header from "../../components/Header";
import PostContent from "./PostContent";
import FamousPost from "../particularContent/FamousPost";
import {useEffect, useState} from "react";
import {useNavigate, useLocation} from "react-router-dom";
import {getDoc} from "../../api/getDoc";

export default function BroadCastContent() {
    const navigate = useNavigate();
    const location = useLocation();
    const [PostData, setPostData] = useState({
        contents: "",
        title: "",
        documentId: 1
    });
    const [famousDocuments, setFamousDocuments] = useState(['']);


    const famousPost = async () => {
        try{
            const documents = await getDoc("likes");
            setFamousDocuments(documents);
        }catch(error){
            console.log("error on : ",error);
            navigate("/error");
        }
    }

    useEffect(()=>{
        setPostData(location.state)
        famousPost();
    }, [location]);
    return (
        <Container>
            <Header/>
            <Content>
                <PostContent data={PostData}/>
                <FamousPost famous = {famousDocuments}/>
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