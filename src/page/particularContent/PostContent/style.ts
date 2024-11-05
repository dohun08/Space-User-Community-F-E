import styled from "styled-components";

export const Wrapper = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 25px;
`

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 10px 0;
`
export const HeaderHead = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const category = styled.div`
    font-size: 20px;
    font-weight: 500;
    line-height: 150%;
`

export const ManagePost = styled.div`
    color: #9A9A9A;
    font-size: 14px;
`
export const ManageBtn = styled.button`
    color: unset;
    font-size: unset;
    border: none;
    background: none;
    padding: 0;
`

export const titleWrap = styled.div`
    gap: 10px;
    display: flex;
    align-content: center;
    padding: 10px;
`

export const titleImg = styled.img`
    width: 80px;
`

export const title = styled.div`
    font-weight: 600;
    font-size: 40px;
`
export const postInfo = styled.div`
    color: #939393;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`

export const contents = styled.div`
    text-wrap: wrap;
    font-size: 16px;
`

export const hr = styled.hr`
    border: 1px solid #B1B1B1;
    width: 100%;
`

export const InputCommentBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 13px 0;
`

export const CommentTitle = styled.div`
    font-size: 20px;
    font-weight: 500;
`

export const InputComment = styled.textarea`
    resize: none;
    flex-grow: 1;
    border-radius: 5px;
    border: 1px solid #DFDFDF;
    outline: none;
    padding: 15px;
    min-height: 90px;
    text-align: start;
`

export const BtnContainer = styled.div`
    display: flex;
    justify-content: end;
`