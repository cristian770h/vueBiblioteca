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
                  Export to CSV
                </button>
              </div>
            </div>
          </div>
  
          <!-- Tabla -->
          <div class="mt-6 overflow-hidden rounded-xl border shadow">
            <table class="min-w-full border-separate border-spacing-y-2 border-spacing-x-2">
              <thead class="hidden border-b lg:table-header-group">
                <tr>
                  <td width="50%" class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">Username</td>
                  <td class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">Correo</td>
                  <td class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">Amount</td>
                  <td class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">Status</td>
                </tr>
              </thead>
  
              <tbody class="lg:border-gray-300">
                <tr>
                  <td width="50%" class="whitespace-no-wrap py-4 text-sm font-bold text-gray-900 sm:px-6">
                    Standard Plan - Feb 2022
                    <div class="mt-1 lg:hidden">
                      <p class="font-normal text-gray-500">07 February, 2022</p>
                    </div>
                  </td>
                  <td class="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">07 February, 2022</td>
                  <td class="whitespace-no-wrap py-4 px-6 text-right text-sm text-gray-600 lg:text-left">
                    $59.00
                    <div class="flex mt-1 ml-auto w-fit items-center rounded-full bg-blue-600 py-2 px-3 text-left text-xs font-medium text-white lg:hidden">Complete</div>
                  </td>
                  <td class="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                    <div class="inline-flex items-center rounded-full bg-blue-600 py-2 px-3 text-xs text-white">Complete</div>
                  </td>
                </tr>
  
                <!-- Más filas de la tabla -->
                <tr>
                  <td width="50%" class="whitespace-no-wrap py-4 text-sm font-bold text-gray-900 sm:px-6">
                    Standard Plan - Jan 2022
                    <div class="mt-1 lg:hidden">
                      <p class="font-normal text-gray-500">09 January, 2022</p>
                    </div>
                  </td>
                  <td class="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">09 January, 2022</td>
                  <td class="whitespace-no-wrap py-4 px-6 text-right text-sm text-gray-600 lg:text-left">
                    $59.00
                    <div class="flex mt-1 ml-auto w-fit items-center rounded-full bg-red-200 py-1 px-2 text-left font-medium text-red-500 lg:hidden">Canceled</div>
                  </td>
                  <td class="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                    <div class="inline-flex items-center rounded-full bg-red-200 py-1 px-2 text-red-500">Canceled</div>
                  </td>
                </tr>
  
                <!-- Más filas de la tabla -->
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
import { useUserStore } from '@/stores/user';
import { ref } from 'vue';

const users = ref([])
 
const userStore=useUserStore();
/*
const fetchUsers = async()=>{
  await userStore.getUsers();
users.value=userStore.getUsers()
}*/





  </script>
  
 