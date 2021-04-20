<template>
<div class="centered-page">
    <form class="user-form" @submit.prevent="registerUser">
        <div class="user-form-title">
            <p>Rejestracja</p>
        </div>
        <div class="user-form-content">
            <div class="user-form-contnent-box">
                <span class="input-flex">
                    <h5>Imię</h5>
                    <InputText id="firstName" type="text" v-model="state.user.firstName" />
                </span>
            </div>
            <div class="user-form-contnent-box">
                <span class="input-flex">
                    <h5>Nazwisko</h5>
                    <InputText id="lastName" type="text" v-model="state.user.lastName" />
                </span>
            </div>
            <div class="user-form-contnent-box">
                <span class="input-flex">
                    <h5>Adres e-mail</h5>
                    <InputText id="email" type="text" v-model="state.user.email" />
                </span>
            </div>
            <div class="user-form-contnent-box">
                <h5>Hasło</h5>
                <Password id="password" v-model="state.user.password" class="input-flex">
                    <template #header>
                        <h6>Wprowadź hasło</h6>
                    </template>
                    <template #footer>
                        <p class="p-mt-2">Podpowiedź</p>
                        <ul class="p-pl-2 p-ml-2 p-mt-0" style="line-height: 1.5">
                            <li>Przynajmniej jedna mała litera</li>
                            <li>Przynajmniej jedna duża litera</li>
                            <li>Przynajmniej jedna cyfra</li>
                            <li>Minimum 8 znaków</li>
                        </ul>
                    </template>
                </Password>
            </div>
        </div>
        <div class="user-form-action">
            <Button type="submit" class="confirm teal-900" label="Zarejestruj się" />
        </div>
    </form>
</div>
</template>
<script>
import {reactive} from 'vue';
import {useStore} from 'vuex';
import {useRouter} from 'vue-router'
import { useToast } from "primevue/usetoast";

export default({
    setup() {
        const state = reactive({
            user:{
                firstName:"",
                lastName:"",
                email:"",
                password:""
            }
        })

        const store = useStore();
        const router = useRouter();
        const toast = useToast();

        function registerUser(){
            store.dispatch("register", state.user)
            .then(() => {
                toast.add({severity:'success', summary: 'Dziękujemy za rejestrację', detail:'Możesz się teraz zalogować.', life: 5000});
                router.push("/")
            })
            .catch((statusCode) => {
                handleError(statusCode);
            })
        }

        function handleError(statusCode){
            console.log(statusCode);
            if(statusCode == 409){
                toast.add({severity:'error', summary: 'Nie udało się zarejestrować', detail:'Użytkownik o podanym adresie e-mail już istnieje.', life: 5000});
            }else{
                toast.add({severity:'error', summary: 'Nie udało się zarejestrować', detail:'Sprawdź poprawność wprowadzonych danych lub spróbuj ponownie później.', life: 5000});
            }
        }

        return{
            state,
            registerUser
        }
    },
})
</script>
<style lang="scss" scoped>

</style>
