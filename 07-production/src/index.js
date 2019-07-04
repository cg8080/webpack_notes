import printMe from './print'
import './style.css'
import { cube } from './math'
document.body.appendChild(component())

function component() {
  let element = document.createElement('div')
  element.innerText = `cube(5): ${cube(5)}`
  let btn = document.createElement('button')
  btn.innerText = 'Click me to console something'
  btn.classList.add('red')
  btn.onclick = printMe
  element.append(btn)
  return element
}
