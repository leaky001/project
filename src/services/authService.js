export const login = async (authDetail) => {

    const accessToken = "tokenexample1234";
  
      setTimeout(()=> {
        
        if(authDetail.password){

            localStorage.setItem("token", JSON.stringify(accessToken));
            localStorage.setItem("token", JSON.stringify(authDetail.email));

            
        }

      }, 4000)

      return {...authDetail, accessToken}
}

export const register = async (authDetail) => {

    const accessToken = "tokenexample1234";

    setTimeout(()=> {
        
        if(authDetail.password){

            localStorage.setItem("token", JSON.stringify(accessToken));
            localStorage.setItem("token", JSON.stringify(authDetail.email));
            
        }

      }, 4000)
      return{...authDetail, accessToken}
} 
 
export const logout = async()=> {

    
        localStorage.removeItem("token")
    
}