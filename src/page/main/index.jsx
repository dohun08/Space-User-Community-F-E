import * as S from './style';
import Header from "../../components/Header";
import Popular from "../../components/Documents/popular";
import { Link } from "react-router-dom";
import {useDocs} from '../../api/getDoc';
import LongLongDocument from "../../components/Documents/LongLong";
import Loading from "../../components/loading/loading";
import { useGet } from '../../hooks/useCommunityQuery';

function Main(){
    const broad = useDocs("broad");
    const {data : content, isLoading2} = useGet('createdAt');
    const {data : popular, isLoading1} = useGet('likes');

    if(broad.isLoading || isLoading2 || isLoading1) return (
        <Loading></Loading>
    )
    const remainder = broad.data ? broad.data.length % 3 : 2;
    return(
        <S.container>
            <Header />
            <S.main>
                <S.section2>
                    <h3>인기 문서</h3>
                    {popular && popular.length > 0 ? popular.slice(0, 10).map((doc, index )=>{
                        return (
                                <Popular data = {doc} key={doc.documentId} rank= {index}/>
                        )
                    }) : <p>인기 문서가 없습니다</p>}

                </S.section2>
                <S.section1>
                    {broad.data && broad.data.length > 0 ?
                     Array.from ({ length: remainder }).map((_, index) => {
                         const doc = broad.data[index];
                         return doc ? (
                             <LongLongDocument data={doc} key={doc.documentId} />
                         ) : (
                             <S.unBox></S.unBox>
                         );
                     }) : <p>공지가 없습니다</p>
                    }
                    {content && content.length > 0 ?
                        Array.from({ length: 9-remainder }).map((_, index) => {
                            const doc = content[index];
                            return doc ? (
                                <LongLongDocument data={doc} key={doc.documentId} />
                            ) : (
                                <S.unBox></S.unBox>
                            );
                        }) : <p>문서가 없습니다</p>
                    }
                    {content && content.length > 0 ?
                    <Link to={'/more'}>더보기</Link>
                        : <div></div>}
                </S.section1>
            </S.main>
        </S.container>
    )
}
export default Main;