import axios from "axios";
import { defineStore } from "pinia";



export const useUserStore = defineStore('user',()=>{

const url = 'http://localhost:5172/api/users';

const urlRole = 'http://localhost:5172/api/rols';

const registerUser = async (Email:string, PasswordHash:string,Username:string, RoleID:number) => {
  try{
    const response = await axios.post(`${url}`, {Username,Email,RoleID ,PasswordHash});
    return{status:response.status, data:response.data};
  }catch(error){
    console.error(error);
    return{status:500, data:null};
  }}



const registerRole = async (RoleName:string) => {
  try{
    const response = await axios.post(`${urlRole}`, {RoleName});
    return{status:response.status, data:response.data};
  }catch(error){
    console.error(error);
    return{status:500, data:null};
  }}




return{
  registerUser,
  registerRole
}

})
