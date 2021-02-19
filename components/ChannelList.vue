<template lang="html">
  <div class="serverbar">
    <div class="name">
      <p v-if="guild">{{guild.name}}</p>
      <p v-else>Choose a server</p>
    </div>
    <div class="channels">
      <li v-if="guild" class="channel" v-for="channel of guild.channels">
          <svg class="channel_name" style="transform: rotate(-90deg);" width="24" height="24" viewBox="0 0 24 24">
            <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M16.59 8.59004L12 13.17L7.41 8.59004L6 10L12 16L18 10L16.59 8.59004Z"></path>
          </svg>
        <span class="channel_name">{{channel.name}}</span></li>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    guild () {
      return this.$store.state.info.guilds.find(x => x.id === this.$store.state.actual_guild)
    }
  },
}
</script>

<style lang="css" scoped>
.serverbar {
  display: inline-block;
  height: 100vh;
  width: 189px;
  background-color: #2f3136;
}

.serverbar .name {
  width:100%;
  height: 48px;
  box-shadow: 0 1px 0 rgb(4 4 5 / 20%), 0 1.5px 0 rgb(6 6 7 / 5%), 0 2px 0 rgb(4 4 5 / 5%);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
}

.serverbar .channels {
  padding-top: 25px;
  width:100%;
  justify-content: center;
  color: #8e9297;
}

.channel {
  display: table;

}

.channel_icon {
vertical-align: middle;
display: inline-block;
}

.channel_name {
  vertical-align: middle;
  display: table-cell;
}
</style>
