// variables


// lista 
const item_list = document.getElementById('item-list')
const itemList = [{
name: 'Calculadora',
desc: 'Es una calculadora hecha por mi, realiza operaciones basicas',
descr: 'Repositorio de la calculadora: ',
image: 'ingresar link',
},{
name: 'Ventas',
desc: 'Es una calculadora hecha por mi, realiza operaciones basicas',
descr: 'Repositorio de la calculadora: ',
image: 'ingresar link',
},{
name: 'Curso',
desc: 'Es una calculadora hecha por mi, realiza operaciones basicas',
descr: 'Repositorio de la calculadora: ',
image: 'ingresar link',
}];
function lista(itemList) {
    item_list.innerHTML = '';
    for (const item of itemList) {
        item_list.innerHTML += `
            <div class="product-card">
                <img src="${item.image}" alt="${item.name}"/>
                <div class="product-info">
                    <div>
                        <p>$120</p>
                        <p>${item.name}</p>
                        <p>${item.desc}</p>
                        <p>${item.descr}</p>
                        <p>${item.image}</p>
                    </div>
                    <figure>
                        <img src="./icons/bt_add_to_cart.svg" alt="Add to Cart" />
                    </figure>
                </div>
            </div>`;
    }
}

window.addEventListener('load', function() {
    lista(itemList);
});