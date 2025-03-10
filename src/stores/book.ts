import axios from "axios";
import { ref } from "vue";
import { defineStore } from "pinia";
import type { Book } from "@/interface/Book";

export const useBookStore = defineStore('book', () => {
  const url = 'http://localhost:5172/api/libros';
  const books = ref<Book[]>([]);

  const getBooks = async () => {
    try {
      const response = await axios.get(url);
      books.value = response.data;
      return { status: response.status, data: response.data };
    } catch (error) {
      console.error(error);
    }
  };

  const createBook = async (Portada: string, Titulo: string, Descripcion: string, userID: number, CategoriaID: number) => {
    try {
      const response = await axios.post(url, { Portada, Titulo, Descripcion, userID, CategoriaID });
      return { status: response.status, data: response.data };
    } catch (error) {
      console.error(error);
    }
  };

  const getBookById = async (id: number) => {
    try {
      const response = await axios.get(`${url}/${id}`);
      return { status: response.status, data: response.data };
    } catch (error) {
      console.error(error);
    }
  };

  const deleteBook = async (id: number) => {
    try {
      const response = await axios.delete(`${url}/${id}`);
      return { status: response.status, data: response.data };
    } catch (error) {
      console.error(error);
    }
  };

  return {
    books,
    getBooks,
    createBook,
    getBookById,
    deleteBook
  };
});
