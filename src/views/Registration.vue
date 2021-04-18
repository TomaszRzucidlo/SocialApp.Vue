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
                    <InputText id="name" type="text" v-model="state.name" />
                </span>
            </div>
            <div class="user-form-contnent-box">
                <span class="input-flex">
                    <h5>Adres e-mail</h5>
                    <InputText id="email" type="text" v-model="state.email" />
                </span>
            </div>
            <div class="user-form-contnent-box">
                <h5>Hasło</h5>
                <Password id="password" v-model="state.password" class="input-flex">
                    <template #header>
                        <h6>Wprowadź hasło</h6>
                    </template>
                    <template #footer>
                        <Divider />
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
export default({
    setup() {
        const state = reactive({
            name:"",
            email:"",
            password:""
        })

        function registerUser(){
            console.log(state.name)
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
