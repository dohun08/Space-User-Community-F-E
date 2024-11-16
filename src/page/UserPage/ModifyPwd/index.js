import styled from "styled-components";
import {ModifyBtn} from "../UserContent/style.ts";
import User from "../User";

function ModifyPwd({id, onClick}) {
    return (
        <Container>
            <Content>
                <User username={id} modifiable={false}/>
                <InputContainer>
                    <InputBox>
                        <Label>Current<br/>Password</Label>
                        <Input type={"password"} placeholder={"현재 비밀번호를 입력해주세요"}/>
                    </InputBox>
                    <InputBox>
                        <Label>New<br/>Password</Label>
                        <Input type={"password"} placeholder={"새로운 비밀번호를 입력해주세요"}/>
                    </InputBox>
                    <InputBox>
                        <Label>Re-Enter<br/>Password</Label>
                        <Input type={"password"} placeholder={"새로운 비밀번호를 다시 입력해주세요"}/>
                    </InputBox>
                </InputContainer>
            </Content>
            <ModifyBtn color={true} size={"16px"} onClick={onClick}>비밀번호 변경하기</ModifyBtn>
        </Container>
    );
}

const Container = styled.div`
    border-radius: 30px;
    border: 3px solid #DFDFDF;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 80px;
    justify-content: center;
    align-items: center;
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 30px;
    width: 35%;
    
`

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`

const InputBox = styled.div`
    display: flex;
    gap: 20px;
`

const Label = styled.label`
    color: #AAA;
    text-align: center;
    font-size: 16px;
`

const Input = styled.input`
    outline: none;
    border: none;
    flex-grow: 1;
`

export default ModifyPwd;