const mainApp = document.querySelector(".toDoApp");
const taskText = mainApp?.querySelector<HTMLInputElement>(".toDoInput");
const addButton = mainApp?.querySelector(".addToDoButton");
let counter = 0;

type currentTasks = {
    task: string;
    finished: boolean;
}

function addElementToDOM() {
    counter++;
    const taskContainer = document.createElement("div");
    const task = document.createElement("p");
    const taskFinished = document.createElement("input");
    const taskDelete = document.createElement("button");

    taskContainer.className = "taskContainer";
    taskContainer.id = `taskContainer${counter}`;

    task.textContent = taskText?.value || "No task provided";
    taskFinished.type = "checkbox";
    taskDelete.textContent = "Delete";

    taskContainer?.appendChild(task);
    taskContainer?.appendChild(taskFinished);
    taskContainer?.appendChild(taskDelete);
    mainApp?.appendChild(taskContainer);
}

function deleteTask(taskContainerId: string) {
    mainApp?.removeChild(document.getElementById(taskContainerId) as HTMLElement);
}

addButton?.addEventListener("click", () => {
    addElementToDOM();
});

mainApp?.addEventListener("click", (event) => {
    const target = event.target as HTMLElement;
    if (target.textContent === "Delete") {
        const taskContainer = target.parentElement;
        deleteTask(taskContainer?.id || "");   
    }
});

mainApp?.addEventListener("change", (event) => {
    let finished = false;
    const target = event.target as HTMLInputElement;
    if (target.type !== "checkbox") return;

    const taskContainer = target.parentElement;
    const text = taskContainer?.querySelector("p") as HTMLElement;
    if (target.checked) {
        text.style.textDecoration = "line-through";
    } else {
        text.style.textDecoration = "";
    }
});