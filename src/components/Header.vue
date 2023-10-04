<script setup>
import { useRouter } from 'vue-router';
import { reactive } from 'vue'
import VueCookies from 'vue-cookies'

const router = useRouter()
const data = reactive({
    token: VueCookies.get('token'),
})

const go = (route) => {
    router.push(route)
}

</script>

<template>
    <div id="container-allheader">
        <div id="container-header">
            <div id="contaier-leftheader">
                <div 
                    v-on:click="go('/')"
                    class="home">
                <img class="img-logo-yfestival" src="../assets/yfestival-logo.png">
                </div>
            </div>
            <div id="container-rightheader">
                <div id="container-navbar">
                    <div 
                    v-on:click="go('/')"
                    class="home">> Home</div>
                </div>
                <div id="container-navbar">
                    <div 
                    v-on:click="go('artistes')"
                    class="artist">> Artist</div>
                </div>
                <div id="container-navbar">
                    <div 
                    v-on:click="go('map')"
                    class="map">> Map</div>
                </div>
                <div v-if="data.token" id="container-navbar">
                    <div 
                    v-on:click="go('dashboard')"
                    class="map">> Account</div>
                </div>
                <div v-else id="container-navbar">
                    <div 
                    v-on:click="go('login')"
                    class="map">> Login</div>
                </div>
                <div id="container-ticketing">
                    <div 
                    v-on:click="go('billeterie')"
                    class="box-1">
                        <div class="btn btn-one">
                            <span>TICKETING</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>