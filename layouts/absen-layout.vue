<template>
  <div class="xl:w-[30%] md:w-[50%] w-full mx-auto min-h-screen bg-white">
    <div
      class="h-60 bg-orange-500 flex justify-center items-center flex-col p-5"
    >
      <div class="space-y-3">
        <h1 class="text-5xl font-bold text-white text-center">08 : 00</h1>
        <p class="text-2xl text-white text-center">Jumat, 20 Oktober 2023</p>
      </div>
      <p class="text-center text-white mt-5">
        "Kesuksesan tidak datang begitu saja, harus diusahakan dengan kerja
        keras dan ketekunan."
      </p>
    </div>
    <div class="flex justify-center mt-10 items-stretch">
      <slot />
    </div>
  </div>
</template>

<script setup></script>
