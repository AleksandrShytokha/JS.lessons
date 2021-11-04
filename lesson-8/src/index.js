function firstTask() {
    document.addEventListener('keydown', function (event) {
        // Ctrl + E prevent and Ctrl + S prevent
        if ((event.ctrlKey && (event.which == 69)) || (event.ctrlKey && (event.which == 83)))
            event.preventDefault();
        return false;
    });

    const divTaker = document.getElementById("text-in-div");
    divTaker.style.display = "block";
    const textareaTaker = document.getElementById("text-in-textArea");

    document.addEventListener('keydown', function (e) {
        if (e.ctrlKey && (e.which == 69)) {
            divTaker.style.display = "none";
            textareaTaker.style.display = "block";
        }
        else if (e.ctrlKey && (e.which == 83)) {
            let userText = textareaTaker.value;
            divTaker.innerHTML = userText;
            textareaTaker.style.display = "none";
            divTaker.style.display = "block";
        }
    });
}

function secondTask() {
    const tableTaker = document.getElementById("task-2-table");
    tableTaker.style.display = "block";

    const getSort = ({ target }) => {
        const order = (target.dataset.order = -(target.dataset.order || -1));
        const index = [...target.parentNode.cells].indexOf(target);
        const collator = new Intl.Collator(['en', 'ru'], { numeric: true });
        const comparator = (index, order) => (a, b) => order * collator.compare(
            a.children[index].innerHTML,
            b.children[index].innerHTML
        );

        for (const tBody of target.closest('table').tBodies)
            tBody.append(...[...tBody.rows].sort(comparator(index, order)));

        for (const cell of target.parentNode.cells)
            cell.classList.toggle('sorted', cell === target);
    };

    document.querySelectorAll('#task-2-table thead').forEach(tableTH => tableTH.addEventListener('click', () => getSort(event)));
}

function thirdTask() {
    const resDiv = document.getElementById("content__textarea");
    resDiv.style.display = "block";
    const resizer = document.querySelector("div.content__textarea--resizer");

    const initResize = e => {
        e.preventDefault;
        window.addEventListener("mousemove", startResize);
        window.addEventListener("mouseup", stopResize);
    };

    const startResize = e => {
        resDiv.style.width = (e.clientX - resDiv.offsetLeft) + "px";
        resDiv.style.height = (e.clientY - resDiv.offsetTop) + "px";
    };
    const stopResize = e => {
        window.removeEventListener('mousemove', startResize);
        window.removeEventListener('mouseup', stopResize);
    };

    resizer.addEventListener("mousedown", initResize);
}

let chooseTask = +prompt('Enter number of task, you want to check (from 1 to 3).');

switch (chooseTask) {
    case 1:
        firstTask();
        break;
    case 2:
        secondTask();
        break;
    case 3:
        thirdTask();
        break;
    default:

        break;
}