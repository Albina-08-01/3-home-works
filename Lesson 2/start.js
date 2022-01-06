
let container = document.getElementById('container')
let max = 20;
let min = 0;
let el = () => {
    const elem = document.createElement('div')
    elem.setAttribute('class', 'element')
    elem.innerHTML = Math.floor(Math.random()*20);
    container.appendChild(elem);
}
let interval = setInterval(el,3000)
let startInterval = () => {
        interval = setInterval(el,1000)
}
let stopInterval = () => {
    clearInterval(interval)

}













































