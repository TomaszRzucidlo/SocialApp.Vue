<template>
      <div class="navigation">
        <router-link to="/">Home</router-link>
        <router-link to="/about/1">About</router-link>
        <router-link to="/admin">Admin</router-link>
        <router-link to="/registration">Rejestracja</router-link>
        <router-link to="/login">Logowanie</router-link>
      </div>
</template>
<script>

export default ({
    name: "Navbar",
    setup() {
        
    },
})
</script>

<style lang="scss" scoped>
    .navigation{
        text-align: end;
            a{
                padding:0 20px;
                text-decoration:none;
            }
    }
</style>
