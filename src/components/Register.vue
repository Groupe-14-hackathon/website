<script setup>
import { reactive } from 'vue'
import Header from './Header.vue';
import { useRouter } from 'vue-router';
import VueCookies from 'vue-cookies';


const router = useRouter()

const go = (route) => {
    router.push(route)
}

const host = 'https://api-yfestival.onrender.com'

const response = reactive({
    message: null,
    token: null
})

const pwd = reactive({
    password_message: null,
})

const login = ({ email, password }) => {
    fetch(`${host}/api/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
    }).then((res) => {
        res.json().then(({ message, token }) => {
            response.message = message
            VueCookies.set('token' , token, "1h") 
            go('dashboard')
        })
    })
    .catch((err) => {
        err.json().then(({ message }) => {
            response.message = message
        })
    })
}

const register = ({ email, password }) => {
    fetch(host + "/api/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
    }).then((res) => {
        res.json().then(({ message }) => {
            response.message = message
            login({ email, password })
        })
    })
    .catch((err) => {
        err.json().then(({ message }) => {
            response.message = message
        })
    })
}

const password_check = ({ first, second }) => {
    if(!password_complexity(first)) {
        pwd.password_message = "the password is weak (Minimum eight characters, at least one letter and one number)"
        return false
    } pwd.password_message = "the password is strong !"
    if(second === undefined) return false
    if(first === second) {
        pwd.password_message = "the passwords are matching !"
        return true
    } else {
        pwd.password_message = "matching error !"
        return false
    }
}

const password_complexity = (password) => {
    const strong = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
    return strong.test(password)
}

</script>
<template>
    <Header></Header>
    <div class="flex justify-center items-center w-full h-screen">
        <div class="border border-black rounded-md p-5 shadow-xl space-y-10 w-[30%]">
            <h1 class="text-black text-xl">Register / SigIn</h1>
            <form
            @submit="register({ email: mail, password: secondpassword })"
            onsubmit="return false"
            class="flex flex-col space-y-5 text-black">
                <div class="flex flex-col">
                    <label for="">Mail</label>
                    <input 
                    v-model="mail"
                    class="border border-black rounded-md bg-white p-1" type="email">
                </div>
                <div class="flex flex-col">
                    <label for="">Password</label>
                    <input 
                    v-model="firstpassword"
                    v-on:keyup="() => password_check({ first: firstpassword, second: secondpassword })"
                    class="border border-black rounded-md bg-white p-1" type="password">
                </div>
                <div class="flex flex-col">
                    <label for="">Password confirmation</label>
                    <input 
                    v-model="secondpassword"
                    v-on:keyup="() => password_check({ first: firstpassword, second: secondpassword })"
                    class="border border-black rounded-md bg-white p-1" type="password">
                </div>
                <div>
                    <p>{{ pwd.password_message }}</p>
                </div>
                <div>
                    <label for=""></label>
                    <button
                    type="submit"
                    class="border border-black p-1 rounded-md hover:bg-black hover:text-white transition-all ease-in-out duration-300"
                    >Register</button>
                </div>
                <div>
                    <p> {{ response.message  }}</p>
                </div>
                <div>
                    <p>You already have an account ? Login 
                        <a v-on:click="go('login')"
                        class="text-blue-700 hover:text-blue-800 cursor-pointer">here</a></p>
                </div>
            </form>
        </div>
    </div>
</template>