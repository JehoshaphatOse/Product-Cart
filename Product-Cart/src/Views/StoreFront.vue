<script setup>
import Logo from '../components/icons/Logo.vue'
</script>
<template>
  <div class="bg-[#f2f0f6] relative">
    <!-- header -->
    <div
      class="bg-white flex items-center justify-between p-3 px-6 fixed top-0 left-0 right-0 z-40"
    >
      <div class="flex gap-1">
        <div>
          <h1 class="font-medium text-lg">My Logo</h1>
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

    <!-- main body -->
    <div class="flex-1 mt-[4rem]">
      <div class="bg-gradient-to-r from-[#5f36ef] to-[#1db9ef]">
        <div class="flex gap-6 items-center px-[8rem] py-[2rem]">
          <div class="w-[90px] h-[90px] bg-[#f9f5ff] rounded-full flex items-center justify-center">
            <div>
              <svg
                width="48"
                height="49"
                viewBox="0 0 48 49"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M40 42.5V38.5C40 36.3783 39.1571 34.3434 37.6568 32.8431C36.1566 31.3429 34.1217 30.5 32 30.5H16C13.8783 30.5 11.8434 31.3429 10.3431 32.8431C8.84285 34.3434 8 36.3783 8 38.5V42.5M32 14.5C32 18.9183 28.4183 22.5 24 22.5C19.5817 22.5 16 18.9183 16 14.5C16 10.0817 19.5817 6.5 24 6.5C28.4183 6.5 32 10.0817 32 14.5Z"
                  stroke="#7F56D9"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
          <div class="text-white leading-6">
            <p>Olivia Ryhe</p>
            <h1 class="text-2xl font-light">My luxury store</h1>
            <div class="flex items-center gap-2 mt-3">
              <div>
                <svg
                  width="12"
                  height="10"
                  viewBox="0 0 12 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.5 0.500145C11.0212 0.837884 10.4911 1.0962 9.93 1.26515C9.62887 0.9189 9.22867 0.673491 8.78352 0.562108C8.33837 0.450725 7.86975 0.478743 7.44104 0.642372C7.01233 0.806001 6.64422 1.09735 6.38649 1.477C6.12876 1.85666 5.99385 2.30631 6 2.76515V3.26514C5.12132 3.28793 4.25064 3.09305 3.4655 2.69787C2.68037 2.30268 2.00516 1.71946 1.5 1.00015C1.5 1.00015 -0.5 5.50014 4 7.50014C2.97026 8.19913 1.74358 8.54961 0.5 8.50014C5 11.0001 10.5 8.50014 10.5 2.75014C10.4995 2.61087 10.4861 2.47194 10.46 2.33515C10.9703 1.83189 11.3304 1.1965 11.5 0.500145Z"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div>
                <svg
                  width="7"
                  height="12"
                  viewBox="0 0 7 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 1H4.5C3.83696 1 3.20107 1.26339 2.73223 1.73223C2.26339 2.20107 2 2.83696 2 3.5V5H0.5V7H2V11H4V7H5.5L6 5H4V3.5C4 3.36739 4.05268 3.24021 4.14645 3.14645C4.24021 3.05268 4.36739 3 4.5 3H6V1Z"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.75 3.25H8.755M3.5 1H8.5C9.88071 1 11 2.11929 11 3.5V8.5C11 9.88071 9.88071 11 8.5 11H3.5C2.11929 11 1 9.88071 1 8.5V3.5C1 2.11929 2.11929 1 3.5 1ZM8 5.685C8.06171 6.10112 7.99063 6.52611 7.79688 6.89951C7.60313 7.27291 7.29657 7.57571 6.92081 7.76484C6.54505 7.95397 6.11922 8.0198 5.70389 7.95297C5.28856 7.88613 4.90488 7.69004 4.60742 7.39258C4.30996 7.09512 4.11387 6.71144 4.04703 6.29611C3.9802 5.88078 4.04603 5.45495 4.23516 5.07919C4.42429 4.70343 4.72709 4.39687 5.10049 4.20312C5.47389 4.00937 5.89888 3.93829 6.315 4C6.73946 4.06294 7.13243 4.26073 7.43585 4.56415C7.73927 4.86757 7.93706 5.26054 8 5.685Z"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4 px-[8rem] py-[2rem]">
        <div class="p-2 bg-white drop-shadow-md group cursor-pointer">
          <div class="relative overflow-hidden">
            <img src="../assets/Shirt.png" alt="" />
            <div
              class="h-full w-full bg-black/50 flex items-center justify-center absolute group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300"
            >
              <button class="px-6 p-1 text-white border border-white">View</button>
            </div>
          </div>

          <div class="my-2">
            <h1 class="font-medium">Luxury hoodie</h1>
            <p class="text-gray-600">$23,000</p>
          </div>
        </div>

        <div class="p-2 bg-white drop-shadow-md group cursor-pointer">
          <div class="relative overflow-hidden">
            <img src="../assets/Shirt.png" alt="" />
            <div
              class="preview-container h-full w-full bg-black/50 flex items-center justify-center absolute group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300"
            >
              <button class="px-6 p-1 text-white border border-white">View</button>
            </div>
          </div>

          <div class="my-2">
            <h1 class="font-medium">Luxury hoodie</h1>
            <p class="text-gray-600">$23,000</p>
          </div>
        </div>

        <div class="p-2 bg-white drop-shadow-md group cursor-pointer">
          <div class="relative overflow-hidden">
            <img src="../assets/Shirt.png" alt="" />
            <div
              class="preview-container h-full w-full bg-black/50 flex items-center justify-center absolute group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300"
            >
              <button class="px-6 p-1 text-white border border-white">View</button>
            </div>
          </div>

          <div class="my-2">
            <h1 class="font-medium">Luxury hoodie</h1>
            <p class="text-gray-600">$23,000</p>
          </div>
        </div>

        <div class="p-2 bg-white drop-shadow-md group cursor-pointer">
          <div class="relative overflow-hidden">
            <img src="../assets/Shirt.png" alt="" />
            <div
              class="preview-container h-full w-full bg-black/50 flex items-center justify-center absolute group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300"
            >
              <button class="px-6 p-1 text-white border border-white">View</button>
            </div>
          </div>

          <div class="my-2">
            <h1 class="font-medium">Luxury hoodie</h1>
            <p class="text-gray-600">$23,000</p>
          </div>
        </div>

        <div class="p-2 bg-white drop-shadow-md group cursor-pointer">
          <div class="relative overflow-hidden">
            <img src="../assets/Shirt.png" alt="" />
            <div
              class="preview-container h-full w-full bg-black/50 flex items-center justify-center absolute group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300"
            >
              <button class="px-6 p-1 text-white border border-white">View</button>
            </div>
          </div>

          <div class="my-2">
            <h1 class="font-medium">Luxury hoodie</h1>
            <p class="text-gray-600">$23,000</p>
          </div>
        </div>
      </div>
      <div class="relative">
        <div
          class="flex items-center justify-center gap-1 bg-white drop-shadow-lg w-[260px] p-1 px-2 my-2 fixed bottom-0 right-0"
        >
          <p>Powered by</p>
          <div class="flex items-center gap-[1px]">
            <div>
              <Logo />
            </div>

            <span> Marketing</span> <span class="font-bold">Blocks</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- pop-up modal component -->
  <div
    class="px-[18rem] py-[8rem] h-full w-full bg-black/60 flex items-center justify-center absolute opacity-1 transition-all duration-300 top-0 bottom-0 left-0 right-0 z-50"
  >
    <div class="bg-white grid grid-cols-2 gap-2 rounded-md">
      <div class="p-1 border border-white">
        <img class="h-full" src="../assets/Frame.png" alt="" />
      </div>
      <div>
        <div class="p-3">
          <div class="flex items-center justify-between">
            <h1 class="font-medium text-xl my-4">My new product</h1>
            <div
              class="flex items-center justify-center h-8 w-8 rounded-full bg-gray-50 cursor-pointer"
            >
              <div>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.4099 11.9999L17.7099 7.70994C17.8982 7.52164 18.004 7.26624 18.004 6.99994C18.004 6.73364 17.8982 6.47825 17.7099 6.28994C17.5216 6.10164 17.2662 5.99585 16.9999 5.99585C16.7336 5.99585 16.4782 6.10164 16.2899 6.28994L11.9999 10.5899L7.70994 6.28994C7.52164 6.10164 7.26624 5.99585 6.99994 5.99585C6.73364 5.99585 6.47824 6.10164 6.28994 6.28994C6.10164 6.47825 5.99585 6.73364 5.99585 6.99994C5.99585 7.26624 6.10164 7.52164 6.28994 7.70994L10.5899 11.9999L6.28994 16.2899C6.19621 16.3829 6.12182 16.4935 6.07105 16.6154C6.02028 16.7372 5.99414 16.8679 5.99414 16.9999C5.99414 17.132 6.02028 17.2627 6.07105 17.3845C6.12182 17.5064 6.19621 17.617 6.28994 17.7099C6.3829 17.8037 6.4935 17.8781 6.61536 17.9288C6.73722 17.9796 6.86793 18.0057 6.99994 18.0057C7.13195 18.0057 7.26266 17.9796 7.38452 17.9288C7.50638 17.8781 7.61698 17.8037 7.70994 17.7099L11.9999 13.4099L16.2899 17.7099C16.3829 17.8037 16.4935 17.8781 16.6154 17.9288C16.7372 17.9796 16.8679 18.0057 16.9999 18.0057C17.132 18.0057 17.2627 17.9796 17.3845 17.9288C17.5064 17.8781 17.617 17.8037 17.7099 17.7099C17.8037 17.617 17.8781 17.5064 17.9288 17.3845C17.9796 17.2627 18.0057 17.132 18.0057 16.9999C18.0057 16.8679 17.9796 16.7372 17.9288 16.6154C17.8781 16.4935 17.8037 16.3829 17.7099 16.2899L13.4099 11.9999Z"
                    fill="gray"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div class="flex items-center gap-2 mb-4">
            <div class="bg-[#f9f5ff] w-6 h-6 rounded-full flex items-center justify-center">
              <svg
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.3333 14.5V13.1667C13.3333 12.4594 13.0524 11.7811 12.5523 11.281C12.0522 10.781 11.3739 10.5 10.6667 10.5H5.33332C4.62608 10.5 3.9478 10.781 3.4477 11.281C2.94761 11.7811 2.66666 12.4594 2.66666 13.1667V14.5M10.6667 5.16667C10.6667 6.63943 9.47275 7.83333 7.99999 7.83333C6.52723 7.83333 5.33332 6.63943 5.33332 5.16667C5.33332 3.69391 6.52723 2.5 7.99999 2.5C9.47275 2.5 10.6667 3.69391 10.6667 5.16667Z"
                  stroke="#7F56D9"
                  stroke-width="1.33333"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <p class="text-sm">Olivia Rhye</p>
          </div>
          <h1 class="font-medium text-base">Product description</h1>
          <div>
            <p class="text-sm my-2">
              Cryptodash Premium & High Quality with All Full Features of Crypto analytics.
              Cryptodash comes with unique style and niche, you can easily edit and customize all
              elements with design components which can speed up More details
            </p>
            <button>
              <p class="text-sm text-purple-600">More details</p>
            </button>
          </div>
        </div>

        <div class="p-2">
          <h1 class="font-medium text-sm my-2">Cost</h1>
          <div>
            <p class="font-semibold text-2xl">$25,000,000</p>
            <button class="bg-[#6231ef] p-1 text-white text-base px-12 my-4 rounded-md">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
