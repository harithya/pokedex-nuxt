<template>
    <div :style="{ backgroundColor: color }" class="px-3 py-1 text-sm rounded-full text-white">
        {{ type }}
    </div>
</template>

<script setup>
import { pokemonColor } from '../shared/pokemonColor';

const props = defineProps(['type']);

const color = pokemonColor(props.type, 1)
</script>
