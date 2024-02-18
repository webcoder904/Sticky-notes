function createStickyNote() {
    const container = document.getElementById('sticky-container');

    const note = document.createElement('div');
    note.className = 'sticky-note';
    note.draggable = true;

    note.addEventListener('dragstart', (event) => {
        event.dataTransfer.setData('text/plain', note.id);
    });

    note.addEventListener('dragover', (event) => {
        event.preventDefault();
    });

    note.addEventListener('drop', (event) => {
        event.preventDefault();
        const draggedNoteId = event.dataTransfer.getData('text/plain');
        const draggedNote = document.getElementById(draggedNoteId);
        const containerRect = container.getBoundingClientRect();
        const x = event.clientX - containerRect.left - draggedNote.clientWidth / 2;
        const y = event.clientY - containerRect.top - draggedNote.clientHeight / 2;
        draggedNote.style.left = `${x}px`;
        draggedNote.style.top = `${y}px`;
    });

    note.innerHTML = 'Click me to edit';
    note.contentEditable = true;

    note.addEventListener('click', () => {
        note.focus();
    });

    container.appendChild(note);
}
