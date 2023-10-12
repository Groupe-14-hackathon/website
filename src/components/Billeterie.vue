<script setup>
import Header from './Header.vue';
import { reactive } from 'vue';
import VueCookies from 'vue-cookies';
import { useRouter } from 'vue-router';


const { API_HOST_URL, VITE_API_LOCAL_URL } = import.meta.env

const host = "https://api-yfestival.onrender.com"
const response = reactive({
    message: null,
    festivals: null,
    tickets: [],
});

const router = useRouter()

const go = (route) => {
    router.push(route)
}

const buyTicket = ({ festivalId = 1, amount }) => {
    if (amount > 1) {
        response.message = "L'achat de plusieurs tickets n'est pas encore supporté"
        return
    }
    const id = VueCookies.get('id')
    const token = VueCookies.get('token')
    const transaction = true
    fetch(`${host}/api/ticket/buy`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({ transaction, FestivalId: festivalId, UserId: id, amount }),
    })
        .then((res) => {
            res.json().then(({ message, error, ticket, tickets }) => {
                if (tickets) {
                    response.message = message;
                    tickets.forEach(one => {
                        response.tickets.push(one);
                    });
                    return
                }
                if (ticket) {
                    response.message = message;
                    response.tickets.push(ticket);
                    return
                }
                if (error) response.message = error;
                return;
            });
        })
        .catch((err) => {
            response.message = err.message;
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
    <div v-if="response.tickets.length == 0">
        <h1 class="billeterieTitle">🎫 TICKETING 🎫</h1>
        <div v-if="response.festivals" id="container-allticketing">
            <div v-for="festival in response.festivals" id="container-ticketing" class="mb-5">
                <div id="event-details">
                    <div id="container-events">
                        <h2>{{ festival.nom }}</h2>
                    </div>
                    <p class="text-center">{{ festival.date }}</p>
                    <img src="/src/assets/festival.jpg" />
                </div>
                <div class="container-ticketing">
                    <form @submit="buyTicket({ festivalId: festival.id, amount })" onsubmit="return false" id="nb-button">
                        <label for="quantity">Number of tickets :</label>
                        <input v-model="amount" type="number" id="quantity" min="0" required />
                        <div id="container-buttonsubmit">
                            <button class="buttonsubmit" type="submit">ACHETER</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="text-center text-xl text-red-500 font-bold" v-if="response.message">
            {{ response.message }}
        </div>
    </div>
    <div v-else>
        <h1 class="billeterieTitle">Confirmation d'achat</h1>
        <div class="flex justify-center items-center flex-col space-y-10">
            <h1>Merci d'avoir acheter un billet, voici un recapitulatif de votre commande:</h1>
            <div class="w-fit">
                <div v-for="ticket in response.tickets">
                    <p class="border border-red-500 rounded-md p-2">Vous avez un ticket pour {{ response.festivals[ticket.FestivalId - 1].nom }} le {{ response.festivals[ticket.FestivalId - 1].date }}</p>
                </div>
                <p>
                    Vous pouvez retrouver tout vos tickets <a class="cursor-pointer text-blue-700" v-on:click="go('dashboard')">ici</a>
                </p>
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
