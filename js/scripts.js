var globalToDoArray = [];
function ToDo(name, due, description){
  this.name = name;
  this.due = due;
  this.description = description;
  globalToDoArray.push(this);
}

$(document).ready(function(){
  $(".toDoForm").submit(function(event){
    event.preventDefault();

    var name = $("#nameInput").val();
    var due = $("#dueDateInput").val();
    var description = $("#descriptionInput").val();

    var newToDo = new ToDo(name, due, description);
    var index = globalToDoArray.length-1;
    $(".toDoList").append("<li class='toDoItem item"+index+"'>"+newToDo.name+"</li>");

    $(".toDoItem").click(function(event){
      $(".descriptionItem").remove();
      event.preventDefault();
      var thisClass = $(this).attr("class")
      var i = thisClass.charAt(thisClass.length-1);
      console.log(i);
      $(".detailList").append("<li class='descriptionItem'>Item: "+globalToDoArray[i].name+"</li><li class='descriptionItem'>Due: "+globalToDoArray[i].due+"</li><li class='descriptionItem'>Description: "+globalToDoArray[i].description+"</li>");
    });
  });
});
