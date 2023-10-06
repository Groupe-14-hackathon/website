<script setup>
import Header from './Header.vue';
import { reactive } from 'vue';
import VueCookies from 'vue-cookies';

const host = 'http://localhost:3000'
const response = reactive({
    message: null,
    festivals: null,
    ticket: null
});

const buyTicket = ({ festivalId = 1, amount }) => {
    const id = VueCookies.get('id')
    const transaction = "valid"
    fetch(`${host}/api/ticket/buy`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ transaction, FestivalId: festivalId, UserId: id, amount }),
    })
        .then((res) => {
            res.json().then(({ message, error, ticket }) => {
                if (ticket) {
                    response.message = message;
                    response.ticket = ticket;
                }
                if (error) response.message = error;
                return;
            });
        })
        .catch((err) => {
            err.json().then(({ message }) => {
                response.message = message;
            });
        });
}

const getFestivals = () => {
    fetch(`${host}/api/festival/list`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((res) => {
            res.json().then(({ data, error }) => {
                if (data) {
                    response.message = data;
                    response.festivals = data;
                }
                if (error) response.message = error;
                return;
            });
        })
        .catch((err) => {
            err.json().then(({ message }) => {
                response.message = message;
            });
        });
};

getFestivals();
</script>
<template>
    <Header></Header>
    <h1 class="billeterieTitle">🎫 TICKETING 🎫</h1>
    <div 
    v-if="response.festivals" id="container-allticketing">
        <div 
        v-for="festival in response.festivals"
        id="container-ticketing"
        class="mb-5">
            <div id="event-details">
                <div id="container-events">
                    <h2>{{ festival.nom }}</h2>
                </div>
                <p class="text-center">{{ festival.date }}</p>
                <img src="/src/assets/festival.jpg" />
            </div>
            <div class="container-ticketing">
                <form 
                @submit="buyTicket({ festivalId, amount })"
                onsubmit="return false"
                id="nb-button">
                    <label for="quantity">Number of tickets :</label>
                    <input v-model="amount" type="number" id="quantity" min="0" required />
                    <select hidden v-model="festivalId">
                        <option selected :value="festival.id"></option>
                    </select>
                    <div id="container-buttonsubmit">
                        <button class="buttonsubmit" type="submit">ACHETER</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<style scoped>
#container-allticketing {
    margin-top: 20px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}

.billeterieTitle {
    font-weight: bold;
    font-size: 20px;
    margin-top: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
}

#container-ticketing {
    background-color: #eccac5;
    border-radius: 0.5rem;
    padding: 20px;
    width: 27%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

@media screen and (max-width: 700px) {
    .billeterieTitle {
        margin-top: 0px;
    }
}

@media screen and (max-width: 900px) {
    #container-ticketing {
        margin-bottom: 30px;
        width: 70%;
    }

    #container-allticketing {
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
}

#container-buttonsubmit {
    display: flex;
    justify-content: center;
}

#container-events {
    display: flex;
    padding-bottom: 10px;
    justify-content: center;
}

#nb-button {
    padding-top: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

#event-details {
    font-weight: bold;
    display: flex;
    justify-content: center;
    flex-direction: column;
    font-size: 18px;
}

.buttonsubmit {
    background-color: #e29cb4;
    padding: 8px;
    height: 25px;
    align-items: center;
    display: flex;
    margin-top: 10px;
    border-radius: 0.3rem;
}

.buttonsubmit:hover {
    background-color: #e87ea1;
}

#quantity {
    border-radius: 0.4rem;
    text-align: center;
    width: 22%;
}
</style>
