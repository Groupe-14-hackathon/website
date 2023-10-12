<script setup>
import { reactive } from 'vue'
import VueCookies from 'vue-cookies'

const { API_HOST_URL, VITE_API_LOCAL_URL } = import.meta.env

const host = "https://api-yfestival.onrender.com"

const response = reactive({
    message: null,
})

const pwd = reactive({
    password_message: null,
})

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

const update_password = ({ newPassword, password }) => {
    const token = VueCookies.get('token')
    const id = VueCookies.get('id')

    fetch(`${host}/api/updatepassword`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({ id, newPassword, password }),
    }).then((res) => {
        res.json().then(({ message }) => {
            response.message = message
        })
    }).catch((err) => {
        err.json().then(({ message }) => {
            response.message = message
        })
    })
}

</script>

<template>
    <div class="w-full h-full flex justify-center">
        <div class="w-[50%] h-[50vh] border border-red-500 rounded-md">
            <div class="h-full flex justify-center items-center flex-col">
                <h1 class="text-center my-10 text-2xl">Update password</h1>
                <form 
                @submit="update_password({ newPassword, password })"
                onsubmit="return false"
                class="flex flex-col space-y-5 w-[50%]">
                    <div class="flex flex-col items-center">
                        <label class="w-full" for="email">New password</label>
                        <input 
                        required
                        v-model="passwordcheck" 
                        v-on:keyup="() => password_check({ first: passwordcheck, second: newPassword })"
                        class="w-full border border-red-500 rounded-md" type="password">
                    </div>
                    <div class="flex flex-col items-center">
                        <label class="w-full" for="email">Confirm new password</label>
                        <input 
                        required
                        v-model="newPassword" 
                        v-on:keyup="() => password_check({ first: passwordcheck, second: newPassword })"
                        class="w-full border border-red-500 rounded-md" type="password">
                    </div>
                    <div class="flex flex-col items-center">
                        <label class="w-full" for="password">Current Password</label>
                        <input 
                        required
                        v-model="password" 
                        class="w-full border border-red-500 rounded-md" type="password">
                    </div>
                    <div>
                        {{ pwd.password_message }}
                    </div>
                    <div>
                        <button 
                        class="p-1 border rounded-md border-red-500 hover:bg-red-500 transition-all" 
                        type="submit">Update</button>
                    </div>
                    <div>
                        {{ response.message }}
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>