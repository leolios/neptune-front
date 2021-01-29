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
