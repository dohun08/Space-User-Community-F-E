import styled from 'styled-components';

export const container = styled.div`
     width: 90vw;
    margin: 80px auto;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
    align-items: center;
    
`

export const form = styled.form`
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 480px;
    margin-top: 20px;
`
export const dataIn = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 460px;
`
export const email = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 460px;
    & > div{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
    }
`
export const Label = styled.label`
    font-size: 16px;
    font-weight: 700;
`
export const Input = styled.input`
    width: 360px;
    outline: none;
    font-size: 16px;
    font-weight: 600;
    border: none;
    border-bottom: 1px solid black;
`
export const nativeLogin = styled.span`
    display: flex;
    align-items: center;
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
export const unBox = styled.div`
    height: 60px;
`
export const confirmBtn = styled.input`
    border-radius: 10px;
    cursor: pointer;
    width: max-content;
    padding: 5px 10px;
    margin-top: 10px;
    color: black;
    transition: 0.2s;
    background-color: #ffffff;

    &:hover {
        background-color: black;
        color: white;
    }

    &:active {
        background-color: #5e5e5e;
    }
`
export const valueNumber = styled.input`
    width: 360px;
    outline: none;
    font-size: 16px;
    font-weight: 600;
    border: none;
`
export const valueNumberBox = styled.div`
    width: 360px;
    position: relative;
    padding: 2px 0;
    border-bottom: 1px solid black;
`
export const statusImgBox = styled.div`
    position: absolute;
    right: 0;
    display: flex;
    align-items: center;
    top:0;
`
export const O = styled.span`
    color: #00D100;
`
export const X = styled.span`
    color: red;
`