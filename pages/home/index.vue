<template>
  <div class="first">
    <div class="void-main">
      <h1 class="h1-main">
        NEPTUNE
      </h1>
    </div>
    <div id="appear-2" class="appear-2">
      <div class="full">
        <div>
          <ul class="auth-bar">
            <li class="join">  <NuxtLink to="/register">Register</NuxtLink></li>
            <li class="join"> <NuxtLink to="/login">Login</NuxtLink></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="void-secondary">
    </div>
    <div id="appear-1" class="appear-1">
      <div class="full">
        <h1 class="full-h1">
          You love people, we do too.
        </h1>
      </div>
    </div>
    <div class="void-secondary">
    </div>
    <div id="appear-2" class="appear-2">
      <div class="full">
        <h1 class="full-h1">
          You have your head in the stars, we in the planets.
        </h1>
      </div>
    </div>
    <div class="void-before-footer">
      <NuxtLink class="join" to="/register">Join-us</NuxtLink>
    </div>
    <div class="footer">
      <hr class="hr-border">
      <div class="foot-navigation">
        <div class="pages">
          <h3>Pages</h3>
          <ul>
            <li><a class="footer-link btn-request" href="/">Home </a></li>
            <li><a class="footer-link btn-request" href="/formulaire" target="_blank">Application form</a></li>
            <li><a class="footer-link btn-request" href="/404">Error</a></li>
          </ul>
        </div>
        <div class="usefull-links">
          <h3>Usefull links</h3>
          <ul>
            <li><a class="footer-link btn-request" href="#" target="_blank">Blog</a></li>
            <li><a class="footer-link btn-request" href="#" target="_blank">Idk</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
  })
</script>

<style src="./index.css"></style>
