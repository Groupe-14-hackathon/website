<script setup>
import Header from './Header.vue';
</script>

<template>
    <div class="h-screen">
        <Header></Header>
        <h1 class="title">Dates & Places</h1>
        <div class="flex w-full h-[60%] justify-center">
            <section class="w-full flex justify-end items-center">
                <iframe class="w-[90%] h-full"
                src="https://www.google.com/maps/d/embed?mid=1mfvAeMJA4SfyBCZh2xxHWKfzi6HB0w4&ehbc=2E312F&noprof=1"></iframe>
            </section>
            <section class="w-full flex justify-start items-center">
                <div  id="background" class=" w-[80%] h-full flex justify-center items-center flex-col space-y-10 bg-right rounded-r-lg">
                    <h2>YFestival - 10/07/2024 - Olympique Stadium Lyon, FRANCE</h2>
                    <h2>Les Ardentes - 24/07/2024 - Liège, BELGIQUE</h2>
                    <h2>Tomorrow land winter - 20/10/2024 - Huez, FRANCE</h2>
                    <h2>Coachella - 15/08/2024 - Indio, ETATS-UNIS</h2>
                </div>
            </section>
        </div>
    </div>
</template>

<style>
.title{
    padding: 8% 0 3% 0;

    font-size: 2em;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
}

#background{
    background-color: #E87EA1;
}
</style>