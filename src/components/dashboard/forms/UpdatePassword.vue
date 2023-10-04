<script setup>
import { reactive } from 'vue'
import VueCookies from 'vue-cookies'

const host = 'http://localhost:3000'

const response = reactive({
    message: null,
})

const pwd = reactive({
    password_message: null,
    isdisabled: true,
    class: "cursor-not-allowed"
})

const password_check = ({ first, second }) => {
    if(!password_complexity(first)) {
        pwd.password_message = "the password is weak (Minimum eight characters, at least one letter and one number)"
        pwd.isdisabled= true
        pwd.class = "cursor-not-allowed"
        return false
    } pwd.password_message = "the password is strong !"
    if(second === undefined) return false
    if(first === second) {
        pwd.password_message = "the passwords are matching !"
        pwd.isdisabled = false
        pwd.class = "cursor-pointer"
        return true
    } else {
        pwd.password_message = "matching error !"
        pwd.isdisabled= true
        pwd.class = "cursor-not-allowed"
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
                <div class="flex flex-col space-y-5 w-[50%]">
                    <div class="flex flex-col items-center">
                        <label class="w-full" for="email">New password</label>
                        <input 
                        v-model="passwordcheck" 
                        v-on:keyup="() => password_check({ first: passwordcheck, second: newPassword })"
                        class="w-full border border-red-500 rounded-md" type="password">
                    </div>
                    <div class="flex flex-col items-center">
                        <label class="w-full" for="email">Confirm new password</label>
                        <input 
                        v-model="newPassword" 
                        v-on:keyup="() => password_check({ first: passwordcheck, second: newPassword })"
                        class="w-full border border-red-500 rounded-md" type="password">
                    </div>
                    <div class="flex flex-col items-center">
                        <label class="w-full" for="password">Current Password</label>
                        <input v-model="password" class="w-full border border-red-500 rounded-md" type="password">
                    </div>
                    <div>
                        {{ pwd.password_message }}
                    </div>
                    <div>
                        <button 
                        :disabled="pwd.isdisabled"
                        :class="pwd.class"
                        v-on:click="update_password({ newPassword, password })"
                        class="p-1 border rounded-md border-red-500 hover:bg-red-500 transition-all" type="submit">Update</button>
                    </div>
                    <div>
                        {{ response.message }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>