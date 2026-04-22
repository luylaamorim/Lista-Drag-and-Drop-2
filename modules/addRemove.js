import {
    onDragOver,
    onDragStart,
    onDrop
} from "./dragDrop.js";


function addItem() {
    const novoBotao = createRemoveButton();
    const novoItem = createNewItem();

    const novoContainer = buildNewItemContainer({ item: novoItem, botao: novoBotao });

    const lista = document.getElementById("lista");
    lista.appendChild(novoContainer);
}

function createRemoveButton() {
    const novoBotao = document.createElement('button');
    novoBotao.className = 'remover';
    novoBotao.innerText = 'Remover';
    novoBotao.addEventListener('click', removerItem);

    return novoBotao;
}

function createNewItem() {
    const novoItem = document.createElement('li');
    novoItem.contentEditable = true;
    novoItem.innerHTML = 'Clique para editar';

    return novoItem;
}

function buildNewItemContainer(elements) {
    const novoContainer = document.createElement('div');
    novoContainer.classList.add('item--container');
    novoContainer.appendChild(elements.item);
    novoContainer.appendChild(elements.botao);

    novoContainer.id = `c-${Date.now()}`;
    novoContainer.draggable = true;
    novoContainer.addEventListener('dragstart', onDragStart);
    novoContainer.addEventListener('dragover', onDragOver);
    novoContainer.addEventListener('drop', onDrop);

    return novoContainer;
}

function removerItem(event) {
    const itemRemovido = event.target.parentNode;
    const lista = document.getElementById("lista");
    lista.removeChild(itemRemovido);
}

export { addItem };
