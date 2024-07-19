<template>
  <div>
    <div class="bg-[#e4e7ec] w-full h-[150px] flex items-center justify-center">
      <p class="font-medium text-4xl">Urban sneaker</p>
    </div>

    <div class="grid grid-cols-[1.5fr_1.3fr] gap-2 px-[10rem] items-start">
      <div class="bg-[#eaecf5] drop-shadow-md mb-6 px-6 py-6">
        <div>
          <p class="font-semibold text-base">Contact information</p>

          <div>
            <div class="pb-5 mb-4 border-b border-gray-300">
              <div class="my-2">
                <input
                  class="placeholder-black w-full p-2 rounded-sm focus:outline-none focus:border-[#6231ef] focus:border mt-2"
                  type="Email"
                  placeholder="Full name"
                />
              </div>
              <div class="flex items-center gap-4 w-full">
                <div class="w-full">
                  <input
                    class="placeholder-black w-full flex-1 p-2 rounded-sm focus:outline-none focus:border-[#6231ef] focus:border my-2"
                    type="text"
                    placeholder="Email Address"
                  />
                </div>
                <div class="w-full">
                  <input
                    class="placeholder-black w-full flex-1 p-2 rounded-sm focus:outline-none focus:border-[#6231ef] focus:border my-2"
                    type="text"
                    placeholder="Phone number"
                  />
                </div>
              </div>
            </div>
            <div class="pb-5 mb-4 border-b border-gray-300">
              <p class="font-semibold text-base">Shopping address</p>
              <div class="flex items-center gap-4">
                <div class="w-full">
                  <input
                    class="placeholder-black w-full p-2 rounded-sm focus:outline-none focus:border-[#6231ef] focus:border my-2"
                    type="text"
                    placeholder="Country"
                  />
                </div>
                <div class="w-full">
                  <input
                    class="placeholder-black w-full p-2 rounded-sm focus:outline-none focus:border-[#6231ef] focus:border my-2"
                    type="text"
                    placeholder="State"
                  />
                </div>
              </div>
              <div class="flex items-center gap-4">
                <div class="w-full">
                  <input
                    class="placeholder-black w-full p-2 rounded-sm focus:outline-none focus:border-[#6231ef] focus:border my-2"
                    type="text"
                    placeholder="City"
                  />
                </div>
                <div class="w-full">
                  <input
                    class="placeholder-black w-full p-2 rounded-sm focus:outline-none focus:border-[#6231ef] focus:border my-2"
                    type="text"
                    placeholder="Zip code"
                  />
                </div>
              </div>
            </div>

            <div class="pb-5 mb-4 border-b border-gray-300">
              <p class="font-semibold text-base">Credit card information</p>
              <div class="flex items-center gap-4">
                <div class="w-full">
                  <input
                    class="placeholder-black w-full p-2 rounded-sm focus:outline-none focus:border-[#6231ef] focus:border my-2"
                    type="text"
                    placeholder="Card number"
                  />
                </div>
                <div class="w-full">
                  <input
                    class="placeholder-black w-full p-2 rounded-sm focus:outline-none focus:border-[#6231ef] focus:border my-2"
                    type="text"
                    placeholder="CVV"
                  />
                </div>
              </div>
              <div class="flex items-center gap-4">
                <div class="w-full">
                  <input
                    class="placeholder-black w-full p-2 rounded-sm focus:outline-none focus:border-[#6231ef] focus:border my-2"
                    type="text"
                    placeholder="Expiry month"
                  />
                </div>
                <div class="w-full">
                  <input
                    class="placeholder-black w-full p-2 rounded-sm focus:outline-none focus:border-[#6231ef] focus:border my-2"
                    type="text"
                    placeholder="Ending year"
                  />
                </div>
              </div>
            </div>

            <div class="flex items-center justify-between p-2 border-b border-gray-300">
              <p>Item</p>
              <p>Amount</p>
            </div>
            <div class="flex items-center justify-between p-2">
              <p class="font-bold">Shoe</p>
              <p class="font-bold text-blue-600">USD23,000</p>
            </div>
          </div>
          <button class="w-full p-2 bg-[#1570ef] rounded-md text-white my-4">Complete order</button>
        </div>

        <div class="flex justify-center items-center gap-4">
          <img src="../assets/visa.png" alt="" />
          <img src="../assets/stripe.png" alt="" />
          <img src="../assets/mastercard (1).png" alt="" />
        </div>
      </div>

      <div class="bg-white drop-shadow-md p-3">
        <h1 class="font-medium">My product Title</h1>

        <p>Lorem ipsum dolor sit amet consectetur. In tellus arcu integer laoreet enim imperd.</p>
        <div class="my-4 flex flex-col gap-1">
          <div class="flex items-center gap-4">
            <input type="radio" />
            <p>Lorem ipsum dolor sit amet</p>
          </div>
          <div class="flex items-center gap-4">
            <input type="radio" />
            <p>Lorem ipsum dolor sit amet</p>
          </div>

          <div class="flex items-center gap-4">
            <input type="radio" />
            <p>Lorem ipsum dolor sit amet</p>
          </div>

          <div class="flex items-center gap-4">
            <input type="radio" />
            <p>Lorem ipsum dolor sit amet</p>
          </div>

          <div class="flex items-center gap-4">
            <input type="radio" />
            <p>Lorem ipsum dolor sit amet</p>
          </div>
        </div>
        <div class="flex flex-col gap-1 px-4 py-2 my-3 bg-[#f9fafb]">
          <div class="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" fill="none">
              <g clip-path="url(#a)">
                <path
                  fill="#F2F4F7"
                  d="M5.008.845a.262.262 0 0 1 .484 0l1.085 2.608c.038.091.123.153.221.161l2.816.226c.233.019.327.309.15.46L7.619 6.139a.263.263 0 0 0-.085.26l.655 2.748a.262.262 0 0 1-.392.285L5.387 7.96a.263.263 0 0 0-.274 0L2.703 9.43a.262.262 0 0 1-.392-.285L2.966 6.4a.263.263 0 0 0-.085-.26L.736 4.3a.263.263 0 0 1 .15-.461l2.816-.226a.262.262 0 0 0 .22-.16L5.009.844Z"
                />
                <g clip-path="url(#b)">
                  <path
                    fill="#F79009"
                    d="M5.008.845a.262.262 0 0 1 .484 0l1.085 2.608c.038.091.123.153.221.161l2.816.226c.233.019.327.309.15.46L7.619 6.139a.263.263 0 0 0-.085.26l.655 2.748a.262.262 0 0 1-.392.285L5.387 7.96a.263.263 0 0 0-.274 0L2.703 9.43a.262.262 0 0 1-.392-.285L2.966 6.4a.263.263 0 0 0-.085-.26L.736 4.3a.263.263 0 0 1 .15-.461l2.816-.226a.262.262 0 0 0 .22-.16L5.009.844Z"
                  />
                </g>
              </g>
              <defs>
                <clipPath id="a"><path fill="#fff" d="M0 0h10.5v10.5H0z" /></clipPath>
                <clipPath id="b"><path fill="#fff" d="M0 0h10.5v10.5H0z" /></clipPath>
              </defs>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" fill="none">
              <g clip-path="url(#a)">
                <path
                  fill="#F2F4F7"
                  d="M5.008.845a.262.262 0 0 1 .484 0l1.085 2.608c.038.091.123.153.221.161l2.816.226c.233.019.327.309.15.46L7.619 6.139a.263.263 0 0 0-.085.26l.655 2.748a.262.262 0 0 1-.392.285L5.387 7.96a.263.263 0 0 0-.274 0L2.703 9.43a.262.262 0 0 1-.392-.285L2.966 6.4a.263.263 0 0 0-.085-.26L.736 4.3a.263.263 0 0 1 .15-.461l2.816-.226a.262.262 0 0 0 .22-.16L5.009.844Z"
                />
                <g clip-path="url(#b)">
                  <path
                    fill="#F79009"
                    d="M5.008.845a.262.262 0 0 1 .484 0l1.085 2.608c.038.091.123.153.221.161l2.816.226c.233.019.327.309.15.46L7.619 6.139a.263.263 0 0 0-.085.26l.655 2.748a.262.262 0 0 1-.392.285L5.387 7.96a.263.263 0 0 0-.274 0L2.703 9.43a.262.262 0 0 1-.392-.285L2.966 6.4a.263.263 0 0 0-.085-.26L.736 4.3a.263.263 0 0 1 .15-.461l2.816-.226a.262.262 0 0 0 .22-.16L5.009.844Z"
                  />
                </g>
              </g>
              <defs>
                <clipPath id="a"><path fill="#fff" d="M0 0h10.5v10.5H0z" /></clipPath>
                <clipPath id="b"><path fill="#fff" d="M0 0h10.5v10.5H0z" /></clipPath>
              </defs>
            </svg>
          </div>
          <blockquote class="text-sm">
            “Simultaneously we had a problem with prisoner drunkenness that we couldn’t figure out”
          </blockquote>
          <div class="flex items-center gap-2">
            <div>
              <img class="object-fill w-9 h-9 rounded-full" src="../assets/james.png" alt="" />
            </div>
            <div>
              <p class="font-medium">James Peterson</p>
              <p class="text-sm">Social media expert</p>
            </div>
          </div>
        </div>

        <div class="flex flex-col gap-1 px-4 py-2 my-3 bg-[#f9fafb]">
          <div class="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" fill="none">
              <g clip-path="url(#a)">
                <path
                  fill="#F2F4F7"
                  d="M5.008.845a.262.262 0 0 1 .484 0l1.085 2.608c.038.091.123.153.221.161l2.816.226c.233.019.327.309.15.46L7.619 6.139a.263.263 0 0 0-.085.26l.655 2.748a.262.262 0 0 1-.392.285L5.387 7.96a.263.263 0 0 0-.274 0L2.703 9.43a.262.262 0 0 1-.392-.285L2.966 6.4a.263.263 0 0 0-.085-.26L.736 4.3a.263.263 0 0 1 .15-.461l2.816-.226a.262.262 0 0 0 .22-.16L5.009.844Z"
                />
                <g clip-path="url(#b)">
                  <path
                    fill="#F79009"
                    d="M5.008.845a.262.262 0 0 1 .484 0l1.085 2.608c.038.091.123.153.221.161l2.816.226c.233.019.327.309.15.46L7.619 6.139a.263.263 0 0 0-.085.26l.655 2.748a.262.262 0 0 1-.392.285L5.387 7.96a.263.263 0 0 0-.274 0L2.703 9.43a.262.262 0 0 1-.392-.285L2.966 6.4a.263.263 0 0 0-.085-.26L.736 4.3a.263.263 0 0 1 .15-.461l2.816-.226a.262.262 0 0 0 .22-.16L5.009.844Z"
                  />
                </g>
              </g>
              <defs>
                <clipPath id="a"><path fill="#fff" d="M0 0h10.5v10.5H0z" /></clipPath>
                <clipPath id="b"><path fill="#fff" d="M0 0h10.5v10.5H0z" /></clipPath>
              </defs>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" fill="none">
              <g clip-path="url(#a)">
                <path
                  fill="#F2F4F7"
                  d="M5.008.845a.262.262 0 0 1 .484 0l1.085 2.608c.038.091.123.153.221.161l2.816.226c.233.019.327.309.15.46L7.619 6.139a.263.263 0 0 0-.085.26l.655 2.748a.262.262 0 0 1-.392.285L5.387 7.96a.263.263 0 0 0-.274 0L2.703 9.43a.262.262 0 0 1-.392-.285L2.966 6.4a.263.263 0 0 0-.085-.26L.736 4.3a.263.263 0 0 1 .15-.461l2.816-.226a.262.262 0 0 0 .22-.16L5.009.844Z"
                />
                <g clip-path="url(#b)">
                  <path
                    fill="#F79009"
                    d="M5.008.845a.262.262 0 0 1 .484 0l1.085 2.608c.038.091.123.153.221.161l2.816.226c.233.019.327.309.15.46L7.619 6.139a.263.263 0 0 0-.085.26l.655 2.748a.262.262 0 0 1-.392.285L5.387 7.96a.263.263 0 0 0-.274 0L2.703 9.43a.262.262 0 0 1-.392-.285L2.966 6.4a.263.263 0 0 0-.085-.26L.736 4.3a.263.263 0 0 1 .15-.461l2.816-.226a.262.262 0 0 0 .22-.16L5.009.844Z"
                  />
                </g>
              </g>
              <defs>
                <clipPath id="a"><path fill="#fff" d="M0 0h10.5v10.5H0z" /></clipPath>
                <clipPath id="b"><path fill="#fff" d="M0 0h10.5v10.5H0z" /></clipPath>
              </defs>
            </svg>
          </div>
          <blockquote class="text-sm">
            “Simultaneously we had a problem with prisoner drunkenness that we couldn’t figure out”
          </blockquote>
          <div class="flex items-center gap-2">
            <div>
              <img class="object-fill w-9 h-9 rounded-full" src="../assets/james.png" alt="" />
            </div>
            <div>
              <p class="font-medium">James Peterson</p>
              <p class="text-sm">Social media expert</p>
            </div>
          </div>
        </div>
        <div class="my-6">
          <p class="font-bold">Urban sneakers</p>
          <p>Lorem ipsum dolor sit amet consectetur. In</p>
          <div>
            <img src="../assets/shoe.png" alt="" />
          </div>
        </div>
      </div>

      <!-- contact information -->
    </div>
  </div>
</template>
