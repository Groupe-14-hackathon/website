<script setup>
import { reactive } from 'vue'
import Header from './Header.vue';

const host = 'http://localhost:3000'

const response = reactive({
    message: null,
    token: null
})

const pwd = reactive({
    password_message: null,
    isdisabled: true,
    class: "cursor-not-allowed"
})

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
        })
    })
    .catch((err) => {
        err.json().then(({ message }) => {
            response.message = message
        })
    })
}

const password_check = ({ first, second }) => {
    if(second === undefined) return false
    if(first === second) {
        pwd.password_message = "the passwords are matching !"
        pwd.isdisabled = false
        pwd.class = "cursor-pointer"
        return true
    } else {
        pwd.password_message = "matching error !"
        pwd.isdisabled= true
        pwd.class = "cursor-not-allowed	"
        return false
    }
}

const password_complexity = ({ password }) => {
    if(password.length < 8) return false
    else return true
}

</script>
<template>
    <Header></Header>
    <div class="flex justify-center items-center w-full h-screen">
        <div class="border-slate-100 border rounded-md p-5 shadow-xl space-y-10 w-[30%]">
            <h1 class="text-black text-xl">Register / SigIn</h1>
            <div class="flex flex-col space-y-5 text-black">
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
                    :disabled="pwd.isdisabled"
                    :class="pwd.class"
                    v-on:click="register({ email: mail, password: secondpassword })"
                    class="border border-black p-1 rounded-md hover:bg-black hover:text-white transition-all ease-in-out duration-300"
                    >Register</button>
                </div>
                <div>
                    <p> {{ response.message  }}</p>
                </div>
            </div>
        </div>
    </div>
</template>