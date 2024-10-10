import * as S from './style.ts';
import { useNavigate } from 'react-router-dom';

function LoginBtn({name, isBlack, id, pw, email}){
    const navigate = useNavigate();
    const goLogin = async ()=>{
        if(isBlack){
            try{
                const response = await fetch('/user/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        id: id,
                        password: pw
                    })
                })
                if(response.ok){
                    console.log(response.data);
                    navigate('/')
                }
            }catch(error){
                console.log("error on : ",error);
            }
        }
        else{
            try{
                const response = await fetch('/user/register', {
                    method:'POST',
                    headers:{
                        'Context-Type':'application/json'
                    },
                    body:JSON.stringify({
                        id:id,
                        password:pw,
                        email:email
                    })
                })
                if(response.ok){
                    console.log(response.data);
                    navigate('/')
                }
            }catch(error){
                console.log("error on : ",error);
            }
        }
       
    }
    return(
        <S.Btn 
            onClick={goLogin} 
            type="button" 
            isBlack={isBlack} 
        >{name}</S.Btn>
    )
}
export default LoginBtn;