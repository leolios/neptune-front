<template>
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
        <span class="tooltiptext">{{user.username}}</span>
      </div>
      <div class="item" v-on:click="open_modal()">
        <div class="plus">
            <svg height="100%" viewBox="0 0 469.33333 469.33333" xmlns="http://www.w3.org/2000/svg">
            <path d="m437.332031 192h-160v-160c0-17.664062-14.335937-32-32-32h-21.332031c-17.664062 0-32 14.335938-32 32v160h-160c-17.664062 0-32 14.335938-32 32v21.332031c0 17.664063 14.335938 32 32 32h160v160c0 17.664063 14.335938 32 32 32h21.332031c17.664063 0 32-14.335937 32-32v-160h160c17.664063 0 32-14.335937 32-32v-21.332031c0-17.664062-14.335937-32-32-32zm0 0"/></svg>
        </div>
        <span class="tooltiptext">Add a guild</span>
      </div>
      <div class="separator"></div>
      <div v-for="guild of user.guilds" class="item" v-on:click="open_server($event)">
        <img v-bind:src="guild.icon" v-bind:server_id="guild.id">
        <span class="tooltiptext">{{guild.name}}</span>
      </div>
      <div class="separator"></div>
      <div class="item">
        <svg style="fill:#72767d" aria-hidden="false" width="24" height="24" viewBox="0 0 24 24">
        <path d="M12 2C6.486 2 2 6.487 2 12C2 17.515 6.486 22 12 22C17.514 22 22 17.515 22 12C22 6.487 17.514 2 12 2ZM12 18.25C11.31 18.25 10.75 17.691 10.75 17C10.75 16.31 11.31 15.75 12 15.75C12.69 15.75 13.25 16.31 13.25 17C13.25 17.691 12.69 18.25 12 18.25ZM13 13.875V15H11V12H12C13.104 12 14 11.103 14 10C14 8.896 13.104 8 12 8C10.896 8 10 8.896 10 10H8C8 7.795 9.795 6 12 6C14.205 6 16 7.795 16 10C16 11.861 14.723 13.429 13 13.875Z"></path></svg>
        <span class="tooltiptext">{{user.username}}</span>
      </div>
      <div class="item">
        <svg style="fill:#72767d" x="0" y="0" aria-hidden="false" width="24" height="24"><path fill-rule="evenodd" clip-rule="evenodd" d="M19.738 10H22V14H19.739C19.498 14.931 19.1 15.798 18.565 16.564L20 18L18 20L16.565 18.564C15.797 19.099 14.932 19.498 14 19.738V22H10V19.738C9.069 19.498 8.203 19.099 7.436 18.564L6 20L4 18L5.436 16.564C4.901 15.799 4.502 14.932 4.262 14H2V10H4.262C4.502 9.068 4.9 8.202 5.436 7.436L4 6L6 4L7.436 5.436C8.202 4.9 9.068 4.502 10 4.262V2H14V4.261C14.932 4.502 15.797 4.9 16.565 5.435L18 3.999L20 5.999L18.564 7.436C19.099 8.202 19.498 9.069 19.738 10ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"></path></svg>
        <span class="tooltiptext">{{user.username}}</span>
      </div>
    </section>
    <div class="serverbar">
      <div class="name">
        {{actual_server.name}}
      </div>
      <div class="channels">
        <li class="channel" v-for="channel of actual_server.channels">
            <svg class="channel_name" style="transform: rotate(-90deg);" width="24" height="24" viewBox="0 0 24 24">
              <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M16.59 8.59004L12 13.17L7.41 8.59004L6 10L12 16L18 10L16.59 8.59004Z"></path>
            </svg>
          <span class="channel_name">{{channel.name}}</span></li>
      </div>
    </div>
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

<script src="./app.js"></script>

<style src="./app.css"></style>
