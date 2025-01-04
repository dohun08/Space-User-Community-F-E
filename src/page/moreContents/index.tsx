import React, {useState} from "react";
import Header from "../../components/Header";
import LongLongDocument from "../../components/Documents/LongLong";
import * as S from './style';
import {useDocs} from '../../api/getDoc';
import Loading from "../../components/loading/loading";
import PageScroll from "../../components/pageScroll";

function MoreContents(){
    const [page, setPage] = useState(1);
    const {data: content, isLoading} = useDocs("createdAt");

    return(
        <S.container>
            <Header />
            {!isLoading && content ?
                <S.ContentsBox>
                    {
                    Array.from({ length: 9 }).map((_, index) => {
                            const item = content[(page - 1) * 9 + index];
                            return item ? (
                                    <LongLongDocument data={item} />
                            ) : (
                            <S.unBox />
                        );
                    })
                    }

                    {!isLoading && content && (
                        <PageScroll page={page} setPage={setPage} contentLength={content.length / 9} />
                    )}
                </S.ContentsBox> : <Loading></Loading>
            }

        </S.container>
    )
}
export default MoreContents;