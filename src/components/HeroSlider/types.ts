import type { Component } from 'vue'

export type Content = Component | string;

export interface Slide {
    src: string;
    content: Content;
}

export type Slides = Slide[];

export interface Props {
    slides: Slides;
    arrows?: boolean;
    dots?: boolean;
    autoplay?: boolean;
    infinite?: boolean;
    autoplayDuration?: number;
}