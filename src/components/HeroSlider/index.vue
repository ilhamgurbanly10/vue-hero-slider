<script setup lang="ts">

    import { ref, computed, watch } from 'vue';
    import type { Props } from './types';
    import HeroSlide from "./components/Slide";

    const activeIndex = ref<number>(0);
    const { 
        slides, 
        arrows = true, 
        infinite = true,
        dots = true, 
        autoplay = true,  
        autoplayDuration = 3000 
    } = defineProps<Props>();

    const isFirstSlide = computed<boolean>(() => activeIndex.value === 0);
    const isLastSlide = computed<boolean>(() => activeIndex.value === slides.length  - 1);

    const next = () => {
        if (!infinite && !isLastSlide.value) activeIndex.value++; 
        else if (infinite && !isLastSlide.value) activeIndex.value++;
        else if (infinite && isLastSlide.value) activeIndex.value = 0;
    }

    const prev = () => {
        if (!infinite && !isFirstSlide.value) activeIndex.value--; 
        else if (infinite && !isFirstSlide.value) activeIndex.value--;
        else if (infinite && isFirstSlide.value) activeIndex.value = slides.length - 1;
    }

    watch([activeIndex, () => autoplay, () => slides, () => autoplayDuration], (_newData, _oldData, onCleanup) => {
        if (!autoplay) return
        const timeout = setTimeout(next, autoplayDuration)
        onCleanup(() => {
            clearTimeout(timeout)
        })
    }, { immediate: true })

</script>

<template>
    
   <section class="hero-slider"> 

        <HeroSlide :show="activeIndex === index" v-for="(slide, index) in slides" :key="index" :src="slide.src" :content="slide.content" />

        <div class="hero-slider-arrows" v-if="arrows">

            <button @click="prev()" type="button" class="hero-slider-arrow hero-slider-arrow-left" :class="{ disabled: isFirstSlide && !infinite}">
                <svg viewBox="64 64 896 896" focusable="false" data-icon="left" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"></path></svg>
            </button>

             <button @click="next()" type="button" class="hero-slider-arrow hero-slider-arrow-right" :class="{ disabled: isLastSlide && !infinite}">
                <svg viewBox="64 64 896 896" focusable="false" data-icon="right" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"></path></svg>
            </button>

        </div>

        <div class="hero-slider-dots" v-if="dots">
            <button @click="activeIndex = index" type="button" v-for="(_slide, index) in slides" :key="index" class="hero-slider-dot" :class="{ active: activeIndex === index}" />
        </div>
        <!-- Hero Slider by Ilham Gurbanly -->

   </section>

</template>

<style scoped>
    @import "./style.css";
</style>

<style>
    @import "./globalStyles.css";
</style>