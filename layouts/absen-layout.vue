<template>
  <div
    class="xl:w-[30%] md:w-[50%] w-full mx-auto h-[100vh] bg-white flex flex-col"
  >
    <div
      class="h-60 bg-orange-500 flex justify-center items-center flex-col p-5"
    >
      <div class="space-y-3">
        <h1 class="text-5xl font-bold text-white text-center">{{ time }}</h1>
        <p class="text-2xl text-white text-center">{{ date }}</p>
      </div>
      <p class="text-center text-white mt-5">
        "Kesuksesan tidak datang begitu saja, harus diusahakan dengan kerja
        keras dan ketekunan."
      </p>
    </div>
    <div
      class="flex flex-col justify-center items-center w-full basis-full p-5"
    >
      <slot />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const time = ref("");
const date = ref("");

function updateTime() {
  const now = new Date();
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  time.value = now.toLocaleTimeString("id-ID", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  date.value = now.toLocaleDateString("id-ID", options);
}

let interval;

onMounted(() => {
  updateTime();
  interval = setInterval(updateTime, 1000);
});

onUnmounted(() => {
  clearInterval(interval);
});
</script>
