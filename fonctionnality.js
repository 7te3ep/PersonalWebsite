/* document.getElementById('Navigate').onclick = function NavigateMenu() {

    document.getElementById('Navigate').textContent = "You clicked";
} */

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
  }


let navigateBolean = false;
function Navigate() {
    if (navigateBolean == false) {
        navigateBolean = true;
        document.querySelector('#Navigate').textContent = "Close";
        document.getElementById('menu').style.transform = "scaleY(1)";
        document.querySelector('header').style.top = "0rem";}
        else {
            navigateBolean = false;
            document.querySelector('#Navigate').textContent = "Navigate";
            document.getElementById('menu').style.transform = "scaleY(0)";
            document.querySelector('header').style.top = "-7rem";
        }   
}


