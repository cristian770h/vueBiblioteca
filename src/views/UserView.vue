<template>
  <div>
    <AddBook />
  </div>

  <div class="book-grid">
    <BookCard v-for="book in books" :key="book.id" :book="book" />
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import BookCard from '@/components/cards/BookCard.vue';
import { useBookStore } from '@/stores/book';
import type { Book } from '@/interface/Book';
import AddBook from '@/components/AddBook.vue';

const useStore = useBookStore();
const books = ref<Book[]>([]);

const fetchBooks = async () => {
  await useStore.getBooks();
  books.value = useStore.books;
  console.log(books.value);
};

onMounted(() => {
  fetchBooks();
});
</script>

<style scoped>
.book-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);

}
</style>
