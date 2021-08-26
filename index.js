
const taskContainer =document.querySelector(".task__container");
let golbalTaskData = [];
//Function decleration
const generateHTML=(taskData) =>
  `<div id=${taskData.id} class="col-md-6 col-lg-4 my-4">
<div class="card ">
  <div class="card-header d-flex justify-content-end gap-2">
    <button class="btn btn-outline-info"><i class="fas fa-pencil-alt"></i></button>
    <button class="btn btn-outline-danger" name=${taskData.id} onclick="deleteCard.apply(this, arguments)"><i class="fas fa-trash" name=${taskData.id}></i></button>
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


const getinDOM =(contant) =>{
  taskContainer.insertAdjacentHTML("beforeEnd", contant);
}

const saveToLocalStorage = () =>
localStorage.setItem("taskyCA", JSON .stringify({card:golbalTaskData}));

//------------------------------------------------------------------------
const addNewcard = () => {
    //get task data
    const taskData ={
        id: `${Date.now()}`,
        title: document.getElementById("taskTitle").value,
        image: document.getElementById("imgUrl").value,
        type: document.getElementById("taskType").value,
        discription: document.getElementById("taskDiscription").value,
    };

    //pushdat to array
    golbalTaskData.push(taskData);

    //add data to local storage
    saveToLocalStorage();

//generate html code

const newCard = generateHTML(taskData);

//inject html in dom

getinDOM(newCard);

                      
// //clear the form
document.getElementById("taskTitle").value ="";
document.getElementById("imgUrl") .value ="";        
document.getElementById("taskType").value ="";        
document.getElementById("taskDiscription").value ="";



return;
};

//loadexisting tasks

const loadExistData = () =>{

  //check local storage 
  const getData = localStorage.getItem("taskyCA");
  //retrive data form local storage
  if(!getData) return;
  const taskCard = JSON.parse(getData);
  const golbalTaskData= taskCard.card;

  golbalTaskData.map((taskData) =>{
    //generate html page for those data
  
    const newCard = generateHTML(taskData);
  //insert in dom
  getinDOM(newCard);
 });
 return;
};
//delete task 
const deleteCard = (event) => {
  //get task using name
  const targetID = event.target.getAttribute("name");
  const elementType = event.target.tagName;

  const removetask = golbalTaskData.filter((task) => task.id !=targetID);
  golbalTaskData = removetask;
  saveToLocalStorage();

  //remove task from DOM
  if (elementType ==="BUTTON"){
  return taskContainer.removeChild(
    event.target.parentNode.parentNode.parentNode
  );
  }
 else{
    return taskContainer.removeChild(
      event.target.parentNode.parentNode.parentNode.parentNode
    );
    }
};
