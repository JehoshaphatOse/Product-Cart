<template>
  <div class="px-[20rem] py-8">
    <div class="bg-white drop-shadow-md rounded-md">
      <div>
        <img class="w-full" src="../assets/EbookImage.png" alt="" />
      </div>
      <div class="text-center flex flex-col gap-3 py-3 m-6 border-b border-gray-300">
        <h1 class="text-2xl font-medium">My Ebook</h1>
        <p>$13,000</p>
        <p class="text-xs opacity-50">www.mywebsite.com</p>
        <p class="text-sm">
          Enim corrupti beatae hic qui ea ut ut. Ut dolor non eveniet quo animi magni. Voluptatem
          mollitia et vel occaecati. Nemo aut soluta voluptatem consequuntur.
        </p>
      </div>

      <div>
        <div class="px-4 py-3">
          <h1 class="font-semibold text-base">Contact information</h1>

          <div class="my-4">
            <div class="flex items-center gap-2">
              <div>
                <label for="">First name</label>
                <input
                  class="w-full p-1 border border-gray-300 rounded-md focus:outline-none focus:border-[#6231ef] focus:border my-2"
                  type="text"
                  placeholder=""
                />
              </div>
              <div>
                <label for="">Last name</label>
                <input
                  class="w-full p-1 border border-gray-300 rounded-md focus:outline-none focus:border-[#6231ef] focus:border my-2"
                  type="text"
                  placeholder=""
                />
              </div>
            </div>

            <div class="my-2">
              <label for="">Email</label>
              <input
                class="w-full p-1 border border-gray-300 rounded-md focus:outline-none focus:border-[#6231ef] focus:border mt-2"
                type="Email"
                placeholder=""
              />
            </div>

            <div>
              <label for="">Phone number</label>
              <input
                class="w-full p-1 border border-gray-300 rounded-md focus:outline-none focus:border-[#6231ef] focus:border mt-2"
                type="Email"
                placeholder=""
              />
            </div>
            <div class="my-6">
              <div class="mb-2">
                <h1 class="font-semibold">Choose pricing option</h1>
              </div>
              <div class="grid grid-cols-2 items-center gap-3 mt-4">
                <label
                  tabindex="1"
                  class="cursor-pointer p-3 px-4 border border-gray-300 rounded-md flex items-center justify-between has-[:checked]:ring-[#6231ef] has-[:checked]:ring-2"
                >
                  <span class="text-gray-700">
                    Subcription <br />
                    (60,000/1 year)</span
                  >
                  <input
                    type="radio"
                    class="peer hidden"
                    name="pricing"
                    id="one_time"
                    value="one_time"
                    checked
                  />
                  <div
                    class="peer-checked:bg-[#6231ef] peer-checked:border-[#6231ef] w-5 h-5 rounded-full bg-gray-200 border border-gray-300 flex items-center justify-center text-gray-400 peer-checked:text-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-4 h-4 fill-current"
                      fill="none"
                      viewBox="0 0 16 16"
                    >
                      <rect width="16" height="16" fill="none" rx="8" />
                      <path
                        fill="currentColor"
                        fill-rule="evenodd"
                        d="M11.398 4.927 6.624 9.533 5.358 8.18a.692.692 0 0 0-.867-.047.611.611 0 0 0-.173.807l1.5 2.44a.81.81 0 0 0 .686.367c.274 0 .534-.14.68-.367.24-.313 4.82-5.773 4.82-5.773.6-.614-.126-1.154-.606-.687v.007Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                </label>

                <label
                  tabindex="1"
                  class="cursor-pointer p-3 px-4 border border-gray-300 rounded-md flex items-center justify-between has-[:checked]:ring-[#6231ef] has-[:checked]:ring-2"
                >
                  <span class="text-gray-700 text-sm">
                    One time <br />
                    60,000</span
                  >
                  <input
                    type="radio"
                    class="peer invisible opacity-0"
                    name="pricing"
                    id="subscription"
                    value="subscription"
                  />
                  <div
                    class="peer-checked:bg-[#6231ef] peer-checked:border-[#6231ef] w-5 h-5 rounded-full bg-gray-200 border border-gray-300 flex items-center justify-center text-gray-400 peer-checked:text-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-4 h-4 fill-current"
                      fill="none"
                      viewBox="0 0 16 16"
                    >
                      <rect width="16" height="16" fill="none" rx="8" />
                      <path
                        fill="currentColor"
                        fill-rule="evenodd"
                        d="M11.398 4.927 6.624 9.533 5.358 8.18a.692.692 0 0 0-.867-.047.611.611 0 0 0-.173.807l1.5 2.44a.81.81 0 0 0 .686.367c.274 0 .534-.14.68-.367.24-.313 4.82-5.773 4.82-5.773.6-.614-.126-1.154-.606-.687v.007Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                </label>
              </div>
            </div>

            <div class="my-6">
              <div class="my-4">
                <p class="font-semibold">payment information</p>
              </div>
              <div class="mb-2">
                <p>pay with</p>
              </div>
              <div class="flex items-center gap-3 mt-2">
                <label tabindex="1" class="cursor-pointer p-3 rounded-md flex items-center gap-2">
                  <input
                    type="radio"
                    class="peer invisible opacity-0"
                    name="pricing"
                    id="subscription"
                    value="subscription"
                  />
                  <div
                    class="peer-checked:bg-[#6231ef] peer-checked:border-[#6231ef] w-5 h-5 rounded-full bg-gray-200 border border-gray-300 flex items-center justify-center text-gray-400 peer-checked:text-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-4 h-4 fill-current"
                      fill="none"
                      viewBox="0 0 16 16"
                    >
                      <rect width="16" height="16" fill="none" rx="8" />
                      <path
                        fill="currentColor"
                        fill-rule="evenodd"
                        d="M11.398 4.927 6.624 9.533 5.358 8.18a.692.692 0 0 0-.867-.047.611.611 0 0 0-.173.807l1.5 2.44a.81.81 0 0 0 .686.367c.274 0 .534-.14.68-.367.24-.313 4.82-5.773 4.82-5.773.6-.614-.126-1.154-.606-.687v.007Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <span class="text-gray-700 text-sm"> Card</span>
                </label>

                <label tabindex="1" class="cursor-pointer p-3 rounded-md flex items-center gap-2">
                  <input
                    type="radio"
                    class="peer invisible opacity-0"
                    name="pricing"
                    id="subscription"
                    value="subscription"
                  />
                  <div
                    class="peer-checked:bg-[#6231ef] peer-checked:border-[#6231ef] w-5 h-5 rounded-full bg-gray-200 border border-gray-300 flex items-center justify-center text-gray-400 peer-checked:text-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-4 h-4 fill-current"
                      fill="none"
                      viewBox="0 0 16 16"
                    >
                      <rect width="16" height="16" fill="none" rx="8" />
                      <path
                        fill="currentColor"
                        fill-rule="evenodd"
                        d="M11.398 4.927 6.624 9.533 5.358 8.18a.692.692 0 0 0-.867-.047.611.611 0 0 0-.173.807l1.5 2.44a.81.81 0 0 0 .686.367c.274 0 .534-.14.68-.367.24-.313 4.82-5.773 4.82-5.773.6-.614-.126-1.154-.606-.687v.007Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <span class="text-gray-700 text-sm">Paypal</span>
                </label>
              </div>
            </div>

            <div class="my-2">
              <p>Card name</p>
              <div class="flex items-center relative">
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
            </div>
            <div class="flex items-center gap-2 my-4">
              <div class="relative flex items-center">
                <div>
                  <p>Expiry</p>
                  <input
                    class="w-full p-1 border border-gray-300 rounded-md focus:outline-none focus:border-[#6231ef] focus:border mt-2"
                    type="text"
                    placeholder="11/2025"
                  />
                </div>
              </div>

              <div class="relative flex items-center">
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
            <div class="text-xs">
              <p>
                By providing your card information, you allow us charge your card for future
                payments in accordance with their terms.
              </p>
            </div>
          </div>
        </div>
        <div class="py-4 border-t border-gray-300">
          <div class="mx-4">
            <button class="w-full p-3 bg-[#6231ef] rounded-md text-white">Submit</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
