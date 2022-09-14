let modal = document.getElementById('modal_main');
let success = document.getElementById('modal_success');

activate(modal);

// close popup
let clicksClose = document.getElementsByClassName("modal__close modal__close_times");

for( let i =0; i< clicksClose.length; i++) {
    clicksClose[i].onclick = function() {
        hidden(modal);
        hidden(success);
    } 
}
