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
    create_guild() {
      
    }
  }
}
