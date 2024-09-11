const { createApp } = Vue

createApp({
    data() {
        return {
            mails: [],      //Creo l'array che conterrà le mie 10 mail generate
            apiUrl: "https://flynn.boolean.careers/exercises/api/random/mail",

        }
    },
    methods: {
        getEmail() {
            for (let i = 0; i < 10; i++) {     //Raccogliere 10 volte la response.data.response (la mail che serve)
                axios.get(this.apiUrl)
                    .then((response) => {

                        this.mails.push(response.data.response)     //Pusho nell'array che ho creato
                    })
            }
        }
    }, mounted() {
        this.getEmail()

    }



}).mount('#app');



