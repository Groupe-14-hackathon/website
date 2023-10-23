<script setup>
import { reactive } from 'vue'
import VueCookies from 'vue-cookies'
import { useRouter } from 'vue-router';

const { API_HOST_URL, VITE_API_LOCAL_URL } = import.meta.env

const host = "https://api-yfestival.onrender.com"

const response = reactive({
    message: null,
})

const router = useRouter()

const mail = reactive({
    message: null,
})

const disconnect = () => {
    VueCookies.remove('token')
    router.push('login')
}


const update_email = ({ newEmail, password }) => {
    const token = VueCookies.get('token')
    const id = VueCookies.get('id')

    fetch(`${host}/api/updateemail`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({ id, newEmail, password }),
    }).then((res) => {
        res.json().then(({ message }) => {
            response.message = message
            setTimeout(() => {
                disconnect()
            }, 1000);
            
        })
    }).catch((err) => {
        err.json().then(({ message }) => {
            response.message = message
        })
    })
}

const check_mail = ({ first, second }) => {
    if(second === undefined) return false
    if(first === second) {
        mail.message = "Emails are matching !"
        return true
    } else {
        mail.message = "matching error !"
        return false
    }
}

</script>


<template>
    <div class="w-full h-full flex justify-center">
        <div class="w-[50%] border border-red-500 rounded-md">
            <div class="h-full flex justify-center items-center flex-col">
                <h1 class="text-center my-10 text-2xl">Update email</h1>
                <form 
                @submit="update_email({ newEmail: email, password })"
                onsubmit="return false"
                class="flex flex-col space-y-5 w-[50%] h-full">
                    <div class="flex flex-col items-center">
                        <label class="w-full" for="email">New email</label>
                        <input
                        required
                        v-model="first"
                        v-on:keyup="() => check_mail({ first, second: email })"
                        class="w-full border border-red-500 rounded-md" type="email">
                    </div>
                    <div class="flex flex-col items-center">
                        <label class="w-full" for="email">Confirm new email</label>
                        <input 
                        required
                        v-model="email" 
                        v-on:keyup="() => check_mail({ first, second: email })"
                        class="w-full border border-red-500 rounded-md" type="email">
                    </div>
                    <div class="flex flex-col items-center">
                        <label class="w-full" for="password">Current Password</label>
                        <input required v-model="password" class="w-full border border-red-500 rounded-md" type="password">
                    </div>
                    <div>
                        {{ mail.message }}
                    </div>
                    <div>
                        <button 
                        :class="mail.class"
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