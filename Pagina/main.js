// variables


// lista 
const item_list = document.getElementById('item-list')
const item_list_dos = document.getElementById('item-list-dos')
const itemList = [{
    name: 'Calculator',
    desc: 'Basic arithmetic calculator',
    descr: 'Perform basic operations: addition, subtraction, multiplication, and division.',
    image: 'imagenes/calculadora.png',
    repo: 'https://leisenmb.github.io/Portfolio-JS/Calculadora/'
},{
    name: 'Sales',
    desc: 'Sales record',
    descr: 'Record sales with unique IDs, delete sales, calculate total sales, display price and quantity, and verify product registration.',
    image: 'imagenes/venta.png',
    repo: 'https://leisenmb.github.io/Portfolio-JS/tarea/'
},{
    name: 'Course',
    desc: 'JavaScript course applied to a web page, taught on Platzi',
    descr: 'Course with JavaScript functions applied to a web page, incorporating modules from Platzi, sales, a shopping cart, pricing, and product listings.',
    image: 'imagenes/curso.png',
    repo: 'https://leisenmb.github.io/curso-frontend-developer-Javascript-practico/'
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
                                <span>${item.desc}</span>
                            </div>
                        </div>
                        <div class="item-back">
                            <div class="item-inner">
                            <p class="descr">${item.descr}</p>
                            </div>
                        </div>
                    </div>
                    <div class="nombreItem">
                        <a href="${item.repo}">${item.name}, click here</a>
                    </div>
                </div>`;
    }
}

window.addEventListener('load', function() {
    lista(itemList);
});