import {Board} from "./board.js"
import {Validation} from "./validate.js"

class Game {
    constructor(circle, cross) {
        this.circle = circle
        this.cross = cross
    }
    click() {
        let field = document.querySelectorAll('.field');
        let player = 0;

        field.forEach(el => {
            el.addEventListener('click', (e) => {
                if (player % 2 == 0 && e.target.innerHTML == '') {
                    e.target.innerHTML = this.cross;
                    player++
                }
                if (player % 2 != 0 && e.target.innerHTML == '') {
                    e.target.innerHTML = this.circle
                    player++
                }
               
                validate1.validationWin()
            })
        })
    }
}

function responsiveness() {
    let width
    if (window.innerWidth < 550) {
        width = 5
    } else {
        width = 10
    }
    return width
}
let board1 = new Board(9, responsiveness()).create()
let gra1 = new Game(`O`, `X`).click()
let validate1 = new Validation(`O`, `X`, document.querySelector('.alert'))