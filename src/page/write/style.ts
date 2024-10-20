import styled from 'styled-components';

export const container = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
`
export const header = styled.header`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
`
export const main = styled.main`
    display: flex;
    justify-content: space-between;
    height: 80vh;
`
export const write = styled.section`
    width: 44%;
    padding: 30px;
    display: flex;
    flex-flow: column wrap;
    
`
export const outPut = styled.section`
    width: 44%;
    padding: 30px;
`
export const imgBox = styled.div`
    display: flex;
    width: 400px;
    flex-flow: row wrap;
    justify-content: space-between;
    border-radius: 30px;
    padding: 10px;
    background-color: #f6f6f6;
    
    & > * {
        margin: 0 5px;
        cursor: pointer;
    }
`
export const img = styled.div`
    display: flex;
    align-items: center;
    align-content: center;
    border-radius: 20px;
    padding: 5px;
    &:hover{
        background-color: #e6e6e6;
        transform: scale(1.2);
        transition: transform 0.3s ease;
    }
`
export const title = styled.div`
    display: flex;
    flex-flow: row;
    align-items: center;
`
export const skills = styled.div`
    border-top: 2px solid gray;
    padding: 5px;
    border-bottom: 2px solid gray;
`