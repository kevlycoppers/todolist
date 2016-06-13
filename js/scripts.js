var globalToDoArray = [];
function ToDo(name, due, description){
  this.name = name;
  this.due = due;
  this.description = description;
  globalToDoArray.push(this);
}
