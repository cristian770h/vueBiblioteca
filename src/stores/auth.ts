import { useStorage } from "@vueuse/core";
import axios from "axios";
import { defineStore } from "pinia";
import { computed } from "vue";



export const useAuthStore = defineStore('auth',()=>{


const url = 'http://localhost:5000/api/auth';
const token = useStorage('token', '');


const isLoggedIn = computed(()=> token.value !== '' && token.value !==null );

const login = async ( email:string, password:string) => {
  try{
    const response = await axios.post(`${url}/login`, {email, password});
    if( response.status===200){
      token.value=response.data.token;
    }
    return{status:response.status, data:response.data};
  }catch(error){
    console.error(error);
    return{status:500 , data:null};
  }
}


  const logout = async () => {
    try{
      const response = await axios.post(`${url}/logout`, {token:token.value}, {
        headers:{
          Authorization: `Bearer ${token.value}`
        }
      });
      if(response.status===200){
        token.value='';
      }
      return{status:response.status, data:response.data};
    }catch(error){
      console.error(error);
      return{status:500, data:null};

    }

  }

return{
  token,
  isLoggedIn,
  login,
  logout
}


})
