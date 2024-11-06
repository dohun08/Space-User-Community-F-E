import React, {useState} from "react";
import * as S from "./style.ts";

import Italic_Gray from '../../assets/Italic_Gray.svg';
import Italic_Black from '../../assets/Italic_Black.svg';
import Under_Line_Gray from '../../assets/Under_Line_Gray.svg';
import Under_Line_Black from '../../assets/Under_Line_Black.svg';
import Cancel_Line_Gray from '../../assets/Cancel_Line_Gray.svg';
import Cancel_Line_Black from '../../assets/Cancel_Line_Black.svg';

export const ToolBar = ({content, contentRef,setContent })=>{
    const addText = (num)=>{
        contentRef.current.focus();
        if(content.length > 0) setContent((prevText) =>prevText + "\n" + num);
        else setContent((prevText) =>prevText + num);
    }
    const [Italic, setItalic] = useState(true);
    const [Under, setUnder] = useState(true);
    const [Cancel, setCancel] = useState(true);


    return(
        <S.skills>
            <div>
                <S.textBtn onClick={()=>addText("<제목1></제목1>")}>제목1</S.textBtn>
                <S.textBtn onClick={()=>addText("<제목2></제목2>")}>제목2</S.textBtn>
                <S.textBtn onClick={()=>addText("<제목3></제목3>")}>제목3</S.textBtn>
            </div>
            <div>
                <S.BoldBtn onClick={()=>addText("<강조></강조>")}>B</S.BoldBtn>
                <S.ItalicBtn
                    onMouseEnter={()=>setItalic(false)}
                    onMouseLeave={()=>setItalic(true)}
                    src={Italic ? Italic_Gray : Italic_Black}
                    onClick={()=>addText("<기울임></기울임>")}
                ></S.ItalicBtn>
                <S.UnderLineBtn
                    onMouseEnter={()=>setUnder(false)}
                    onMouseLeave={()=>setUnder(true)}
                    src={Under ? Under_Line_Gray : Under_Line_Black}
                    onClick={()=>addText("<밑줄></밑줄>")}
                ></S.UnderLineBtn>
                <S.ItalicBtn
                    onMouseEnter={()=>setCancel(false)}
                    onMouseLeave={()=>setCancel(true)}
                    src={Cancel ? Cancel_Line_Gray : Cancel_Line_Black}
                    onClick={()=>addText("<취소선></취소선>")}
                ></S.ItalicBtn>
            </div>
            <div>

            </div>
        </S.skills>
    )
}
