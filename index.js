
const taskContainer =document.querySelector(".task__container");

const addNewcard = () => {
    //get task data
    const taskData ={
        id: `${Date.now()}`,
        title: document.getElementById("taskTitle").value,
        image: document.getElementById("imgUrl").value,
        type: document.getElementById("taskType").value,
        discription: document.getElementById("taskDiscription").value,
    };
//generate html code

const newCard =`<div id=${taskData.id} class="col-md-6 col-lg-4 my-4">
<div class="card ">
  <div class="card-header d-flex justify-content-end gap-2">
    <button class="btn btn-outline-info"><i class="fas fa-pencil-alt"></i></button>
    <button class="btn btn-outline-danger"><i class="fas fa-trash"></i></button>
  </div>
  <div class="card-body">
    <img  class="card-img" src="${taskData.image}" alt="image">
    <h5 class="card-title p-2">${taskData.title}</h5>
    <p class="card-text">${taskData.discription}</p>
   <span class="badge bg-primary">${taskData.type}</span>
  </div>
  <div class="card-footer">
   <button class="btn btn-primary">open Task</button>
  </div>
</div>
</div>`;

//inject html in dom

taskContainer.insertAdjacentHTML("beforeEnd", newCard);

                      
// //clear the form
document.getElementById("taskTitle").value ="";
document.getElementById("imgUrl") .value ="";        
document.getElementById("taskType").value ="";        
document.getElementById("taskDiscription").value ="";



return;
};


