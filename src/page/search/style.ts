import styled from 'styled-components';

export const container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 95vh;
`
export const ContentsBox = styled.main`
    border-radius: 30px;
    border: 3px solid #DFDFDF;
    padding: 30px;
    text-align: center;
    width: 80%;
    & > *{
        margin-bottom: 10px;
    }
    & :last-child{
        margin: 0;
    }
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
    display: flex;
    height: 52px;
    justify-content: space-between;
    padding: 0 10px;
`
export const noData = styled.div`
    height: 50vh;
`