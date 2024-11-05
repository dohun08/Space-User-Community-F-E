import styled from 'styled-components';

export const skills = styled.div`
    border-top: 2px solid gray;
    padding: 0 10px;
    border-bottom: 2px solid gray;
    display: flex;
    align-items: center;
    flex-flow: row nowrap;
    & > div{
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-around;
        margin: 0 10px;
        padding: 0 5px;
    }
    & > div:nth-child(2){
        border-left: 1px solid gray;
        border-right: 1px solid gray;
        height: 70%;
        display: flex;
        align-items: center;
    }
`

export const textBtn = styled.span`
        padding: 10px;
        color: gray;
        border-radius: 5px;
        margin: 5px 0;
        &:hover {
                background: #e6e6e6;
                color: black;
                cursor: pointer;
        }
`
export const BoldBtn = styled.span`
    padding: 10px;
    color: gray;
    border-radius: 5px;
    margin: 5px 0;
    font-size: 19px;
    &:hover {
        background: #e6e6e6;
        color: black;
        cursor: pointer;
    }
`
export const ItalicBtn = styled.img`
    padding: 10px;
    color: gray;
    border-radius: 5px;
    margin: 5px 0;
    &:hover {
        background: #e6e6e6;
        color: black;
        cursor: pointer;
        font-weight: 600;
    }`
export const UnderLineBtn = styled.img`
    padding: 10px;
    color: gray;
    border-radius: 5px;
    width: 16px;
    margin: 5px 0;
    &:hover {
        background: #e6e6e6;
        color: black;
        cursor: pointer;
        font-weight: 600;
    }`