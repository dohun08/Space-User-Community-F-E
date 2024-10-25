import * as S from './style.ts';
import Logo from '../../assets/Logo.svg';
import Cbtn from "../../components/Button/Circle/index.js";
import {useRef, useState} from "react";

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
    let renderedLines;
    const makeContent = (text)=>{
        renderedLines = text.split('\n').map((line, index) => {
            const matchH1 = line.match(/<제목1>(.*?)<\/제목1>(.*)/);
            const matchH2 = line.match(/<제목2>(.*?)<\/제목2>(.*)/);
            const matchH3 = line.match(/<제목3>(.*?)<\/제목3>(.*)/);
            const matchBold = line.match(/<강조>(.*?)<\/강조>(.*)/);
            const matchUnderLine = line.match(/<밑줄>(.*?)<\/밑줄>(.*)/);
            const matchCancelLine = line.match(/<취소선>(.*?)<\/취소선>(.*)/);
            const matchTip = line.match(/<기울임>(.*?)<\/기울임>(.*)/);
            if (matchH1) {
                // eslint-disable-next-line no-unused-vars
                const [_, titleText, remainingText] = matchH1;
                return (
                    <S.div key={index} >
                        <h1 >{titleText.trim()}</h1>
                        <span>{remainingText.trim()}</span>
                    </S.div>
                );
            }
            if (matchH2) {
                // eslint-disable-next-line no-unused-vars
                const [_, titleText, remainingText] = matchH2;
                return (
                    <S.div key={index} >
                        <h2 >{titleText.trim()}</h2>
                        <span>{remainingText.trim()}</span>
                    </S.div>
                );
            }
            if (matchH3) {
                // eslint-disable-next-line no-unused-vars
                const [_, titleText, remainingText] = matchH3;

                return (
                    <S.div key={index} >
                        <h3 >{titleText.trim()}</h3>
                        <span>{remainingText.trim()}</span>
                    </S.div>
                );
            }
            if (matchBold) {
                // eslint-disable-next-line no-unused-vars
                const [_, titleText, remainingText] = matchBold;
                return (
                    <S.div key={index}>
                        <b>{titleText.trim()}</b>
                        <span>{remainingText.trim()}</span>
                    </S.div>
                )
            }
            if (matchUnderLine) {
                // eslint-disable-next-line no-unused-vars
                const [_, titleText, remainingText] = matchUnderLine;
                return (
                    <S.div key={index}>
                        <S.underLine>{titleText.trim()}</S.underLine>
                        <span>{remainingText.trim()}</span>
                    </S.div>
                )
            }
            if (matchTip) {
                // eslint-disable-next-line no-unused-vars
                const [_, titleText, remainingText] = matchTip;
                return (
                    <S.div key={index}>
                        <i>{titleText.trim()}</i>
                        <span>{remainingText.trim()}</span>
                    </S.div>
                )
            }
            if (matchCancelLine) {
                // eslint-disable-next-line no-unused-vars
                const [_, titleText, remainingText] = matchCancelLine;
                return (
                    <S.div key={index}>
                        <S.cancelLine>{titleText.trim()}</S.cancelLine>
                        <span>{remainingText.trim()}</span>
                    </S.div>
                )
            }

            return (
                <span key={index}>
                    {line}
                    <br />
            </span>
            );
        });
        return <div>{renderedLines}</div>;
    }
    const addHead = (num)=>{
        contentRef.current.focus();
        if(content.length > 0) setContent((prevText) =>prevText + "\n" + num);
        else setContent((prevText) =>prevText + num);
    }
    return(
        <S.container>
            <S.header>
                <img src={Logo} alt={"로고이미지"} />
                <S.info>
                    <S.backBtn to={'/'}>
                        <Cbtn name={"돌아가기"}/>
                    </S.backBtn>
                    <Cbtn name={"등록하기"}/>
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
                        />
                    </S.title>
                    <S.skills>
                        <div>
                            <S.textBtn onClick={()=>addHead("<제목1></제목1>")}>제목1</S.textBtn>
                            <S.textBtn onClick={()=>addHead("<제목2></제목2>")}>제목2</S.textBtn>
                            <S.textBtn onClick={()=>addHead("<제목3></제목3>")}>제목3</S.textBtn>
                        </div>
                        <div>
                            <S.textBtn onClick={()=>addHead("<강조></강조>")}>b</S.textBtn>
                            <S.textBtn onClick={()=>addHead("<기울임></기울임>")}>I</S.textBtn>
                            <S.textBtn onClick={()=>addHead("<밑줄></밑줄>")}>U</S.textBtn>
                            <S.textBtn onClick={()=>addHead("<취소선></취소선>")}>T</S.textBtn>
                        </div>
                        <div>

                        </div>
                    </S.skills>
                    <S.textArea
                        placeholder={"내용을 입력해주세요"}
                        value={content}
                        ref={contentRef}
                        onChange={(e)=> {
                            setContent(e.target.value);
                        }}
                        spellCheck="false"
                        />
                </S.write>
                <S.outPut>
                    <S.categoryOut>{category}</S.categoryOut>
                    <S.title>
                        <S.selectImg $toggle = {false}>
                            <img src={imgSrc} alt='선택된 이미지'/>
                        </S.selectImg>
                        <h1>{title}</h1>
                    </S.title>
                    <S.outContent>{makeContent(content)}</S.outContent>
                </S.outPut>
            </S.main>
        </S.container>
    )
}

export default Write;