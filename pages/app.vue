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

<style>
.container {
  display: flex;
  flex-direction: row;
  height: 100vh;
}

.container > .sidebar-item {
  flex: 1;
  height: 100vh;
  background-color: red;
}

.container > .main-item {
	flex: 14;
  height: 100vh;
  background-color: blue;
}
</style>
