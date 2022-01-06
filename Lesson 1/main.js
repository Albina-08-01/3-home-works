function myContainer(){
 let tasks = ['Buy lemonade', 'Make toasts', 'Repair car', 'Play games', 'Pet a cat'];
 for(let i=0;i<5;i++){
  let newLi = document.createElement('li');
  newLi.className="task";

  newLi.innerHTML = tasks[i];

}
}
myContainer()










