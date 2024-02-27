<template>
  <div class="py-6 px-3 border border-gray-300 bg-[#f9fafb]">
    <div class="flex items-center justify-between p-1 px-2">
      <p class="text-sm text-gray-400">PREVIEW</p>
      <div class="flex items-center justify-center h-6 w-6 rounded-md bg-white cursor-pointer">
        <div>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 15.75H12.15C13.4101 15.75 14.0402 15.75 14.5215 15.5048C14.9448 15.289 15.289 14.9448 15.5048 14.5215C15.75 14.0402 15.75 13.4101 15.75 12.15V5.85C15.75 4.58988 15.75 3.95982 15.5048 3.47852C15.289 3.05516 14.9448 2.71095 14.5215 2.49524C14.0402 2.25 13.4101 2.25 12.15 2.25H5.85C4.58988 2.25 3.95982 2.25 3.47852 2.49524C3.05516 2.71095 2.71095 3.05516 2.49524 3.47852C2.25 3.95982 2.25 4.58988 2.25 5.85V6M8.625 9.375L12.75 5.25M12.75 5.25H9M12.75 5.25V9M4.65 15.75H6.6C7.44008 15.75 7.86012 15.75 8.18099 15.5865C8.46323 15.4427 8.6927 15.2132 8.83651 14.931C9 14.6101 9 14.1901 9 13.35V11.4C9 10.5599 9 10.1399 8.83651 9.81901C8.6927 9.53677 8.46323 9.3073 8.18099 9.16349C7.86012 9 7.44008 9 6.6 9H4.65C3.80992 9 3.38988 9 3.06901 9.16349C2.78677 9.3073 2.5573 9.53677 2.41349 9.81901C2.25 10.1399 2.25 10.5599 2.25 11.4V13.35C2.25 14.1901 2.25 14.6101 2.41349 14.931C2.5573 15.2132 2.78677 15.4427 3.06901 15.5865C3.38988 15.75 3.80992 15.75 4.65 15.75Z"
              stroke="#667085"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
    <div>
      <img src="../assets/PreviewImage.png" alt="" />
    </div>

    <div class="grid grid-cols-[2.5fr_2fr] gap-2 px-4 mt-[-3rem] items-start">
      <div class="bg-white drop-shadow-md">
        <div class="p-3 text-sm">
          <h1 class="font-semibold text-base">My product Title</h1>

          <div class="my-2">
            <p>
              Enim corrupti beatae hic qui ea ut ut. Ut dolor non eveniet quo animi magni.
              Voluptatem mollitia et vel occaecati. Nemo aut soluta voluptatem consequuntur.
            </p>
          </div>
          <div>
            <p class="text-xs text-gray-400">Cost</p>
            <h1 class="font-bold text-base">$24,000</h1>
          </div>
        </div>
        <div class="mb-4">
          <img class="w-full" src="../assets/FoodFrame.png" alt="" />
        </div>
      </div>

      <!-- payment details component -->
      <div class="p-2 bg-white drop-shadow-md">
        <h1 class="font-semibold text-base">Payment details</h1>
        <div class="mt-2">
          <div>
            <p>Name on card</p>
            <div>
              <input
                class="w-full p-1 border border-gray-300 rounded-md focus:outline-none focus:border-[#6231ef] focus:border my-2"
                type="text"
                placeholder=""
              />
            </div>
          </div>

          <div>
            <p>Email</p>
            <div>
              <input
                class="w-full p-1 border border-gray-300 rounded-md focus:outline-none focus:border-[#6231ef] focus:border mt-2"
                type="Email"
                placeholder=""
              />
            </div>
          </div>

          <div class="flex items-center relative my-2">
            <input
              class="w-full p-1 pl-7 border border-gray-300 rounded-md focus:outline-none focus:border-[#6231ef] focus:border mt-2"
              type="text"
              placeholder="1234-5678-1234"
            />

            <img
              class="absolute left-2 bottom-2 cursor-pointer"
              src="../assets/Mastercard.png"
              alt=""
            />
          </div>
          <div class="flex items-center gap-2 my-4">
            <div class="relative flex items-center w-1/3">
              <div>
                <p>Expiry</p>
                <input
                  class="w-full p-1 border border-gray-300 rounded-md focus:outline-none focus:border-[#6231ef] focus:border mt-2"
                  type="text"
                  placeholder="11/2025"
                />
              </div>
            </div>

            <div class="relative flex items-center w-1/3">
              <div>
                <p>CVV</p>
                <input
                  class="w-full p-1 border border-gray-300 rounded-md focus:outline-none focus:border-[#6231ef] focus:border mt-2"
                  type="password"
                  placeholder=""
                />
              </div>
            </div>
          </div>
        </div>
        <div class="my-4">
          <button class="w-full p-1 bg-[#6231ef] rounded-md text-white">Submit</button>
        </div>
      </div>
    </div>
  </div>
</template>
