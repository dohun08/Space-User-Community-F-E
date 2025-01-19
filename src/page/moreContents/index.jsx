import React, {useState} from "react";
import Header from "../../components/Header";
import LongLongDocument from "../../components/Documents/LongLong";
import * as S from './style';
import Loading from "../../components/loading/loading";
import PageScroll from "../../components/pageScroll";
import { useGetData } from "../../api/useGetData";

function MoreContents(){
    const [page, setPage] = useState(1);
    const { data, isLoading } = useGetData(
        '/community/doclist?orderBy=createdAt',
        'createdAt',
        {
            onSuccess: (data) => {
                console.log(data);
            }
        }
    );
    return(
        <S.container>
            <Header />
            {!isLoading && data ?
                <S.ContentsBox>
                    {
                    Array.from({ length: 9 }).map((_, index) => {
                            const item = data[(page - 1) * 9 + index];
                            return item ? (
                                    <LongLongDocument data={item} />
                            ) : (
                            <S.unBox />
                        );
                    })
                    }

                    {!isLoading && data && (
                        <PageScroll page={page} setPage={setPage} contentLength={data.length / 9} />
                    )}
                </S.ContentsBox> : <Loading></Loading>
            }

        </S.container>
    )
}
export default MoreContents;