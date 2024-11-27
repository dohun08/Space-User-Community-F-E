import styled from 'styled-components';
import {Link} from "react-router-dom";
import Check from "../../until/check";

export const container = styled.div`
    width: 40%;
    margin: 150px auto;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
    align-items: center;
`
export const Logo = styled.img`
    width: 300px;
`
export const form = styled.form`
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    align-content: center;
    height: 300px;
`
export const dataIn = styled.div`
    display: flex;
    width: 500px;
    flex-direction: column;
    justify-content: center;
    @media (max-width: 700px) {
        width: 200px;
    }
    position: relative;
`
export const Label = styled.label`
    font-size: 16px;
    margin-bottom: 10px;
    font-weight: 600;
    
`
export const Input = styled.input`
    outline: none;
    font-size: 16px;
    width: 100%;
    border: none;
    border-bottom: 1px solid black;
    padding: 5px;
`

export const LoginBtn = styled.input`
    cursor: pointer;
    width: max-content;
    padding: 10px 20px;
    border-radius: 20px;
    color: white;
    border: 2px solid black;
    background-color: black;
    transition: 0.5s;
`
export const backArrow = styled.img`
    position: absolute;
    left: 30px;
    top: 30px;
    cursor: pointer;
    width: 40px;
    height: 40px;
`
export const btnText = styled(Link)`
    color: black;
    font-size: 15px;
    text-decoration-line: none;
    &:hover{
        text-decoration-line: underline;
    }
`
export const navi = styled.div`
    color:gray;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    & > p{
        margin-right: 10px;
    }
`
