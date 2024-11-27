export const getUserInfo = async (id)=>{
    try{
        const response = await fetch(`/api/user/profile/${id}`, {
            method: 'GET',
        });

        if(response.ok){
            const data = await response.json();
            console.log("유저 조회 성공");
            return data;
        }

    }catch(error){
        console.log("error on : ",error);
    }
};