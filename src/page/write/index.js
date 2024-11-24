import * as S from './style.ts';
import Logo from '../../assets/Logo.svg';
import Cbtn from "../../components/Button/Circle";
import React, {useEffect, useRef, useState} from "react";
import {ToolBar} from "../../components/ToolBar";
import {Preview} from "../../components/Preview";
import {authAtom} from "../../recoil/authAtom";
import {useRecoilState} from "recoil";
import {useNavigate} from "react-router-dom";
import {images} from "../../assets/iconImage";
import {decodeJWT} from "../../until/authService";
import make from "../../until/postDoc";

function Write() {
    const [category, setCategory] = useState("문제");
    const [imgSrc, setImgSrc] = useState("/images/blue_spaceship.svg");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const contentRef = useRef();
    const [isImg, setIsImg] = useState(false);
    const navigate = useNavigate();
    const [auth, setAuth] = useRecoilState(authAtom);

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


    //문서를 생성했을때 성공이라면 바로 메인으로 이동, 실패라면 엑세스토큰을 재발급받고 다시실행
    const postData = async () => {
        if(title === "" || content === "") return alert("값이 비어져있습니다.");
        let icon = images.findIndex((item) => item === imgSrc);

        const jwt = decodeJWT(auth.access_Token);
        console.log(jwt.userId);
        if(category !== "공지"){
            try {
                const response = await fetch('/api/community/doc', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `${auth.access_Token}`
                    },
                    credentials: 'include',
                    body: JSON.stringify({
                        authorId: jwt.userId,
                        title: title,
                        content: content,
                        icon: icon,
                        category: category
                    })
                });
                if (response.ok){
                    navigate("/");
                }
            } catch (error) {
                console.log('on error announcement post', error);
            }
        }
        else{
            try {
                const response = await fetch('/api/broadcast', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `${auth.access_Token}`
                    },
                    credentials: 'include',
                    body: JSON.stringify({
                        title: title,
                        contents: content
                    })
                });
                if (response.ok){
                    navigate("/");
                }
            } catch (error) {
                console.log('on error announcement post', error);
            }
        }
    }

        const makeDoc = (text) => {
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
    }, []);
        return (
            <S.container>
                {isImg ? <S.black onClick={()=>setIsImg(false)}></S.black> : null}
                <S.header>
                    <img src={Logo} alt={"로고이미지"}/>
                    <S.info>
                        <S.backBtn to={'/'}>
                            <Cbtn name={"돌아가기"}/>
                        </S.backBtn>
                        <Cbtn onClick={() => postData()} name={"등록하기"}/>
                    </S.info>

                </S.header>
                <S.main>
                    <S.write>
                        <S.category onChange={(e) => setCategory(e.target.value)}>
                            <option key="issue">문제</option>
                            <option key="inquiry">문의</option>
                            {auth.isAdmin ? <option key="inquiry">공지</option> : null}
                        </S.category>
                        <S.imgBox $isImg={isImg}>
                            {images.map((item) => {
                                return <S.img key={item}><img src={item} alt='이미지들' onClick={() => {
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

                    <Preview category={category} title={title} content={makeDoc(content)} imgSrc={imgSrc}/>
                </S.main>
            </S.container>
        )
}
export default Write;