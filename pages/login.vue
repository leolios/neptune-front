<template>
  <div class="dacc">
    <div class="login-form">
      <p class="login-text">
        <span class="fa-stack fa-lg">
        </span>
      </p>
      <input id="email" type="email" name="email" class="login-username" autofocus="true" required="true" placeholder="Email" />
      <input id="password" type="password" name="password" class="login-password" required="true" placeholder="Mot de passe" />
      <p style="color:white">{{message}}</p>
      <input @click="register" type="submit" name="login" value="Login" class="login-submit" />
    </div>
    <a href="#" class="login-forgot-pass">Mot de passe oublié ?</a>
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
        form.append("password", document.getElementById("password").value) // ab@gmail.com
        form.append("login", "Login")

        var req = await fetch("https://neptuneapp-api.herokuapp.com/login", {
          method: "POST",
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
          },
          body: form
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

<style src="./login.css"></style>
