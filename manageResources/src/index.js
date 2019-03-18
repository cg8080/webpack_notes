import './style.css'
import Icon from './icon.png'
import data from './xml.xml'

const component = ()=>{
  let div = document.createElement('div');
  let icon = document.createElement('img');
  div.innerHTML = 'HELLO WEBPACK';
  div.classList.add('red');
  
  icon.src = Icon;
  div.append(icon);
  console.log('data：',data)
  return div;
}
document.body.append(component());