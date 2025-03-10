import axios from "axios";
import { defineStore } from "pinia";


export const commentStore = defineStore('comment',()=>{
const url = 'http://localhost:5172/api/comments';

const getComments = async () => {
try{
const response = await axios.get(`${url}`);
return{status:response.status, data:response.data};
}catch(error){
console.error(error);

}}


const createComment = async (Comentario:string,userID:number,bookID:number) => {
try{
const response = await axios.post(`${url}`, {Comentario,userID,bookID});
return{status:response.status, data:response.data};
}catch(error){
console.error(error);
}}


const deleteComment = async (id:number) => {
try{
const response = await axios.delete(`${url}/${id}`);
return{status:response.status, data:response.data};
}catch(error){
console.error(error);
}}


return{
getComments,
createComment,
deleteComment
}

})
