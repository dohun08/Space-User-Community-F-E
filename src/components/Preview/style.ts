import styled from 'styled-components';

export const H1 = styled.span`
        font-size: 30px;
        font-weight: 700;
`
export const div = styled.div`
        width: 500px;
        display: flex;
        flex-flow: column wrap;
`
export const categoryOut = styled.p`
        background:  linear-gradient(to bottom, #99479C 0%, #99479C 2%, #301C86 50%, #090029 88%, #120049 100%);
        color: white;
        border-radius: 10px;
        width: max-content;
        padding: 5px 20px;
`

export const outContent = styled.div`
        height:  70%;
        overflow: auto;
        font-size: 16px;
`
export const outPut = styled.section`
    width: 44%;
    padding: 30px;
    box-shadow: 0.1em 0.1em 0.5em rgba(0, 0, 0, 0.6);

`
export const title = styled.div`
    display: flex;
    flex-flow: row;
    align-items: center;
    margin: 10px 0;
`

interface ToggleProps{
    toggle?:boolean;
}
export const selectImg = styled.div<ToggleProps>`
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-content: center;
        cursor: ${(props) => (props.toggle ? 'pointer' : 'normal')};
        border-radius: 100px;
    & > img{
        width: 80%;
    }
    &:hover{
        ${(props) => props["toggle"] ? "transform: scale(1.2);transition: transform 0.3s ease; " : ""}
    }
`