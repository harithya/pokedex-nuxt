<template>
    <NuxtLayout name="pokemon-detail" :color="color">
        <NuxtImg
            :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.num}.png`"
            class=" w-[60%] mx-auto" loading="lazy" />
        <div class=" bg-white mx-5 p-5 -mt-32 rounded-lg">
            <div class="mt-28 text-center">
                <h1 class="font-bold text-3xl text-gray-700">{{ pokemon.name }}</h1>
                <div class="flex flex-wrap gap-2 justify-center mt-3">
                    <Badge v-for="type in pokemon.types" :key="type" :type="type" />
                </div>
            </div>
            <div class="mt-5">
                <h2 class="text-lg font-bold text-gray-700 mb-3">Information</h2>
                <p class="text-gray-500 leadi mb-3">{{ pokemon.description }}</p>
                <div class="flex text-gray-500 gap-3">
                    <label class="w-20">Weight</label>
                    <p>:</p>
                    <p>{{ pokemon.weight }} KG</p>
                </div>
                <div class="flex text-gray-500 gap-3">
                    <label class="w-20">Height</label>
                    <p>:</p>
                    <p>{{ pokemon.height }} M</p>
                </div>
                <div class="flex text-gray-500 gap-3">
                    <label class="w-20">Abilities</label>
                    <p>:</p>
                    <p>{{ pokemon.abilities.join(', ') }} </p>
                </div>
                <div class="flex text-gray-500 gap-3">
                    <label class="w-20">Specie</label>
                    <p>:</p>
                    <p>{{ pokemon.specie }} </p>
                </div>

            </div>
        </div>

    </NuxtLayout>
</template>

<script setup>
import Badge from '~/components/Badge.vue';
import api from '~/services/axiosIntance';


definePageMeta({
    layout: false
})

const { slug } = useRoute().params
const { data } = await useAsyncData('pokemon-detail', async () => {
    const req = await api.get(`pokedex/${slug.replace('-', ' ')}`)
    return req.data;
})

const pokemon = data.value.variations[0];
const color = pokemonColor(pokemon.types[0], 0.8);

</script>
