import { createElement } from "./utils.js"

/**
 * 
 * @param {number} currentPlayer 
 */
export function gameLauncher(currentPlayer) {
    document.querySelectorAll('.main-players-element').forEach(e => {e.classList?.remove('current')})
    document.querySelector(`#p1`).classList.add('current')
    for (let x = 0; x <= 19; ++x ) {
        const container = document.querySelector('.main-batonnet-container')
        const battonet = createElement('div', {class: 'main-batonnet-container-element', id: `s${x+1}`}, `${x + 1}`)
        container.append(battonet)
    }
    let player = currentPlayer
    let noPlaying
    document.querySelectorAll('button').forEach(element => {
        element.addEventListener('click', () => {
            let value = element.id.replace('b', '') * 1
            if (player === 1) {
                player++;
                noPlaying = 1;
            } else {
                player = 1;
                noPlaying = 2;
            }
            document.querySelectorAll('.main-players-element').forEach(e => {e.classList?.remove('current')})
            document.querySelector(`#p${noPlaying}`).classList.add('current')
            if (removeSticks(value, getSticks(), false, player) !== 'loose') {
                removeSticks(value, getSticks(), true, player)
            }
        })
    })
}   


/**
 * @param {number} n
 * @param {number} sticks
 */
function removeSticks(n, sticks, remover, player) {
    for (let x = sticks; x > sticks - n; x--) {
        console.log(player)
        if (x - 1 === 0) {
            loose(player)
            return 'loose'
        } else {
            if (remover) {
                document.querySelector(`#s${x}`).remove()
            }
        }
    }
}


/**
 * @returns {number} Retourne le nombre de batonnets
 */
function getSticks() {return document.querySelectorAll('.main-batonnet-container-element').length}


/**
 * 
 * @param {number} player 
 */
function loose(player) {
    if (player === 1) {player++} else {player = 1}
    document.querySelector('#winner').innerHTML = `Joueur${player}`
    document.querySelector('.main-win').classList.remove('invisible')
    document.querySelectorAll('button').forEach(e => {e.remove()})
}

