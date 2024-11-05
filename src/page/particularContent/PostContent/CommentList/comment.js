import styled from "styled-components";

export default function Comment({writer, date, content}) {
    return(
        <Wrapper>
            <Title>{writer} - {date}</Title>
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

const Title = styled.div`
    color: #000;
    font-size: 12px;
    font-weight: 800;
`

const Content = styled.div`
    color: #000;
    font-size: 14px;
`