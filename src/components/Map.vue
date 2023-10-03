<script setup>
import Header from './Header.vue';
</script>

<template>
    <div class="h-screen">
        <Header></Header>
        <div class="w-full h-[90%] flex justify-center items-center">
            <iframe class="w-[90%] h-full"
                src="https://www.google.com/maps/d/embed?mid=1mfvAeMJA4SfyBCZh2xxHWKfzi6HB0w4&ehbc=2E312F&noprof=1"></iframe>
        </div>
    </div>
</template>