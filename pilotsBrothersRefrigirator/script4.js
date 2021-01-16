const square = document.querySelectorAll('.square')
let matrix = [[true, true, true, true], [true, true, true, true], [true, true, true, true], [true, true, true, true]];
let matrix_square = [[],[],[],[]];

square.forEach(id => {
    id.addEventListener('click', () => {
        change(id);
        setTimeout(() => { if (checker() === true) {
            setTimeout(() => {  location.reload(); }, 200);
        }  }, 50);

    })
})

document.addEventListener('DOMContentLoaded', function () {
    init();
});

function init() {
    var s = 0;
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            matrix_square[i][j] = square[s];
            s += 1;
        }
    }
    randomizer();
    randomizer();
}

function change(id) {
    let values;
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (id === matrix_square[i][j]) {
                values = [i, j];
            }
        }
    }
    for (let i = 0; i < 4; i++) {
        if (i !== values[0] ) {
            if (matrix[i][values[1]] === true) {
                matrix_square[i][values[1]].style.transform = "rotate(" + 90 + "deg)";
                matrix[i][values[1]] = false;
            } else {
                matrix_square[i][values[1]].style.transform = "rotate(" + 0 + "deg)";
                matrix[i][values[1]] = true;
            }
        }
    }
    for (let j = 0; j < 4; j++) {
        if (matrix[values[0]][j] === true) {
            matrix_square[values[0]][j].style.transform = "rotate(" + 90 + "deg)";
            matrix[values[0]][j] = false;
        }
        else {
            matrix_square[values[0]][j].style.transform = "rotate(" + 0 + "deg)";
            matrix[values[0]][j] = true;
        }
    }
}

function checker() {
    var rsl1 = matrix[0].every(element => element === true);
    var rsl2 = matrix[1].every(element => element === true);
    var rsl3 = matrix[2].every(element => element === true);
    var rsl4 = matrix[3].every(element => element === true);
    rsl = rsl1 === rsl2 && rsl2 === rsl3 && rsl3 === rsl4 && rsl4 === true;
    console.log(rsl1, rsl2, rsl3, rsl4);
    return rsl;
}

function randomizer() {
    let i = Math.floor(Math.random() * Math.floor(16));
    change(square[i]);
}


