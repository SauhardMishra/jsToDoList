var tasks = [];

document.getElementById("addbtn").onclick = function () {
  additem();

  console.log("working!");
};

function additem() {
  var todo = document.getElementById("new-task").value;
  //   console.log("In add");

  tasks.push(todo);
  //    console.log(data);
  //  console.log(tasks);
  display(todo);
}

function display() {
  var ulData = document.getElementById("incomplete-tasks");
  ulData.innerHTML = "";
  for (var i = 0; i < tasks.length; i++) {
    ulData.innerHTML +=
      '<li>\
         <input type="checkbox" /><label>' +
      tasks[i] +
      '</label>\
         <input type="text" /><button class="edit" onclick="editTask(\'' +
      tasks[i] +
      '\')">Edit</button>\
          <button  class="delete" onclick="removeTask(\'' +
      tasks[i] +
      "')\">Delete</button>\
          </li>";
  }
  //   console.log(ulData);
  //   console.log("display working!");
}

function removeTask(task) {
  console.log("test okay");
  for (var i = 0; i < tasks.length; i++) {
    // var rem = tasks[i];
    if (tasks[i] == task) {
      tasks.splice(i, 1);
    }
  }
  display();
}

function editTask(task) {
  console.log(task);
 
  for (var i = 0; i < tasks.length; i++) {
    if (tasks[i] == task) {
      console.log(task);
      document.getElementById("new-task").value = tasks[i];
      document.getElementById("addbtn").style.display = "none";
      document.getElementById("updatebtn").style.display = "block";
    }
  }
}

function updateTask(task) {
   console.log("update working");
  var todo = document.getElementById("new-task").value;
   for(var i=0;i<tasks.length;i++){
     if(tasks[i]==todo){
       console.log("test!!!!");
          task[i] = todo; 
     }
   }
   console.log(todo);
   display(task);

}
