
let inputTxt = document.getElementById('task__input'); 
let addTxt = document.getElementById('tasks__add');
let listTxt = document.getElementById('tasks__list');


addTxt.addEventListener('click', (event) => {
    event.preventDefault();
    if (inputTxt.value.trim().length > 0)
            send(inputTxt);
        inputTxt.value = '';
}) 


function send(ele){
    let count = document.getElementsByClassName('task__title').length+1;
    id = "remove-"+count;
    let inner = `<div class="task" id="`+id+`">
                    <div class="task__title">`
                        + ele.value.trim() + 
                    `</div>
                    <a href="#" class="task__remove" id="`+count+`">&times;</a>
                </div>`;
    listTxt.insertAdjacentHTML('beforeEnd', inner);
    remember(count);
} 

function remember(id) {
    document.getElementById(id).addEventListener('click', (event)=> {
        event.preventDefault();
        document.getElementById('remove-'+id).remove();
    })
}






