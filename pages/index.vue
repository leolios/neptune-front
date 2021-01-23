<template>
  <link rel="stylesheet" href="/css/index.css">
  <div class="first">
    <div class="void-main">
      <h1 class="h1-main">
        NEPTUNE
      </h1>
    </div>
    <div id="appear-2" class="appear-2">
      <div class="full">
        <div class="navbar">
          <ul>
            <li class="join">  <NuxtLink to="/register">INSCRIPTION</NuxtLink></li>
          </ul>
          <ul>
            <li class="li-navbar"><a href="/login">SE CONNECTER</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="void-secondary">
    </div>
    <div id="appear-1" class="appear-1">
      <div class="full">
        <h1 class="full-h1">
          Vous aimez les gens et bien nous aussi
        </h1>
      </div>
    </div>
    <div class="void-secondary">
    </div>
    <div id="appear-2" class="appear-2">
      <div class="full">
        <h1 class="full-h1">
          Vous avez la tête dans les étoiles, nous dans les planètes
        </h1>
      </div>
    </div>
    <div class="void-before-footer">
      <a class="join" href="/register">Rejoignez-nous</a>
    </div>
    <div class="footer">
      <hr class="hr-border">
      <div>
        <ul>
          <li class="footer-plan">Les pages du sites</li>
          <li><a class="footer-link" href="/">Home </a></li>
          <li><a class="footer-link btn-request" href="/formulaire" target="_blank">Formulaire de Recrutement</a></li>
          <li><a class="footer-link btn-request" href="/404">Erreur</a></li>

        </ul>
        <ul>
          <li class="footer-separation-li"></li>
        </ul>
        <ul>
          <li class="footer-plan">Les sites</li>
          <li><a class="footer-link" href="https://discord.com" target="_blank">Discord ( le concurrent lol )</a></li>
          <li><a class="footer-link btn-request" href="https://facebook.com" target="_blank">Pareil que nous mais pour les vieux</a></li>
        </ul>
      </div>
      <hr class="hr-border">
      <Copyright>Neptune 2020 © tous droits réservés</Copyright>
    </div>
  </div>
</template>

<style>
  @import '/css/index.css';
</style>

<script lang="ts">
  import Vue from 'vue'
  require('@/static/index.css')
  export default Vue.extend({})
</script>
