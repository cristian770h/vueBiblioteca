<template>
  <div class="flex">
    <!-- Sidebar como componente -->

    <!-- Contenido principal -->
    <div class="w-full sm:ml-64 p-4">
      <div class="mx-auto mt-8 max-w-screen-lg px-2">
        <!-- Encabezado de la tabla -->
        <div class="sm:flex sm:items-center sm:justify-between flex-col sm:flex-row">
          <p class="flex-1 text-base font-bold text-gray-900">Lista de usuarios</p>

          <div class="mt-4 sm:mt-0">
            <div class="flex items-center justify-start sm:justify-end">
              <div class="flex items-center">
                <label for="" class="mr-2 flex-shrink-0 text-sm font-medium text-gray-900"> Ordenar por </label>
                <select name="" class="sm:mr-4 block w-full whitespace-pre rounded-lg border p-1 pr-10 text-base outline-none focus:shadow sm:text-sm">
                  <option class="whitespace-no-wrap text-sm">Recent</option>
                </select>
              </div>

              <button type="button" class="inline-flex cursor-pointer items-center rounded-lg border border-gray-400 bg-white py-2 px-3 text-center text-sm font-medium text-gray-800 shadow hover:bg-gray-100 focus:shadow">
                <svg class="mr-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Añadir usuario
              </button>
            </div>
          </div>
        </div>

        <!-- Tabla -->
        <div class="mt-6 overflow-hidden rounded-xl border shadow">
          <table class="min-w-full border-separate border-spacing-y-2 border-spacing-x-2">
            <thead class="hidden border-b lg:table-header-group">
              <tr>
                <td width="30%" class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">Username</td>
                <td class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">Correo</td>
                <td class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">Role ID</td>
                <td class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">Status</td>
                <td class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">Actions</td>
              </tr>
            </thead>

            <tbody class="lg:border-gray-300">
              <tr v-for="user in users" :key="user.userID" class="border-b">
                <td width="30%" class="whitespace-no-wrap py-4 text-sm font-bold text-gray-900 sm:px-6">{{ user.username }}</td>
                <td class="whitespace-no-wrap py-4 text-sm font-normal text-black sm:px-6">{{ user.email }}</td>
                <td class="whitespace-no-wrap py-4 text-sm font-normal text-gray-500 sm:px-6">{{ user.roleID }}</td>
                <td class="whitespace-no-wrap py-4 text-sm font-normal text-gray-500 sm:px-6">
                  <div :class="['inline-flex items-center rounded-full py-1 px-2', user.status === 'Complete' ? 'bg-blue-600 text-white' : 'bg-red-200 text-red-500']">
                    {{ user.status }}
                  </div>
                </td>
                <td class="whitespace-no-wrap py-4 text-sm font-normal text-gray-500 sm:px-6">
                  <button @click="editUser(user)" class="mr-2 inline-flex items-center rounded-lg border border-gray-400 bg-white py-1 px-2 text-sm font-medium text-gray-800 shadow hover:bg-gray-100 focus:shadow">Edit</button>
                  <button @click="deleteUser(user.userID)" class="inline-flex items-center rounded-lg border border-gray-400 bg-white py-1 px-2 text-sm font-medium text-gray-800 shadow hover:bg-gray-100 focus:shadow">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useUserStore } from '@/stores/user';
import { onMounted, ref } from 'vue';

interface User {
  userID: number;
  username: string;
  email: string;
  roleID: number;
  status: string;
}

const users = ref<User[]>([]);

const userStore = useUserStore();

const fetchUsers = async () => {
  try {
    const list = await userStore.getUsers();
    console.log('Data from API:', JSON.parse(JSON.stringify(list))); // Verifica los datos
    users.value = list.data
    console.log('Users:', users.value);
  } catch (error) {
    console.error('Error fetching users:', error);
  }
};

const editUser = (user) => {
  // Lógica para editar usuario
  console.log('Edit user:', user);
}

const deleteUser = async (userId) => {
  // Lógica para eliminar usuario
  await userStore.deleteUser(userId);
  fetchUsers();
}

onMounted(() => {
  fetchUsers();
  console.log('Users:', users.value);
});
</script>
