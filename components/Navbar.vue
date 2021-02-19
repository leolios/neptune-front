<template lang="html">
  <div class="app">
    <section class="sidebar">
      <div class="item">
        <svg style="fill:#72767d" x="0" y="0" aria-hidden="false" width="24" height="24" viewBox="0 0 24 24">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M14 8.00598C14 10.211 12.206 12.006 10 12.006C7.795 12.006 6 10.211 6 8.00598C6 5.80098 7.794 4.00598 10 4.00598C12.206 4.00598 14 5.80098 14 8.00598ZM2 19.006C2 15.473 5.29 13.006 10 13.006C14.711 13.006 18 15.473 18 19.006V20.006H2V19.006Z">
            </path>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M14 8.00598C14 10.211 12.206 12.006 10 12.006C7.795 12.006 6 10.211 6 8.00598C6 5.80098 7.794 4.00598 10 4.00598C12.206 4.00598 14 5.80098 14 8.00598ZM2 19.006C2 15.473 5.29 13.006 10 13.006C14.711 13.006 18 15.473 18 19.006V20.006H2V19.006Z">
            </path>
            <path d="M20.0001 20.006H22.0001V19.006C22.0001 16.4433 20.2697 14.4415 17.5213 13.5352C19.0621 14.9127 20.0001 16.8059 20.0001 19.006V20.006Z">
            </path>
            <path d="M14.8834 11.9077C16.6657 11.5044 18.0001 9.9077 18.0001 8.00598C18.0001 5.96916 16.4693 4.28218 14.4971 4.0367C15.4322 5.09511 16.0001 6.48524 16.0001 8.00598C16.0001 9.44888 15.4889 10.7742 14.6378 11.8102C14.7203 11.8418 14.8022 11.8743 14.8834 11.9077Z">
            </path>
        </svg>
        <span v-if="user" class="tooltiptext">{{user.username}}</span>
      </div>
      <div class="item" v-on:click="open_modal()">
        <div class="plus">
            <svg height="100%" viewBox="0 0 469.33333 469.33333" xmlns="http://www.w3.org/2000/svg">
            <path d="m437.332031 192h-160v-160c0-17.664062-14.335937-32-32-32h-21.332031c-17.664062 0-32 14.335938-32 32v160h-160c-17.664062 0-32 14.335938-32 32v21.332031c0 17.664063 14.335938 32 32 32h160v160c0 17.664063 14.335938 32 32 32h21.332031c17.664063 0 32-14.335937 32-32v-160h160c17.664063 0 32-14.335937 32-32v-21.332031c0-17.664062-14.335937-32-32-32zm0 0"/></svg>
        </div>
        <span class="tooltiptext">Add a guild</span>
      </div>
      <div class="separator"></div>
      <div v-if="user" v-for="guild of user.guilds">
        <router-link :to="'/guild/'+guild.id"><div class="item">
          <img v-bind:src="guild.icon" v-bind:server_id="guild.id">
          <span class="tooltiptext">{{guild.name}}</span>
        </div></router-link>
      </div>
      <div class="separator"></div>
      <div class="item">
        <svg style="fill:#72767d" aria-hidden="false" width="24" height="24" viewBox="0 0 24 24">
        <path d="M12 2C6.486 2 2 6.487 2 12C2 17.515 6.486 22 12 22C17.514 22 22 17.515 22 12C22 6.487 17.514 2 12 2ZM12 18.25C11.31 18.25 10.75 17.691 10.75 17C10.75 16.31 11.31 15.75 12 15.75C12.69 15.75 13.25 16.31 13.25 17C13.25 17.691 12.69 18.25 12 18.25ZM13 13.875V15H11V12H12C13.104 12 14 11.103 14 10C14 8.896 13.104 8 12 8C10.896 8 10 8.896 10 10H8C8 7.795 9.795 6 12 6C14.205 6 16 7.795 16 10C16 11.861 14.723 13.429 13 13.875Z"></path></svg>
        <span v-if="user" class="tooltiptext">{{user.username}}</span>
      </div>
      <div class="item">
        <svg style="fill:#72767d" x="0" y="0" aria-hidden="false" width="24" height="24"><path fill-rule="evenodd" clip-rule="evenodd" d="M19.738 10H22V14H19.739C19.498 14.931 19.1 15.798 18.565 16.564L20 18L18 20L16.565 18.564C15.797 19.099 14.932 19.498 14 19.738V22H10V19.738C9.069 19.498 8.203 19.099 7.436 18.564L6 20L4 18L5.436 16.564C4.901 15.799 4.502 14.932 4.262 14H2V10H4.262C4.502 9.068 4.9 8.202 5.436 7.436L4 6L6 4L7.436 5.436C8.202 4.9 9.068 4.502 10 4.262V2H14V4.261C14.932 4.502 15.797 4.9 16.565 5.435L18 3.999L20 5.999L18.564 7.436C19.099 8.202 19.498 9.069 19.738 10ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"></path></svg>
        <span v-if="user" class="tooltiptext">{{user.username}}</span>
      </div>
    </section>
    <div id="modal_add_server" class="modal" v-on:click="close_modal($event)">
      <div class="modal-content">
      <div class="server-form">
        <p class="login-text">
          Create a guild
          <span class="fa-stack fa-lg">
          </span>
        </p>
        <input type="text" id="name" name="name" class="login-username" autofocus="true" required="true" placeholder="Guild's name" />
        <textarea type="text" id="description" name="description" class="login-username" required="true" placeholder="Description" />
        <input type="text" id="icon" name="icon" class="login-username" required="true" placeholder="Icon" />
        <select name="region" id="region" class="login-username">
          <option value="eu" selected>Eu</option>
          <option value="us">Us</option>
        </select
        <p style="color:white">{{message}}</p>
        <input @click="create_guild()" type="submit" name="login" value="Create" class="login-submit" />
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  computed: {
    user () {
      return this.$store.state.info
    }
  },
  data() {
    return {
      message: undefined,
      actual_server: {}
    }
  },
  async fetch() {
    const headers = new Headers();
    headers.append("token", localStorage.getItem("token"));
    const userInfo = await fetch(
      'https://neptuneapp-api.herokuapp.com/api/token_info',
      {
        headers: headers
      }
    ).then(res => res.json());
    this.$store.commit('init', userInfo)
  },
  methods: {
    open_modal() {
      const modal = document.getElementById("modal_add_server");
      modal.style.display = "block";
    },
    close_modal(e) {
      if(e.target !== e.currentTarget) return;
      const modal = document.getElementById("modal_add_server");
      modal.style.display = "none";
    },
    async create_guild() {
      const form = new URLSearchParams();
      form.append("name", document.getElementById("name").value)
      form.append("description", document.getElementById("description").value)
      form.append("icon", document.getElementById("icon").value)
      form.append("region", document.getElementById("region").value)
      form.append("token", localStorage.getItem('token'))

      const req = await fetch("https://neptuneapp-api.herokuapp.com/guild", {
        method: "POST",
        headers: form
      })
      const json = await req.json();
      if (json.message) this.message = json.message;
      let guild = await fetch('https://neptuneapp-api.herokuapp.com/api/guild/'+json.new_server[0].id).then(res => res.json());
      this.user.guilds.push(guild.guild[0]);
      // this.$router.push({ path: 'app' })
    }
  }
}
</script>

<style lang="css" scoped>

.sidebar {
  height: 100vh;
  width: 72px;
  background: #202225;
  padding-top: 5px;
  float: left;
}

@font-face {
  font-family: Helvetica;
  src: url("/fonts/Helvetica.ttf");
}

.app {
  background: #36393f;
  font-family: Helvetica;
}


.sidebar .item {
  height: 48px;
  width: 48px;
  background: #36393f;
  border-radius: 50%;
  margin: 0 auto;
  margin-bottom: 8px;
  background-size: cover;
  overflow: hidden;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.sidebar .item:hover {
  background: #72767d;
}

.sidebar>.item:nth-of-type(1) {
  top: 10vh;
}

.item>img {
  height: 100%;
  width: 100%;
}

.item:hover .tooltiptext {
  visibility: visible;
}

.tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: #202225;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  transform: translateX(80%);
}

.separator {
  background-color: #2f3136;
  height: 2px;
  width: 32px;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 15px;
}

.plus {
  height: 16px;
  width: 16px;
  fill: #72767d;
}

.item .profile {
  fill: #72767d;
}

.modal {
  display: none;
  /* Hidden by default */
  position: fixed;
  /* Stay in place */
  z-index: 1;
  /* Sit on top */
  padding-top: 100px;
  /* Location of the box */
  left: 0;
  top: 0;
  width: 100%;
  /* Full width */
  height: 100%;
  /* Full height */
  overflow: auto;
  /* Enable scroll if needed */
  background-color: rgb(0, 0, 0);
  /* Fallback color */
  background-color: rgba(0, 0, 0, 0.6);
  /* Black w/ opacity */
}

/* Modal Content */
.modal-content {
  background-color: #fefefe;
  margin: auto;
  width: 30%;
  height: 80%;
  border-radius: 2%;
}

/* The Close Button */
.close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
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

.server-form {
  background: #222;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.3);
  min-height: 10rem;
  margin: auto;
  width: 100%;
  height: 100%;
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


</style>
