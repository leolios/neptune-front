var token = localStorage.getItem("token");
var damn = new Headers();
damn.append('token', token);

if (token) {
  var info = {
    method: 'POST',
    headers: damn

  }
  const request = new Request('/api/tokenlogin', info);


  fetch(request).then(response => {
    if (response.status === 200) {
      window.location.replace("/app");
    } else {
      throw new Error('Something went wrong on api server!');
    }
  })
  .then(response => {
  console.log("sucess")
  }).catch(error => {
    console.error(error);
  });

}
