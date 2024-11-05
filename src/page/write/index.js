import * as S from './style.ts';
import Logo from '../../assets/Logo.svg';
import Cbtn from "../../components/Button/Circle/index.js";
import React, {useRef, useState} from "react";
import {ToolBar} from "../../components/ToolBar";
import {Preview} from "../../components/Preview";

function Write(){
    const [category, setCategory] = useState("문제");
    const images = [
        "/images/blue_spaceship.svg",
        "/images/mint_spaceship.svg",
        "/images/pink_spaceship.svg",
        "/images/spaceship.svg",
        "/images/jellyfish.svg",
        "/images/nimo.svg",
        "/images/tuttle.svg",
        "/images/light_blue.svg",
        "/images/light_green.svg",
        "/images/light_orange.svg",
        "/images/light_red.svg",
        "/images/light_yellow.svg",
        "/images/light-black.svg",
        "/images/man.svg",
        "/images/woman.svg"
    ]
    const [imgSrc, setImgSrc] = useState("/images/blue_spaceship.svg");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const contentRef = useRef();
    const [isImg, setIsImg] = useState(false);


    const smart = (event)=>{
        const { value, selectionStart } = event.target;
        let updatedValue = value;

        // 정규표현식을 통해 오픈 태그 감지
        const match = /<([\w가-힣]+)>$/.exec(value.slice(0, selectionStart));
        if (match) {
            const tagName = match[1];
            const closeTag = `</${tagName}>`;

            const hasCloseTag = value.slice(selectionStart).includes(closeTag);
            // 커서 위치에 클로즈 태그 추가
            if(!hasCloseTag){
                updatedValue = `${value.slice(0, selectionStart)}${closeTag}${value.slice(selectionStart)}`;
                setTimeout(() => {
                    event.target.selectionStart = event.target.selectionEnd = selectionStart;
                }, 0);
            }

        }
        setContent(updatedValue);
    }
    const postData = async ()=>{
        try{
            const response = await fetch('/community/document', {
                method:'POST',
                headers:{
                    'ContentType':'application/json',
                },
                body:JSON.stringify({
                    title:title,
                    contents:make(content)
                })
            });
            if(response.status === 200){
                console.log("글쓰기 성공");
            }
            else{
                console.log("글쓰기 실패");
            }
        }catch (error){
            console.log(error);
        }
    }
    const make = (text) => {
        const lines = text.split('\n');

        const renderedLines = lines.map((line, index) => {
            const components = [];

            // 각 태그의 패턴과 변환할 컴포넌트 정의
            const tagPatterns = [
                { pattern: /<제목1>(.*?)<\/제목1>/, component: (text) => <S.H1 key={`h1-${index}-${text}`}>{text.trim()}</S.H1> },
                { pattern: /<제목2>(.*?)<\/제목2>/, component: (text) => <S.H2 key={`h2-${index}-${text}`}>{text.trim()}</S.H2> },
                { pattern: /<제목3>(.*?)<\/제목3>/, component: (text) => <S.H3 key={`h3-${index}-${text}`}>{text.trim()}</S.H3> },
                { pattern: /<강조>(.*?)<\/강조>/, component: (text) => <strong key={`bold-${index}-${text}`}>{text.trim()}</strong> },
                { pattern: /<밑줄>(.*?)<\/밑줄>/, component: (text) => <S.underLine key={`underline-${index}-${text}`}>{text.trim()}</S.underLine> },
                { pattern: /<기울임>(.*?)<\/기울임>/, component: (text) => <i key={`italic-${index}-${text}`}>{text.trim()}</i> },
                { pattern: /<취소선>(.*?)<\/취소선>/, component: (text) => <S.cancelLine key={`cancel-${index}-${text}`}>{text.trim()}</S.cancelLine> },
            ];

            let remainingText = line;

            // 모든 태그 매칭
            while (remainingText.length > 0) {
                let earliestMatch = null;
                let matchComponent = null;

                // 각 패턴을 체크해서 가장 먼저 나타나는 태그를 찾음
                tagPatterns.forEach(({ pattern, component }) => {
                    const match = remainingText.match(pattern);

                    if (match && (earliestMatch === null || match.index < earliestMatch.index)) {
                        earliestMatch = match;
                        matchComponent = component;
                    }
                });

                // 매칭된 태그가 있을 때
                if (earliestMatch) {
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
    return(
        <S.container>
            <S.header>
                <img src={Logo} alt={"로고이미지"} />
                <S.info>
                    <S.backBtn to={'/'}>
                        <Cbtn name={"돌아가기"}/>
                    </S.backBtn>
                    <Cbtn onClick={()=>postData()} name={"등록하기"}/>
                </S.info>

            </S.header>
            <S.main>
                <S.write>
                    <S.category onChange={(e)=>setCategory(e.target.value)}>
                        <option key="issue">문제</option>
                        <option key="inquiry">문의</option>
                    </S.category>
                    <S.imgBox isImg = {isImg}>
                        {images.map((item, index)=>{
                            return <S.img key={index}><img  src={item} alt='이미지들' onClick={()=>{setImgSrc(item)}}/></S.img>
                         })}
                    </S.imgBox>
                    <S.title>
                        <S.selectImg toggle = {true} onClick={()=>setIsImg(!isImg)}>
                            <img src={imgSrc} alt='선택된 이미지'/>
                        </S.selectImg>
                        <S.titleText
                            maxlength="15"
                            type={"text"} value={title}
                            onChange={(e)=>setTitle(e.target.value)}
                            placeholder={"제목을 입력해주세요(15자최대)"}
                            spellCheck={false}
                        />
                    </S.title>

                    <ToolBar content = {content} contentRef = {contentRef} setContent={setContent} />

                    <S.textArea
                        placeholder={"내용을 입력해주세요"}
                        value={content}
                        ref={contentRef}
                        onChange={(e)=> {
                            setContent(e.target.value);
                            smart(e);
                        }}
                        spellCheck="false"
                        />
                </S.write>

                <Preview category = {category} title = {title} content={make(content)} imgSrc = {imgSrc}/>
            </S.main>
        </S.container>
    )
}

export default Write;