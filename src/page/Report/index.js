import styled from "styled-components";
import Header from "../../components/Header";
import InputText from "../../components/InputText";
import Circle from "../../components/Button/Circle";

export default function Report(){
    return (
        <Container>
            <Header/>
            <Content>
                <Wrapper>
                    <Title>신고하기</Title>
                    <InputContainer>
                        <InputLabel htmlFor={"reportTitle"}>제목</InputLabel>
                        <InputText id={"reportTitle"} type={"input"} placeholder={"제목을 입력해주세요"} width={"unset"} padding={"10px"} borderBottom={true} borderRadius={"0"}/>
                    </InputContainer>
                    <InputContainer flexgrow={1}>
                        <InputLabel htmlFor={"reportContent"}>내용</InputLabel>
                        <InputText id={"reportContent"} type={"textarea"} placeholder={"신고 내용을 입력해주세요"} width={"unset"} padding={"10px"} borderRadius={"10px"}/>
                    </InputContainer>
                    <Circle name={"신고하기"}/>
                </Wrapper>
            </Content>
        </Container>
    );
}


const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 95vh;
`

const Content = styled.div`
    display: flex;
    height: 80%;
    overflow: scroll;
    justify-content: center;
`

const Wrapper = styled.div`
    display: flex;
    border-radius: 30px;
    border: 3px solid #DFDFDF;
    background: #FFF;
    min-height: 90%;
    width: 50%;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    padding: 30px 50px;
    gap: 50px;
`

const Title = styled.div`
    font-size: 30px;
    font-weight: 600;
    color: #301C86;
    width: 100%;
    text-align: center;
`

const InputContainer = styled.div`
    display: flex;
    gap: 20px;
    width: 100%;
    flex-grow: ${(props) => props.flexgrow || 0};
`

const InputLabel = styled.label`
    padding: 10px;
    font-size: 20px;
    font-weight: 600;
`