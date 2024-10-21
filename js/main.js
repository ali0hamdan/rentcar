function getCurrentYear() {
    var year = new Date().getFullYear()
    document.getElementById("year").innerText = year;
}

getCurrentYear()


function login() {
    window.location.href = "index.html";
}


