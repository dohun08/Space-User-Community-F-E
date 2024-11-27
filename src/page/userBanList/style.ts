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
    padding: 30px 50px;
    max-height: 75%;
    border: 2px solid #DFDFDF;
    border-radius: 30px;
    display: flex;
    align-items: center;
    flex-flow: column nowrap;
    position: relative;
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
export const unBox = styled.div`
    height: 53px;
`
export const backArrow = styled.img`
    position: absolute;
    left: 30px;
    top: 20px;
    cursor: pointer;
    width: 40px;
    height: 40px;
`