<template>
  <div class="app">
    <section class="sidebar">
      <div class="item">
        <svg style="fill:#72767d" x="0" y="0" class="profile" aria-hidden="false" width="24" height="24" viewBox="0 0 24 24">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M14 8.00598C14 10.211 12.206 12.006 10 12.006C7.795 12.006 6 10.211 6 8.00598C6 5.80098 7.794 4.00598 10 4.00598C12.206 4.00598 14 5.80098 14 8.00598ZM2 19.006C2 15.473 5.29 13.006 10 13.006C14.711 13.006 18 15.473 18 19.006V20.006H2V19.006Z">
            </path>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M14 8.00598C14 10.211 12.206 12.006 10 12.006C7.795 12.006 6 10.211 6 8.00598C6 5.80098 7.794 4.00598 10 4.00598C12.206 4.00598 14 5.80098 14 8.00598ZM2 19.006C2 15.473 5.29 13.006 10 13.006C14.711 13.006 18 15.473 18 19.006V20.006H2V19.006Z">
            </path>
            <path d="M20.0001 20.006H22.0001V19.006C22.0001 16.4433 20.2697 14.4415 17.5213 13.5352C19.0621 14.9127 20.0001 16.8059 20.0001 19.006V20.006Z">
            </path>
            <path d="M14.8834 11.9077C16.6657 11.5044 18.0001 9.9077 18.0001 8.00598C18.0001 5.96916 16.4693 4.28218 14.4971 4.0367C15.4322 5.09511 16.0001 6.48524 16.0001 8.00598C16.0001 9.44888 15.4889 10.7742 14.6378 11.8102C14.7203 11.8418 14.8022 11.8743 14.8834 11.9077Z">
            </path>
        </svg>
        <span class="tooltiptext">{{user.username}}</span>
      </div>
      <div class="item" v-on:click="open_modal()">
        <div class="plus">
            <svg height="100%" viewBox="0 0 469.33333 469.33333" xmlns="http://www.w3.org/2000/svg">
            <path d="m437.332031 192h-160v-160c0-17.664062-14.335937-32-32-32h-21.332031c-17.664062 0-32 14.335938-32 32v160h-160c-17.664062 0-32 14.335938-32 32v21.332031c0 17.664063 14.335938 32 32 32h160v160c0 17.664063 14.335938 32 32 32h21.332031c17.664063 0 32-14.335937 32-32v-160h160c17.664063 0 32-14.335937 32-32v-21.332031c0-17.664062-14.335937-32-32-32zm0 0"/></svg>
        </div>
        <span class="tooltiptext">Ajouter un serveur</span>
      </div>
      <div class="separator"></div>
      <div v-for="guild of user.guilds" class="item" v-on:click="open_server($event)">
        <img v-bind:src="guild.icon" v-bind:server_id="guild.id">
        <span class="tooltiptext">{{guild.name}}</span>
      </div>
    </section>
    <div class="serverbar">
      <div class="name">
        {{actual_server.name}}
      </div>
    </div>
    <div id="modal_add_server" class="modal" v-on:click="close_modal($event)">
      <div class="modal-content">
      <div class="login-form">
        <p class="login-text">
          Créer un serveur
          <span class="fa-stack fa-lg">
          </span>
        </p>
        <input type="text" id="name" name="name" class="login-username" autofocus="true" required="true" placeholder="Nom du serveur" />
        <textarea type="text" id="description" name="description" class="login-username" required="true" placeholder="Description" />
        <input type="text" id="icon" name="icon" class="login-username" required="true" placeholder="Icon" />
        <select name="region" id="region" class="login-username">
          <option value="eu" selected>Eu</option>
          <option value="us">Us</option>
        </select
        <p style="color:white">{{message}}</p>
        <input @click="create_guild()" type="submit" name="login" value="Créer" class="login-submit" />
      </div>
      </div>

    </div>
  </div>
</template>

<script src="./app.js"></script>

<style src="./app.css"></style>
