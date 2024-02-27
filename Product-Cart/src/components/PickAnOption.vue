<template>
  <div class="bg-white w-2/6 drop-shadow-lg pt-4 pb-10">
    <div class="flex items-center justify-between border-b border-gray-300 p-1 px-2">
      <p class="text-sm">Pick an option</p>
      <div class="flex items-center justify-center h-6 w-6 rounded-full bg-gray-50 cursor-pointer">
        <div>
          <svg
            width="20"
            height="20"
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

    <div class="px-4">
      <div class="py-4">
        <h1 class="text-sm font-bold">Create a page</h1>
        <p class="text-xs">
          or start with a <a class="text-purple-600 underline" href="">template</a>
        </p>
      </div>

      <div class="text-sm">
        <p class="font-semibold">What is your product name</p>
        <input
          class="w-full p-1 border border-gray-300 rounded-md focus:outline-none focus:border-[#6231ef] mt-2"
          type="text"
          placeholder="Product name"
        />
      </div>

      <div class="text-sm py-8">
        <p class="font-semibold">Set a product pricing</p>
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
      </div>

      <div>
        <h1 class="font-semibold text-sm">Select product type</h1>
        <div class="grid grid-cols-2 gap-4 mt-2">
          <div
            class="p-4 py-8 bg-[#f9fafb] rounded-md drop-shadow-lg hover:border-2 border-[#6231ef]"
          >
            <div class="flex flex-col gap-2 items-center">
              <div>
                <svg
                  width="30"
                  height="35"
                  viewBox="0 0 39 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M34.6667 24.0417V12.1667C34.6667 8.66636 34.6667 6.9162 33.9855 5.57925C33.3863 4.40323 32.4302 3.4471 31.2542 2.8479C29.9172 2.16669 28.167 2.16669 24.6667 2.16669H11.3334C7.83305 2.16669 6.08288 2.16669 4.74593 2.8479C3.56992 3.4471 2.61379 4.40323 2.01458 5.57925C1.33337 6.9162 1.33337 8.66636 1.33337 12.1667V33.8334C1.33337 37.3337 1.33337 39.0838 2.01458 40.4208C2.61379 41.5968 3.56992 42.5529 4.74593 43.1521C6.08288 43.8334 7.83295 43.8334 11.3331 43.8334H19.0417M22.1667 20.9167H9.66671M13.8334 29.25H9.66671M26.3334 12.5834H9.66671M24.25 37.5834L30.5 43.8334M30.5 43.8334L36.75 37.5834M30.5 43.8334V31.3334"
                    stroke="#1D2939"
                    stroke-width="2.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <h1 class="font-semibold text-sm">Digital product</h1>
              <p class="text-xs">Links, pdf</p>
            </div>
          </div>

          <div
            class="p-4 py-8 bg-[#f9fafb] rounded-md drop-shadow-lg hover:border-2 border-[#6231ef]"
          >
            <div class="flex flex-col gap-2 items-center">
              <div>
                <svg
                  width="30"
                  height="35"
                  viewBox="0 0 39 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M34.6667 24.0417V12.1667C34.6667 8.66636 34.6667 6.9162 33.9855 5.57925C33.3863 4.40323 32.4302 3.4471 31.2542 2.8479C29.9172 2.16669 28.167 2.16669 24.6667 2.16669H11.3334C7.83305 2.16669 6.08288 2.16669 4.74593 2.8479C3.56992 3.4471 2.61379 4.40323 2.01458 5.57925C1.33337 6.9162 1.33337 8.66636 1.33337 12.1667V33.8334C1.33337 37.3337 1.33337 39.0838 2.01458 40.4208C2.61379 41.5968 3.56992 42.5529 4.74593 43.1521C6.08288 43.8334 7.83295 43.8334 11.3331 43.8334H19.0417M22.1667 20.9167H9.66671M13.8334 29.25H9.66671M26.3334 12.5834H9.66671M24.25 37.5834L30.5 43.8334M30.5 43.8334L36.75 37.5834M30.5 43.8334V31.3334"
                    stroke="#1D2939"
                    stroke-width="2.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <h1 class="font-semibold text-sm">Physical product</h1>
              <p class="text-xs">Physical products</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
