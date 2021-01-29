<template>
  <div class="dacc">
    <div class="login-form">
      <p class="login-text">
        <span class="fa-stack fa-lg">
        </span>
      </p>
      <input id="username" type="text" name="username" class="login-username" autofocus="true" required="true" placeholder="Nom d'utilisateur" />
      <input id="email" type="email" name="email" class="login-username" autofocus="true" required="true" placeholder="Email" />
      <input id="password" type="password" name="password" class="login-password" required="true" placeholder="Mot de passe" />
      <p style="color:white">{{message}}</p>
      <input @click="register" type="submit" name="login" value="S'inscrire" class="login-submit" />
    </div>
    <NuxtLink to="/login" class="login-forgot-pass">Se connecter à la place</NuxtLink>
    <div class="underlay-photo"></div>
    <div class="underlay-black"></div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        message: undefined
      }
    },
    methods: {
      async register() {
        const form = new URLSearchParams();
        form.append("email", document.getElementById("email").value)
        form.append("password", document.getElementById("password").value)
        form.append("username", document.getElementById("username").value)

        const req = await fetch("https://neptuneapp-api.herokuapp.com/register", {
          method: "POST",
          headers: form
        })
        const json = await req.json();

        if (json.message) this.message = json.message;
        if (json.authorization) {
          localStorage.setItem('token', json.authorization);
          this.$router.push({ path: 'app' })
        }
      }
    }
  }
</script>

<style src="./register.css"></style>
