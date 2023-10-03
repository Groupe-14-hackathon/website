<script setup>
import { useRouter } from 'vue-router';
import error from '../assets/error.png'
const router = useRouter()

const go = (route) => {
    router.push(route)
}
</script>

<template>
    <div class="flex justify-center items-center h-screen">
        <div class="flex flex-col justify-center items-center space-y-5">
            <img class="h-40" :src="error" alt="error 404">
            <h1>Sorry there is nothing here,
                <a v-on:click="go('/')" class="text-blue-700 hover:text-blue-800 cursor-pointer">go back home ?</a>
            </h1>
        </div>
    </div>
</template>