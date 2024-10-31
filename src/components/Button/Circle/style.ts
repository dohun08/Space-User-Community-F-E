import styled from 'styled-components';
export const Cbtn = styled.button` 
    border: 2px solid #301C86;
    cursor: pointer;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    padding: 0 20px;
    background-color: white;
    transition: 0.5s;
    color: #301C86;
    &:hover{
        background:  linear-gradient(to bottom, #99479C 0%, #99479C 2%, #301C86 50%, #090029 88%, #120049 100%);
        color: white;
    }
`
export const name = styled.p`
    font-weight: 700;
    font-size: 16px;

`