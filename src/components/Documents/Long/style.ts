import styled from 'styled-components';

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
    color: #301C86;
`

export const title = styled.span`
    display: flex;
    flex-flow: column nowrap;
    align-items: start;
    padding: 0 20px;
    width: 100px;
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
    width: 100px;
    text-align: center;
`

