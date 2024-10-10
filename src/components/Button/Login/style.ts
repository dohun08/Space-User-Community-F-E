import styled from 'styled-components';

export const Btn = styled.div`
    cursor: pointer;
    width: max-content;
    padding: 10px 20px;
    border-radius: 20px;
    color: ${props => (props.isBlack ? 'white' : 'black')};
    border: 2px solid black;
    background-color: ${props => (props.isBlack ? 'black' : 'white')};
    transition: 0.5s;
    &:hover{
        background-color: ${props => (props.isBlack ? 'white' : 'black')};
        color: ${props => (props.isBlack ? 'black' : 'white')};
        border: 2px solid black;
    }
    &:active{
        border: 2px solid  var(--Style, #301C86);;
    }
`