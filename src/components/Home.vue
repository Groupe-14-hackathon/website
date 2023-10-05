<script setup>
import Header from './Header.vue';
import video from '../assets/Hackthon.mp4'
import cloud from '../assets/clouds-header.png'
import Jul from '../assets/Jul.jpg'
import Niska from '../assets/Niska.jpg'
import PLK from '../assets/PLK.jpg'
import Orelsan from '../assets/Orelsan.jpg'
import martingarrix from '../assets/martingarrix.jpg'
import tomorrow from '../assets/Tomorrowland.jpeg'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

const slides = [
    { id: '1', img: tomorrow, title: 'TOMORROWLAND', date: '12/10/2022' },
    { id: '1', img: Jul, title: 'JUL', date: '13/10/2022' },
    { id: '1', img: Niska, title: 'NISKA', date: '14/10/2022' },
    { id: '1', img: Orelsan, title: 'ORELSAN', date: '15/10/2022' },
    { id: '1', img: martingarrix, title: 'MARTIN GARRIX', date: '16/10/2022' },
    { id: '1', img: PLK, title: 'PLK', date: '17/10/2022' },
]
</script>

<template>
    <Header></Header>
    <div class="w-full">
        <div class="video-container">
            <img class="top-image" :src="cloud">
            <video class="video" :src="video" loop muted autoplay type="video/mp4"></video>
            <img class="bottom-image" :src="cloud">
            <img class="bottom-image " :src="cloud">
        </div>
        <div class="h-screen w-full text-black bg-gradient-to-b from-[#FFEAE7] to-purple-300">
            <h1 class="text-center text-3xl pb-10">News & Dates</h1>
            <div class="w-full h-fit flex justify-center items-center">
                <div class="w-[60%] flex space-y-reverse border border-black rounded-md">
                    <div class="w-full border-r border-black">
                        <Carousel :wrap-around="true" :autoplay="2000">
                            <Slide v-for="slide in slides" :key="slide.id">
                                <div class="carousel__item w-full h-[90vh]">
                                    <h1 class="absolute font-powerG text-white text-8xl z-10 inset-0">{{ slide.title }}</h1>
                                    <img
                                    class="w-full h-full brightness-50"
                                     :src="slide.img">
                                     <p class="absolute inset-x-0 bottom-10 text-3xl text-white">{{ slide.date }}</p>
                                </div>
                            </Slide>

                            <template #addons>
                                <Navigation/>
                                <Pagination class="absolute inset-x-0 bottom-0" />
                            </template>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>
.imgCompte {
    width: 25px;
}

.imgLogo {
    width: 250px;
}

main {
    background-color: #E86252;
    height: 86.5vh;
}

.billeterie {
    background-color: #ee2677;
    padding: 2px;
    margin-right: 5px;
}

/* Style for the menu horizontal */
.logo-container {
    flex: 1;
    /* This makes the logo container take up all available space to push the menu to the right */
}

.menu {
    list-style-type: none;
    padding: 0;
    margin: 5px;
    display: flex;
    /* Use flexbox to align items horizontally */
    align-items: center;
    /* Vertically center items within the flex container */
    justify-content: flex-end;
}

.menu li {
    margin-right: 20px;
    /* Space between menu items (adjust as needed) */
}

.menu li:last-child {
    margin-right: 0;
    /* Remove margin from the last item */
}

.menu a {
    text-decoration: none;
    color: #333;
    font-weight: bold;
    font-size: 16px;

}

.menu a:hover {
    color: #ff6600;
}

footer {
    color: black;
}
</style>
