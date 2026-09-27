let currentFilter = "all";
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

const messageForm = document.querySelector("#messageForm");
const textInput = document.querySelector("#textInput");
const tasksList = document.querySelector("#tasks-list");
const filterAll = document.querySelector("#filter-all");
const filterActive = document.querySelector("#filter-active");
const filterCompleted = document.querySelector("#filter-completed");
const quoteText = document.querySelector("#quote-text");
const quoteAuthor = document.querySelector("#quote-author");

async function getQuote() {
  try {
    const response = await fetch("https://dummyjson.com/quotes/random");
    const data = await response.json();
    quoteText.textContent = data.quote;
    quoteAuthor.textContent = data.author;
  } catch (error) {
    quoteText.textContent = "Не удалось загрузить цитату";
  }
}

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

filterAll.addEventListener("click", () => {
  currentFilter = "all";
  renderTasks();
});
filterActive.addEventListener("click", () => {
  currentFilter = "active";
  renderTasks();
});
filterCompleted.addEventListener("click", () => {
  currentFilter = "completed";
  renderTasks();
});

messageForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const newTask = {
    id: Date.now(),
    text: textInput.value.trim(),
    completed: false,
  };
  tasks.push(newTask);

  renderTasks();
  saveTasks();
  console.log(tasks);
  console.log(textInput.value);
  textInput.value = "";
});
function renderTasks() {
  let filteredTasks = tasks;
  if (currentFilter === "active") {
    filteredTasks = filteredTasks.filter((item) => !item.completed);
  }
  if (currentFilter === "completed") {
    filteredTasks = filteredTasks.filter((item) => item.completed);
  }
  tasksList.textContent = "";
  filteredTasks.forEach((task) => {
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;

    const li = document.createElement("li");
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Удалить";
    li.textContent = task.text;
    tasksList.appendChild(li);
    deleteBtn.addEventListener("click", () => {
      tasks = tasks.filter((item) => item.id !== task.id);
      renderTasks();
      saveTasks();
    });
    checkbox.addEventListener("change", () => {
      task.completed = checkbox.checked;
      renderTasks();
      saveTasks();
    });
    if (task.completed) {
      li.classList.add("completed");
    }

    li.appendChild(deleteBtn);
    li.prepend(checkbox);
  });
}
renderTasks();
getQuote();
