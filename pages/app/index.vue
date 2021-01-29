<template>
  <div class="app">
    <section class="sidebar">
      <div class="item"><img v-bind:src="user.avatar" alt="">
        <span class="tooltiptext">{{user.username}}</span>
      </div>
      <div class="separator"></div>
      <div v-for="guild of user.guilds" class="item"><img v-bind:src="user.avatar" alt="">
        <span class="tooltiptext">{{user.username}}</span>
      </div>
      <div class="item">
        <div class="plus">
<svg height="100%" viewBox="0 0 469.33333 469.33333" xmlns="http://www.w3.org/2000/svg"><path d="m437.332031 192h-160v-160c0-17.664062-14.335937-32-32-32h-21.332031c-17.664062 0-32 14.335938-32 32v160h-160c-17.664062 0-32 14.335938-32 32v21.332031c0 17.664063 14.335938 32 32 32h160v160c0 17.664063 14.335938 32 32 32h21.332031c17.664063 0 32-14.335937 32-32v-160h160c17.664063 0 32-14.335937 32-32v-21.332031c0-17.664062-14.335937-32-32-32zm0 0"/></svg>
        </div>
        <span class="tooltiptext">Ajouter un serveur</span>
      </div>
    </section>
    <div class="main-item">
      <p></p>
    </div>
  </div>
</template>

<script src="./app.js"></script>

<style src="./app.css"></style>
