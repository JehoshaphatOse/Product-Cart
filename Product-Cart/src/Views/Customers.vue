<script setup>
import Sidenav from '../components/Sidenav.vue'
</script>

<template>
  <div class="grid grid-cols-[1fr_3fr] gap-4 bg-[#f9fafb]">
    <div class="h-screen bg-white p-3">
      <Sidenav />
    </div>

    <!-- main section -->
    <div class="p-8 px-10">
      <!-- header container -->
      <div class="flex items-center justify-between">
        <div>
          <h1 class="text-lg font-medium">Customer activity</h1>
          <p class="text-sm text-gray-500">Customer activity report</p>
        </div>
        <div class="flex gap-2">
          <button
            class="bg-white flex items-center gap-2 text-sm border border-gray-300 p-1 px-2 rounded-md"
          >
            <svg
              width="19"
              height="19"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.66667 14.1666L10 17.4999M10 17.4999L13.3333 14.1666M10 17.4999V9.99994M17.4 15.0749C18.1245 14.5655 18.6678 13.8384 18.9511 12.9992C19.2343 12.1601 19.2428 11.2525 18.9753 10.4081C18.7078 9.56381 18.1782 8.82669 17.4634 8.30375C16.7486 7.78081 15.8857 7.49925 15 7.49994H13.95C13.6994 6.52317 13.2304 5.61598 12.5784 4.84668C11.9265 4.07737 11.1085 3.46599 10.186 3.05857C9.26356 2.65115 8.26071 2.4583 7.25294 2.49454C6.24518 2.53078 5.25877 2.79517 4.36797 3.2678C3.47717 3.74043 2.70519 4.40898 2.11016 5.22314C1.51513 6.03729 1.11255 6.97582 0.932723 7.96807C0.752897 8.96032 0.800514 9.98044 1.07199 10.9516C1.34346 11.9228 1.83172 12.8198 2.50001 13.5749"
                stroke="#344054"
                stroke-width="1.67"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span>Export report</span>
          </button>
          <button
            class="flex items-center gap-2 bg-[#6231ef] p-1 px-2 rounded-md text-white text-sm"
          >
            <svg
              width="19"
              height="19"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 4.16663V15.8333M4.16667 9.99996H15.8333"
                stroke="white"
                stroke-width="1.67"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span>Add product</span>
          </button>
        </div>
      </div>
      <div class="flex items-center justify-between mt-6">
        <div class="border border-gray-300 p-1 rounded-md px-2 bg-white">
          <p>No of customers 1</p>
        </div>
        <div>
          <button
            class="bg-white flex items-center gap-2 text-sm border border-gray-300 p-2 px-3 rounded-md"
          >
            <svg
              width="19"
              height="19"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 10H15M2.5 5H17.5M7.5 15H12.5"
                stroke="#344054"
                stroke-width="1.67"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span>Filters</span>
          </button>
        </div>
      </div>

      <!-- products table section -->
      <table class="w-full border-x mt-10">
        <thead class="bg-gray-100 border-y text-gray-500 font-normal text-sm">
          <tr class="">
            <th class="text-start">
              <div class="flex items-center gap-2 p-1">
                <input type="checkbox" />
                <p>Name</p>
              </div>
            </th>

            <th class="text-start">
              <div class="flex items-center gap-1">
                <p>Email</p>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.00001 3.33333V12.6667M8.00001 12.6667L12.6667 8M8.00001 12.6667L3.33334 8"
                    stroke="#667085"
                    stroke-width="1.33333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </th>

            <th class="text-start">
              <div class="flex items-center gap-1">
                <p>Phone Number</p>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.00001 3.33333V12.6667M8.00001 12.6667L12.6667 8M8.00001 12.6667L3.33334 8"
                    stroke="#667085"
                    stroke-width="1.33333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </th>
            <th class="text-start w-1/6">Created at</th>

            <th class="text-start">Actions</th>
          </tr>
        </thead>
        <tbody class="text-sm">
          <tr class="border-b">
            <td class="pl-1 align-text-top font-normal">
              <div class="flex items-center gap-2 p-1">
                <input type="checkbox" />
                <p class="font-medium">Product 1</p>
              </div>
            </td>
            <td class="py-2 pl-1 align-text-top">
              <p>somethingsmall@gmail.com</p>
            </td>
            <td class="py-4 align-text-top">495-433-0044</td>
            <td class="py-2 align-text-top">
              <p class="text-start">12-12-23</p>
            </td>

            <td>
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="18" fill="none">
                <path
                  stroke="#98A2B3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.667"
                  d="M10.667 10.833a.833.833 0 1 0 0-1.666.833.833 0 0 0 0 1.666ZM10.667 5a.833.833 0 1 0 0-1.667.833.833 0 0 0 0 1.667ZM10.667 16.667a.833.833 0 1 0 0-1.667.833.833 0 0 0 0 1.667Z"
                />
              </svg>
            </td>
          </tr>

          <tr class="border-b">
            <td class="pl-1 align-text-top font-normal">
              <div class="flex items-center gap-2 p-1">
                <input type="checkbox" />
                <p class="font-medium">Product 1</p>
              </div>
            </td>
            <td class="py-2 pl-1 align-text-top">
              <p>somethingsmall@gmail.com</p>
            </td>
            <td class="py-4 align-text-top">495-433-0044</td>
            <td class="py-2 align-text-top">
              <p class="text-start">12-12-23</p>
            </td>

            <td>
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="18" fill="none">
                <path
                  stroke="#98A2B3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.667"
                  d="M10.667 10.833a.833.833 0 1 0 0-1.666.833.833 0 0 0 0 1.666ZM10.667 5a.833.833 0 1 0 0-1.667.833.833 0 0 0 0 1.667ZM10.667 16.667a.833.833 0 1 0 0-1.667.833.833 0 0 0 0 1.667Z"
                />
              </svg>
            </td>
          </tr>
        </tbody>
      </table>

      <div class="flex items-center justify-center mt-4">
        <div class="flex gap-4 items-center text-sm">
          <div class="flex items-center justify-center border rounded-md p-1 px-2">
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.3334 9.99999H4.66669M4.66669 9.99999L10.5 15.8333M4.66669 9.99999L10.5 4.16666"
                stroke="#344054"
                stroke-width="1.67"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div>
            <p>1</p>
          </div>
          <div>
            <p>2</p>
          </div>
          <div>
            <p>3</p>
          </div>
          <div>
            <p>4</p>
          </div>
          <div>
            <p>...</p>
          </div>
          <div>
            <p>8</p>
          </div>
          <div>
            <p>9</p>
          </div>
          <div>
            <p>10</p>
          </div>
          <div class="flex items-center justify-center border rounded-md p-1 px-2">
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.66667 9.99999H16.3333M16.3333 9.99999L10.5 4.16666M16.3333 9.99999L10.5 15.8333"
                stroke="#344054"
                stroke-width="1.67"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
