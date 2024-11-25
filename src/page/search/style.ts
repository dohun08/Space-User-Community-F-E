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
    width: 70%;
    max-height: 80%;
    & > *{
        margin-bottom: 10px;
    }
    & :last-child{
        margin: 0;
    }
`
export const unBox = styled.div`
    width: 100%;
    display: flex;
    height: 48px;
    justify-content: space-between;
    padding: 0 10px;
`
export const noData = styled.div`
    height: 50vh;
`