import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
`

export const ModifyContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: end;
`

export const ModifyBtn = styled.div<{display?:boolean}>`
    color: #301C86;
    font-size: 12px;
    cursor: pointer;
    line-height: 25px;
    display: ${(props)=> props.display ? 'block' : 'none'};
`

export const UserInfoContent = styled.div`
    width: 80%;
    display: flex;
    gap: 20px;
`

export const UserImageContainer = styled.div`
    width: 80px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
`

export const UserImage = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 100px;
    background: #000;
`

export const DelBtn = styled.div`
    font-size: 12px;
    color: #301C86;
    font-weight: 600;
    cursor: pointer;
`

export const TextInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    justify-content: center;
    flex-grow: 1;
`

export const TextContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    gap: 5px;
`

export const TextBox = styled.div`
    font-size: 14px;
    font-weight: 600;
    text-wrap: nowrap;
`

export const InputBox = styled.input<{ isModify?: boolean } >`
    padding: 8px 10px;
    font-size: 14px;
    font-weight: 600;
    color: #000;
    box-sizing: border-box;
    border-radius: 5px;
    border: ${(props) => props.isModify? "1px solid #C2C2C2" : "none"};
    background: none;
    outline: none;
    flex-grow: 1;
`