const { createApp } = Vue

createApp({
    data() {
        return {
            mail: this.mail,
            apiUrl: "https://flynn.boolean.careers/exercises/api/random/mail",

        }
    },
    methods: {
        getEmail() {
            axios.get(this.apiUrl)
                .then((response) => {
                    console.log(response)
                    this.mail = response.data.response;
                    console.log(this.mail)
                });
        }
    }, mounted() {
        this.getEmail()

    }



}).mount('#app');



