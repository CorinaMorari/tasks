const boxTask = document.querySelector('.input_task');
const buttonAddTask = document.querySelector('.btn_add');
const buttonClearAll = document.querySelector('.btn_clear_all');

buttonAddTask.addEventListener('click',()=>{
  let text = document.querySelector('.input_task').value;
  if (text === "") {
    alert("Write some text!");
  }else {
    allTasks.push(text);
    showElements(allTasks)
    document.querySelector('.input_task').value = '';
  }
})
const showElements = (arr) => {
  arr.forEach(item => {
    const li = document.createElement('li')
    li.innerHTML = `${item}<button class="remove"> X </button>`
    ulTasks.append(li);
  })

}