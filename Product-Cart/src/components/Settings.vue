<template>
  <div class="py-6 px-3 border border-gray-300">
    <div class="text-sm">
      <div class="pb-3">
        <h1 class="font-semibold text-lg">Settings</h1>
        <p>Suggest product variations</p>
      </div>
      <div>
        <h1 class="font-semibold">Enable redirect</h1>
      </div>

      <div class="mt-2">
        <p class="text-xs">Automatically redirect the buyer to an external URL after a purchase</p>
        <input
          class="w-full p-1 border border-gray-300 rounded-md focus:outline-none focus:border-[#6231ef] focus:border mt-2"
          type="text"
          placeholder=""
        />
      </div>
      <div class="mt-4">
        <div>
          <h1 class="font-semibold">Checkout Button CTA (Call To Action)</h1>
        </div>

        <div class="mt-2">
          <p class="text-xs">Button name</p>
          <input
            class="w-full p-1 border border-gray-300 rounded-md focus:outline-none focus:border-[#6231ef] focus:border mt-2"
            type="text"
            placeholder=""
          />
        </div>
      </div>
    </div>
  </div>
</template>
