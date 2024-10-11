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
    justify-content: space-between;
`
export const section1 = styled.section`
    border-radius: 30px;
    border: 3px solid #DFDFDF;
    padding: 30px;
    text-align: center;
    & > *{
        margin-bottom:10px;
    }
`
export const section2 = styled.section`
    border: 3px solid #DFDFDF;
    border-radius: 30px;
    display: flex;
    padding: 14px 14px 11px 14px;
    flex-direction: column;
    align-items: center;
    align-self: stretch;
    & > *{
        margin-bottom:10px;
    }
`