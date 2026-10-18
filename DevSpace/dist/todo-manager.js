const mainApp = document.querySelector(".toDoApp");
const taskText = mainApp?.querySelector(".toDoInput");
const addButton = mainApp?.querySelector(".addToDoButton");
let counter = 0;
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
function deleteTask(taskContainerId) {
    mainApp?.removeChild(document.getElementById(taskContainerId));
}
addButton?.addEventListener("click", () => {
    addElementToDOM();
});
mainApp?.addEventListener("click", (event) => {
    const target = event.target;
    if (target.textContent === "Delete") {
        const taskContainer = target.parentElement;
        deleteTask(taskContainer?.id || "");
    }
});
mainApp?.addEventListener("change", (event) => {
    let finished = false;
    const target = event.target;
    if (target.type !== "checkbox")
        return;
    const taskContainer = target.parentElement;
    const text = taskContainer?.querySelector("p");
    if (target.checked) {
        text.style.textDecoration = "line-through";
    }
    else {
        text.style.textDecoration = "";
    }
});
export {};
//# sourceMappingURL=todo-manager.js.map