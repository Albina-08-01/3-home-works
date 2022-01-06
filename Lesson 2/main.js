let containers = document.getElementById(`containers`)
let addElement = () => {
    let div = document.createElement(`div`)
    div.setAttribute(`class`, `element`)
    div.textContent="Hello"
    containers.appendChild(div)
}



