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

    <div class="py-5 px-2 mt-6 border-b border-gray-300">
      <h1 class="font-medium">Advanced options</h1>
    </div>

    <div class="text-sm mt-6 w-2/6">
      <p>Thank you page</p>
      <div class="flex items-center gap-10 mt-2 p-1 bg-gray-200 rounded-md">
        <div class="flex items-center gap-2 bg-white p-1 px-4 rounded-md">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.5 8.25H6M7.5 11.25H6M12 5.25H6M15 7.875V5.1C15 3.83988 15 3.20982 14.7548 2.72852C14.539 2.30516 14.1948 1.96095 13.7715 1.74524C13.2902 1.5 12.6601 1.5 11.4 1.5H6.6C5.33988 1.5 4.70982 1.5 4.22852 1.74524C3.80516 1.96095 3.46095 2.30516 3.24524 2.72852C3 3.20982 3 3.83988 3 5.1V12.9C3 14.1601 3 14.7902 3.24524 15.2715C3.46095 15.6948 3.80516 16.039 4.22852 16.2548C4.70982 16.5 5.33988 16.5 6.6 16.5H8.625M16.5 16.5L15.375 15.375M16.125 13.5C16.125 14.9497 14.9497 16.125 13.5 16.125C12.0503 16.125 10.875 14.9497 10.875 13.5C10.875 12.0503 12.0503 10.875 13.5 10.875C14.9497 10.875 16.125 12.0503 16.125 13.5Z"
              stroke="#667085"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span>My page</span>
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

          <span>External link</span>
        </div>
      </div>

      <div class="text-sm mt-6">
        <p>Redirect URL</p>

        <input
          class="w-full p-1 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#6231ef] mt-2"
          type="text"
          placeholder="http://weblink.com"
        />
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

    <div class="text-sm mt-6">
      <p>Embed HTML/Scripts in Header</p>
      <textarea
        class="w-full h-[100px] p-1 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#6231ef] mt-2"
        type="text"
      />
    </div>
  </div>
</template>
