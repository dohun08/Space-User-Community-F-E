import styled from 'styled-components';

interface ManageProps{
    manage?:boolean;
}
export const Document = styled.div<ManageProps>`
    width: 100%;
    border-bottom: 1px solid gray;
    display: flex;
    justify-content: space-between;
    border-radius: 5px;
    padding: 0 10px;
    background-color: ${(props)=>props.manage ? "#ddd1ff" : null};
`
export const titleBox = styled.section`
    display: flex;
    flex-flow:row nowrap;
    align-items: center;
    width: 130px;
    justify-content: space-between;
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

