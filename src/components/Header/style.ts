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
    align-items: center;
    justify-content: space-around;
    & > *{
        margin-left: 15px;
    }
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
    color:  #301C86;
    font-weight: 700;
    text-decoration-line:none;
`
export const user = styled.div`
    display: flex;
    border-radius: 10px;
    padding: 0 5px;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    transition: 0.2s;
    position: relative;
    & > *{
        margin-left: 10px;
    }
    &:hover{background: #e6e6e6;}
    &:active{background: #dadada}
`
export const setting = styled.div.withConfig({
    shouldForwardProp:(prop) =>  prop !== 'isOn',
})`
    
    position: absolute;
    background-color: #fff;
    box-shadow: 0.05em 0.05em 0.3em rgba(0, 0, 0, 0.6);
    width: max-content;
    margin-top: 170px;
    margin-left: 130px;
    border-radius: 5px;
    display: ${(props)=>props["isOn"] ? "flex" : "none"};
    flex-direction: column;
    & > *{
        cursor: pointer;
    }
    & > span{
        padding: 15px 35px;
    }
    & > span:hover{
        background-color: #e6e6e6;
    }
`
