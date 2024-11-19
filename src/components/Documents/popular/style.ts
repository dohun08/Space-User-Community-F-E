import styled from 'styled-components';
import {Link} from "react-router-dom";

export const writer = styled(Link)`
    font-size: 12px;
    text-decoration-line: none;
    &:hover{
        text-decoration-line: underline;
    }
`
export const title = styled(Link)`
    color: #301C86;
    margin-left: 10px;
    text-decoration-line: none;
    &:hover{
        text-decoration-line: underline;
    }
`
export const content = styled.div`
    width: 100%;
     padding: 10px 15px;
     border-bottom: 1px solid gray;
     display: flex;
     flex-direction: column;
    & > div{
        display: flex;
        align-items: center;
    }
`