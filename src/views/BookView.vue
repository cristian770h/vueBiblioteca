<template>
    <section class="py-12 sm:py-16">
      <div class="container mx-auto px-4">
        <nav class="flex">
          <ol role="list" class="flex items-center">
            <li class="text-left">
              <div class="-m-1">
                <a href="#" class="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"> Regresar </a>
              </div>
            </li>
          </ol>
        </nav>

        <div class="lg:col-gap-12 xl:col-gap-16 mt-8 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-5 lg:gap-16">
          <div class="lg:col-span-3 lg:row-end-1">
            <div class="lg:flex lg:items-start">
              <div class="lg:order-2 lg:ml-5">
                <div class="max-w-xl overflow-hidden rounded-lg">
                  <img class="h-full w-full max-w-full object-cover" :src="libro.portada" alt="" />
                </div>
              </div>
            </div>
          </div>

          <div class="lg:col-span-2 lg:row-span-2 lg:row-end-2">
            <h1 class="sm: text-2xl font-bold text-gray-900 sm:text-3xl">{{libro.titulo}}</h1>

            <div class="mt-5 flex items-center">
              <div class="flex items-center">
                <svg class="block h-4 w-4 align-middle text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" class=""></path>
                </svg>
                <svg class="block h-4 w-4 align-middle text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" class=""></path>
                </svg>
                <svg class="block h-4 w-4 align-middle text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" class=""></path>
                </svg>
                <svg class="block h-4 w-4 align-middle text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" class=""></path>
                </svg>
                <svg class="block h-4 w-4 align-middle text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" class=""></path>
                </svg>
              </div>
              <p class="ml-2 text-sm font-medium text-gray-500">1.273</p>
            </div>

            <h2 class="mt-8 text-base text-gray-900">Autor</h2>
            <div class="mt-3 flex select-none flex-wrap items-center gap-1">
              <label class="">
                <input type="radio" name="type" value="Powder" class="peer sr-only" checked />
                <p class="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">{{ libro.usuarioNombre }}</p>
              </label>

            </div>

            <h2 class="mt-8 text-base text-gray-900">Tags</h2>
            <div class="mt-3 flex select-none flex-wrap items-center gap-1">
              <label class="">
                <input type="radio" name="subscription" value="4 Months" class="peer sr-only" />
                <p class="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">{{ libro.categoriaNombre }}</p>

              </label>

            </div>

            <div class="mt-10 flex flex-col items-center justify-between space-y-4 border-t border-b py-4 sm:flex-row sm:space-y-0">
              <div class="flex items-end">
                <h1 class="text-3xl font-bold">$60.50</h1>
                <span class="text-base">/month</span>
              </div>

              <button type="button" class="inline-flex items-center justify-center rounded-md border-2 border-transparent bg-gray-900 bg-none px-12 py-3 text-center text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800">
                <svg xmlns="http://www.w3.org/2000/svg" class="shrink-0 mr-3 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                Add to cart
              </button>
            </div>

            <ul class="mt-8 space-y-2">
              <li class="flex items-center text-left text-sm font-medium text-gray-600">
                <svg class="mr-2 block h-5 w-5 align-middle text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" class=""></path>
                </svg>
                Free shipping worldwide
              </li>

              <li class="flex items-center text-left text-sm font-medium text-gray-600">
                <svg class="mr-2 block h-5 w-5 align-middle text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" class=""></path>
                </svg>
                Cancel Anytime
              </li>
            </ul>
          </div>

          <div class="lg:col-span-3">
            <div class="flex justify-between border-b border-gray-300">
              <nav class="flex gap-4">
                <span class="border-b-2 border-gray-900 py-4 text-sm font-medium text-gray-900 hover:border-gray-400 hover:text-gray-800"> Comentarios </span>

                <span  class="inline-flex items-center border-b-2 border-transparent py-4 text-sm font-medium text-gray-600">
                  <span class="ml-2 block rounded-full bg-gray-500 px-2 py-px text-xs font-bold text-gray-100"> {{ cmmnetLenght }} </span>
                </span>
              </nav>

              <button @click="openModal" class="cursor-pointer border  px-8 text-center text-xs leading-tight transition-colors duration-150 ease-in-out hover:border-gray-500 rounded-lg">Añade un comentario</button>
            </div>

            <div class="mt-8 flow-root sm:mt-12">
        <Comment v-for="comment in comments" :key="comment.comentarioID" :comment="comment"/>
      </div>
          </div>
        </div>
      </div>
    </section>
   <!-- Modal para añadir comentario -->
<div v-if="isModalOpen" class="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-30">
  <div class="relative p-4 w-full max-w-screen-sm mx-auto bg-white rounded-lg shadow-lg">
    <div class="flex justify-between items-center pb-4 mb-4 border-b">
      <h2 class="text-xl font-bold text-gray-900">Añadir comentario</h2>
      <button @click="closeModal" class="text-gray-400 hover:text-gray-600">
        <svg class="w-6 h-6"   fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </div>
    <div class="p-4">
      <form @submit.prevent="submitComment">
        <div class="mb-4">
          <textarea v-model="Comentario" id="Comentario" name="Comentario" placeholder="Escribe tu comentario aquí" rows="4" class="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
        </div>
        <div class="text-right">
          <button type="submit" class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Publicar comentario</button>
        </div>
      </form>
    </div>
  </div>
</div>
  </template>

<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue';
import Comment from '@/components/Comment.vue';
import { useRoute } from 'vue-router';
import { useBookStore } from '@/stores/book';
import { useForm } from 'vee-validate';
import * as yup from 'yup';
import { UsecommentStore } from '@/stores/comment';
import { useAuthStore } from '@/stores/auth';
import { jwtDecode } from 'jwt-decode';

const route = useRoute();
const bookId = route.params.id;
const libro = ref([]);
const comments = ref([]);
const commentStore = UsecommentStore();
const bookStore = useBookStore();
const authStore=useAuthStore();
const cmmnetLenght=computed(()=>comments.value.length);

const fetchBook = async () => {
  const book = await bookStore.getBookById(bookId);
  const commentList = await commentStore.getdCommentsByBook(bookId);
  libro.value = book.data;
  comments.value = commentList.data; // Asigna los comentarios obtenidos
  console.log(libro.value);
  console.log(comments.value);
};

const { error, defineField, handleSubmit } = useForm({
  validationSchema: yup.object({
    Comentario: yup.string().required('El comentario es obligatorio')
  })
});

const isModalOpen = ref(false);

const [Comentario] = defineField('Comentario');

const openModal = () => { isModalOpen.value = true; };

const closeModal = () => { isModalOpen.value = false; };

const submitComment =handleSubmit (async(values) => {
  const token=authStore.token;
  const decoded=jwtDecode(token);
  const userId=decoded.nameid;
  const IdBook=bookId;
  const {Comentario} = values;
  const response = await commentStore.createComment(Comentario, userId, IdBook);
  if (response.status === 201) {
    console.log('Comment created');
    console.log(response.data);
    closeModal();
  }

});




onMounted(async () => {
  fetchBook();

});
</script>
