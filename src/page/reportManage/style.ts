import styled from 'styled-components';
import {Link} from "react-router-dom";

export const container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 95vh;
    align-items: center;
`
export const main = styled.main`
    width: 520px;
    position: relative;
    padding: 20px 30px;
    border: 2px solid #DFDFDF;
    border-radius: 30px;
    display: flex;
    flex-flow: column nowrap;
`
export const section = styled.section`
    width: 500px;
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid #DFDFDF;
    padding: 15px 10px;
    margin-bottom: 5px;
`
export const reportText = styled(Link)`
    color: #301C86;
    text-decoration-line: none;
    &:hover{
        text-decoration-line: underline;
    }
`
export const speaker = styled.img`
    position: absolute;
    right: 0;
    top: -70px;
`
