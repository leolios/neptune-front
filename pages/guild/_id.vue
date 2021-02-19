<template lang="html">
  <div>
    <ChannelList></ChannelList>
  </div>
</template>

<script>
export default {
  layout (context) {
    return 'app'
  },
  name: 'guild',
  data () {
      return {
          id: 0,
          msg: 'Hey Nic Raboy'
      }
  },
  async created() {
      this.id = this.$route.params.id
      this.$store.commit("setActualGuild", this.id)
  }
}
</script>

<style lang="css" scoped>
</style>
