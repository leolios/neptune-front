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
          <ul>
            <li class="join">  <NuxtLink to="/register">Register</NuxtLink></li>
          </ul>
          <ul>
            <li class="join"><a href="/login">Login</a></li>
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
      <a class="join" href="/register">Join-us</a>
    </div>
    <div class="footer">
      <hr class="hr-border">
      <div class="foot-navigation">
        <ul>
          <li class="footer-plan">Pages</li>
          <li><a class="footer-link btn-request" href="/">Home </a></li>
          <li><a class="footer-link btn-request" href="/formulaire" target="_blank">Application form</a></li>
          <li><a class="footer-link btn-request" href="/404">Error</a></li>

        </ul>
        <ul>
          <li class="footer-separation-li"></li>
        </ul>
        <ul>
          <li class="footer-plan">Usefull links</li>
          <li><a class="footer-link btn-request" href="#" target="_blank">Blog</a></li>
          <li><a class="footer-link btn-request" href="#" target="_blank">Idk</a></li>
        </ul>
      </div>
      <hr class="hr-border">
      <p>Neptune 2021 &copy; all rights reserved.</p>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
  })
</script>

<style src="./index.css"></style>
