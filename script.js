let task = document.getElementById("task");
let btn = document.getElementById("btn"); 
let list = document.querySelector(".list"); 
let clear = document.querySelector("#clear"); 

// step 1

clear.addEventListener("click", () => {
  if(list.children.length === 0){
  return;
  }
  
  let check = confirm("if you want to delet all data?");
  if(check){
    list.innerHTML = "";
    localStorage.removeItem("saved")
  }
})

// step 2

btn.addEventListener("click", () => {
  if(task.value === ""){
    alert("Task field cannot be blank!");
    return;
  }
  
  let taskValue = task.value;
  
  let listItems = list.querySelectorAll("li span");
  let count = 0;
  
  listItems.forEach(curl => {
    let text = curl.textContent;
    if(text === taskValue || text.startsWith(taskValue + " ")){
      count++;
      console.log(count)
    }
  })
  
  
  
  let final = taskValue;
  if(count > 0){
    final = `${taskValue} ${count}`;
  }
  
  
  let li = document.createElement("li");
  li.innerHTML = `
  <span>${final}</span> <strong onclick="this.parentElement.remove(); save();"><i class="fa-solid fa-trash"></i></strong>
  `
  list.prepend(li);
  
  save();
  task.value = "";
})



// localStorage


const save = () => {
  localStorage.setItem("saved", JSON.stringify(list.innerHTML));
}

let data = JSON.parse(localStorage.getItem("saved"));

if(data !== null){
  list.innerHTML = data;
}


