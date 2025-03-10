<template>
  <!-- Create By Joker Banny -->
  <div class="min-h-screen flex items-center justify-center">
    <div class="bg-white rounded-lg overflow-hidden shadow-lg hover:scale-105 hover:shadow-xl transform duration-500 cursor-pointer">
      <div class="p-3">
        <span class="bg-red-500 py-1 px-3 text-sm font-semibold text-white rounded-full cursor-pointer">{{ book.categoriaNombre }}</span>
        <h1 class="mt-3 text-2xl font-bold hover:underline cursor-pointer">{{ book.titulo }}</h1>
        <p class="mt-1 font-sans text-gray-700">{{ book.userId }}</p>
      </div>
      <div class="relative">
        <img class="w-64" :src="book.portada" />
        <p class="absolute text-lg transform translate-x-16 -translate-y-20 bg-blue-600 text-white py-2 px-4 rounded-full cursor-pointer hover:scale-105 duration-500">Mas información</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Book } from '@/interface/Book';

const props = defineProps<{ book: Book }>();
</script>
