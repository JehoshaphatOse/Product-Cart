<template>
  <div class="border border-gray-300 pb-8 mb-4">
    <div class="py-6 px-3">
      <div>
        <h1 class="font-semibold text-lg">Content</h1>
      </div>
      <div class="mt-6 mb-3 text-base font-medium">
        <p>Product description</p>
        <textarea
          class="w-full h-[100px] p-1 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#6231ef] mt-2"
          type="text"
        />
      </div>
      <!-- product image -->
      <div>
        <p>Product image</p>
        <div
          class="flex items-center gap-4 p-4 border-2 border-dotted border-gray-300 rounded-md my-2"
        >
          <div>
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.5 3.5H7.8C6.11984 3.5 5.27976 3.5 4.63803 3.82698C4.07354 4.1146 3.6146 4.57354 3.32698 5.13803C3 5.77976 3 6.61984 3 8.3V16.7C3 18.3802 3 19.2202 3.32698 19.862C3.6146 20.4265 4.07354 20.8854 4.63803 21.173C5.27976 21.5 6.11984 21.5 7.8 21.5H17C17.93 21.5 18.395 21.5 18.7765 21.3978C19.8117 21.1204 20.6204 20.3117 20.8978 19.2765C21 18.895 21 18.43 21 17.5M19 8.5V2.5M16 5.5H22M10.5 9C10.5 10.1046 9.60457 11 8.5 11C7.39543 11 6.5 10.1046 6.5 9C6.5 7.89543 7.39543 7 8.5 7C9.60457 7 10.5 7.89543 10.5 9ZM14.99 12.4181L6.53115 20.108C6.05536 20.5406 5.81747 20.7568 5.79643 20.9442C5.77819 21.1066 5.84045 21.2676 5.96319 21.3755C6.10478 21.5 6.42628 21.5 7.06929 21.5H16.456C17.8951 21.5 18.6147 21.5 19.1799 21.2582C19.8894 20.9547 20.4547 20.3894 20.7582 19.6799C21 19.1147 21 18.3951 21 16.956C21 16.4717 21 16.2296 20.9471 16.0042C20.8805 15.7208 20.753 15.4554 20.5733 15.2264C20.4303 15.0442 20.2412 14.8929 19.8631 14.5905L17.0658 12.3527C16.6874 12.0499 16.4982 11.8985 16.2898 11.8451C16.1061 11.798 15.9129 11.8041 15.7325 11.8627C15.5279 11.9291 15.3486 12.0921 14.99 12.4181Z"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div>
            <p class="leading-6">
              <span class="text-[#6231ef]">Upload images</span> or drag and drop <br />
              <span class="text-gray-400">Max file size 10MB</span>
            </p>
          </div>
        </div>
      </div>
      <!-- product video -->
      <div>
        <p>Product video</p>
        <div
          class="flex items-center gap-4 p-4 border-2 border-dotted border-gray-300 rounded-md my-2"
        >
          <div>
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 12.5H22M2 7.5H7M17 7.5H22M2 17.5H7M17 17.5H22M7 22.5V2.5M17 22.5V2.5M6.8 22.5H17.2C18.8802 22.5 19.7202 22.5 20.362 22.173C20.9265 21.8854 21.3854 21.4265 21.673 20.862C22 20.2202 22 19.3802 22 17.7V7.3C22 5.61984 22 4.77976 21.673 4.13803C21.3854 3.57354 20.9265 3.1146 20.362 2.82698C19.7202 2.5 18.8802 2.5 17.2 2.5H6.8C5.11984 2.5 4.27976 2.5 3.63803 2.82698C3.07354 3.1146 2.6146 3.57354 2.32698 4.13803C2 4.77976 2 5.61984 2 7.3V17.7C2 19.3802 2 20.2202 2.32698 20.862C2.6146 21.4265 3.07354 21.8854 3.63803 22.173C4.27976 22.5 5.11984 22.5 6.8 22.5Z"
                stroke="#667085"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div>
            <p class="leading-6">
              <span class="text-[#6231ef]">Upload video</span> or drag and drop <br />
              <span class="text-gray-400">Max file size 10MB</span>
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- product benefit -->
    <div class="py-4 px-3 border-t border-gray-300">
      <div>
        <div class="text-base font-semibold my-4">
          <h1>Product benefit</h1>
        </div>

        <div class="text-sm mt-6">
          <p>Benefit title</p>
          <input
            class="w-full p-1 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#6231ef] mt-2"
            type="text"
            placeholder="Product name"
          />
        </div>

        <div class="my-4 text-sm">
          <p>Benefit description</p>
          <textarea
            class="w-full h-[80px] p-1 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#6231ef] mt-2"
            type="text"
          />
        </div>

        <div class="text-sm my-4">
          <div class="flex items-center justify-between">
            <p>Benefit 1</p>
            <div>
              <svg
                width="14"
                height="15"
                viewBox="0 0 14 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.25 2.25H8.75M1.75 4H12.25M11.0833 4L10.6743 10.1363C10.6129 11.0569 10.5822 11.5172 10.3833 11.8663C10.2083 12.1735 9.94423 12.4206 9.62597 12.5748C9.26448 12.75 8.80314 12.75 7.88045 12.75H6.11955C5.19686 12.75 4.73552 12.75 4.37403 12.5748C4.05578 12.4206 3.79172 12.1735 3.61666 11.8663C3.41781 11.5172 3.38713 11.0569 3.32575 10.1363L2.91667 4M5.83333 6.625V9.54167M8.16667 6.625V9.54167"
                  stroke="#98A2B3"
                  stroke-width="1.16667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>

          <input
            class="w-full p-1 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#6231ef] mt-2"
            type="text"
            placeholder="Product name"
          />
        </div>

        <div class="text-sm my-4">
          <div class="flex items-center justify-between">
            <p>Benefit 2</p>
            <div>
              <svg
                width="14"
                height="15"
                viewBox="0 0 14 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.25 2.25H8.75M1.75 4H12.25M11.0833 4L10.6743 10.1363C10.6129 11.0569 10.5822 11.5172 10.3833 11.8663C10.2083 12.1735 9.94423 12.4206 9.62597 12.5748C9.26448 12.75 8.80314 12.75 7.88045 12.75H6.11955C5.19686 12.75 4.73552 12.75 4.37403 12.5748C4.05578 12.4206 3.79172 12.1735 3.61666 11.8663C3.41781 11.5172 3.38713 11.0569 3.32575 10.1363L2.91667 4M5.83333 6.625V9.54167M8.16667 6.625V9.54167"
                  stroke="#98A2B3"
                  stroke-width="1.16667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>

          <input
            class="w-full p-1 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#6231ef] mt-2"
            type="text"
            placeholder="Product name"
          />
        </div>

        <div class="text-sm my-4">
          <div class="flex items-center justify-between">
            <p>Benefit 3</p>
            <div>
              <svg
                width="14"
                height="15"
                viewBox="0 0 14 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.25 2.25H8.75M1.75 4H12.25M11.0833 4L10.6743 10.1363C10.6129 11.0569 10.5822 11.5172 10.3833 11.8663C10.2083 12.1735 9.94423 12.4206 9.62597 12.5748C9.26448 12.75 8.80314 12.75 7.88045 12.75H6.11955C5.19686 12.75 4.73552 12.75 4.37403 12.5748C4.05578 12.4206 3.79172 12.1735 3.61666 11.8663C3.41781 11.5172 3.38713 11.0569 3.32575 10.1363L2.91667 4M5.83333 6.625V9.54167M8.16667 6.625V9.54167"
                  stroke="#98A2B3"
                  stroke-width="1.16667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>

          <input
            class="w-full p-1 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#6231ef] mt-2"
            type="text"
            placeholder="Product name"
          />
        </div>
        <button>
          <div class="flex items-center gap-2 text-sm">
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
            <p class="text-[#6231ef]">Add more</p>
          </div>
        </button>
      </div>
    </div>
    <!-- product testimonial -->
    <div class="py-4 px-3 border-t border-gray-300">
      <div>
        <div class="text-base font-semibold my-4">
          <h1>Product testimonial</h1>
        </div>

        <div class="my-4 text-sm">
          <p>Testimonial quote 1</p>
          <textarea
            class="w-full h-[80px] p-1 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#6231ef] mt-2"
            type="text"
          />
        </div>
      </div>
      <!-- testimonial image -->
      <div>
        <p>Testimonial image</p>
        <div
          class="flex items-center gap-4 p-4 border-2 border-dotted border-gray-300 rounded-md my-2"
        >
          <div>
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.5 3.5H7.8C6.11984 3.5 5.27976 3.5 4.63803 3.82698C4.07354 4.1146 3.6146 4.57354 3.32698 5.13803C3 5.77976 3 6.61984 3 8.3V16.7C3 18.3802 3 19.2202 3.32698 19.862C3.6146 20.4265 4.07354 20.8854 4.63803 21.173C5.27976 21.5 6.11984 21.5 7.8 21.5H17C17.93 21.5 18.395 21.5 18.7765 21.3978C19.8117 21.1204 20.6204 20.3117 20.8978 19.2765C21 18.895 21 18.43 21 17.5M19 8.5V2.5M16 5.5H22M10.5 9C10.5 10.1046 9.60457 11 8.5 11C7.39543 11 6.5 10.1046 6.5 9C6.5 7.89543 7.39543 7 8.5 7C9.60457 7 10.5 7.89543 10.5 9ZM14.99 12.4181L6.53115 20.108C6.05536 20.5406 5.81747 20.7568 5.79643 20.9442C5.77819 21.1066 5.84045 21.2676 5.96319 21.3755C6.10478 21.5 6.42628 21.5 7.06929 21.5H16.456C17.8951 21.5 18.6147 21.5 19.1799 21.2582C19.8894 20.9547 20.4547 20.3894 20.7582 19.6799C21 19.1147 21 18.3951 21 16.956C21 16.4717 21 16.2296 20.9471 16.0042C20.8805 15.7208 20.753 15.4554 20.5733 15.2264C20.4303 15.0442 20.2412 14.8929 19.8631 14.5905L17.0658 12.3527C16.6874 12.0499 16.4982 11.8985 16.2898 11.8451C16.1061 11.798 15.9129 11.8041 15.7325 11.8627C15.5279 11.9291 15.3486 12.0921 14.99 12.4181Z"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div>
            <p class="leading-6">
              <span class="text-[#6231ef]">Upload images</span> or drag and drop <br />
              <span class="text-gray-400">Max file size 10MB</span>
            </p>
          </div>
        </div>
      </div>
      <div class="text-sm my-4">
        <p>Name</p>
        <input
          class="w-full p-1 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#6231ef] mt-2"
          type="text"
          placeholder="Name"
        />
      </div>

      <div class="text-sm my-4">
        <p>Job title</p>
        <input
          class="w-full p-1 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#6231ef] mt-2"
          type="text"
          placeholder="Job title"
        />
      </div>
    </div>
  </div>
</template>
