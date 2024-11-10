import styled from "styled-components";

export default function Comment({writer, date, content}) {
    return(
        <Wrapper>
            <TitleWrapper>
                <Title>{writer} - {date}</Title>
                <DelBtn>제거</DelBtn>
            </TitleWrapper>
            <Content>{content}</Content>
        </Wrapper>
    )
}

const Wrapper = styled.li`
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 14px;
    padding: 10px 6px;
`

const TitleWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`

const Title = styled.div`
    color: #000;
    font-size: 12px;
    font-weight: 800;
`

const DelBtn = styled.div`
    cursor: pointer;
    color: #9A9A9A;
    font-size: 12px;
`

const Content = styled.div`
    color: #000;
    font-size: 14px;
`