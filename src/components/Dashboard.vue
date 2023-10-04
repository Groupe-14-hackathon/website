<script setup>
import { reactive } from 'vue'

import Header from './Header.vue';
import Account from './dashboard/Account.vue'
import Contact from './dashboard/Contact.vue'
import Ticket from './dashboard/Ticket.vue'
import Travel from './dashboard/Travel.vue'

const component = reactive({
    current: Account,
})

</script>

<template>
    <div class="h-screen w-full">
        <Header></Header>
        <div class="flex h-full ">
            <section class="w-[20%] h-full border-r border-red-500 space-y-10">
                <div class="mt-28 w-full flex justify-center items-center">
                    <a class="text-xl">Dashboard</a>
                </div>
                <div class="pl-5">
                    <a 
                    v-on:click="component.current = Account"
                    class="cursor-pointer border-black hover:border-b">> Account gestion</a>
                </div>
                <div class="pl-5">
                    <a 
                    v-on:click="component.current = Ticket"
                    class="cursor-pointer border-black hover:border-b">> Tickets</a>
                </div>
                <div class="pl-5">
                    <a 
                    v-on:click="component.current = Travel"
                    class="cursor-pointer border-black hover:border-b">> Book your trip</a>
                </div>
                <div class="pl-5">
                    <a 
                    v-on:click="component.current = Contact"
                    class="cursor-pointer border-black hover:border-b">> Contact</a>
                </div>
            </section>
            <section class="w-full h-full">
                <div class="mt-20">
                    <component :is="component.current" />
                </div>
            </section>
        </div>
    </div>
</template>