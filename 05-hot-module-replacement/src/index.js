import './style.css'

const component = () => {
  let div = document.createElement('div');
  div.innerHTML = 'HELLO WEBPACK !!!';
  div.classList.add('red');
  return div;
}
document.body.append(component());