import styled from 'styled-components';
import {Link} from "react-router-dom";

interface manageProps {
    manage: boolean
}
export const Document = styled.div<manageProps>`
    align-self: stretch;
    border-bottom: 1px solid gray;
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
    background-color: ${(props)=>props.manage ? "#ddd1ff" : null};
    height: 50px;
`
export const titleBox = styled.section`
    display: flex;
    flex-flow:row nowrap;
    align-items: center;
    gap: 10px;
`

export const title = styled.span`
    display: flex;
    flex-flow: column nowrap;
    align-items: start;
    padding: 0 20px;
    flex: 1 1;
`

export const LinkBtn = styled(Link)`
    color: #301C86;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`

export const date = styled.span`
    font-size: 12px;
    color: gray;
`

export const infoBox = styled.section`
    display: flex;
    flex-flow:row nowrap;
    align-items: center;
    width: 230px;
    justify-content: space-between;
    color: #301C86;
`

export const postInfo = styled.span`
    cursor: pointer;
    width: 100px;
    text-align: center;
`

