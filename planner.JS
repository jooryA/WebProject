
// FR4 
// default 4 hours.
let userAvailability = {
   sunday: 4, monday: 4, tuesday: 4, wednesday: 4, thursday: 4, friday: 4, saturday: 4
};

//FR4 availability logic here!
function getAvailabilityFromUser() {
}



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
    let totalHours = 0;

    taskList.forEach((task) => {
        listContent = listContent + "<li>" + task.taskName + " - Due: " + task.deadline + "</li>";
        totalHours = totalHours + task.hoursNeeded;
    });

    if (taskList.length > 0) {
        listContent = listContent + "<li><strong>Total Load: " + totalHours + " hours</strong></li>";
    }

    if (taskList.length === 0) {
        listElement.innerHTML = '<p id="empty-message">No tasks added yet. Start typing above!</p>';
    } else {
        listElement.innerHTML = listContent;
    }
}