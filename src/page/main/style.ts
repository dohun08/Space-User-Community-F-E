import styled from 'styled-components';

export const container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 95vh;
`
export const main = styled.main`
    width: 90%;
    margin: 0 auto;
    display: flex;
    gap: 20px;
    height: 80%;
    box-sizing: border-box;
`
export const section1 = styled.section`
    flex-grow: 1;
    flex-shrink: 1;
    border: 3px solid #DFDFDF;
    border-radius: 30px;
    display: flex;
    width: 350px;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 30px 30px 12px 30px;
`
export const section2 = styled.section`
    border: 3px solid #DFDFDF;
    border-radius: 30px;
    display: flex;
    width: 18%;
    padding: 14px 2%;
    flex-direction: column;
    align-items: center;
    align-self: stretch;
    & > *{
        margin-bottom:10px;
    }
`
export const unBox = styled.div`
    width: 100%;
    height: 52px;
`