/* document.getElementById('Navigate').onclick = function NavigateMenu() {

    document.getElementById('Navigate').textContent = "You clicked";
} */
let navigateBolean = false;
function Navigate() {
    if (navigateBolean == false) {
        navigateBolean = true;
        document.querySelector('#Navigate').textContent = "Close";}
        else {
            navigateBolean = false;
            document.querySelector('#Navigate').textContent = "Navigate";
        }   
}

