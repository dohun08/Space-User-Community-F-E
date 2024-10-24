import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const container = styled.div`
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
`
export const Info = styled.div`
    display: flex;
    width: 240px;
    justify-content: space-around;
`
export const user = styled.div`
    display: flex;
    width:90px;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
`
export const InputBox = styled.div`
    width: 500px;
    border: 1px solid gray;
    display: flex;
    border-radius: 20px;
    justify-content: space-between;
`
export const Input = styled.input`
    width: 400px;
    border:none;
    padding: 0 20px;
    font-size: 16px;
    border-radius: 20px;
    outline: none;
`
export const searchBox = styled.div`
    width: 30px;
    border-radius: 100px;
    padding: 5px;
    display: flex;
    justify-content: center;
    cursor: pointer;
    background:  linear-gradient(to bottom, #99479C 0%, #99479C 2%, #301C86 50%, #090029 88%, #120049 100%);
`
export const login = styled(Link)`
    color:  var(--Style, #301C86);
    font-weight: 700;
    text-decoration-line:none;
`