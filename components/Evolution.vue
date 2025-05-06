<template>
    <div v-if="!isLoading" class="flex-none flex items-center gap-5">
        <div class="w-32 flex-none p-3">
            <img :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.num}.png`"
                class="w-full" />
            <div class="text-center mt-3">
                <h3 class="font-bold text-gray-700">{{ pokemon.name }}</h3>
                <p class="text-gray-500 mt-1">{{ "#" + pokemon.num.toString().padStart(3, '0') }}</p>
            </div>
        </div>
        <div class="flex-none" v-if="!isLast">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="size-8" :style="{ color: color }">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
            </svg>
        </div>
    </div>

</template>

<script setup>
import { ref, reactive } from 'vue';
import api from '~/services/axiosIntance';

const props = defineProps(['name', 'color', 'isLast']);
const pokemon = reactive({})
const isLoading = ref(true);

onMounted(async () => {

    isLoading.value = true;
    const req = await api.get(`pokedex/${props.name}`);
    Object.assign(pokemon, req.data.variations[0]);
    pokemon.num = req.data.num;
    isLoading.value = false;
})
</script>
