function annoy(e) {


    var annoyText = document.getElementById('FormControlInput').value;

    var annoyMe = document.getElementById("FormControlSelect").value;


    for (i = 0; i < annoyMe; i++) {

        document.getElementById("FormControlTextarea").innerHTML += annoyText+ "\n";
    }
}



