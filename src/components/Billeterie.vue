<script setup>
import Header from './Header.vue';
</script>
<template>
    <Header></Header>
    <h1 class="billeterieTitle">Billetterie en ligne 🎫</h1>
    <div class="flex w-full space-x-reverse space-y-10">
        <section class="w-full flex justify-center items-center" id="event-details">
            <h2>Détails de l'événement</h2>
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