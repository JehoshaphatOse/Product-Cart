<template>
  <div class="bg-white border border-gray-300 my-3 px-6 p-4 rounded-md">
    <div
      class="flex text-gray-500 text-base items-center justify-between border-b-[1.5px] border-gray-300"
    >
      <a
        class="active:text-[#6231ef] active:border-b-[#6231ef] active:border-b-[1.5px] py-3 px-12"
        href=""
        >More details</a
      >
      <a
        class="active:text-[#6231ef] active:border-b-[#6231ef] active:border-b-[1.5px] py-3 px-12"
        href=""
        >Upsell</a
      >
      <a
        class="active:text-[#6231ef] active:border-b-[#6231ef] active:border-b-[1.5px] py-3 px-12"
        href=""
        >Advanced options</a
      >
      <a
        class="active:text-[#6231ef] active:border-b-[#6231ef] active:border-b-[1.5px] py-3 px-12"
        href=""
        >Payment</a
      >
    </div>

    <div class="text-sm mt-6 w-[200px]">
      <p>Product type</p>
      <div class="relative flex items-center">
        <input
          class="p-1 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#6231ef] mt-2"
          type="text"
          placeholder="Digital product"
        />
        <div class="absolute right-9 mt-3">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 6L8 10L12 6"
              stroke="#98A2B3"
              stroke-width="1.33333"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>

    <div class="text-sm mt-6">
      <p>File access type</p>
      <div class="flex items-center gap-10 mt-2 w-[300px] p-1 bg-gray-200 rounded-md">
        <div class="flex items-center gap-2 bg-white p-1 px-4 rounded-md">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.75 1.5H4.5C4.10218 1.5 3.72064 1.65804 3.43934 1.93934C3.15804 2.22064 3 2.60218 3 3V15C3 15.3978 3.15804 15.7794 3.43934 16.0607C3.72064 16.342 4.10218 16.5 4.5 16.5H13.5C13.8978 16.5 14.2794 16.342 14.5607 16.0607C14.842 15.7794 15 15.3978 15 15V6.75M9.75 1.5L15 6.75M9.75 1.5V6.75H15"
              stroke="#667085"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span>Downloadable file</span>
        </div>

        <div class="flex items-center gap-2">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.625 5.25H5.25C3.17893 5.25 1.5 6.92893 1.5 9C1.5 11.0711 3.17893 12.75 5.25 12.75H6.75C8.82107 12.75 10.5 11.0711 10.5 9M12.375 12.75H12.75C14.8211 12.75 16.5 11.0711 16.5 9C16.5 6.92893 14.8211 5.25 12.75 5.25H11.25C9.17893 5.25 7.5 6.92893 7.5 9"
              stroke="#667085"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <span>Link</span>
        </div>
      </div>
    </div>

    <div class="text-sm mt-6">
      <div class="mt-6">
        <p>Max file size 500MB</p>
      </div>
      <p class="text-sm mt-4">
        To upload multiple files or a bundle, simply zip (compress) all the files to a .zip file.
        Ensure it's .zip and not .rar.
      </p>
      <div class="border border-gray-300 rounded-md mt-1">
        <div class="flex items-center justify-center gap-3 p-4">
          <div class="w-[30px] h-[30px] bg-gray-100 flex items-center justify-center rounded-full">
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

    <div class="text-sm flex items-center gap-x-2 mt-6">
      <input type="checkbox" />
      <p>Automatically redirect the buyer to an external URL after a purchase</p>
    </div>

    <div class="text-sm mt-6">
      <p>Redirect URL</p>

      <input
        class="w-full p-1 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#6231ef] mt-2"
        type="text"
        placeholder="http://weblink.com"
      />
    </div>
  </div>
</template>
