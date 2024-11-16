import styled from 'styled-components';

export const container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 95vh;
    align-items: center;
`
export const main = styled.main`
    width: 520px;
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
    align-items: center;
    padding: 0 10px;
`
export const save = styled.button`
    background-color: #23B470;
`
export const die = styled.button`
    background-color: #FF5757;
`
export const buttonBox = styled.div`
    display: flex;
    flex-flow: row nowrap;
    width: 150px;
    justify-content: space-around;
    & > button{
        border: none;
        padding: 6px 12px;
        border-radius: 5px;
        color: white;
        cursor: pointer;
        font-weight: 600;
    }
`