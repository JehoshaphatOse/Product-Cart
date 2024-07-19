<template>
  <div>
    <div class="bg-black w-full py-10 flex flex-col items-center justify-center">
      <div class="text-white text-center py-10">
        <p class="text-2xl">Take the final step</p>
        <p class="text-sm">You are a step away!</p>
      </div>
      <div class="grid grid-cols-[1.5fr_1fr] gap-8 px-[10rem] my-6 items-start">
        <div class="bg-black drop-shadow-md">
          <div>
            <img class="w-full" src="../assets/chair3.png" alt="" />
          </div>
          <div class="flex flex-col gap-4 py-4 px-6 text-white">
            <p class="text-2xl font-medium">Home makeover</p>

            <p>
              Lorem ipsum dolor sit amet consectetur. Sed rutrum quam netus ac. In blandit ut
              molestie amet nullam nam rutrum facilisi. Non gravida viverra.
            </p>
            <p class="pb-6 border-b border-white">
              Lorem ipsum dolor sit amet consectetur. Sed rutrum quam netus ac. In blandit ut
              molestie amet nullam nam rutrum facilisi. Non gravida viverra.
            </p>
            <div class="pb-6 border-b border-white">
              <div class="flex items-center justify-between">
                <p>Item</p>
                <p>Cost</p>
              </div>
              <div class="flex items-center justify-between">
                <p class="text-lg">Home makeover</p>
                <p class="text-green-600 text-xl font-medium">USD 23,0000</p>
              </div>
            </div>
            <div>
              <img class="w-full" src="../assets/videoImage.png" alt="" />
            </div>
            <div class="flex flex-col gap-3 py-4 px-6 text-white">
              <p class="text-xl font-medium">Product benefits</p>

              <p>
                Lorem ipsum dolor sit amet consectetur. Sed rutrum quam netus ac. In blandit ut
                molestie amet nullam nam rutrum facilisi. Non gravida viverra.
              </p>
              <div class="my-4 flex flex-col gap-1">
                <div class="flex items-center gap-4">
                  <input type="radio" />
                  <p>Lorem ipsum dolor sit amet</p>
                </div>
                <div class="flex items-center gap-4">
                  <input type="radio" />
                  <p>Lorem ipsum dolor sit amet</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="mb-6 px-6 py-4 pb-6 bg-white">
          <p class="font-semibold">PERSONAL DETAILS</p>

          <div class="my-4">
            <div class="">
              <div class="my-2">
                <input
                  class="placeholder-black bg-[#f2f4f7] w-full p-2 rounded-sm focus:outline-none focus:border-[#6231ef] focus:border"
                  type="text"
                  placeholder="Full name"
                />
              </div>

              <div class="my-2">
                <input
                  class="placeholder-black bg-[#f2f4f7] w-full p-2 rounded-sm focus:outline-none focus:border-[#6231ef] focus:border"
                  type="Email"
                  placeholder="Email Address"
                />
              </div>

              <div class="my-2">
                <input
                  class="placeholder-black bg-[#f2f4f7] w-full p-2 rounded-sm focus:outline-none focus:border-[#6231ef] focus:border"
                  type="text"
                  placeholder="Phone number"
                />
              </div>
            </div>
            <div class="mt-6">
              <p class="font-semibold">SHIPPING</p>
              <div class="my-2">
                <input
                  class="placeholder-black bg-[#f2f4f7] w-full p-2 rounded-sm focus:outline-none focus:border-[#6231ef] focus:border"
                  type="text"
                  placeholder="Full Address"
                />
              </div>

              <div class="my-2">
                <input
                  class="placeholder-black bg-[#f2f4f7] w-full p-2 rounded-sm focus:outline-none focus:border-[#6231ef] focus:border"
                  type="text"
                  placeholder="Country"
                />
              </div>
              <div class="flex items-center gap-4">
                <div class="w-full">
                  <input
                    class="placeholder-black bg-[#f2f4f7] w-full p-2 rounded-sm focus:outline-none focus:border-[#6231ef] focus:border"
                    type="text"
                    placeholder="State/Province"
                  />
                </div>
                <div class="w-full">
                  <input
                    class="placeholder-black bg-[#f2f4f7] w-full p-2 rounded-sm focus:outline-none focus:border-[#6231ef] focus:border"
                    type="text"
                    placeholder="City"
                  />
                </div>
              </div>
            </div>

            <div class="mt-6">
              <p class="font-semibold">CARD DETAILS</p>

              <div class="flex items-center relative my-2">
                <input
                  class="w-full p-2 pl-7 placeholder-black bg-[#f2f4f7] rounded-sm focus:outline-none focus:border-[#6231ef] focus:border mt-2"
                  type="text"
                  placeholder="1234-5678-1234"
                />

                <img
                  class="absolute left-2 bottom-3 cursor-pointer"
                  src="../assets/Mastercard.png"
                  alt=""
                />
              </div>
              <div class="flex items-center gap-4">
                <div class="w-full">
                  <input
                    class="placeholder-black bg-[#f2f4f7] w-full p-2 rounded-sm focus:outline-none focus:border-[#6231ef] focus:border"
                    type="text"
                    placeholder="Expiry"
                  />
                </div>
                <div class="w-full">
                  <input
                    class="placeholder-black bg-[#f2f4f7] w-full p-2 rounded-sm focus:outline-none focus:border-[#6231ef] focus:border"
                    type="text"
                    placeholder="CVV"
                  />
                </div>
              </div>
            </div>
          </div>
          <button class="w-full p-2 bg-[#039855] rounded-md text-white my-4">Complete order</button>

          <div class="flex justify-center items-center gap-4">
            <img src="../assets/visa.png" alt="" />
            <img src="../assets/stripe.png" alt="" />
            <img src="../assets/mastercard (1).png" alt="" />
          </div>
        </div>

        <!-- contact information -->
      </div>
    </div>
  </div>
</template>
