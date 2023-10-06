<script setup>
import { reactive } from 'vue'
import VueCookies from 'vue-cookies'

const host = 'https://api-yfestival.onrender.com'

const response = reactive({
    message: null,
})

const delete_account = ({ password }) => {
    const token = VueCookies.get('token')
    const id = VueCookies.get('id')

    fetch(`${host}/api/removeuser`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({ id, password }),
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
                <h1 class="text-center my-10 text-2xl">Delete account</h1>
                <form 
                @submit="delete_account({ password })"
                onsubmit="return false"
                class="flex flex-col space-y-5 w-[50%]">
                    <div class="flex flex-col items-center">
                        <p class="text-center text-red-500">Warning, this operation can't be undone. All your data will be
                            deleted !</p>
                    </div>
                    <div class="flex flex-col items-center">
                        <label class="w-full" for="password">Current Password</label>
                        <input required v-model="password" class="w-full border border-red-500 rounded-md py-1 px-2" type="password">
                    </div>
                    <div>
                        <input 
                            class="p-1 border rounded-md border-red-500 hover:bg-red-500 transition-all"
                            type="submit" value="Delete" />
                    </div>
                    <div>
                        {{ response.message }}
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>