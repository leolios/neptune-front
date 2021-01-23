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
@import url('https://fonts.googleapis.com/css?family=Dosis:300,400,500');
.first{
  margin: 0;
  background: url(https://cdn.discordapp.com/attachments/785160284758999092/785161403001995284/unknown-1.png);
  text-align: center;
  font-family: 'Dosis', sans-serif;
  font-weight: 300;
  background-repeat: repeat-x;
  background-size: cover;
  background-position: left top;
  height: 100vh;
  background-attachment: fixed;
  overflow-x: hidden;
}
.void-main{
  font-weight: 300;
  color: white;
  background: fixed;
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  position: relative;
  grid-column: 3/span 8;
  align-items: center!important;
  display: flex!important;
}
.void-secondary{
  height: 100%;
  padding-top: 100px;
  padding-bottom: 100px;
}
.full{
  background-color: white;
  width: 100%;
  height: 100vh;
  transform: translateY(0);
  align-items: center!important;
  display: flex!important;
  margin-right: auto;
  margin-left: auto;
}
.footer{
  background-color: #2e1f40;
  width: 100%;
  color: white;
  padding-bottom: 10px;
}
.hr-border{
  height: 5px;
  border: none;
  background-color: #22172f;
}
.hr-sparation{
  height: 2px;
  border: none;
  background-color: #22172f;
}
.h1-main{
  font-size: 100px;
  font-weight: 700;
  line-height: 120%;
  width: 100%;
  grid-column: 3/span 8;
  grid-column: span 5;
  opacity:0;
  -moz-animation: anim 3s linear forwards 0.2s;
  -webkit-animation: anim 3s linear forwards 0.2s;
  -o-animation: anim 3s linear forwards 0.2s;
  -ms-animation: anim 3s linear forwards 0.2s;
  animation: anim 3s linear forwards 0.2s;
}
@-moz-keyframes anim {
  0% {opacity:0;}
  100% {opacity:1;}
}
@-webkit-keyframes anim {
  0%  {opacity:0;}
  100% {opacity:1;}
}
@-o-keyframes anim {
  0%  {opacity:0;}
  100% {opacity:1;}
}
@-ms-keyframes anim {
  0%  {opacity:0;}
  100% {opacity:1;}
}
@keyframes anim {
  0%  {opacity:0;}
  100% {opacity:1;}
}
.full-h1{
  font-size: 30px;
  font-weight: 700;
  line-height: 120%;
  width: 100%;
  grid-column: 3/span 8;
  grid-column: span 5;
}
.footer-link{
  align-items: center;
  color: white;
}
a{
  color: black;
  outline: none;
  text-decoration: none;
  text-transform: uppercase;
}
a:hover {
  transition: all 0.3s ease-in;
  text-decoration: underline;
}
ul{
  list-style-type: none;
  padding: 0;
  display: inline-block;
}
li{
  text-align: center;
  text-transform: uppercase;
}
.footer-separation-li{
  display: initial;
}
.join{
  padding: 10px 25px;
  border: 1px solid #FFCB39;
  border-radius: 100px;
  font-weight: 400;
  transition: all 0.3s ease-in;
  outline: none;
  text-decoration: none;
}
.join:hover{
  background-color: #ffcb39;
  padding: 10px 25px;
  border: 1px solid #FFCB39;
  border-radius: 100px;
  box-shadow: 0px 20px 20px rgba(0,0,0,0.1);
  outline: none;
  text-decoration: none;
}
.footer-plan{
  color: black;
}
.navbar{
  opacity:0;

  -moz-animation: animnav 1.5s linear forwards 1.5s;
  -webkit-animation: animnav 1.5s linear forwards 1.5s;
  -o-animation: animnav 1.5s linear forwards 1.5s;
  -ms-animation: animnav 1.5s linear forwards 1.5s;
  animation: animnav 1.5s linear forwards 1.5s;
}
@-moz-keyframes animnav {
  0% {opacity:0;}
  100% {opacity:1;}
}
@-webkit-keyframes animnav {
  0%  {opacity:0;}
  100% {opacity:1;}
}
@-o-keyframes animnav {
  0%  {opacity:0;}
  100% {opacity:1;}
}
@-ms-keyframes animnav {
  0%  {opacity:0;}
  100% {opacity:1;}
}
@keyframes animnav {
  0%  {opacity:0;}
  100% {opacity:1;}
}
.void-before-footer{
  height: 5%;
  padding-top: 100px;
  padding-bottom: 100px;
}
</style>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({})
</script>
