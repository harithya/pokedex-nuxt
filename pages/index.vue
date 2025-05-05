<template>
    <div class="bg-primary p-5 sticky top-0 z-10">
        <div class="relative">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="size-5 absolute text-gray-400 top-2.5 ms-3">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
            <input type="text" class="bg-white w-full rounded-lg pl-14 px-5 py-2" placeholder="Find your pokemon" />
        </div>
    </div>

    <div class="grid grid-cols-2 gap-5 p-5">
        <PokemonCard v-for="pokemon in pokemons" :key="pokemon.name" :pokemon="pokemon" />
    </div>

    <div ref="observer" class="h-10"></div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import api from '~/services/axiosIntance'

const page = ref(1)
const perPage = 20
const totalPages = ref(null)
const loading = ref(false)
const observer = ref(null)

// Fetch pertama kali saat SSR
const { data: initialData } = await useAsyncData('pokemons', () =>
    api.get(`pokedex?page=${page.value}&perPage=${perPage}`).then(res => res.data)
)

const pokemons = ref(initialData.value.data)
totalPages.value = initialData.value.totalPages
page.value++

const fetchPokemons = async () => {
    if (loading.value || (totalPages.value && page.value > totalPages.value)) return
    loading.value = true
    const res = await api.get(`pokedex?page=${page.value}&perPage=${perPage}`)
    pokemons.value.push(...res.data.data)
    totalPages.value = res.data.totalPages
    page.value++
    loading.value = false
}

onMounted(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            fetchPokemons()
        }
    }, {
        root: null,
        threshold: 0.1,
    })

    if (observer.value) {
        intersectionObserver.observe(observer.value)
    }
})

definePageMeta({
    keepalive: true
})
// seo 
useHead({
    title: "Home | Pokedex",
    meta: [
        {
            name: "description",
            content: "Get information about your favorite pokemon"
        },
        {
            name: "theme-color",
            content: "#ef6467"
        }
    ]
})
</script>