<template>
  <div class="container">
    <div class="sidebar-item">
      <p>{{user.username}}</p>
      <img v-bind:src="user.avatar" alt="">
    </div>
    <div class="main-item">
      <p></p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {}
    }
  },
  async fetch() {
    const headers = new Headers();
    headers.append("token", localStorage.getItem("token"));
    this.user = await fetch(
      'https://neptuneapp-api.herokuapp.com/api/token_info',
      {
        headers: headers
      }
    ).then(res => res.json());
    console.log(this.user);
  }
}
</script>

<style src="./app.css"></style>
