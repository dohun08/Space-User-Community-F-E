import styled from 'styled-components';

export default function FamousPost(){
    return(
        <Container>
            <Title>인기 문서</Title>
            <Content>
                <ShortPost title={"edafasdf"}/>
                <ShortPost title={"edafasdf"}/>
                <ShortPost title={"edafasdf"}/>
                <ShortPost title={"edafasdf"}/>
                <ShortPost title={"edafasdf"}/>
                <ShortPost title={"edafasdf"}/>
            </Content>
        </Container>
    );
}

const Container = styled.div`
    align-self: flex-start;
    gap: 20px;
    padding: 20px;
    border: 3px solid #DFDFDF;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 30px;
    align-items: center;
`

const Content = styled.div`
    width: 10vw;
    overflow-x: scroll;
    display: flex;
    gap: 20px;
    flex-direction: column;
    align-self: flex-start;
`

const Title = styled.div`
    text-align: center;
    font-size: 18px;
`

function ShortPost({title}){
    return(
        <div>
            <ShortTitle>{title}</ShortTitle>
            <Hr/>
        </div>
    );
}

const ShortTitle = styled.div`
    margin: 8px;
    color: #51008B;
`

const Hr = styled.hr`
    border: 1px solid #B1B1B1;
    width: 100%;
    margin: 0;
`