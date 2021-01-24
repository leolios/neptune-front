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

<style media="screen">
  @import url(https://fonts.googleapis.com/css?family=Open+Sans:100,300,400,700);
  @import url(//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css);

  .dacc {
    height: 100vh;
    font-family: 'Open Sans';
    font-weight: 100;
    display: flex;
    overflow: hidden;
  }

  input::-webkit-input-placeholder {
    color: rgba(255, 255, 255, 0.7);
  }

  input::-moz-placeholder {
    color: rgba(255, 255, 255, 0.7);
  }

  input:-ms-input-placeholder {
    color: rgba(255, 255, 255, 0.7);
  }

  input:focus {
    outline: 0 transparent solid;
  }

  input:focus::-webkit-input-placeholder {
    color: rgba(0, 0, 0, 0.7);
  }

  input:focus::-moz-placeholder {
    color: rgba(0, 0, 0, 0.7);
  }

  input:focus:-ms-input-placeholder {
    color: rgba(0, 0, 0, 0.7);
  }

  .login-form {
    background: #222;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.3);
    min-height: 10rem;
    margin: auto;
    max-width: 50%;
    padding: .5rem;
  }

  .login-text {
    background: hsl(40, 30, 60);
    border-bottom: .5rem solid white;
    color: white;
    font-size: 1.5rem;
    margin: 0 auto;
    max-width: 50%;
    padding: .5rem;
    text-align: center;
    text-shadow: 1px -1px 0 rgba(0, 0, 0, 0.3);
  }

  .fa-stack-1x {
    color: black;
  }

  .login-username,
  .login-password {
    background: transparent;
    border: 0 solid;
    border-bottom: 1px solid rgba(white, .5);
    color: white;
    display: block;
    margin: 1rem;
    padding: .5rem;
    transition: 250ms background ease-in;
    width: calc(100% - 3rem);
  }

  .login-username:focus,
  .login-password:focus {
    background: white;
    color: black;
    transition: 250ms background ease-in;
  }

  .login-forgot-pass {
    border-bottom: 1px solid white;
    bottom: 0;
    color: white;
    cursor: pointer;
    display: block;
    font-size: 75%;
    left: 0;
    opacity: 0.6;
    padding: .5rem;
    position: absolute;
    text-align: center;
    text-decoration: none;
    width: 100%;
  }

  .login-forgot-pass:hover {
    opacity: 1;
  }

  .login-submit {
    border: 1px solid white;
    background: transparent;
    color: white;
    display: block;
    margin: 1rem auto;
    min-width: 1px;
    padding: .25rem;
    transition: 250ms background ease-in;
  }

  .login-submit:hover,
  .login-submit:focus {
    background: white;
    color: black;
    transition: 250ms background ease-in;
  }

  [class*=underlay] {
    left: 0;
    min-height: 100%;
    min-width: 100%;
    position: fixed;
    top: 0;
  }

  .underlay-photo {
    animation: hue-rotate 6s infinite;
    background: url('https://cdn.discordapp.com/attachments/782605532543975424/783403960123129886/unknown.png');
    background-size: cover;

    z-index: -1;
  }

  .underlay-black {
    background: rgba(0, 0, 0, 0.7);
    z-index: -1;
  }

  @keyframes hue-rotate {
    from {
      -webkit-filter: grayscale(30%) hue-rotate(0deg);
    }

    to {
      -webkit-filter: grayscale(30%) hue-rotate(360deg);
    }
  }
</style>
