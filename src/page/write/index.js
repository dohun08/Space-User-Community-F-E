import * as S from './style.ts';
import Logo from '../../assets/Logo.svg';
import Cbtn from "../../components/Button/Circle/index.js";

import {useState} from "react";
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
    return(
        <S.container>
            <S.header>
                <img src={Logo} alt={"로고이미지"} />
                <Cbtn name={"등록하기"}/>
            </S.header>
            <S.main>
                <S.write>
                    <select onChange={(e)=>setCategory(e.target.value)}>
                        <option>문제</option>
                        <option>문의</option>
                    </select>
                    <S.imgBox>
                        {images.map((item, index)=>{
                            return <S.img><img key={index} src={item} alt='이미지들' onClick={()=>{setImgSrc(item)}}/></S.img>
                         })}
                    </S.imgBox>
                    <S.title>
                        <div>
                            <img src={imgSrc} alt='선택된 이미지'/>
                        </div>
                        <input
                            type={"text"} value={title}
                            onChange={(e)=>setTitle(e.target.value)}
                            placeholder={"제목을 입력해주세요"}
                        />
                    </S.title>
                    <S.skills>
                    </S.skills>
                </S.write>
                <S.outPut>
                    <p>{category}</p>
                    <S.title>
                        <div>
                            <img src={imgSrc} alt='선택된 이미지'/>
                        </div>
                        <h1>{title}</h1>
                    </S.title>

                </S.outPut>
            </S.main>
        </S.container>
    )
}

export default Write;