<script setup>
import { reactive } from 'vue';
import VueCookies from 'vue-cookies'

const host = 'https://api-yfestival.onrender.com/'

const response = reactive({
    message: null,
    tickets: null,
    data: []
})

const getFestival = (id) => {
    fetch(`${host}/api/festival/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    }).then((res) => {
        res.json().then(({ message, error, data }) => {
            if (data) {
                console.log(data);
                const {
                    nom,
                    date
                } = data
                response.message = message
                response.data.push({ nom, date })
                console.log(response.data);
            }
            if (error) response.message = error
            return
        })
    }).catch(err => {
            response.message = err
        })
}

const getTicket = () => {
    const id = VueCookies.get('id')
    fetch(`${host}/api/ticket/info`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ UserId: id }),
    }).then((res) => {
        res.json()
        .then(({ message, error, tickets }) => {
            if (tickets) {
                tickets.forEach(ticket => {
                    getFestival(ticket.id)
                });
                response.message = message
                response.tickets = tickets
            }
            if (error) response.message = error
            return
        })
    }).catch(err => {
            response.message = err
        })
}

getTicket()
</script>

<template>
    <div class="w-full h-[90vh] flex justify-center items-center">
        <div class="space-y-5">
            <h1 class="text-2xl">Your ticket(s)</h1>
            <div class="space-y-5" v-if="response.tickets">
                <div class="border border-red-500 rounded-md p-2" v-for="ticket in response.tickets">
                    <p v-if="response.data">Vous avez un ticket pour {{ response.data[ticket.id-1].nom }} le {{ response.data[ticket.id-1].date }}</p>
                </div>
            </div>
        </div>
    </div>
</template>