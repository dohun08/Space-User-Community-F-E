import styled from 'styled-components';

export const container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 95vh;
    align-items: center;
`
export const main = styled.main`
    width: 480px;
    padding: 20px 30px;
    border: 2px solid #DFDFDF;
    border-radius: 30px;
    display: flex;
    height: 80%;
    overflow: scroll;
    flex-flow: column nowrap;
    position: relative;
`
export const ReportText = styled.h2`
    color: #301C86;
`
export const ReportInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-content: center;
    align-items: center;
    & > div{
        width: 40px;
    }
`
export const backArrow =  styled.section`
    cursor: pointer;
    border-radius: 100px;
    display: flex;
    &:hover {
        background-color: #d3d3d3;
    }
`
export const title = styled.h1``
export const content = styled.p``
export const complete = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 10px 20px;
    border-radius: 20px 0 0 0;
`