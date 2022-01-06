let arrData = [];

let card = document.getElementById('root');
let s = document.getElementById('s');
let get = document.getElementById('get')
async function getShowDetails(id = '11007') {
    const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const data = await response.json();
    renderDetails(data);
}

async function getAllList(name = '') {
    const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`
    );
    const data = await response.json();
    arrData.push(data);
}
getAllList();

function renderData(data) {
    card.innerHTML = data[0].drinks
        .map((item) => {
            arrData.push(item);
            return `
            <ul class="list">
            <li class="list-item">
                <div  class="list-content">
                    <img src=${item.strDrinkThumb} alt="" />
                    <h2>${item.strDrink}</h2>
                    <input type="button" id='show' value="details"/>
                </div>
            </li>
            </ul>
        `;
        })
        .join(' ');
}
let modal = document.getElementById('modal');
let closeModal = document.querySelector('span');
let showInfo = document.querySelector('#info');
let showInfoRecipe = document.querySelector('#recipe');
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

function renderDetails(data) {
    console.log('', data.drinks[0]);
    showInfo.innerHTML = data.drinks[0];
    showInfoRecipe.innerHTML = data.drinks[0].strInstructions;
}

let btnInfo = null;
function updateUI() {
    setTimeout(() => {
        renderData(arrData);
        console.log('', arrData);

        btnInfo = card.querySelectorAll('#show');
        btnInfo.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                modal.style.display = 'block';
                let name = btn.parentElement.children[1].textContent;
                arrData[0].drinks.map((item) => {
                    if (item.strDrink === name) {
                        getShowDetails(item.idDrink);
                    }
                });
            });
        });
    }, 500);
}
updateUI();
s.addEventListener('change', (e) => {
    let name = e.target.value;
    arrData = [];
    getAllList(name);
    updateUI();
});

get.addEventListener('click',()=>{
    let inp = document.getElementById('s')
    getAllList(inp.value)
})



