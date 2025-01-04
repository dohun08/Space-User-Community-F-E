import * as S from './style.ts';
import Logo from '../../assets/Logo.svg';
import Cbtn from "../../components/Button/Circle";
import React, {useEffect, useRef, useState} from "react";
import {ToolBar} from "../../components/ToolBar";
import {Preview} from "../../components/Preview";
import {authAtom} from "../../recoil/authAtom";
import {useRecoilState} from "recoil";
import {useNavigate, useLocation} from "react-router-dom";
import {images} from "../../assets/iconImage";
import {decodeJWT} from "../../until/authService";
import make from "../../until/postDoc.js";
import {usePatchDocMutation} from "../../api/patchDoc";
import {useQueryClient} from "react-query";

function Write() {
    const [category, setCategory] = useState("문제");
    const [imgSrc, setImgSrc] = useState("/images/blue_spaceship.svg");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const contentRef = useRef();
    const [isImg, setIsImg] = useState(false);
    const navigate = useNavigate();
    const [auth, setAuth] = useRecoilState(authAtom);
    const [documentId, setDocumentId] = useState(null);
    const location = useLocation();
    const {patchContent, patchTitle, patchCategory, patchIcon, patchDocumentId } = location?.state || {};
    const queryClient = useQueryClient();

    const smart = (event) => {
        const {value, selectionStart} = event.target;
        let updatedValue = value;

        // 정규표현식을 통해 오픈 태그 감지
        const match = /<([\w가-힣]+)>$/.exec(value.slice(0, selectionStart));
        if (match) {
            const tagName = match[1];
            const closeTag = `</${tagName}>`;

            const hasCloseTag = value.slice(selectionStart).includes(closeTag);
            // 커서 위치에 클로즈 태그 추가
            if (!hasCloseTag) {
                updatedValue = `${value.slice(0, selectionStart)}${closeTag}${value.slice(selectionStart)}`;
                setTimeout(() => {
                    event.target.selectionStart = event.target.selectionEnd = selectionStart;
                }, 0);
            }

        }
        setContent(updatedValue);
    }


    const {mutate : patchData} = usePatchDocMutation(
        (res) => {
            navigate('/');
            queryClient.invalidateQueries('documents');

        },
        (err) =>{
            console.log(err.response);
        }
    )
    const patchHandler = () => {
        if(title === "" || content === "") return alert("값이 비어져있습니다.");
        let icon = images.findIndex((item) => item === imgSrc);
        patchData({documentId, title, content, icon, category});

    }

    const makeContent = (text) => {
        if(text === undefined) return;
        return make(text);
    };

    useEffect(() => {
        if(auth.access_Token){
            if(decodeJWT(auth.access_Token).role === 'ROLE_ADMIN'){
                setAuth({
                    ...auth,
                    isAdmin:true
                })
            }
        }

        setContent(patchContent);
        setTitle(patchTitle);
        setCategory(patchCategory);
        setDocumentId(patchDocumentId);
        images.forEach((item, index)=>{
            if(patchIcon === index){
                return setImgSrc(item);
            }
        })

    }, []);
    return (
        <S.container>
            {isImg ? <S.black onClick={() => setIsImg(false)}></S.black>: null}
            <S.header>
                <img src={Logo} alt={"로고이미지"}/>
                <S.info>
                    <S.backBtn to={'/'}>
                        <Cbtn name={"돌아가기"}/>
                    </S.backBtn>
                    <Cbtn onClick={() => patchHandler()} name={"등록하기"}/>
                </S.info>

            </S.header>
            <S.main>
                <S.write>
                    <S.category value={category} onChange={(e) => setCategory(e.target.value)}>
                        <option key="issue">문제</option>
                        <option key="inquiry">문의</option>
                        {auth.isAdmin ? <option key="broad">공지</option> : null}
                    </S.category>
                    <S.imgBox $isImg={isImg}>
                        {images.map((item) => {
                            return <S.img><img src={item} alt='이미지들' onClick={() => {
                                setImgSrc(item)
                            }}/></S.img>
                        })}
                    </S.imgBox>
                    <S.title>
                        <S.selectImg $toggle={true} onClick={() => setIsImg(!isImg)}>
                            <img src={imgSrc} alt='선택된 이미지'/>
                        </S.selectImg>
                        <S.titleText
                            maxLength={15}
                            type={"text"} value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder={"제목을 입력해주세요(15자최대)"}
                            spellCheck={false}
                        />
                    </S.title>

                    <ToolBar content={content} contentRef={contentRef} setContent={setContent}/>

                    <S.textArea
                        placeholder={"내용을 입력해주세요"}
                        value={content}
                        ref={contentRef}
                        onChange={(e) => {
                            setContent(e.target.value);
                            smart(e);
                        }}
                        spellCheck="false"
                    />
                </S.write>

                <Preview category={category} title={title} content={makeContent(content)} imgSrc={imgSrc}/>
            </S.main>
        </S.container>
    )
}
export default Write;