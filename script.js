import {Board} from "./board.js"

let board1 = new Board(9, 10).create()

class Game {
    constructor(circle, cross) {
        this.circle = circle
        this.cross = cross
    }
    click() {
        let field = document.querySelectorAll('.field')
        let player = 0

        field.forEach(el => {
            el.addEventListener('click', (e) => {
                if (player % 2 == 0) {
                    e.target.innerHTML = this.cross
                } else {
                    e.target.innerHTML = this.circle
                }
                player++
            })
        })
    }

}
let gra1 = new Game(`X`, `O`).click()