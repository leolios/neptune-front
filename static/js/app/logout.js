function logout() {
  var token = localStorage.getItem("token");
  var damn = new Headers();
  damn.append('token', token);

  if (token) {
    var info = {
      method: 'POST',
      headers: damn

    }
    const request = new Request('/api/logout', info);


    fetch(request).then(response => {
      if (response.status === 200) {
        localStorage.clear();
        window.location.replace("/");
      } else {
        throw new Error('Something went wrong on api server!');
      }
    })
    .then(response => {
    console.log("disconected")
    }).catch(error => {
      console.error(error);
    });

  }

}
