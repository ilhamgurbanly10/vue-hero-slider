<script setup lang="ts">
    import type { Props } from './types';
    const { src, content, show } = defineProps<Props>();
</script>

<template>
    <div class="hero-slide" :class="{ show: show }">
        <img :src="src" class="hero-slide-img">

        <div class="hero-slide-content">
            <component v-if="typeof content !== 'string'" :is="content" />
            <div v-else :style="{ width: '100%', height: '100%'}" v-html="content"></div>
        </div>
    </div>
</template>

<style scoped>
    @import "./style.css";
</style>