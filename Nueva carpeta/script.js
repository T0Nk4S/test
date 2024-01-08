function agregarTarea(){

    var nuevaTarea = document.getElementById("nueva-tarea").value;
    
    var nuevoItem=document.createElement("li");
    
    nuevoItem.textContent=nuevaTarea;
    
    document.getElementById("tareas-lista").appendChild(nuevoItem);

    document.getElementById("nueva-tarea").value="";
}