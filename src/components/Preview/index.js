import React from "react";
import * as S from "./style.ts";

export const Preview = ({category, title, content, imgSrc})=>{

    const makeContent = (text)=>{
        let renderedLines = text.split('\n').map((line, index) => {
            const matchH1 = line.match(/(.*)<제목1>(.*?)<\/제목1>(.*)/);
            const matchH2 = line.match(/(.*)<제목2>(.*?)<\/제목2>(.*)/);
            const matchH3 = line.match(/(.*)<제목3>(.*?)<\/제목3>(.*)/);
            const matchBold = line.match(/(.*)<강조>(.*?)<\/강조>(.*)/);
            const matchUnderLine = line.match(/(.*)<밑줄>(.*?)<\/밑줄>(.*)/);
            const matchCancelLine = line.match(/(.*)<취소선>(.*?)<\/취소선>(.*)/);
            const matchTip = line.match(/(.*)<기울임>(.*?)<\/기울임>(.*)/);
            if (matchH1) {
                // eslint-disable-next-line no-unused-vars
                const [_, frontText,  titleText, remainingText] = matchH1;
                return (
                    <div key={index} >
                        <span>{frontText.trim()}</span>
                        <S.H1 >{titleText.trim()}</S.H1>
                        <span>{remainingText.trim()}</span>
                    </div>
                );
            }
            if (matchH2) {
                // eslint-disable-next-line no-unused-vars
                const [_,frontText, titleText, remainingText] = matchH2;
                return (
                    <div key={index} >
                        <span>{frontText.trim()}</span>
                        <S.H2 >{titleText.trim()}</S.H2>
                        <span>{remainingText.trim()}</span>
                    </div>
                );
            }
            if (matchH3) {
                // eslint-disable-next-line no-unused-vars
                const [_, frontText,  titleText, remainingText] = matchH3;

                return (
                    <div key={index} >
                        <span>{frontText.trim()}</span>
                        <S.H3 >{titleText.trim()}</S.H3>
                        <span>{remainingText.trim()}</span>
                    </div>
                );
            }
            if (matchBold) {
                // eslint-disable-next-line no-unused-vars
                const [_, fontText, titleText, remainingText] = matchBold;
                return (
                    <div key={index}>
                        <span>{fontText.trim()}</span>
                        <b>{titleText.trim()}</b>
                        <span>{remainingText.trim()}</span>
                    </div>
                )
            }
            if (matchUnderLine) {
                // eslint-disable-next-line no-unused-vars
                const [_,fontText, titleText, remainingText] = matchUnderLine;
                return (
                    <div key={index}>
                        <span>{fontText.trim()}</span>
                        <S.underLine>{titleText.trim()}</S.underLine>
                        <span>{remainingText.trim()}</span>
                    </div>
                )
            }
            if (matchTip) {
                // eslint-disable-next-line no-unused-vars
                const [_, frontText, titleText, remainingText] = matchTip;
                return (
                    <div key={index}>
                        <span>{frontText.trim()}</span>
                        <i>{titleText.trim()}</i>
                        <span>{remainingText.trim()}</span>
                    </div>
                )
            }
            if (matchCancelLine) {
                // eslint-disable-next-line no-unused-vars
                const [_, frontText,  titleText, remainingText] = matchCancelLine;
                return (
                    <div key={index}>
                        <span>{frontText.trim()}</span>
                        <S.cancelLine>{titleText.trim()}</S.cancelLine>
                        <span>{remainingText.trim()}</span>
                    </div>
                )
            }

            return (
                <span key={index}>
                    {line}
                    <br />
            </span>
            );
        });
        return <S.div>{renderedLines}</S.div>;
    }

    return (
        <S.outPut>
            <S.categoryOut>{category}</S.categoryOut>
            <S.title>
                <S.selectImg $toggle = {false}>
                    <img src={imgSrc} alt='선택된 이미지'/>
                </S.selectImg>
                <S.H1>{title}</S.H1>
            </S.title>
            <S.outContent>{makeContent(content)}</S.outContent>
        </S.outPut>
    )
}