import * as S from './style.ts';
import Logo from '../../assets/Logo.svg';
import Cbtn from "../../components/Button/Circle/index.js";
import {useRef, useState} from "react";
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

            // 커서 위치에 클로즈 태그 추가
            updatedValue = `${value.slice(0, selectionStart)}${closeTag}${value.slice(selectionStart)}`;
            setTimeout(() => {
                event.target.selectionStart = event.target.selectionEnd = selectionStart;
            }, 0);
        }
        setContent(updatedValue);
    }
    const postData = async ()=>{

    }
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
                            type={"text"} value={title}
                            onChange={(e)=>setTitle(e.target.value)}
                            placeholder={"제목을 입력해주세요"}
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

                <Preview category = {category} title = {title} content={content} imgSrc = {imgSrc}/>
            </S.main>
        </S.container>
    )
}

export default Write;