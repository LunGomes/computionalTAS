const form = document.getElementById("taskForm");
const list = document.getElementById("taskList");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = event.target.elements.task.value;

  const item = document.createElement("li");
  item.textContent = text;

  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = '&#128465';
  deleteButton.className = "delete"; 
  item.append(deleteButton);

  list.append(item);
  form.reset();
});

list.addEventListener("click", (event) => {
    const isDeletable = event.target.classList.contains('delete');
    
    if (isDeletable) {
        event.target.parentElement.remove();
    }
});

// FORMA EXTENSA DE PUXAR O VALUE:
// const elements = event.target.elements;
// const text = elements.task.value;

// EXEMPLO:
// const botao = document.getElementById("botao");
// botao.addEventListener('mouseover', () => {
//     botao.innerText = "Passou o mouse!";
// })
