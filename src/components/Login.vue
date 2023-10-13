<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router';
import Header from './Header.vue';
import VueCookies from 'vue-cookies';
    
const router = useRouter()

const go = (route) => {
    router.push(route)
}

const { API_HOST_URL, VITE_API_LOCAL_URL } = import.meta.env

const host ="https://api-yfestival.onrender.com"

const response = reactive({
    message: null,
})

const login = ({ email, password }) => {
    response.message = "connecting..."
    fetch(`${host}/api/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
    })
    .catch((err) => {
        response.message = err.message;
    })
    
    .then((res) => {
        res.json().then(({ message, data, token }) => {
            response.message = message
            if(token && data) {
                VueCookies.set('token' , token, "1h") 
                VueCookies.set('id' , data, "1h") 
                go('dashboard')
            }
        })
    })
}
</script>

<template>
    <Header></Header>
    <div class="flex justify-center items-center w-full h-screen">
        <div class="border border-black rounded-md p-5 shadow-xl space-y-10 w-[80%] lg:w-[30%]">
            <h1 class="text-slate-800 text-xl">Login</h1>
            <form 
            @submit="login({ email, password })"
            onsubmit="return false"
            class="flex flex-col space-y-5 text-black">
                <div class="flex flex-col">
                    <label for="">Username</label>
                    <input 
                    required
                    v-model="email"
                    class="border border-black rounded-md bg-white p-1" type="text">
                </div>
                <div class="flex flex-col">
                    <label class="" for="">Password</label>
                    <input 
                    required
                    v-model="password"
                    class="border border-black rounded-md bg-white p-1" type="password">
                </div>
                <div>
                    <button 
                    type="submit"
                    class="border border-black p-1 rounded-md hover:bg-black hover:text-white transition-all ease-in-out duration-300"
                    >Connect</button>
                </div>
                <div>
                    <p>{{ response.message }}</p>
                </div>
                <div>
                    <p>You dont have an account ? Register 
                        <a v-on:click="go('register')"
                        class="text-blue-700 hover:text-blue-800 cursor-pointer">here</a></p>
                </div>
            </form>
        </div>
    </div>
</template>