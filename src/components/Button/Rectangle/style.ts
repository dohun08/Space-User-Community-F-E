import styled from 'styled-components';
import {strict} from "assert";

export const Rbtn = styled.button<{ width?: string, height?: string, borderRadius?: string, display?: boolean}>`
    border: 2px solid #99479C;
    cursor: pointer;
    border-radius: ${(props) => props.borderRadius || "5px"};
    width: ${(props) => props.width || "100px"};
    height: ${(props) => props.height || "30px"};
    display: ${(props)=> props.display ? 'flex' : 'none' || 'flex'};
    justify-content: center;
    align-items: center;
    background-color: white;
    transition: 0.5s;
    color: #301C86;
    
    &:hover{
        background:  linear-gradient(to bottom, #99479C 0%, #99479C 2%, #301C86 50%, #090029 88%, #120049 100%);
        color: white;
    }
`
export const name = styled.div<{ size?: string }>`
    font-weight: 700;
    font-size: ${(props) => props.size || "16px"};
`