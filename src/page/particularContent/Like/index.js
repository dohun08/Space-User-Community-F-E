import styled from "styled-components";
import Heart1 from "../../../assets/Heart1.svg";
import Heart2 from "../../../assets/Heart2.svg";
import {useState} from "react";

export default function Like({Likes}){
    const [isLiked, setIsLiked] = useState(false);
    function onClickHandler(){
        setIsLiked((current) => (!current));
    }
    return(
        <Container onClick={onClickHandler}>
            <img src={isLiked? Heart2:Heart1} alt="heart" width="25px"/>
            <CountText>{Likes||0}</CountText>
        </Container>
    );
}

const Container = styled.div`
    cursor: pointer;
    width: 60px;
    height: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    border: 3px solid #DFDFDF;
`

const CountText = styled.div`
    color: #000;
    font-size: 12px;
`