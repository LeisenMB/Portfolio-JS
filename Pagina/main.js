// variables


// lista 
const item_list = document.getElementById('item-list')
const itemList = [{
name: 'Calculadora',
desc: 'Es una calculadora hecha por mi, realiza operaciones basicas',
descr: 'Repositorio de la calculadora: ',
image: './calculadora.png',
},{
name: 'Ventas',
desc: 'Es una calculadora hecha por mi, realiza operaciones basicas',
descr: 'Repositorio de la calculadora: ',
image: './ventas.png',
},{
name: 'Curso',
desc: 'Es una calculadora hecha por mi, realiza operaciones basicas',
descr: 'Repositorio de la calculadora: ',
image: './calculadora.png',
}];
function lista(itemList) {
    item_list.innerHTML = '';
    for (const item of itemList) {
        item_list.innerHTML += `
            <div class="item-card">
                <div class="image">
                <img src="${item.image}" alt="${item.name}"/>
                </div>
                <div class="item-info">
                    <div class="nombreItem">
                        <p>${item.name}</p>
                    </div>
                    <div class="descriPri">
                        <p>${item.desc}</p>
                    </div>
                    <div class="descriSeg">
                        <p>${item.descr}</p>
                    </div>    
                    </div>
                </div>
            </div>`;
    }
}

window.addEventListener('load', function() {
    lista(itemList);
});