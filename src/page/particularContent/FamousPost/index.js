import styled from 'styled-components';
import {Link} from "react-router-dom";

export default function FamousPost({famous}){
    console.log(famous);
    return(
        <Container>
            <Title>인기 문서</Title>
            <Content>
                {famous && famous.slice(0, 6).map((item, index)=>{
                    return(
                        <ShortPost title={item.title} documentId={item.documentId} index={index+1}/>
                    )
                })}
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
    max-width: 15vw;
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

function ShortPost({title, index, documentId}){
    return(
        <div>
            <span>{index}등</span>
            <ShortTitle to={`/post/${documentId}`}>{title}</ShortTitle>
            <Hr/>
        </div>
    );
}

const ShortTitle = styled(Link)`
    margin: 0 10px;
    color: #51008B;
    text-decoration-line: none;
    cursor: pointer;
    &:hover{
        text-decoration-line: underline;
    }
`

const Hr = styled.hr`
    border: 1px solid #B1B1B1;
    width: 100%;
    margin: 0;
`