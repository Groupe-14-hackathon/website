<script setup>
import { reactive } from 'vue'
import VueCookies from 'vue-cookies'

const host = 'http://localhost:3000'

const response = reactive({
    message: null,
})

const update_email = ({ newEmail, password }) => {
    console.log(store.state.token);
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
                <h1 class="text-center my-10 text-2xl">Update email</h1>
                <div class="flex flex-col space-y-5 w-[50%]">
                    <div class="flex flex-col items-center">
                        <label class="w-full" for="email">New email</label>
                        <input class="w-full border border-red-500 rounded-md" type="email">
                    </div>
                    <div class="flex flex-col items-center">
                        <label class="w-full" for="email">Confirm new email</label>
                        <input class="w-full border border-red-500 rounded-md" type="email">
                    </div>
                    <div class="flex flex-col items-center">
                        <label class="w-full" for="password">Current Password</label>
                        <input class="w-full border border-red-500 rounded-md" type="password">
                    </div>
                    <div>
                        <button v-on:click="update_email({ email, password })"
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