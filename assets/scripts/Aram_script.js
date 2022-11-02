const boxTask = document.querySelector('.input_task');
const buttonAddTask = document.querySelector('.btn_add');



buttonAddTask.addEventListener('click',()=>{
  let text = document.querySelector('.input_task').value;
  if (text === "") {
    alert("Write some text!");
  }else {
    const li = document.createElement('li')
    li.textContent = text;
    ulTasks.append(li)
    allTasks.push(text)
    document.querySelector('.input_task').value = '';
  }
})