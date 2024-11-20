import styled from "styled-components";
import PostContent from "./PostContent";
import Header from "../../components/Header";
import FamousPost from "./FamousPost";
import Like from "./Like";
import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {getDoc} from "../../api/getDoc";

export default function ParticularContent() {
    const navigate = useNavigate();
    const {id} = useParams();
    const [PostData, setPostData] = useState({});
    const [famousDocuments, setFamousDocuments] = useState(['']);
    const [isLoading, setIsLoading] = useState(true);
    const getPost = async ()=>{
        setIsLoading(true);
        try{
            const response = await fetch(`/api/community/doc/${id}`, {
                method:'GET',
            })

            const data = await response.json();
            if(response.ok){
                setPostData(data);
            }
            else{
                console.log(response.ok);
            }
        }catch(error){
            console.log("error on : ",error);
            navigate("/error");
        }finally {
            setIsLoading(false);
        }
    };

    const famousPost = async () => {
        setIsLoading(true);
        try{
            const documents = await getDoc("likes");
            setFamousDocuments(documents);
        }catch(error){
            console.log("error on : ",error);
            navigate("/error");
        }finally {
            setIsLoading(false);
        }
    }
    useEffect(()=>{
        getPost();
        famousPost();
    }, []);

    return (
        <Container>
            <Header/>
            <Content>
                <Like likes={PostData["likes"]}/>
                <PostContent data={PostData} isLoading = {isLoading}/>
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