<script setup>
import MoreDetailsPage from '../components/MoreDetailsPage.vue'
import UpsellPage from '../components/UpsellPage.vue'
import AdvancedOptionPage from '../components/AdvancedOptionPage.vue'
</script>

<template>
  <div class="grid grid-cols-[1fr_10fr_1fr] gap-4 bg-[#f9fafb]">
    <!-- back section -->
    <div class="m-8">
      <div class="flex items-center gap-2">
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 12H4M4 12L10 18M4 12L10 6"
            stroke="#6231EF"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <span class="text-base text-[#6231ef]">Back</span>
      </div>
    </div>

    <!-- main section -->
    <div class="mt-8 mx-4">
      <!-- create product section -->
      <div>
        <h1 class="text-lg font-medium">Create products</h1>
        <p class="text-sm text-gray-500">Your current sales summary and activity</p>
        <div
          class="flex items-center gap-2 border border-green-300 mt-2 px-6 p-1 bg-[#f6fef9] rounded-md"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none">
            <path
              stroke="#6CE9A6"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.333"
              d="m5 8 2 2 4-4m3.667 2A6.667 6.667 0 1 1 1.333 8a6.667 6.667 0 0 1 13.334 0Z"
            />
          </svg>
          <p class="text-sm">
            <span class="font-medium">Success! </span>Congratulations your product has been added,
            you can view at
            <span class="font-medium">www.something.com</span>
          </p>
        </div>
      </div>

      <!-- product details section -->
      <div class="bg-white border border-gray-300 my-3 px-6 p-4 rounded-md">
        <div>
          <div class="py-4 border-b border-gray-300">
            <h1 class="text-base font-medium">Product details</h1>
            <p class="text-sm text-gray-500">Basic product details</p>
          </div>
          <div class="text-sm mt-6">
            <p>Product Name</p>
            <input
              class="w-full p-1 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#6231ef] mt-2"
              type="text"
              placeholder="Product name"
            />
          </div>
          <div class="text-sm mt-6">
            <p>Images</p>
            <div class="border border-gray-300 rounded-md mt-2">
              <div class="flex items-center justify-center gap-3 p-4">
                <div
                  class="w-[30px] h-[30px] bg-gray-100 flex items-center justify-center rounded-full"
                >
                  <svg
                    width="15"
                    height="17"
                    viewBox="0 0 17 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.66667 16.5H14.3333C15.2538 16.5 16 15.7538 16 14.8333V3.16667C16 2.24619 15.2538 1.5 14.3333 1.5H2.66667C1.74619 1.5 1 2.24619 1 3.16667V14.8333C1 15.7538 1.74619 16.5 2.66667 16.5ZM2.66667 16.5L11.8333 7.33333L16 11.5M6.83333 6.08333C6.83333 6.77369 6.27369 7.33333 5.58333 7.33333C4.89298 7.33333 4.33333 6.77369 4.33333 6.08333C4.33333 5.39298 4.89298 4.83333 5.58333 4.83333C6.27369 4.83333 6.83333 5.39298 6.83333 6.08333Z"
                      stroke="#475467"
                      stroke-width="1.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <p class="text-center text-xs">
                    Drag and drop your product images or browse <br />
                    SVG, PNG, JPG or GIF (max. 800x400px)
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-2 w-[20%]">
            <p class="text-sm">Sales price</p>
            <div class="relative flex items-center">
              <input
                class="p-1 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#6231ef] mt-2"
                type="text"
                placeholder="$150"
              />

              <div class="absolute right-4">
                <div class="flex items-center gap-1 p-2 mt-2">
                  <p>USD</p>

                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1.5L6 6.5L11 1.5"
                      stroke="#667085"
                      stroke-width="1.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div class="text-sm mt-6">
            <p>Description</p>
            <textarea
              class="w-full h-[100px] p-1 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#6231ef] mt-2"
              type="text"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
