let menuIcon = document.querySelector('#menu-icons');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Ambil nilai dari form
    var fullName = document.getElementById("fullName").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    // Bangun URL mailto dengan data form
    var mailtoLink = "mailto:tthiraignesia@gmail.com" +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent("Name: " + fullName + "\n") +
        encodeURIComponent("Email: " + email + "\n") +
        encodeURIComponent("Phone: " + phone + "\n") +
        encodeURIComponent("Message: " + message);

    // Redirect ke link mailto
    window.location.href = mailtoLink;
});

window.onload = function() {
    // Delay sebelum menyembunyikan opening screen
    setTimeout(function() {
        // Sembunyikan opening screen
        document.getElementById("opening-screen").style.display = "none";
        // Tampilkan konten utama
        document.getElementById("main-content").style.display = "block";
    }, 4000); 
};