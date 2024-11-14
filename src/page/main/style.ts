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
    justify-content: space-around;
`
export const section1 = styled.section`
    border-radius: 30px;
    border: 3px solid #DFDFDF;
    padding: 30px;
    text-align: center;
    width: 800px;
    & > *{
        margin-bottom:10px;
    }
`
export const section2 = styled.section`
    width: 260px;
    border: 3px solid #DFDFDF;
    border-radius: 30px;
    display: flex;
    padding: 10px 30px;
    flex-direction: column;
    align-items: center;
    align-self: stretch;
    margin-right: 20px;
    & > *{
        margin-bottom:10px;
    }
`
export const unBox = styled.div`
    width: 100%;
    height: 52px;
`