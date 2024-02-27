<template>
  <div class="py-6 px-3 border border-gray-300">
    <div class="text-sm">
      <div class="pb-2">
        <h1 class="font-semibold text-lg">Product pricing</h1>
      </div>

      <p class="text-xs">Pricing</p>
      <div class="flex items-center gap-3">
        <input
          class="w-full p-1 border border-gray-300 rounded-md focus:outline-none focus:border-[#6231ef] focus:border-2 mt-2"
          type="text"
          placeholder="One time"
        />
        <input
          class="w-full p-1 border border-gray-300 rounded-md focus:outline-none focus:border-[#6231ef] focus:border-2 mt-2"
          type="text"
          placeholder="Subcription"
        />
      </div>
      <div class="mt-4">
        <div class="flex items-center gap-4">
          <div class="relative flex items-center w-1/3">
            <div>
              <p>price</p>
              <input
                class="w-full p-1 border border-gray-300 rounded-md focus:outline-none focus:border-[#6231ef] focus:border-2 mt-2"
                type="text"
                placeholder="One time"
              />
            </div>
          </div>

          <div class="relative flex items-center w-1/3">
            <div>
              <p class="text-xs">Currency</p>
              <input
                class="w-full p-1 border border-gray-300 rounded-md focus:outline-none focus:border-[#6231ef] focus:border-2 mt-2"
                type="text"
                placeholder="USD"
              />
            </div>
            <div class="absolute right-2 bottom-2">
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

          <div class="relative flex items-center w-1/3">
            <div>
              <p class="text-xs">Repeats</p>
              <input
                class="w-full p-1 border border-gray-300 rounded-md focus:outline-none focus:border-[#6231ef] focus:border-2 mt-2"
                type="text"
                placeholder="Monthly"
              />
            </div>
            <div class="absolute right-2 bottom-2">
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

      <div class="mt-4">
        <button>
          <div class="flex items-center gap-2">
            <div>
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
            </div>
            <p>Add more</p>
          </div>
        </button>
        <div class="mt-4">
          <button class="p-1 px-6 bg-[#6231ef] rounded-md text-white">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>
