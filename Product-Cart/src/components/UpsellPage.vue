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
      <h1 class="font-medium">Upsell</h1>
      <p class="text-sm mt-2">
        When a customer adds this product to cart, recommend up to 4 <br />
        products instantly they can also add to their cart. This is great for <br />
        increasing sales.
      </p>
    </div>

    <div class="bg-gray-200 w-1/2 my-8 px-2">
      <p>Product 1</p>
    </div>

    <div class="w-1/4 my-6 leading-8">
      <p>Product 2</p>
      <div class="flex items-center justify-between">
        <p>Product 3</p>
        <div>
          <svg
            width="14"
            height="14"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.25 0.75H7.75M0.75 2.5H11.25M10.0833 2.5L9.67425 8.63625C9.61287 9.5569 9.58219 10.0172 9.38334 10.3663C9.20828 10.6735 8.94423 10.9206 8.62597 11.0748C8.26448 11.25 7.80314 11.25 6.88045 11.25H5.11955C4.19686 11.25 3.73552 11.25 3.37403 11.0748C3.05578 10.9206 2.79172 10.6735 2.61666 10.3663C2.41781 10.0172 2.38713 9.5569 2.32575 8.63625L1.91667 2.5M4.83333 5.125V8.04167M7.16667 5.125V8.04167"
              stroke="#98A2B3"
              stroke-width="1.16667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
      <div class="flex items-center justify-between">
        <p>Product 4</p>
        <div class="flex items-center justify-center bg-[#f9f5ff] w-[20px] h-[20px] rounded-full">
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 1.53125V12.4688M1.53125 7H12.4688"
              stroke="#6231EF"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>

    <!-- add product pop-up -->
    <div class="relative">
      <div class="w-2/5 p-4 absolute left-[6rem] shadow-md top-[-10px] bg-white">
        <div class="flex items-center justify-between">
          <p class="text-gray-600">Add product</p>
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

        <div class="flex items-center relative my-6">
          <input
            class="w-full border border-gray-500 rounded-md p-1 text-sm font-normal focus: outline-none"
            type="text"
            placeholder="Search"
          />
          <div class="absolute right-2 cursor-pointer">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.5 17.5L13.875 13.875M15.8333 9.16667C15.8333 12.8486 12.8486 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667Z"
                stroke="#667085"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>

        <div class="leading-8">
          <div class="flex items-center justify-between">
            <p>Product one</p>
            <div
              class="flex items-center justify-center bg-[#f9f5ff] w-[20px] h-[20px] rounded-full"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.16675 10H15.8334"
                  stroke="#7F56D9"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>

          <div class="flex items-center justify-between">
            <p>Product one</p>
            <div
              class="flex items-center justify-center bg-[#f9f5ff] w-[20px] h-[20px] rounded-full"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.16675 10H15.8334"
                  stroke="#7F56D9"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>

          <div class="flex items-center justify-between">
            <p>Product one</p>
            <div
              class="flex items-center justify-center bg-[#f9f5ff] w-[20px] h-[20px] rounded-full"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.16675 10H15.8334"
                  stroke="#7F56D9"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
