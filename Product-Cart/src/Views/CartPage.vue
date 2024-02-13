<script setup>
import Logo from '../components/icons/Logo.vue'
</script>
<template>
  <div class="p-3 px-6">
    <div class="flex items-center justify-between">
      <div class="flex gap-1">
        <div>
          <Logo />
        </div>
        <div>
          <p><span class="font-bold">Marketing</span>Blocks</p>
        </div>
      </div>
      <div class="flex gap-8">
        <div class="flex items-center gap-2">
          <p>Cart</p>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none">
              <path
                stroke="#101828"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M.75.75h3l2.01 10.043A1.5 1.5 0 0 0 7.26 12h7.29a1.5 1.5 0 0 0 1.5-1.207l1.2-6.293H4.5m3 11.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm8.25 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
          </div>
        </div>
        <div class="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
          <div>
            <h1 class="text-white">TC</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
