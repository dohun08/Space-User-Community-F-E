import styled from "styled-components";
import Header from "../../components/Header";
import UserContent from "./UserContent";
import {useParams} from "react-router-dom";
import UserPostContent from "./UserPostContent";

export default function UserPage(){
    const {id} = useParams();
    return(
        <Container>
            <Header/>
            <Content>
                <UserContent id={id}/>
                <UserPostContent id={id}/>
            </Content>
        </Container>
    );
}


const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 95vh;
    align-items: center;
`

const Content = styled.div`
    width: 90%;
    margin: 0 auto;
    display: flex;
    gap: 20px;
    height: 80%;
    box-sizing: border-box;
`