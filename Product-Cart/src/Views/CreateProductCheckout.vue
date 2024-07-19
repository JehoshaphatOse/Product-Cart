<template>
  <!-- header -->
  <div
    class="bg-white flex items-center justify-between border-b border-gray-300 text-sm p-3 px-6 fixed top-0 left-0 right-0"
  >
    <!-- left header -->
    <div class="flex items-center gap-11 text-lg">
      <div class="flex gap-2 items-center">
        <div>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 12H4M4 12L10 18M4 12L10 6"
              stroke="gray"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div>
          <p>Home</p>
        </div>
      </div>
      <div>
        <h1 class="text-[#6231ef]">Create product checkout</h1>
      </div>
    </div>

    <!-- right header -->
    <div class="flex gap-2 text-base">
      <button class="flex items-center gap-2 border border-gray-300 p-1 px-2 rounded-md">
        Test payment
      </button>
      <button class="flex items-center gap-2 bg-[#6231ef] p-1 px-2 rounded-md text-white">
        <svg
          width="17"
          height="16"
          viewBox="0 0 20 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.33333 10.5001V17.1667C3.33333 17.6088 3.50893 18.0327 3.82149 18.3453C4.13405 18.6578 4.55797 18.8334 5 18.8334H15C15.442 18.8334 15.866 18.6578 16.1785 18.3453C16.4911 18.0327 16.6667 17.6088 16.6667 17.1667V10.5001M13.3333 5.50008L10 2.16675M10 2.16675L6.66667 5.50008M10 2.16675V13.0001"
            stroke="white"
            stroke-width="1.67"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <span>Share and embede</span>
      </button>
    </div>
  </div>

  <!-- main section -->
  <div class="grid grid-cols-[1fr_2fr_3fr] mt-[3rem]">
    <!-- sidenav -->
    <div>
      <div class="bg-[#fcfcfd] h-full">
        <div class="flex flex-col gap-10 px-4">
          <div class="flex flex-1 flex-col gap-1 mt-4">
            <div class="hover:text-[#724fbe] hover:bg-[#f9f5ff]">
              <a class="flex items-center gap-2 p-2 text-sm" href="">
                <span>Content</span>
              </a>
            </div>

            <div
              class="flex p-2 items-center justify-between hover:text-[#724fbe] hover:bg-[#f9f5ff]"
            >
              <div>
                <a class="flex items-center gap-2 text-sm" href="">
                  <span>Pricing</span>
                </a>
              </div>
            </div>
            <div
              class="flex p-2 items-center justify-between hover:text-[#724fbe] hover:bg-[#f9f5ff]"
            >
              <div>
                <a class="flex items-center gap-2 text-sm" href="">
                  <span>Design</span>
                </a>
              </div>
            </div>

            <div class="hover:text-[#724fbe] hover:bg-[#f9f5ff]">
              <a class="flex items-center gap-2 p-2 text-sm" href="">
                <span>Upsell</span>
              </a>
            </div>

            <div class="hover:text-[#724fbe] hover:bg-[#f9f5ff]">
              <a class="flex items-center gap-2 p-2 text-sm" href="">
                <span>File</span>
              </a>
            </div>

            <div class="hover:text-[#724fbe] hover:bg-[#f9f5ff]">
              <a class="flex items-center gap-2 p-2 text-sm" href="">
                <span>Settings</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- second column -->
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
          >
          </textarea>
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
    <!-- preview column -->
    <div class="py-6 px-3 bg-[#f9fafb]">
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
          <div class="my-4">
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
  </div>
</template>
