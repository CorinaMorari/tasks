const allTasks = [];
const addButton = document.querySelector(".btn_add");
const olTasks = document.querySelector(".list_tasks");
const filter = document.querySelector(".filter_task");
let arrayLi;

let taskCount = 0;

addButton.addEventListener("click", () => {

    let text = document.querySelector(".input_task").value;
    if (text.trim() === "") {
        alert("Write some text!");
    } else {
        taskCount += 1;
        allTasks.push({text, index: taskCount});
        createLi(text, taskCount);
        console.log(allTasks);
    }
    arrayLi = document.querySelectorAll("li");
});

const createLi = (textValueInput, index) => {
    const li = document.createElement("li");
    const removeButton = document.createElement("button");
    // const dateSpan = document.createElement("span");
    removeButton.classList.add("remove");

    removeButton.addEventListener("click", () => {
        const taskIndex = allTasks.findIndex((task) => task.index === index);
        if (taskIndex == -1) {
            return;
        }

        allTasks.splice(taskIndex, 1);
        li.remove();
    });

    removeButton.textContent = "X";
    // dateSpan.classList.add("date");
    // const getTime = new Date();
    // let date;
    // if (getTime.getDate() < 10) {
    //     date = "0" + getTime.getDate();
    // } else {
    //     date = getTime.getDate();
    // }
    // const month = getTime.getMonth() + 1;
    // const year = getTime.getFullYear();
    // const hour = getTime.getHours();
    // let minutes;
    // if (getTime.getMinutes() < 10) {
    //     minutes = "0" + getTime.getMinutes();
    // } else {
    //     minutes = getTime.getMinutes();
    // }
    // dateSpan.textContent = `${date}-${month}-${year} ${hour}:${minutes}`;
    olTasks.append(li);
    document.querySelector(".input_task").value = "";
    li.textContent = textValueInput;
    li.appendChild(removeButton);
    // li.appendChild(dateSpan);
};


let filteredElements = [];
filter.addEventListener("input", (ev) => {
    if (allTasks.length > 0) {
        const filterValue = ev.target.value.toLowerCase().trim();
        filteredElements = [];
        if (filterValue !== '') {
            for (let i = 0; i < allTasks.length; i++) {
                const itemValue = allTasks[i].text.trim().toLowerCase();
                if (itemValue.includes(filterValue)) {
                    if (filteredElements.length === 0) {
                        filteredElements.push({text: allTasks[i].text, index: allTasks[i].index})
                    } else {
                        filteredElements.forEach(item => {
                            if (allTasks[i].index !== item.index) {
                                filteredElements.push({text: allTasks[i].text, index: allTasks[i].index})
                            }
                        })
                    }
                }
            }
            //Got filtredElements
            //Show flirted elements
            arrayLi = document.querySelectorAll('li');
            clearAll(arrayLi);
            filteredElements.forEach(item => {
                createLi(item.text, item.index)
            })

        } else {
            console.log(filteredElements)
            arrayLi = document.querySelectorAll('li');
            clearAll(arrayLi);
            console.log(arrayLi);

            allTasks.forEach(item => {
                createLi(item.text, item.index)
            })
        }

    }
})

const clearBtn = document.querySelector(".btn_clear_all");
clearBtn.addEventListener("click", () => {
    arrayLi = document.querySelectorAll('li');
    clearAll(arrayLi);
    allTasks.splice(0);
    console.log(allTasks);
});


const clearAll = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        arr[i].remove();
    }
}