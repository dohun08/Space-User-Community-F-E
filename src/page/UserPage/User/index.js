import styled from 'styled-components';
import Pen from '../../../assets/penIcon.svg'

function User({username, IsModify, onChange, onClick, modifiable}) {

    return (
        <MainUserInfo>
            <UserImageContainer>
                <UserImage src={""}/>
                {modifiable? (
                    <>
                        <FileBtn type={"file"} id={"file"}/>
                        <CustomFileBtn htmlFor={"file"}>
                            <img src={Pen} alt=""/>
                        </CustomFileBtn>
                    </>
                ):null}
            </UserImageContainer>
            <UsernameContainer>
                <InputBox
                    type={"text"}
                    value={username}
                    isModify={IsModify}
                    readOnly={!IsModify}
                    placeholder={"아이디를 입력해주세요"}
                    onChange={onChange}/>
                {modifiable? (
                    <ModifyBtn color={IsModify} onClick={onClick}>{IsModify? "수정완료": "수정하기"}</ModifyBtn>
                ):null}
            </UsernameContainer>
        </MainUserInfo>
    );
}


const MainUserInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
`

const UserImageContainer = styled.div`
    width: 80px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    position: relative;
`


const UserImage = styled.img`
    background: black;
    border-radius: 100px;
    overflow: clip;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    width: 80px;
    height: 80px;
`;

const FileBtn = styled.input`
    display: none;
`

const CustomFileBtn = styled.label`
    width: 25px;
    height: 25px;
    border-radius: 1000px;
    background: #FFF;
    box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.10);
    position: absolute;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`


const InputBox = styled.input`
    padding: ${(props) => props.isModify ? "5px" : "6px"};
    font-size: 20px;
    color: #000;
    box-sizing: border-box;
    border-radius: 5px;
    border: ${(props) => props.isModify? "1px solid #C2C2C2" : "none"};
    background: none;
    outline: none;
    text-align: center;
    width: 100%;
`


const UsernameContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 5px;
`

const ModifyBtn = styled.div`
    color: ${(props)=>props.color?"#301C86":"#AAA"};
    font-size: ${(props)=> props.size || "12px"};
    cursor: pointer;
    text-align: ${(props)=>props.align};
`


export default User;