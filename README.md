###  Vue 3 Hero Slider package.

Hero Slider package for Vue 3. In first version this package has features such as arrows, dots, autoplaying.

### Installation

Install:

```sh
$ npm install i-hero-slider
```

### Using

main.ts: import and use it as plugin and import its styles in main.ts.

```js
import { createApp } from 'vue'
import App from './App.vue'
import HeroSlider from "i-hero-slider";
import "i-hero-slider/dist/style.css";
createApp(App).use(HeroSlider).mount('#app')
```

App.vue: 

```js
<script setup lang="tsx">

  import { reactive } from 'vue';
  import { type HeroSlides } from "i-hero-slider";
  import Content from './components/Content';
  import "./style.css";
  
  const slides = reactive<HeroSlides>([
    {
      src: "./slide-01.jpg", 
      content: <Content key="1" title="What is Lorem Ipsum?" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets."   />,
    }, 
    {
      src: "./slide-02.jpg", 
      content: <Content key="2" title="Why do we use it?" description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."   />
    }, 
    {
      src: "./slide-03.png", 
      content: <Content key="3" title="Where does it come from?" description="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old." />
    }, 
    {
      src: "./slide-04.jpg", 
      content:  <Content key="4" title="Where can I get some?" description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text." />
    }
  ])

</script>


<template>

 <HeroSlider 
  :slides="slides" 
  :arrows="true" 
  :infinite="true" 
  :dots="true" 
  :autoplay="true"
  :autoplayDuration="5000"
  />

</template>
```

### Props

<ul>
    <li><strong>slides: array of objects { src: string, content: component or string }</strong>: src for image source, content for content in slides</li>
    <li><strong>arrows: boolean</strong>: set false to hide arrows, default value is true</li>
    <li><strong>infinite: boolean</strong>: set false to make not infinite slide, default value is true</li>
    <li><strong>dots: boolean</strong>: set false to hide dots, default value is true</li>
    <li><strong>autoplay: boolean</strong>: set false to stop autoplay, default value is true</li>
    <li><strong>autoplayDuration: number</strong>: set number in milliseconds for autoplay time, default value is 3000</li>
</ul>





