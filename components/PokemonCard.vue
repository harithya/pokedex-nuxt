<template>
    <NuxtLink :to="/pokemon/ + name.replace(' ', '-')">
        <div class="p-5  rounded-lg" :style="{ backgroundColor: color }">
            <NuxtImg :src="image" class="w-full lg:p-5 p-2 " loading="lazy" />
            <div class="text-center mt-5">
                <h1 class="text-xl font-bold text-gray-700">{{ name }}</h1>
                <p class="text-gray-500">{{ type.toString() }}</p>
            </div>
        </div>
    </NuxtLink>
</template>

<script setup>
import { pokemonColor } from '~/shared/pokemonColor'
const props = defineProps(['pokemon'])
const { name, image, type } = props?.pokemon

const color = pokemonColor(type[0].toLowerCase())
</script>
