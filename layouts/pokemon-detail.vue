<template>
    <div class="xl:w-[30%] md:w-[50%]  w-full mx-auto min-h-screen relative ">
        <img src="/image/wm.png" class="absolute top-0 right-0 lg:w-[60%] w-[60%] object-contain z-0" />
        <div class="h-16 flex items-center px-5 justify-between bg-transparent z-10 sticky top-0">
            <button @click=" router.back()" class="cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="size-6 text-white">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                </svg>
            </button>
            <h1 class="font-bold text-white text-2xl">#004</h1>
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="size-6 text-white">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
            </button>
        </div>
        <slot />
    </div>
</template>

<script setup>
const router = useRouter();
</script>
