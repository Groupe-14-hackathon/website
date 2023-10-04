<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router';
import Header from './Header.vue';
import VueCookies from 'vue-cookies';
    
const router = useRouter()

const go = (route) => {
    router.push(route)
}

const host = 'http://localhost:3000'

const response = reactive({
    message: null,
})

const login = ({ email, password }) => {
    fetch(`${host}/api/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
    }).then((res) => {
        res.json().then(({ message, data, token }) => {
            response.message = message
            VueCookies.set('token' , token, "1h") 
            VueCookies.set('id' , data, "1h") 
            go('dashboard')
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
    <Header></Header>
    <div class="flex justify-center items-center w-full h-screen">
        <div class="border-slate-100 border rounded-md p-5 shadow-xl space-y-10 w-[30%]">
            <h1 class="text-slate-800 text-xl">Login</h1>
            <div class="flex flex-col space-y-5 bg-white text-black">
                <div class="flex flex-col">
                    <label for="">Username</label>
                    <input 
                    v-model="email"
                    class="border border-black rounded-md bg-white p-1" type="text">
                </div>
                <div class="flex flex-col">
                    <label class="" for="">Password</label>
                    <input 
                    v-model="password"
                    class="border border-black rounded-md bg-white p-1" type="password">
                </div>
                <div>
                    <button 
                    v-on:click="login({ email, password })"
                    class="border border-black p-1 rounded-md hover:bg-black hover:text-white transition-all ease-in-out duration-300">Connect</button>
                </div>
                <div>
                    <p>{{ response.message }}</p>
                </div>
                <div>
                    <p>You dont have an account ? Register 
                        <a v-on:click="go('register')"
                        class="text-blue-700 hover:text-blue-800 cursor-pointer">here</a></p>
                </div>
            </div>
        </div>
    </div>
</template>