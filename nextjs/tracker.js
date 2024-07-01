var online = document.getElementsByClassName("_amid");
var user = document.getElementsByClassName(" _aqbz");

function trackuser() {
    var track = 1;
    if (track) {
        setTimeout(function(){
            var today = new Date();
            var date = today.getFullYear() +'/'(today.getMonth()+1)+'/'+today.getDate();
            var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
            var encodedTime = encodeURIComponent(date + "_" + time)
            try {
                if (online[0].innerText == "online") {
                    console.log("User online! Sending...(" + user[0].innerText + ")")
                    var encodedUser = encodeURIComponent(user[0].innerText)
                    var exfilImage = new Image()
                    exfilImage.src = "http://127.0.0.1/cgi-bin/exfil.py?user=" + encodedUser + "&time=" + encodedTime;
                } else  {
                    console.log("User not online. Last online:" + online[0].innerText + "(Not sending)")
                }
            } catch(error) {
                console.log("User not online - Privacy mode activated (" + error + ")")
            }
            trackuser()
        }, 10000)
    }
}
trackuser()
