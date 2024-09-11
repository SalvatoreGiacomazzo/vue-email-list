/*const { createApp } = Vue

createApp({
    data() {
    },
}).mount('#app');
*/
//Importazione variabile Axios da una CDN
//Uso il metodo Get
//Al momento della risposta esegui la funzione all'interno
axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
    .then(function (response) {
        console.log(response)
    })