export default {
  data() {
    return {
      user: {},
      message: undefined,
      guilds: []
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
    this.user.guilds.forEach(async (item, i) => {
      let guild = await fetch('https://neptuneapp-api.herokuapp.com/api/guild/'+item).then(res => res.json());
      this.guilds.push(guild.guild[0]);
      console.log(this.guilds)
    });

  },
  methods: {
    open_modal() {
      console.log("ok");
      var modal = document.getElementById("modal_add_server");
      modal.style.display = "block";
    },
    close_modal(e) {
      if(e.target !== e.currentTarget) return;
      console.log(this)
      console.log(e);
      var modal = document.getElementById("modal_add_server");
      modal.style.display = "none";
    },
    async create_guild() {
      const form = new URLSearchParams();
      form.append("name", document.getElementById("name").value)
      form.append("description", document.getElementById("description").value)
      form.append("icon", document.getElementById("icon").value)
      form.append("region", document.getElementById("region").value)
      form.append("token", localStorage.getItem('token'))

      const req = await fetch("https://neptuneapp-api.herokuapp.com/guild", {
        method: "POST",
        headers: form
      })
      const json = await req.json();
      if (json.message) this.message = json.message;
      let guild = await fetch('https://neptuneapp-api.herokuapp.com/api/guild/'+json.new_server[0].id).then(res => res.json());
      this.guilds.push(guild.guild[0]);
      // this.$router.push({ path: 'app' })
    }
  }
}
