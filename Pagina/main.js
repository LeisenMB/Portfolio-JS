// variables


// lista 
const item_list = document.getElementById('item-list')
const item_list_dos = document.getElementById('item-list-dos')
const itemList = [{
    name: 'Calculadora',
    desc: 'Calculadora de operaciones básicas',
    descr: 'Realiza operaciones básicas: suma, resta, multiplica y divide.',
    image: './calculadora.png',
    repo: 'Repositorio: '
},{
    name: 'Ventas',
    desc: 'Registro de ventas',
    descr: 'Registra ventas agregandole un ID unico, elimina ventas, suma el total de las ventas y muestra el precio y cantidad, verifica si el producto esta registrado',
    image: './venta.png',
    repo: 'Repositorio: '
},{
    name: 'Curso',
    desc: 'Curso de JS aplicado en una página web, dictado en Platzi',
    descr: 'Curso de una página web con funciones hechas en JS y union de modulos hechas en platzi, ventas, carrito de ventas, precios y listado de productos ',
    image: './curso.png',
    repo: 'Repositorio: '
}];
function lista(itemList) {
    item_list.innerHTML = '';
    for (const item of itemList) {
        item_list.innerHTML += `
                <div class="items">
                    <div class="item">
                        <div class="item-front">
                            <img src="${item.image}" alt="${item.name}" class="image"/>
                            <div class="item-inner">
                                <p>${item.name}</p>
                                <span>${item.desc} </span>
                            </div>
                        </div>
                        <div class="item-back">
                            <div class="item-inner">
                            <p class="descr">${item.descr}</p>
                            </div>
                        </div>
                    </div>
                    <div class="nombreItem">
                        <p>${item.name}</p>
                    </div>
                </div>`;
    }
}

// function listaDos(itemList) {
//     item_list_dos.innerHTML = '';
//     for (const item of itemList) {
//         item_list_dos.innerHTML += `
//         <div class="item-info">
//                     <div class="descriPri">
//                         <p>${item.desc}</p>
//                     </div>
//                     <div class="descriSeg">
//                         <p>${item.descr}</p>
//                     </div>    
//                 </div>
//         `
//     }
// }

window.addEventListener('load', function() {
    lista(itemList);
});