<template>
    <div class="flex items-center gap-5">
        <label :style="{ color: color }" class="w-60 border-r py-1 border-r-gray-200">{{ label }}</label>
        <div class="w-full bg-gray-200 rounded-full h-2 ">
            <div class=" h-2 rounded-full" :style="{ width: value + '%', backgroundColor: color }"></div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(['color', 'label', 'value'])
</script>
