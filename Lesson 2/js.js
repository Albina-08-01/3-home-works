let Us = document.forms[0];
let LogI = Us.lastElementChild;
let minVal = 6;
let check = () => {
    if (Us.username.value.length < minVal || Us.password.value.length < minVal){
        LogI.disabled = true;
    }else{
        LogI.disabled = false;
    }
}
let log = (e) => {
    e.preventDefault();
    alert(`Username = ${Us.username.value} \n Password = ${Us.password.value}`)
}
Us.addEventListener(`change`, check)
LogI.addEventListener(`click`, log)
