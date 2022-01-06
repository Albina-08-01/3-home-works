    const input = document.querySelector('input');
    const button = document.querySelector('button');
    const name = document.querySelector('.name');
    const borders = document.querySelector('.borders');

    const nameUrl = 'https://restcountries.com/v3.1/name/';
    const codeUrl = 'https://restcountries.com/v3.1/alpha/';
    button.onclick = async function(params) {
        borders.innerHTML = '';
        const response = await fetch(nameUrl + input.value);
        const [country] = await response.json();
        name.innerText = country.name.official;
        const promises = country.borders.map(code => {
            return fetch(codeUrl + code);
        });
        const countries = await Promise.all(promises);
        for await (let country of countries) {
           const [data] = await country.json();
           const li = document.createElement('li');
           li.innerText = data.name.official;
           borders.append(li);
        }
    }





