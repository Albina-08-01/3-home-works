function add(){
 let ul = document.createElement('ul');
 document.body.appendChild(ul);
  while (true) {
    let Li = prompt("Введите текст", "");

    if (Li === null || Li === 0) {
       break;
    }

    let li = document.createElement('li');
    li.appendChild(document.createTextNode(Li));
    ul.appendChild(li);
}
}
add()

