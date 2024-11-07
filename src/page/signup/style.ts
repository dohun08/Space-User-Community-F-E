import styled from 'styled-components';

export const container = styled.div`
     width: 40%;
    margin: 100px auto;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
    align-items: center;
`

export const form = styled.form`
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 550px;
`
export const dataIn = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
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