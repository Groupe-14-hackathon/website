import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

const url = 'https://hotels4.p.rapidapi.com/v2/get-meta-data';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f49bb5ff7dmshe9195ea443b0c50p165de3jsnf2015479dff6',
		'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}

createApp(App).mount('#app')
