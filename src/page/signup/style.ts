import styled from 'styled-components';
import {Link} from "react-router-dom";

export const container = styled.div`
     width: 90vw;
    margin: 80px auto;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
    align-items: center;
    
`
export const Logo = styled.img`
    width: 300px;
`
export const pwBox = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
`
export const pw = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 48%;
    border-bottom: 1px solid #a3a3a3;
    position: relative;
`
export const form = styled.form`
    width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin-top: 20px;
    & > div:nth-child(5){
        border: none;
        margin-bottom: 0;
    }
    & > *{
        margin-bottom: 30px;
    }
`
export const dataIn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    border-bottom: 1px solid #a3a3a3;
`
export const email = styled.div`
    display: flex;
    flex-direction: column;
    width: 500px;
    border-bottom: 1px solid #a3a3a3;
    position: relative;
`
export const Label = styled.label`
    font-size: 16px;
    font-weight: 600;
`
export const Input = styled.input`
    width: 100%;
    outline: none;
    font-size: 16px;
    border: none;
    padding: 5px;
`
export const age = styled.input`
    width: 100%;
    outline: none;
    font-size: 16px;
    border: none;
    padding: 5px;
    color: red;
    border-radius: 5px;
    -webkit-appearance: none; /* 크롬, 사파리 */
    -moz-appearance: none; /* 파이어폭스 */
    appearance: none;

    &::-webkit-slider-thumb {
        -webkit-appearance: none; /* 크롬, 사파리 */
        appearance: none;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: #b8b8b8; /* thumb 색상 */
        cursor: pointer;
        margin-top: -5px;
    }

    &::-moz-range-thumb {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: #b8b8b8;
        cursor: pointer;
        margin-top: -5px;
    }

    &::-webkit-slider-runnable-track {
        height: 10px;
        background: #e6e6e6; /* 트랙 색상 */
        border-radius: 5px;
    }
`
export const Signup = styled.div`
    cursor: pointer;
    width: max-content;
    padding: 10px 20px;
    border-radius: 20px;
    border: 2px solid black;
    transition: 0.5s;
    &:hover{
        background-color: ${props => ("black")};
        color: ${props => ('white')};
        border: 2px solid black;
    }
    &:active{
        border: 2px solid #301C86;
    }
`
export const backArrow = styled.img`
    position: absolute;
    left: 30px;
    top: 30px;
    cursor: pointer;
    width: 40px;
    height: 40px;
`
interface Check{
    $isOn: boolean
}
export const chpw = styled.p<Check>`
    position: absolute;
    font-size: 14px;
    display: ${(props) => props.$isOn ? "block" : "none"};
    right: 0;
    color: red;
    bottom: -40px;
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
export const btnText = styled(Link)`
    color: black;
    font-size: 15px;
    text-decoration-line: none;
    &:hover{
        text-decoration-line: underline;
    }
`
export const btn = styled.div`
    cursor: pointer;
    font-size: 12px;
    padding: 5px 10px;
    border-radius: 10px;
    border: 1px solid black;
    position: absolute;
    right: 0;
    top:15px;
    transition: 0.5s;
    &:hover{
        background: black;
        color: white;
    }
`