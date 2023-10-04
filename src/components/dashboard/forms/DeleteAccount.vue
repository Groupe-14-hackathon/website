<script setup>
import { reactive } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const token = store.state.token
const host = 'http://localhost:3000'

const response = reactive({
    message: null,
})

const delete_account = async ({ email, password }) => {
    console.log(store.state.token);

    fetch(`${host}/api/removeuser`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({ email, password }),
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
                <div class="flex flex-col space-y-5 w-[50%]">
                    <div class="flex flex-col items-center">
                        <p class="text-center text-red-500">Warning, this operation can't be undone. All your data will be
                            deleted !</p>
                    </div>
                    <div class="flex flex-col items-center">
                        <label class="w-full" for="password">Current Email</label>
                        <input v-model="email" class="w-full border border-red-500 rounded-md" type="email">
                    </div>
                    <div class="flex flex-col items-center">
                        <label class="w-full" for="password">Current Password</label>
                        <input v-model="password" class="w-full border border-red-500 rounded-md" type="password">
                    </div>
                    <div>
                        <button v-on:click="delete_account({ email, password })"
                            class="p-1 border rounded-md border-red-500 hover:bg-red-500 transition-all"
                            type="submit">Delete</button>
                    </div>
                    <div>
                        {{ response.message }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>