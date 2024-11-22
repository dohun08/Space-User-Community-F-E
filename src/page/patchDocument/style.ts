import styled from 'styled-components';
import {Link} from "react-router-dom";

export const container = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
`
export const header = styled.header`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
`
export const info = styled.div`
        display: flex;
        width: 220px;
        justify-content: space-between;
`
export const backBtn = styled(Link)`
        text-decoration-line: none;
`
export const main = styled.main`
    display: flex;
    justify-content: space-between;
    height: 80vh;
`
export const write = styled.section`
    width: 44%;
    padding: 30px;
    display: flex;
    flex-flow: column nowrap;
    box-shadow: 0.1em 0.1em 0.5em rgba(0, 0, 0, 0.6);

`
interface IsimageProps {
    $isImg?: boolean;
}
export const imgBox = styled.div<IsimageProps>`
    display: ${(props) => props.$isImg ? "flex" : "none"};
    width: 400px;
    flex-flow: row wrap;
    justify-content: space-between;
    border-radius: 30px;
    padding: 10px;
    background-color: #f6f6f6;
    position: absolute;
    top: 20px;
    left: 30px;
    & > * {
        margin: 0 5px;
        cursor: pointer;
    }
`
export const img = styled.div`
    display: flex;
    align-items: center;
    align-content: center;
    border-radius: 20px;
    padding: 5px;
    &:hover{
            cursor: pointer;
        background-color: #e6e6e6;
        transform: scale(1.2);
        transition: transform 0.3s ease;
    }
`
interface ToggleProps {
    $toggle?: boolean;
}
export const selectImg = styled.div<ToggleProps>`
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-content: center;
        cursor: ${(props) => (props.$toggle ? 'pointer' : 'normal')};
        border-radius: 100px;
    & > img{
        width: 80%;
    }
    &:hover{
            
        ${(props) => props.$toggle ? "transform: scale(1.2);transition: transform 0.3s ease; " : ""}
    }
`
export const title = styled.div`
    display: flex;
    flex-flow: row;
    align-items: center;
    margin: 10px 0;
`

export const titleText = styled.input`
    border: none;
    font-size: 30px;
    font-weight: 700;
    outline: none;
        width: 400px;
`
export const category = styled.select`
    border: none;
    padding: 5px 10px;
    width: 100px;
    outline: none;
    font-size: 14px;
    font-weight: 500;
    text-align: center;
    background: #F0F0F0;
    cursor: pointer;
`
export const textArea = styled.textarea`
    border: none;
    resize: none;
    outline: none;
    margin-top: 20px;
    height: 70%;
    font-size: 16px;
        
`

export const H1 = styled.span`
        font-size: 30px;
        font-weight: 700;
`
export const H2 = styled.span`
        font-weight: 650;
        font-size: 25px;
`
export const H3 = styled.span`
        font-size: 20px;
        font-weight: 650;
`
export const div = styled.div`
        width: 500px;
        display: flex;
        flex-flow: column wrap;
        & > *{
                margin: 5px;
        }
`
export const underLine = styled.span`
        text-decoration-line: underline;
`
export const cancelLine = styled.span`
        text-decoration-line: line-through;
`