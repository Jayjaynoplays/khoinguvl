function wrongAns(){
    alert("trả lời sai rồi cu");
}

function yeah(){
    var x = document.getElementById("aa");
    var y = document.getElementById("bb");
    if (x.style.display === "none") {
      x.style.display = "block";
      y.style.display = "none";
    } else {
      x.style.display = "none";
    }
}