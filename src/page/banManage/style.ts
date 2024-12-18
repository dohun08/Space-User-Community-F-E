import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 95vh;
    align-items: center;
`
export const main = styled.main`
    width: 520px;
    padding: 30px 50px;
    max-height: 75%;
    border: 2px solid #DFDFDF;
    border-radius: 30px;
    display: flex;
    flex-flow: column nowrap;
`

export const section = styled.section`
    width: 500px;
    display: flex;
    margin: 10px 0;
    justify-content: space-between;
    border-bottom: 2px solid #DFDFDF;
    padding: 5px 10px;
    align-items: center;
`
export const reportText = styled(Link)`
    text-decoration-line: none;
    color: #301C86;
    cursor: pointer;
    &:hover{
        text-decoration-line: underline;
    }
`
export const banBtn = styled.input`
    background-color: #FF5757;
    cursor: pointer;
    padding: 8px 16px;
    border: none;
    font-weight: 600;
    border-radius: 5px;
    color: white;
    transition: 0.2s;
    &:hover {
        background-color: #df4c4c;
    }
    &:active {
        background-color: #c34343;
    }
`
export const BanBox = styled.article`
    width: 500px;
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
    align-items: center;
`

export const search = styled.input`
    width: 330px;
    outline: none;
    border: none;
    
`
export const img = styled.img`
    cursor: pointer;
`
export const searchBox = styled.section`
    display: flex;
    flex-flow: row nowrap;
    border: 2px solid #301C86;
    border-radius: 10px;
    padding: 5px 20px;
`
export const unBox = styled.div`
    height: 48px;
`