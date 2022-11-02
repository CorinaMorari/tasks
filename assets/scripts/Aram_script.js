const ulTasks = document.querySelector('.list_tasks')
const buttonAddTask = document.querySelector('.btn_add');

buttonAddTask.addEventListener('click', () => {

    const text = document.querySelector('.input_task').value;

    if (text === "") {
        alert("Write some text!");
    } else {
        const li = document.createElement('li');
        const clearBtn = document.querySelector(".btn_clear_all");
        li.innerHTML = `${text}<button class="remove"> X </button>`;
        ulTasks.append(li);
        document.querySelector('.input_task').value = '';

        clearBtn.addEventListener("click", () => {
          li.remove();
        });
    }

    const li = document.querySelectorAll('li')
    const btn = document.querySelectorAll('.remove')
    for (let i = 0; i < li.length; i++) {
        if (li.length > 0) {
            btn[i].addEventListener('click', () => {
              li[i].remove();
            })
        }
    }

})
