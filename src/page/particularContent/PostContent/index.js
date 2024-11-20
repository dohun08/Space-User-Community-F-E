import * as S from './style.ts'
import Rectangle from "../../../components/Button/Rectangle";
import CommentList from "./CommentList";
import {useNavigate, useParams} from "react-router-dom";
import InputText from "../../../components/InputText";
import {useRecoilValue} from "recoil";
import {authAtom} from "../../../recoil/authAtom";
import {images} from "../../../assets/iconImage";

function PostContent({data, isLoading}) {
    const navigate = useNavigate();
    const getAuth = useRecoilValue(authAtom);
    const id = useParams();
    const userId = getAuth.username||null;
    const delPost = async () => {
        if(window.confirm("정말 삭제하시겠습니까?")){
            try{
                const response = await fetch(`/api/community/doc/${id}`, {
                    method:'DELETE',
                })
                const data = await response.json();
                if(data.status===200){
                    console.log("글 삭제 성공");
                    navigate("/");
                }
            }catch (error){
                console.log("error on : ",error);
                navigate("/error");
            }
        }
    }
    const make = (text ) => {
        const lines = text.split('\n');

        const renderedLines = lines.map((line, index) => {
            const components = [];

            // 각 태그의 패턴과 변환할 컴포넌트 정의
            const tagPatterns = [
                {
                    pattern: /<제목1>(.*?)<\/제목1>/,
                    component: (text) => <S.H1 key={`h1-${index}-${text}`}>{text.trim()}</S.H1>
                },
                {
                    pattern: /<제목2>(.*?)<\/제목2>/,
                    component: (text) => <S.H2 key={`h2-${index}-${text}`}>{text.trim()}</S.H2>
                },
                {
                    pattern: /<제목3>(.*?)<\/제목3>/,
                    component: (text) => <S.H3 key={`h3-${index}-${text}`}>{text.trim()}</S.H3>
                },
                {
                    pattern: /<강조>(.*?)<\/강조>/,
                    component: (text) => <strong key={`bold-${index}-${text}`}>{text.trim()}</strong>
                },
                {
                    pattern: /<밑줄>(.*?)<\/밑줄>/,
                    component: (text) => <S.underLine key={`underline-${index}-${text}`}>{text.trim()}</S.underLine>
                },
                {
                    pattern: /<기울임>(.*?)<\/기울임>/,
                    component: (text) => <i key={`italic-${index}-${text}`}>{text.trim()}</i>
                },
                {
                    pattern: /<취소선>(.*?)<\/취소선>/,
                    component: (text) => <S.cancelLine key={`cancel-${index}-${text}`}>{text.trim()}</S.cancelLine>
                },
            ];

            let remainingText = line;

            // 모든 태그 매칭
            while (remainingText.length > 0) {
                let earliestMatch = null;
                let matchComponent = null;

                // 각 패턴을 체크해서 가장 먼저 나타나는 태그를 찾음
                // eslint-disable-next-line no-loop-func
                tagPatterns.forEach(({pattern, component}) => {
                    const match = remainingText.match(pattern);

                    if (match && (earliestMatch === null || match.index < earliestMatch.index)) {
                        earliestMatch = match;
                        matchComponent = component;
                    }
                });

                // 매칭된 태그가 있을 때
                if (earliestMatch && remainingText) {
                    const [fullMatch, innerText] = earliestMatch;

                    // 매칭된 태그 앞부분의 일반 텍스트 추가
                    const prefixText = remainingText.slice(0, earliestMatch.index);
                    if (prefixText) components.push(<span key={`text-${index}-${prefixText}`}>{prefixText}</span>);

                    // 매칭된 태그를 변환하여 추가
                    components.push(matchComponent(innerText));

                    // 변환된 부분 이후로 남은 텍스트로 갱신
                    remainingText = remainingText.slice(earliestMatch.index + fullMatch.length);
                } else {
                    // 매칭되는 태그가 없으면 남은 텍스트 추가 후 종료
                    components.push(<span key={`text-${index}-remaining`}>{remainingText}</span>);
                    break;
                }
            }

            return <div key={index}>{components}</div>;
        });

        return <S.div>{renderedLines}</S.div>;
    };

    return (
        isLoading ?
                (<p>로딩중</p>) :
                (data['category'] === "공지" ?
                    <S.Wrapper>
                        <S.Header>
                            <S.HeaderHead>
                                <S.category>{data["category"]}</S.category>
                                {/*{userId===id? <S.ManagePost><S.ManageBtn onClick={delPost}>제거</S.ManageBtn> - <S.ManageBtn onClick={navigate('/')}>수정</S.ManageBtn></S.ManagePost>:null}*/}
                            </S.HeaderHead>
                            {/*<S.titleWrap><S.titleImg src={images[data.icon]}/><S.title>{data["title"]}</S.title></S.titleWrap>*/}
                            <S.postInfo>{data["date"].slice(0, 10)} - {data["authorName"]}</S.postInfo>
                        </S.Header>
                        <S.contents>{make(data["content"])}</S.contents>
                        <S.hr/>
                        <S.InputCommentBox>
                            {/*<S.CommentTitle>{(data["comments"]).length}개의 댓글</S.CommentTitle>*/}
                            <InputText type={"textarea"} placeholder={"댓글을 입력해주세요"} height={"90px"}/>
                            <S.BtnContainer><Rectangle name={"댓글 작성"} display={true}/></S.BtnContainer>
                        </S.InputCommentBox>
                        <CommentList data={data["comments"]}/>
                    </S.Wrapper>
                    :(
                    <S.Wrapper>
                    <S.Header>
                        <S.HeaderHead>
                            <S.category>{data["category"]}</S.category>
                            {getAuth.isAdmin ?
                                <S.ManagePost>
                                    <S.ManageBtn onClick={delPost}>제거</S.ManageBtn>
                                </S.ManagePost>
                                : userId===data["authorId"] ?
                                    <S.ManagePost>
                                        <S.ManageBtn onClick={delPost}>제거</S.ManageBtn>
                                        -
                                        <S.ManageBtn onClick={navigate('/')}>수정</S.ManageBtn>
                                    </S.ManagePost>
                                :
                                 null}
                        </S.HeaderHead>
                        <S.titleWrap><S.titleImg src={images[data.icon]}/><S.title>{data["title"]}</S.title></S.titleWrap>
                        {/*<S.postInfo>{data["date"].slice(0, 10)} - {data["authorName"]}</S.postInfo>*/}
                    </S.Header>
                    {/*<S.contents>{make(data["content"])}</S.contents>*/}
                    <S.hr/>
                    <S.InputCommentBox>
                        {/*<S.CommentTitle>{(data["comments"]).length}개의 댓글</S.CommentTitle>*/}
                        <InputText type={"textarea"} placeholder={"댓글을 입력해주세요"} height={"90px"}/>
                        <S.BtnContainer><Rectangle name={"댓글 작성"} display={true}/></S.BtnContainer>
                    </S.InputCommentBox>
                    <CommentList data={data["comments"]}/>
                </S.Wrapper>))


    );
}

export default PostContent;