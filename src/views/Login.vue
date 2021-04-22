<template>
  <div class="centered-page">
    <form class="user-form" @submit.prevent="logIn">
        <div class="user-form-title">
            <p>Logowanie</p>
        </div>
        <div class="user-form-content">
            <div class="user-form-contnent-box">
                <span class="input-flex">
                    <h5>Adres e-mail</h5>
                    <InputText id="email" type="text" v-model="state.User.email" />
                </span>
            </div>
            <div class="user-form-contnent-box">
                <span class="input-flex">
                    <h5>Hasło</h5>
                    <InputText id="password" type="password" v-model="state.User.password" />
                </span>
            </div>
        </div>
        <div class="user-form-action">
            <Button type="submit" class="confirm teal-900" label="Zaloguj się" />
        </div>
    </form>
</div>
</template>

<script>

import {reactive} from 'vue';
//import {useStore} from 'vuex';
import {useRouter} from 'vue-router'
import { useToast } from "primevue/usetoast";
import apiService from '../services/apiService'

export default ({
    setup() {
        const state = reactive({
            User:{
                email:"",
                password:""
            }
        });

        //const store = useStore();
        const router = useRouter();
        const toast = useToast();

        function logIn(){
            apiService.post("auth/log-in", state.User)
            .then(() => {
                toast.add({severity:'success', summary: 'Dziękujemy za rejestrację', detail:'Możesz się teraz zalogować.', life: 5000});
                router.push("/")
            })
            .catch((error) => {
                console.log(error)
                toast.add({severity:'error', summary: 'Wprowadzono nieprawidłowe dane', detail:'Sprawdź poprawność wprowadzonych danych.', life: 5000});
            })
        }

        return{
            state,
            logIn
        }
    },
})
</script>


<style>

</style>