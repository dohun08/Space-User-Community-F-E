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
    position: relative;
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
    cursor: pointer;
    padding: 0 10px;
    margin-bottom: 5px;
    &:hover {
        background-color: #ececec;
        border-radius: 10px;
    }
`
export const reportText = styled.p`
    color: #301C86;
`
export const pageNum = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
`
export const arrow = styled.img`
    cursor: pointer;
    padding: 0 10px;
`
export const speaker = styled.img`
    position: absolute;
    right: 0;
    top: -70px;
`
