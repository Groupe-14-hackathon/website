<template>
    <header>
        <h1 class="billeterieTitle">Billetterie en ligne 🎫</h1>
    </header>
    <main>
        <section id="event-details">
            <h2>Détails de l'événement</h2>
         
        </section>
        <section id="ticket-form">
            <h2>Acheter des billets</h2>
            <form id="buy-tickets-form">
                <label for="quantity">Nombre:</label>
                <input type="number" id="quantity" name="quantity" min="1" required>
                <button type="submit">Acheter</button>
            </form>
        </section>
    </main>
</template>


<style scoped>
.billeterieTitle {
    background-color: #E87EA1;
    padding: 10px;
}
</style>