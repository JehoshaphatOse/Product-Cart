<script setup>
import Sidenav from '../components/Sidenav.vue'
</script>
<template>
  <div class="grid grid-cols-[1fr_3fr] bg-[#f9fafb]">
    <div class="bg-white p-3">
      <Sidenav />
    </div>
    <div class="border p-8">
      <div class="bg-white border border-gray-300 my-3 px-6 p-4 rounded-md">
        <div class="py-4 border-b border-gray-300">
          <h1 class="text-base font-medium">Profile setting</h1>
          <p class="text-sm text-gray-500">Profile setting</p>
        </div>
        <div class="grid grid-cols-[1fr_3fr] mt-6 gap-20">
          <div>
            <div class="flex flex-col justify-center items-center gap-2">
              <p class="text-sm">Store logo</p>
              <div
                class="border rounded-full w-[120px] h-[120px] flex items-center justify-center bg-[#f9f5ff] shadow-sm"
              >
                <div class="flex items-center justify-center">
                  <svg
                    width="80"
                    height="80"
                    viewBox="0 0 80 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M66.6666 70V63.3333C66.6666 59.7971 65.2619 56.4057 62.7614 53.9052C60.2609 51.4048 56.8695 50 53.3333 50H26.6666C23.1304 50 19.739 51.4048 17.2386 53.9052C14.7381 56.4057 13.3333 59.7971 13.3333 63.3333V70M53.3333 23.3333C53.3333 30.6971 47.3638 36.6667 40 36.6667C32.6362 36.6667 26.6666 30.6971 26.6666 23.3333C26.6666 15.9695 32.6362 10 40 10C47.3638 10 53.3333 15.9695 53.3333 23.3333Z"
                      stroke="#7F56D9"
                      stroke-width="6.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <button
                  class="flex items-center gap-2 text-sm border border-gray-300 p-1 px-2 rounded-md"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.5 12.5V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V12.5M14.1667 6.66667L10 2.5M10 2.5L5.83333 6.66667M10 2.5V12.5"
                      stroke="#344054"
                      stroke-width="1.67"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <span class="text-sm">Upload image</span>
                </button>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div class="text-sm mt-6">
                <p>Store Name</p>
                <input
                  class="w-full p-1 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#6231ef] mt-2"
                  type="text"
                  placeholder="Product name"
                />
              </div>

              <div class="text-sm mt-6">
                <p>Store Username</p>
                <input
                  class="w-full p-1 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#6231ef] mt-2"
                  type="text"
                  placeholder="@storename"
                />
              </div>

              <div class="text-sm mt-6">
                <p>Email Address</p>
                <input
                  class="w-full p-1 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#6231ef] mt-2"
                  type="text"
                  placeholder="store@gmail.com"
                />
              </div>

              <div class="text-sm mt-6">
                <p>Store description</p>
                <textarea
                  class="w-full h-[70px] p-1 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#6231ef] mt-2"
                  type="text"
                />
              </div>

              <div class="text-sm mt-6">
                <p>Store Twitter handle</p>
                <input
                  class="w-full p-1 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#6231ef] mt-2"
                  type="text"
                  placeholder="@username"
                />
              </div>

              <div class="text-sm mt-6">
                <p>Facebook handle</p>
                <input
                  class="w-full p-1 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#6231ef] mt-2"
                  type="text"
                  placeholder="@username"
                />
              </div>

              <div class="text-sm mt-6">
                <p>Instagram handle</p>
                <input
                  class="w-full p-1 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#6231ef] mt-2"
                  type="text"
                  placeholder="@username"
                />
              </div>
              <div class="flex justify-end items-center mt-4">
                <button class="bg-[#6231ef] p-1 px-2 rounded-md text-sm text-white">
                  Update settings
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
