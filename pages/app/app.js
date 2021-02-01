export default {
  data() {
    return {
      user: {},
      message: undefined,
      actual_server: {}
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
  },
  methods: {
    open_modal() {
      console.log("ok");
      var modal = document.getElementById("modal_add_server");
      modal.style.display = "block";
    },
    close_modal(e) {
      if(e.target !== e.currentTarget) return;
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
      this.user.guilds.push(guild.guild[0]);
      // this.$router.push({ path: 'app' })
    },
    open_server(e) {
      const server_id = e.path[0].getAttribute("server_id");
      this.actual_server = this.user.guilds.find(x => x.id === server_id);
    }
  }
}
