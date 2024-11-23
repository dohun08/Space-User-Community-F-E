import styled from "styled-components";
import PostContent from "./PostContent";
import Header from "../../components/Header";
import FamousPost from "./FamousPost";
import Like from "./Like";
import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {getDoc} from "../../api/getDoc";
import {useRecoilValue} from "recoil";
import {authAtom} from "../../recoil/authAtom";

export default function ParticularContent() {
    const navigate = useNavigate();
    const {id} = useParams();
    const getAuth = useRecoilValue(authAtom);
    const [PostData, setPostData] = useState({
        authorName: "admins",
        category: "문제",
        content: "",
        date: "2024-11-20T15:30:09.759530",
        documentId: 1,
        icon: 14,
        likeStatus: false,
        likes: 0,
        title: ""
    });
    const [famousDocuments, setFamousDocuments] = useState(['']);
    const [isLoading, setIsLoading] = useState(true);

    const getPost = async ()=>{
        console.log(getAuth.access_Token);
        setIsLoading(true);
        try{
            const response = await fetch(`/api/community/doc/${id}`, {
                method:'GET',
                headers:{
                    'Content-Type':'application/json',
                    'Authorization': getAuth.access_Token ? getAuth.access_Token : 'Bearer null'
                },
                credentials: 'include'
            })

            if(response.ok){
                const data = await response.json();
                setPostData(data);
                console.log(data);
            }
            else{
                console.log(response.status);
            }
        }catch(error){
            console.log("error on : ",error);
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
                <Like isLiked={PostData.likeStatus} likes={PostData.likes} id={PostData.documentId} getPost = {getPost}/>
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