<script setup>
import Header from './Header.vue';
import { reactive } from 'vue';
const host = 'http://localhost:3000'

const response = reactive({
    message: null,
    festivals: null
})

const getFestivals = () => {
    fetch(`${host}/api/festival/list`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    }).then((res) => {
        res.json().then(({ data, error }) => {
            if (data) {
                response.message = data
                response.festivals = data
                console.log(data);
            }
            if (error) response.message = error
            return
        })
    })
    .catch((err) => {
        err.json().then(({ message }) => {
            response.message = message
        })
    })
}

getFestivals()

</script>
<template>
    <Header></Header>
    <h1 class="billeterieTitle">Billetterie en ligne 🎫</h1>
    <div class="flex w-full space-x-reverse space-y-10">
        <section class="w-full flex justify-center items-center" id="event-details">
            <h2>Détails de l'événement</h2>
            <select v-if="response.festivals" name="festival">
                <option v-for="festival in response.festivals" :value="festival.id">
                    {{ festival.nom }}
                </option>
            </select>
        </section>
        <section class="w-full flex justify-center items-center">
            <div class="flex justify-center items-center flex-col">
                <h2>Acheter des billets</h2>
            <form id="buy-tickets-form">
                <label for="quantity">Nombre:</label>
                <input type="number" id="quantity" name="quantity" min="1" required>
                <button type="submit">Acheter</button>
            </form>
            </div>
        </section>
    </div>
</template>


<style scoped>
.billeterieTitle {
    background-color: #E87EA1;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>