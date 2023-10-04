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
                <div id="container-navbar">
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

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()

const go = (route) => {
    router.push(route)
}

</script>