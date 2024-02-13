<script setup>
import Sidenav from '../components/Sidenav.vue'
</script>
<template>
  <div class="grid grid-cols-[1fr_3fr] bg-[#f9fafb]">
    <div class="bg-white p-3">
      <Sidenav />
    </div>
    <div class="border p-8">
      <div class="bg-white h-screen border border-gray-300 my-3 px-6 p-4 rounded-md">
        <div class="py-4 border-b border-gray-300">
          <h1 class="text-base font-medium">Payment gateway</h1>
          <p class="text-sm text-gray-500">Add Payment option to collect your money</p>
        </div>
        <div class="border border-gray-300 rounded-md my-8 p-2">
          <div class="flex gap-3 items-center">
            <button class="border border-gray-200 px-1 rounded-md text-blue-600 text-sm">
              Strip
            </button>
            <div>
              <p><span class="font-medium text-sm">Strip</span>(1234)</p>
              <p class="text-sm text-gray-500">Collecting payment with strip</p>
            </div>
          </div>
        </div>
        <div>
          <div>
            <button class="flex items-center gap-2 text-sm p-1 px-2 rounded-md">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.0001 4.1665V15.8332M4.16675 9.99984H15.8334"
                  stroke="#6941C6"
                  stroke-width="1.67"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span class="text-sm">Add payment method</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
