const allTasks = [];
const addButton = document.querySelector('.btn_add');
const olTasks = document.querySelector('.list_tasks');

addButton.addEventListener('click', ()=>{
    let text = document.querySelector('.input_task').value;
    if (text.trim() === ''){
        alert("Write some text!");
    }else{
        allTasks.push(text);
        createLi(text);
        // console.log(allTasks)
    }
    const arrayLi = document.querySelectorAll('li');
    removeLi(arrayLi)
    clearAll(arrayLi)
});

const createLi = (e) => {
    const li = document.createElement("li");
    const removeButton = document.createElement("button");
    const dateSpan = document.createElement("span");
    removeButton.classList.add("remove");
    removeButton.textContent = "X";
    dateSpan.classList.add("date");
    const getTime = new Date();
    const date = getTime.getDate();
    const month = getTime.getMonth() + 1;
    const year = getTime.getFullYear();
    const hour = getTime.getHours();
    let minutes;
    if (getTime.getMinutes() < 10) {
        minutes = `0${getTime.getMinutes()}`
    } else {
        minutes = getTime.getMinutes();
    }
    dateSpan.textContent = `${date}-${month}-${year} ${hour}:${minutes}`;
    olTasks.append(li);
    document.querySelector(".input_task").value = "";
    li.textContent = e;
    li.appendChild(removeButton);
    li.appendChild(dateSpan);
};


const removeLi = (e) => {
    const btn = document.querySelectorAll(".remove");
    for (let i = 0; i < e.length; i++) {
        if (e.length > 0) {
            btn[i].addEventListener("click", () => {
                e[i].remove();
            });
        }
    }
};

const clearAll = (e) => {
    const clearBtn = document.querySelector(".btn_clear_all");
    clearBtn.addEventListener("click", () => {
        for (let i = 0; i < e.length; i++)
            e[i].remove();
    });
};