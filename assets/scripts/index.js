const ulTasks = document.querySelector('.list_tasks')
const buttonAddTask = document.querySelector('.btn_add');
const filterTasks = document.querySelector('.filter_task');


buttonAddTask.addEventListener('click',()=>{

    let text = document.querySelector('.input_task').value;
    if (text === "") {
        alert("Write some text!");
    }else {
        const li = document.createElement('li')
        const removeButton = document.createElement('button')
        removeButton.classList.add('remove');
        removeButton.textContent = 'X';
        ulTasks.append(li)
        document.querySelector('.input_task').value = '';
        li.textContent = text
        li.appendChild(removeButton)
    }

    const li = document.querySelectorAll('li')
    const btn = document.querySelectorAll('.remove')
    const btn_clear_all = document.querySelector('.btn_clear_all')
    for (let i = 0; i <li.length ; i++) {
        if(li.length > 0){
            btn[i].addEventListener('click',()=>{
                li[i].remove();
            })

            btn_clear_all.addEventListener('click',()=>{
                li[i].remove();
            })
        }
    }

    filterTasks.addEventListener('input', (ev)=> {
        const filterValue = ev.target.value.toLowerCase().trim();
        console.log(filterValue);
        li.forEach(item =>{
            console.log(item.textContent)
            let itemValue = item.textContent.toLowerCase();
            itemValue = itemValue.substring(0, itemValue.length-1);
            console.log(itemValue);

            if (itemValue.includes(filterValue)){
                item.classList.remove('none')
            }else {
                item.classList.add('none')
            }

        });

    })
})