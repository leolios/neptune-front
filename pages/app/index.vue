<template>
  <div class="app">
    <section class="sidebar">
      <div class="item"><img v-bind:src="user.avatar" alt="">
        <span class="tooltiptext">{{user.username}}</span>
      </div>
    </section>
    <div class="main-item">
      <p></p>
    </div>
  </div>
</template>

<script src="./app.js"></script>

<style src="./app.css"></style>
