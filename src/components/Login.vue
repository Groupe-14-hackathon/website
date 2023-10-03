<script setup>
import { reactive } from 'vue'

const host = 'http://localhost:3000'

const response = reactive({
    message: null,
    token: null
})

const login = ({ username, password }) => {
    fetch(host + "/api/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
    }).then((res) => {
        res.json().then(({ message, token }) => {
            response.message = message
            response.token = token
        })
    })
    .catch((err) => {
        err.json().then(({ message }) => {
            response.message = message
        })
    })
}
</script>

<template>
    <div class="flex justify-center items-center w-full h-screen">
        <div class="border-slate-100 border rounded-md p-5 shadow-xl space-y-10 w-[30%]">
            <h1 class="text-slate-800 mt-10 text-xl">Login</h1>
            <div class="flex flex-col space-y-5 bg-white text-black">
                <div class="flex flex-col">
                    <label for="">username</label>
                    <input 
                    v-model="username"
                    class="border border-black rounded-md bg-white p-1" type="text">
                </div>
                <div class="flex flex-col">
                    <label class="" for="">password</label>
                    <input 
                    v-model="password"
                    class="border border-black rounded-md bg-white p-1" type="password">
                </div>
                <div>
                    <button 
                    v-on:click="login({ username, password })"
                    class="border border-black p-1 rounded-md hover:bg-black hover:text-white transition-all ease-in-out duration-300">Connect</button>
                </div>
                <div>
                    <p>{{ response.message }}</p>
                </div>
            </div>
        </div>
    </div>
</template>