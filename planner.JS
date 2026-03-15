let taskList = [];

const addBtn =document.getElementById('addDeadlineBtn');

addBtn.addEventListener('click',function(){
    const task = document.getElementById('taskInput').value;
    const date = document.getElementById('dateInput').value;
    const hours = document.getElementById('hoursInput').value;

    if(!task|| !date || !hours){
        alert("Please fill everthing above first!");
        return;
    }

    const newTask = {
        taskName: task, deadline: date, hoursNeeded: Number(hours)
    };

    taskList.push(newTask);

    sort();
    
    updateTaskDisplay();

    document.getElementById('taskInput').value = "";
    document.getElementById('dateInput').value = "";
    document.getElementById('hoursInput').value = "";
});

function sort() {
    for (let i = 0; i < taskList.length; i++) {
        for (let j = 0; j < taskList.length - 1; j++) {
            
            let currentTaskDate = new Date(taskList[j].deadline);
            let nextTaskDate = new Date(taskList[j + 1].deadline);

            if (nextTaskDate < currentTaskDate) {
                let temp = taskList[j];         
                taskList[j] = taskList[j + 1]; 
                taskList[j + 1] = temp;        
            }
        }
    } 
}

function updateTaskDisplay() {
    const listElement = document.getElementById('taskListDisplay');
    
    let listContent = "";

    taskList.forEach((task) => {
        listContent = listContent + "<li>" + task.taskName + " - Due: " + task.deadline + "</li>";
    });

    if (taskList.length === 0) {
        listElement.innerHTML = '<p id="empty-message">No tasks added yet. Start typing above!</p>';
    } else {
        listElement.innerHTML = listContent;
    }
}