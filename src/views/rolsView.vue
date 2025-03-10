<template>
  <div>
    <form @submit.prevent="onSubmit">
      <label for="roleName">Role Name</label>
      <input type="text" name="roleName" id="roleName" v-model="roleName" placeholder="Role Name">
      <button type="submit">Submit</button>
    </form>
  </div>
</template>


<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/stores/user';

const userStore = useUserStore()


const roleName = ref('');
const router = useRouter();

const onSubmit = async () => {
  try {
    const response = await userStore.registerRole( roleName.value);
    if (response.status === 201) {
      console.log('Role registered');
      router.push('/roles');
    } else {
      console.log('Role not registered', response.data);
    }
  } catch (error) {
    console.error('An error occurred during registration:', error);
  }
};
</script>
