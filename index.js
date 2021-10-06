const grid = document.getElementById('grid')
let squares = []
let currentSnake = [2,1,0]
let direction = 1
let width = 10

function createGrid (){
    for (let i=0; i < 100; i++){
const square = document.createElement("div")
grid.appendChild(square)
square.classList.add('square')
squares.push(square)
}
}

createGrid()

currentSnake.forEach(index => squares[index].classList.add('snake'))


function move(){
 let tail = currentSnake.pop()
squares[tail].classList.remove('snake')

currentSnake.unshift(currentSnake[0]+ direction)
squares[currentSnake[0]].classList.add('snake')

}

move()

let timerId = setInterval(move, 1000);
clearInterval (move)


function control(e) {
    if (e.key === "ArrowRight"){
        direction = 1
    } else if (e.key === "ArrowLeft"){
        direction = -1
    } else if (e.key === "ArrowDown"){
        direction = + width
    }    else if (e.key === "ArrowUp"){
            direction = - width
        }
}

document.addEventListener ('keyup', control)

