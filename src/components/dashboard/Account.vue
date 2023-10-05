<script setup>
import { reactive } from 'vue'

import UpdateEmail from './forms/UpdateEmail.vue';
import DeleteAccount from './forms/DeleteAccount.vue';
import UpdatePassword from './forms/UpdatePassword.vue';

const forms = reactive({
    current: UpdateEmail,
})
</script>

<template>
    <div class="w-full h-full space-y-10">
        <h1 class="text-center text-xl pt-10">Account gestion</h1>
        <div class="flex w-full justify-center space-x-10">
            <a 
            v-on:click="forms.current = UpdateEmail"
            class="w-[20%] flex justify-center border border-red-500 rounded-md cursor-pointer hover:bg-red-500 hover:font-medium">
                Change email
            </a>
            <a 
            v-on:click="forms.current = UpdatePassword"
            class="w-[20%] flex justify-center border border-red-500 rounded-md cursor-pointer hover:bg-red-500 hover:font-medium">
                Change password
            </a>
            <a
            v-on:click="forms.current = DeleteAccount"
            class="w-[20%] flex justify-center border border-red-500 rounded-md cursor-pointer hover:bg-red-500 hover:font-medium">
                Delete account
            </a>
        </div>
        <div>
            <component :is="forms.current" />
        </div>
    </div>
</template>