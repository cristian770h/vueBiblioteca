<template>

<div class="mx-auto my-8 flex max-w-screen-sm rounded-xl border border-gray-100 p-4 text-left text-gray-600 shadow-lg sm:p-8">
  <img class="mr-5 block h-8 w-8 max-w-full text-left align-middle sm:h-16 sm:w-16" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="Profile Picture" />
  <div class="w-full text-left">
    <div class="mb-2 flex flex-col justify-between text-gray-600 sm:flex-row">
      <h3 class="font-medium">{{ comment.username }}</h3>
      <time class="text-xs" :datetime="comment.date">{{ formattedDate }}</time>
    </div>
    <p class="text-sm">{{ comment.comentario }}</p>
    <div class="mt-5 flex items-center justify-between text-gray-600">

      <a title="Likes" href="#" class="group flex cursor-pointer items-center justify-around">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 rounded-full p-1 group-hover:bg-red-200 group-hover:text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
        12
      </a>
    </div>
  </div>
</div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

interface Comment {
  comentarioID: number;
  libroID: number;
  userID: number;
  username: string;
  comentario: string;
  fechaCreacion: string;
}

const props = defineProps<{ comment: Comment }>();

const formattedDate = computed(() => {
  const date = new Date(props.comment.fechaCreacion);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
});
</script>
