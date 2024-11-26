import styled from "styled-components";
import {ModifyBtn} from "../UserContent/style.ts";
import User from "../User";
import {useCallback, useState} from "react";

function ModifyPwd({id, onClick, update}) {
    const isValidPassword = (password) => {
        const lengthCheck = password.length >= 8 && password.length <= 15;
        const alphaCheck = /[A-Za-z]/.test(password);
        const numberCheck = /[0-9]/.test(password);
        const specialCharCheck = /[!@#$%^&*(),.?":{}|<>]/.test(password);

        if (!lengthCheck) {
            alert("비밀번호는 8~15자여야 합니다.");
            return false;
        }
        if (!alphaCheck) {
            alert("비밀번호에 최소 하나의 대/소문자가 포함되어야 합니다.");
            return false;
        }
        if (!numberCheck) {
            alert("비밀번호에 최소 하나의 숫자가 포함되어야 합니다.");
            return false;
        }
        if (!specialCharCheck) {
            alert("비밀번호에 최소 하나의 특수 문자가 포함되어야 합니다.");
            return false;
        }

        return true;
    };

    const [pwds, setPwds] = useState({current : "", new : "", reEnter : ""});
    const onClickHandler = async(e) => {
        e.preventDefault();
        if (pwds["current"].trim() === "" || pwds["new"].trim() === "" || pwds["reEnter"].trim() === "") {
            return;
        }

        if (pwds["new"].trim() !== pwds["reEnter"].trim()) {
            alert("비밀번호가 일치하지 않습니다.");
            return;
        }

        if (!isValidPassword(pwds["new"].trim())) {
            return;
        }

        const formData = new FormData();
        const blob = new Blob([JSON.stringify({"password": pwds["new"]})], { type: "application/json" });
        formData.append("UserUpdate", blob);
        if(!(await update(formData, id))){
            return;
        }
        onClick();
    }
    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setPwds(pwds => ({...pwds, [name]: value}));
        console.log(name, value);
        console.log(pwds);
    }

    return (
        <Container>
            <Content>
                <User username={id} modifiable={false}/>
                <InputContainer>
                    <InputBox>
                        <Label>Current<br/>Password</Label>
                        <Input name={"current"} type={"password"} placeholder={"현재 비밀번호를 입력해주세요"} onChange={onChangeHandler}/>
                    </InputBox>
                    <InputBox>
                        <Label>New<br/>Password</Label>
                        <Input name={"new"} type={"password"} placeholder={"새로운 비밀번호를 입력해주세요"} onChange={onChangeHandler}/>
                    </InputBox>
                    <InputBox>
                        <Label>Re-Enter<br/>Password</Label>
                        <Input name={"reEnter"} type={"password"} placeholder={"새로운 비밀번호를 다시 입력해주세요"} onChange={onChangeHandler}/>
                    </InputBox>
                </InputContainer>
            </Content>
            <ModifyBtn color={true} size={"16px"} onClick={onClickHandler}>비밀번호 변경하기</ModifyBtn>
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
    min-width: 300px;
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