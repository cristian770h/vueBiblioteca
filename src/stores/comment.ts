import axios from "axios";
import { defineStore } from "pinia";


export const UsecommentStore = defineStore('comment',()=>{
const url = 'http://localhost:5172/api/comentarios';
const url2 = 'http://localhost:5172/api/comentarios/libro';
const getComments = async () => {
try{
const response = await axios.get(`${url}`);
return{status:response.status, data:response.data};
}catch(error){
console.error(error);

}}


const getdCommentsByBook = async (id:number) => {
try{
const response = await axios.get(`${url2}/${id}`);
return{status:response.status, data:response.data};
}catch(error){
console.error(error);
}}



const createComment = async (Comentario:string,UserID:number,LibroID:number) => {
try{
const response = await axios.post(`${url}`, {Comentario,UserID,LibroID});
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
getdCommentsByBook,
createComment,
deleteComment
}

})
