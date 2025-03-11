<template>
  <header class="bg-white">
    <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <div class="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 class="text-2xl font-bold text-gray-900 sm:text-3xl">El primer paso es postearlo</h1>

          <p class="mt-1.5 text-sm text-gray-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure, recusandae.
          </p>
        </div>

        <div class="flex items-center gap-4">
          <button
            class="inline-flex items-center justify-center gap-1.5 rounded-sm border border-gray-200 bg-white px-5 py-3 text-gray-900 transition hover:text-gray-700 focus:ring-3 focus:outline-hidden"
            type="button"
          >
            <span class="text-sm font-medium"> View Website </span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="size-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </button>

          <button
            @click="openModal"
            class="inline-block rounded-sm bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:ring-3 focus:outline-hidden"
            type="button"
          >
            Añade un libro
          </button>
        </div>
      </div>
    </div>
  </header>

  <!-- Modal -->
  <div v-if="isModalOpen" class="fixed inset-0 z-50 flex items-center justify-center bg-opacity-30">
    <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
      <!-- Modal content -->
      <div class="relative p-4 bg-white rounded-lg shadow sm:p-5">
        <!-- Modal header -->
        <div class="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5">
          <h3 class="text-lg font-semibold text-gray-900">Add Product</h3>
          <button
            @click="closeModal"
            type="button"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
          >
            <svg
              aria-hidden="true"
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <!-- Modal body -->
        <form @submit.prevent="submitForm" novalidate>
          <div>
            <label for="titulo" class="block mb-2 text-sm font-medium text-gray-900">Titulo</label>
            <input
              v-model="titulo"
              type="text"
              id="titulo"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              placeholder="Titulo del libro"
            />
            <span class="text-red-500 text-sm">{{ errors.Titulo }}</span>
          </div>

          <div>
            <label for="portada" class="block mb-2 text-sm font-medium text-gray-900"
              >Portada</label
            >
            <input
              type="file"
              id="portada"
              @change="handleFileUpload"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
            />
            <span v-if="errors" class="text-red-500 text-sm">{{ errors.Portada }}</span>
          </div>

          <div>
            <label for="categoria" class="block mb-2 text-sm font-medium text-gray-900"
              >Categoria</label
            >
            <select
              v-model="categoria"
              id="categoria"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
            >
              <option value="">Selecciona la categoria</option>
              <option
                v-for="category in categories"
                :key="category.categoriaID"
                :value="category.categoriaID"
              >
                {{ category.nombre }}
              </option>
            </select>
            <span class="text-red-500 text-sm">{{ errors.categoria }}</span>
          </div>

          <div class="sm:col-span-2">
            <label for="descripcion" class="block mb-2 text-sm font-medium text-gray-900"
              >Descripción</label
            >
            <textarea
              v-model="descripcion"
              id="descripcion"
              rows="4"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
              placeholder="Descripción de tu libro"
            ></textarea>
            <span class="text-red-500 text-sm">{{ errors.descripcion }}</span>
          </div>

          <button
            type="submit"
            class="text-black inline-flex items-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Añadir libro
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useBookStore } from '@/stores/book';
import { useForm } from 'vee-validate';
import { onMounted, ref } from 'vue';
import * as yup from 'yup';
import { useAuthStore } from '@/stores/auth';
import { jwtDecode } from 'jwt-decode';
import { useCategoryStore } from '@/stores/category';

const isModalOpen = ref(false);
const authStore = useAuthStore();
const bookStore = useBookStore();
const categoryStore = useCategoryStore();
const categories = ref([]);
const portadaFile = ref<File | null>(null);

// Valores de los campos
const titulo = ref('');
const descripcion = ref('');
const categoria = ref('');

// Configuración de vee-validate (solo para mostrar errores)
const { errors, validate } = useForm({
  validationSchema: yup.object({
    Titulo: yup.string().required('El título es obligatorio'),
    descripcion: yup.string().required('La descripción es obligatoria'),
    categoria: yup.number().required('La categoría es obligatoria'),
    Portada: yup.mixed().required('La portada es obligatoria'),
  }),
});

// Manejar la subida del archivo
const handleFileUpload = (event: Event) => {
  const target = event.target as HTMLInputElement;
  if (target.files && target.files[0]) {
    portadaFile.value = target.files[0];
  } else {
    console.error('No se seleccionó ningún archivo');
  }
};

// Obtener las categorías
const fetchCategories = async () => {
  try {
    const response = await categoryStore.getCategories();
    categories.value = response.data;
  } catch (error) {
    console.error('Error al obtener las categorías:', error);
  }
};

// Copiar el archivo a la carpeta local y obtener la ruta
const copyFileToAssets = async (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const fileName = `${Date.now()}_${file.name}`;
      const filePath = `./assets/img/${fileName}`;

      // Crear un enlace temporal para descargar el archivo
      const link = document.createElement('a');
      link.href = reader.result as string;
      link.download = filePath;
      link.click();

      resolve(filePath);
    };
    reader.onerror = () => {
      reject(new Error('Error al leer el archivo'));
    };
    reader.readAsDataURL(file);
  });
};

// Enviar el formulario (sin validación automática)
const submitForm = async () => {
  const token = authStore.token;
  const decoded = jwtDecode(token);
  const userId = decoded.nameid;

  if (!portadaFile.value) {
    console.error('No se seleccionó ningún archivo');
    return;
  }

  console.log('Categoria seleccionada:', categoria.value); // Verificar el valor de categoria

  try {
    // Copiar el archivo a la carpeta local y obtener la ruta
    const filePath = await copyFileToAssets(portadaFile.value);

    // Convertir categoria a número
    const categoriaID = Number(categoria.value);

    // Enviar la ruta del archivo a la API
    const response = await bookStore.createBook(filePath, titulo.value, descripcion.value, userId, categoriaID);
    console.log('Libro creado:', response);
    closeModal();
  } catch (error) {
    console.error('Error al crear el libro:', error);
  }
};

// Abrir y cerrar el modal
const openModal = () => {
  isModalOpen.value = true;
};
const closeModal = () => {
  isModalOpen.value = false;
};

onMounted(() => {
  fetchCategories();
});
</script>
