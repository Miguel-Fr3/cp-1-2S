const task = []
const ul = document.getElementById("lista-tarefas")
const btnAddTarefa = document.getElementById("btnAddTarefa")


//Verifica campos

const campos = document.querySelectorAll("input[type='text'], input[type='number']");
    const botaoSubmit = document.getElementById("botaoSubmit");

    function verificarCamposPreenchidos() {
      for (const campo of campos) {
        if (campo.value.trim() === "") {
          return false;
        }
      }
      return true;
    }

    for (const campo of campos) {
      campo.addEventListener("input", () => {
        if (verificarCamposPreenchidos()) {
        btnAddTarefa.removeAttribute("disabled");
        } else {
        btnAddTarefa.setAttribute("disabled", "disabled");
        }
      });
    }

// recebendo elementos
btnAddTarefa.addEventListener("click", (evt) => {
  evt.preventDefault();
  const descInput = document.getElementById("idDesc").value;
  const autorInput = document.getElementById("idAutor").value;
  const depInput = document.getElementById("idDep").value;
  const importInput = document.getElementById("idImport").value;

  const newTask = { desc: descInput, autor: autorInput, dep: depInput, import: importInput };
  task.push(newTask);
  show(newTask, task.length - 1);

}
);

//cria o obj em html

function show(taskObj, index) {
  var li = document.createElement("li");

  li.innerHTML = `<div class="task">${taskObj.desc}</div> | <div class="task">${taskObj.autor}</div> | <div class="task">${taskObj.dep}</div> | <div class="task">${taskObj.import}</div>  <button class="btnDelete">X</button>`;
  
  ul.appendChild(li);

  // BOTÃO DELETE
  const btnDelete = li.querySelector(".btnDelete");

  btnDelete.addEventListener("click", (evt) => {
      evt.preventDefault();
      task.splice(index, 1);
      ul.removeChild(li);
      mostra();
  });

}

// mostra o codigo

function mostra(){
  ul.innerHTML = "";
  task.forEach((task) => {
      show(task);
  });

}

// btn decrecente 
btnDec.addEventListener("click", () => {
  event.preventDefault();
  ul.innerHTML = "";
  task.sort((a, b) => {
    if (a.import < b.import) {
      return 1;
    }
    if (a.import > b.import) {
      return -1;
    }
    return 0;
  });
  task.forEach((task, index) => {
    show(task, index);
  });
});

// btn crescente
btnCresc.addEventListener("click", () => {
  event.preventDefault();
  ul.innerHTML = "";
  task.sort((a, b) => {
    if (a.import < b.import) {
      return -1;
    }
    if (a.import > b.import) {
      return 1;
    }
    return 0;
  });
  task.forEach((task, index) => {
    show(task, index);
  });
});