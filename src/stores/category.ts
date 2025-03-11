import axios from "axios";
import { defineStore } from "pinia";

export const useCategoryStore= defineStore('category',()=>{



const url = 'http://localhost:5172/api/categorias';

const getCategories = async () => {
  try
  {
    const response = await axios.get(`${url}`);
    return{status:response.status, data:response.data};
  }catch(error){
    console.error(error);
  }
}

const createCategory = async (nombre:string) => {
  try{
    const response = await axios.post(`${url}`, {nombre});
    return{status:response.status, data:response.data};
  }catch(error){
    console.error(error);
  }
}


const getCategoryById = async (id:number) => {
  try{
    const response = await axios.get(`${url}/${id}`);
    return{status:response.status, data:response.data};
  }catch(error){
    console.error(error);
  }
}

const deleteCategory = async (id:number) => {
  try{
    const response = await axios.delete(`${url}/${id}`);
    return{status:response.status, data:response.data};
  }catch(error){
    console.error(error);
  }
}



return{
  getCategories,
  createCategory,
  getCategoryById,
  deleteCategory
}


})
