import styled from "styled-components";
import Header from "../../components/Header";
import InputText from "../../components/InputText";
import Circle from "../../components/Button/Circle";
import Megaphone from "../../assets/Megaphone.svg"
import {authAtom} from "../../recoil/authAtom";
import {useRecoilValue} from "recoil";
import { useState} from "react";
import { useReport } from "../../hooks/useUsersQuery";

export default function Report(){
    const auth = useRecoilValue(authAtom);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const {mutate : report} = useReport();
    const postReport = () =>{
        report({title, content});
    }

    return (
        <Container>
            <Header/>
            <Content>
                <Wrapper>
                    <Icon src={Megaphone} alt={"Megaphone"} />
                    <Title>신고하기</Title>
                    <InputContainer>
                        <InputLabel htmlFor={"reportTitle"}>제목</InputLabel>
                        <InputText onchange={setTitle} value={title} id={"reportTitle"} type={"input"} placeholder={"제목을 입력해주세요"} width={"unset"} padding={"10px"} borderBottom={true} borderRadius={"0"}/>
                    </InputContainer>
                    <InputContainer flexgrow={1}>
                        <InputLabel htmlFor={"reportContent"}>내용</InputLabel>
                        <InputText onchange={setContent} value={content} id={"reportContent"} type={"textarea"} placeholder={"신고 내용을 입력해주세요"} width={"unset"} padding={"10px"} borderRadius={"10px"}/>
                    </InputContainer>
                    <Circle onClick={()=>{postReport()}} name={"신고하기"}/>
                </Wrapper>
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
    height: 80%;
    justify-content: center;
    overflow: visible;
`

const Wrapper = styled.div`
    display: flex;
    border-radius: 30px;
    border: 3px solid #DFDFDF;
    background: #FFF;
    min-height: 90%;
    width: 50%;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    padding: 30px 50px;
    gap: 50px;
    position: relative;
`

const Icon = styled.img`
    transform: rotate(-15deg);
    position: absolute;
    right: -50px;
    top: -50px;
`

const Title = styled.div`
    font-size: 30px;
    font-weight: 600;
    color: #301C86;
    width: 100%;
    text-align: center;
`

const InputContainer = styled.div`
    display: flex;
    gap: 20px;
    width: 100%;
    flex-grow: ${(props) => props.flexgrow || 0};
`

const InputLabel = styled.label`
    padding: 10px;
    font-size: 20px;
    font-weight: 600;
`