
let el = document.getElementById('count');
el.remove();

function myFunc() {
    const firstUl = document.getElementById("Rima"),
        firstChild = firstUl.firstChild,
        newChild = document.createElement("div" ),
        text = document.createTextNode("Canned Fish");

    newChild.appendChild(text);
    firstUl.replaceChild(newChild, firstChild);
}
console.log(myFunc())


function Func() {
    const firstUl = document.getElementById("dima"),
        firstChild = firstUl.firstChild,
        newChild = document.createElement("span"),
        text = document.createTextNode("x 4");

    newChild.appendChild(text);
    firstUl.replaceChild(newChild, firstChild);
}
console.log(Func())








