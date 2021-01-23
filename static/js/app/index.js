new Vue({
            el: '#app',

            data: {
                username: localStorage.getItem("username"),
                tag: localStorage.getItem("tag"),
                token: localStorage.getItem("token"),
            },

            created: function() {

            },

            methods: {

                initsocket: function () {
                    let socket = new WebSocket("ws://localhost:8080/ws")
                    console.log("Attempting Websocket Connection")
                }
            }
        });
