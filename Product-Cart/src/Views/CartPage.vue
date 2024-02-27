<script setup>
import Logo from '../components/icons/Logo.vue'
// import CartDropdown from '../components/CartDropdown.vue'
</script>
<template>
  <div>
    <div class="bg-[#f2f0f6] relative">
      <!-- header -->
      <div class="bg-white flex items-center justify-between p-3 px-6 fixed top-0 left-0 right-0">
        <div class="flex gap-1">
          <div>
            <Logo />
          </div>
          <div>
            <p class="text-lg"><span class="font-bold">Marketing</span>Blocks</p>
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

      <!-- main section -->
      <div class="flex-1 px-[8rem] py-[2rem] mt-[4rem]">
        <div>
          <div>
            <div>
              <div class="grid grid-cols-2 gap-2">
                <div class="bg-white p-1 border border-white">
                  <img src="../assets/Frame.png" alt="" />
                </div>
                <div class="flex flex-col gap-1">
                  <div class="bg-white p-2 rounded-md">
                    <h1 class="font-bold text-lg mb-1">My new product</h1>
                    <div class="flex items-center gap-2">
                      <div
                        class="bg-[#f9f5ff] w-6 h-6 rounded-full flex items-center justify-center"
                      >
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
                  </div>

                  <div class="bg-white p-2 rounded-md">
                    <h1 class="font-medium text-base">Product description</h1>
                    <div>
                      <p class="text-sm my-2">
                        Cryptodash Premium & High Quality with All Full Features of Crypto
                        analytics. Cryptodash comes with unique style and niche, you can easily edit
                        and customize all elements with design components which can speed up More
                        details
                      </p>
                      <button>
                        <p class="text-sm text-purple-600">More details</p>
                      </button>
                    </div>
                  </div>

                  <div class="bg-white p-2 rounded-md">
                    <div class="flex items-center justify-between text-sm">
                      <h1 class="font-medium">Customer review/ratings</h1>
                      <div class="flex items-center gap-4">
                        <div class="flex items-center">
                          <p>3/5</p>
                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="15"
                              height="19"
                              fill="none"
                            >
                              <path
                                fill="#F2F4F7"
                                d="M6.868 3.459a.36.36 0 0 1 .664 0L9.02 7.035a.36.36 0 0 0 .304.221l3.86.31a.36.36 0 0 1 .206.632l-2.942 2.52a.36.36 0 0 0-.116.357l.9 3.768a.36.36 0 0 1-.539.39l-3.305-2.019a.36.36 0 0 0-.376 0l-3.305 2.02a.36.36 0 0 1-.538-.391l.899-3.768a.36.36 0 0 0-.116-.357L1.01 8.198a.36.36 0 0 1 .205-.632l3.861-.31a.36.36 0 0 0 .304-.22l1.488-3.577Z"
                              />

                              <path
                                fill="#FDB022"
                                d="M6.868 3.459a.36.36 0 0 1 .664 0L9.02 7.035a.36.36 0 0 0 .304.221l3.86.31a.36.36 0 0 1 .206.632l-2.942 2.52a.36.36 0 0 0-.116.357l.9 3.768a.36.36 0 0 1-.539.39l-3.305-2.019a.36.36 0 0 0-.376 0l-3.305 2.02a.36.36 0 0 1-.538-.391l.899-3.768a.36.36 0 0 0-.116-.357L1.01 8.198a.36.36 0 0 1 .205-.632l3.861-.31a.36.36 0 0 0 .304-.22l1.488-3.577Z"
                              />
                            </svg>
                          </div>
                        </div>
                        <p>23 reviews</p>
                      </div>
                    </div>
                    <div class="flex items-center gap-3 text-sm mt-2">
                      <h1 class="font-medium">Mark Stevens 5/3</h1>
                      <div class="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="19" fill="none">
                          <path
                            fill="#F2F4F7"
                            d="M6.868 3.459a.36.36 0 0 1 .664 0L9.02 7.035a.36.36 0 0 0 .304.221l3.86.31a.36.36 0 0 1 .206.632l-2.942 2.52a.36.36 0 0 0-.116.357l.9 3.768a.36.36 0 0 1-.539.39l-3.305-2.019a.36.36 0 0 0-.376 0l-3.305 2.02a.36.36 0 0 1-.538-.391l.899-3.768a.36.36 0 0 0-.116-.357L1.01 8.198a.36.36 0 0 1 .205-.632l3.861-.31a.36.36 0 0 0 .304-.22l1.488-3.577Z"
                          />

                          <path
                            fill="#FDB022"
                            d="M6.868 3.459a.36.36 0 0 1 .664 0L9.02 7.035a.36.36 0 0 0 .304.221l3.86.31a.36.36 0 0 1 .206.632l-2.942 2.52a.36.36 0 0 0-.116.357l.9 3.768a.36.36 0 0 1-.539.39l-3.305-2.019a.36.36 0 0 0-.376 0l-3.305 2.02a.36.36 0 0 1-.538-.391l.899-3.768a.36.36 0 0 0-.116-.357L1.01 8.198a.36.36 0 0 1 .205-.632l3.861-.31a.36.36 0 0 0 .304-.22l1.488-3.577Z"
                          />
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="19" fill="none">
                          <path
                            fill="#F2F4F7"
                            d="M6.868 3.459a.36.36 0 0 1 .664 0L9.02 7.035a.36.36 0 0 0 .304.221l3.86.31a.36.36 0 0 1 .206.632l-2.942 2.52a.36.36 0 0 0-.116.357l.9 3.768a.36.36 0 0 1-.539.39l-3.305-2.019a.36.36 0 0 0-.376 0l-3.305 2.02a.36.36 0 0 1-.538-.391l.899-3.768a.36.36 0 0 0-.116-.357L1.01 8.198a.36.36 0 0 1 .205-.632l3.861-.31a.36.36 0 0 0 .304-.22l1.488-3.577Z"
                          />

                          <path
                            fill="#FDB022"
                            d="M6.868 3.459a.36.36 0 0 1 .664 0L9.02 7.035a.36.36 0 0 0 .304.221l3.86.31a.36.36 0 0 1 .206.632l-2.942 2.52a.36.36 0 0 0-.116.357l.9 3.768a.36.36 0 0 1-.539.39l-3.305-2.019a.36.36 0 0 0-.376 0l-3.305 2.02a.36.36 0 0 1-.538-.391l.899-3.768a.36.36 0 0 0-.116-.357L1.01 8.198a.36.36 0 0 1 .205-.632l3.861-.31a.36.36 0 0 0 .304-.22l1.488-3.577Z"
                          />
                        </svg>
                      </div>
                    </div>

                    <div>
                      <p class="text-sm my-2">
                        Cryptodash Premium & High Quality with All Full Features of Crypto
                        analytics. Cryptodash comes with unique style
                      </p>
                    </div>
                  </div>
                </div>
                <div class="bg-white p-2 rounded-md">
                  <h1 class="font-medium text-sm mb-1">Cost</h1>
                  <div class="flex items-center justify-between">
                    <p class="font-semibold text-xl">$25,000,000</p>
                    <button class="bg-[#6231ef] p-1 text-white text-base px-12 rounded-md">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-white w-2/6 absolute top-[2rem] right-0 drop-shadow-md">
        <div class="px-3">
          <div class="flex justify-between border-b border-gray-300 py-3">
            <div class="flex gap-2">
              <div class="bg-[#f9f5ff] flex items-center justify-center h-8 w-8 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none">
                  <path
                    stroke="#6231EF"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.333"
                    d="M.667.667h2.666L5.12 9.593a1.333 1.333 0 0 0 1.333 1.073h6.48a1.333 1.333 0 0 0 1.334-1.073L15.333 4H4m2.667 10a.667.667 0 1 1-1.334 0 .667.667 0 0 1 1.334 0ZM14 14a.667.667 0 1 1-1.333 0A.667.667 0 0 1 14 14Z"
                  />
                </svg>
              </div>
              <div>
                <h1 class="text-lg font-medium">My cart</h1>
                <p class="text-base text-gray-600 mt-1">Update your plan payment details.</p>
              </div>
            </div>
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

          <div class="flex items-center gap-2 border-b border-gray-300 py-3">
            <div class="w-[100px]">
              <img src="../assets/Frame.png" alt="" />
            </div>
            <div class="flex-1">
              <div class="flex items-center justify-between">
                <h1 class="font-light">Luxury Polo Shirt</h1>
                <div>
                  <svg
                    width="17"
                    height="18"
                    viewBox="0 0 18 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.75 2.75H11.25M2.25 5H15.75M14.25 5L13.724 12.8895C13.6451 14.0732 13.6057 14.665 13.35 15.1138C13.1249 15.5088 12.7854 15.8265 12.3762 16.0248C11.9115 16.25 11.3183 16.25 10.132 16.25H7.86799C6.68168 16.25 6.08852 16.25 5.62375 16.0248C5.21457 15.8265 4.87507 15.5088 4.64999 15.1138C4.39433 14.665 4.35488 14.0732 4.27596 12.8895L3.75 5"
                      stroke="#98A2B3"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div class="flex justify-between mt-4">
                <p class="font-semibold mt-1">$25,000</p>
                <div class="border border-gray-300 flex gap-2 rounded-sm px-2">
                  <div>
                    <svg
                      width="18"
                      height="19"
                      viewBox="0 0 20 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.16675 10.5H15.8334"
                        stroke="black"
                        stroke-width="1.66667"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <p class="text-xs">23</p>
                  <div>
                    <svg
                      width="18"
                      height="19"
                      viewBox="0 0 20 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.0001 4.6665V16.3332M4.16675 10.4998H15.8334"
                        stroke="black"
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

          <div class="flex items-center gap-2 border-b border-gray-300 py-3">
            <div class="w-[100px]">
              <img src="../assets/Frame.png" alt="" />
            </div>
            <div class="flex-1">
              <div class="flex items-center justify-between">
                <h1 class="font-light">Luxury Polo Shirt</h1>
                <div>
                  <svg
                    width="17"
                    height="18"
                    viewBox="0 0 18 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.75 2.75H11.25M2.25 5H15.75M14.25 5L13.724 12.8895C13.6451 14.0732 13.6057 14.665 13.35 15.1138C13.1249 15.5088 12.7854 15.8265 12.3762 16.0248C11.9115 16.25 11.3183 16.25 10.132 16.25H7.86799C6.68168 16.25 6.08852 16.25 5.62375 16.0248C5.21457 15.8265 4.87507 15.5088 4.64999 15.1138C4.39433 14.665 4.35488 14.0732 4.27596 12.8895L3.75 5"
                      stroke="#98A2B3"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div class="flex justify-between mt-4">
                <p class="font-semibold mt-1">$25,000</p>
                <div class="border border-gray-300 flex gap-2 rounded-sm px-2">
                  <div>
                    <svg
                      width="18"
                      height="19"
                      viewBox="0 0 20 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.16675 10.5H15.8334"
                        stroke="black"
                        stroke-width="1.66667"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <p class="text-xs">23</p>
                  <div>
                    <svg
                      width="18"
                      height="19"
                      viewBox="0 0 20 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.0001 4.6665V16.3332M4.16675 10.4998H15.8334"
                        stroke="black"
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

          <div class="bg-white p-2 rounded-md">
            <h1 class="font-medium mb-1">Subtotal</h1>
            <div class="flex items-center justify-between">
              <p class="font-semibold text-xl">$25,000,000</p>
            </div>
          </div>
        </div>

        <div class="flex gap-2 justify-end border-t border-gray-300">
          <div class="my-6 flex gap-3 px-4">
            <button class="border border-gray-300 p-1 px-2 rounded-md">Cancel</button>
            <button class="bg-[#6231ef] px-2 p-1 text-white rounded-md">Confirm</button>
          </div>
        </div>
      </div>

      <!-- section for popups design -->

      <div class="bg-white w-2/6 drop-shadow-md">
        <div class="px-3">
          <div class="flex justify-between py-3">
            <div class="flex gap-2">
              <div class="bg-[#f9f5ff] flex items-center justify-center h-8 w-8 rounded-full">
                <svg
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.833496 8.8335H19.1668M2.50016 3.8335H17.5002C18.4206 3.8335 19.1668 4.57969 19.1668 5.50016V15.5002C19.1668 16.4206 18.4206 17.1668 17.5002 17.1668H2.50016C1.57969 17.1668 0.833496 16.4206 0.833496 15.5002V5.50016C0.833496 4.57969 1.57969 3.8335 2.50016 3.8335Z"
                    stroke="#6231EF"
                    stroke-width="1.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div>
                <h1 class="text-lg font-medium">Checkout</h1>
                <p class="text-base text-gray-600 mt-1">Update your payment details.</p>
              </div>
            </div>
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
          <div class="py-4">
            <p>Pay with</p>
            <div class="flex items-center gap-11">
              <div class="flex gap-2 items-center">
                <input type="radio" />
                <label for="">Card</label>
              </div>
              <div class="flex gap-2 items-center">
                <input type="radio" />
                <label for="">Bank transfer</label>
              </div>
            </div>
          </div>
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

            <div class="my-2">
              <p>Email</p>
              <div>
                <input
                  class="w-full p-1 border border-gray-300 rounded-md focus:outline-none focus:border-[#6231ef] focus:border"
                  type="Email"
                  placeholder=""
                />
              </div>
            </div>
            <hr class="my-4" />
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
            <hr class="my-6" />
            <div class="flex items-center gap-3">
              <input type="checkbox" />
              <p class="font-medium">Save card details</p>
            </div>
          </div>
        </div>
        <div class="my-6 border-t border-gray-300">
          <div class="my-6 px-3">
            <button class="w-full p-1 bg-[#6231ef] rounded-md text-white">
              Pay USD 25,000,000
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
