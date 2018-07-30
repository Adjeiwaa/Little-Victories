// var annoyText = document.getElementByID("FormControlInput");

// annoyText.repeat(4);
// var b = document.querySelector("#FormControlSelect").value

function annoy() {
    var annoyText = document.getElementById('FormControlInput').value;

    var annoyMe = document.getElementById("FormControlSelect").value;

    // alert(document.getElementById("FormControlSelect").value);

    for (i = 0; i < annoyMe; i++) {

        document.getElementById("FormControlTextarea").innerHTML += annoyText+ "\n";

    }





}



