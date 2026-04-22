function onDragStart(event) {
    event.dataTransfer.setData('text/plain', event.target.id);
}

function onDragOver(event) {
    event.preventDefault();
}

function onDrop(event) {
    const listEl = document.querySelector('#lista');
    const targetEl = event.target;

    const id = event.dataTransfer.getData('text/plain');
    const draggingEl = document.getElementById(id);

    const listItens = Array.from(listEl.children);
    const draggedIndex = listItens.indexOf(draggingEl);
    const droppedIndex = listItens.indexOf(targetEl.parentNode);

    if (draggedIndex > droppedIndex) {
        targetEl.parentNode.insertAdjacentElement('beforebegin', draggingEl)
    }

    if (droppedIndex > draggedIndex) {
        targetEl.parentNode.insertAdjacentElement('afterend', draggingEl)
    }
}

export { onDragOver, onDragStart, onDrop };