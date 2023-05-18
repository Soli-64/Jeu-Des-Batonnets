import { createElement } from './src/scripts/utils.js';
import { gameLauncher} from './src/scripts/game.js'

document.querySelector('#start').addEventListener('click', () => {
    document.querySelector('.main-win').classList.add('invisible')
    resetButtonsContainer()
    document.querySelectorAll('.main-batonnet-container-element').forEach(e => e.remove())
    gameLauncher(0)
})

const newButton = (id) => {return createElement('button', {class:'main-buttons-element',id:`b${id}`}, '')} 
const newMiniStick = () => {return createElement('div',{class:'main-batonnet-container-element-mini'}, '')}

function resetButtonsContainer() {
    const buttonsContainer = document.querySelector('.main-buttons')
    buttonsContainer.innerHTML = ''
    const [btn1, btn2, btn3] = [newButton(1), newButton(2), newButton(3)]
    btn1.append(newMiniStick())
    btn2.append(newMiniStick(), newMiniStick())
    btn3.append(newMiniStick(), newMiniStick(), newMiniStick())
    buttonsContainer.append(btn1, btn2, btn3)
}