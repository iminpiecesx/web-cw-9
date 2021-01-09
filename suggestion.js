
function request(){
    let email = document.getElementById("email").value;
    let request = document.getElementById("request").value;
    window.open(`mailto:${email}?subject=fromcookies&body=${request}`);
}