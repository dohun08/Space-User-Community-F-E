import styled from 'styled-components';
import {Link, LinkProps} from "react-router-dom";

export const Document = styled.div`
    width: 100%;
    border-bottom: 1px solid gray;
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
    max-height: 52px;
`
export const broadcast = styled.div`
    width: 100%;
    border-bottom: 1px solid gray;
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
    max-height: 52px;
    background-color: #ece5ff;
    border-radius: 10px;
`
export const titleBox = styled.section`
    display: flex;
    flex-flow:row nowrap;
    align-items: center;
    width: 280px;
    justify-content: space-between;
    color: #301C86;
`
export const Contenttype = styled.section`
    display: flex;
    flex-flow:row nowrap;
    align-items: center;
    width: 300px;
    justify-content: space-between;
    color: #301C86;
`
export const title = styled.span`
    display: flex;
    align-items: start;
    flex-direction: column;
    padding: 0 20px;
    width: 180px;
`
export const date = styled.span`
    font-size: 10px;
    color: gray;
`
export const LinkBtn = styled(Link)`
    color: #301C86;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`
export const LinkBtnB = styled.span`
    color: #301C86;
    cursor: pointer;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`
export const img = styled.div`
    width: 30px;
`