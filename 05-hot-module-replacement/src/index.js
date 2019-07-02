import printMe from './print.js'

function component() {
  var element = document.createElement('div');
  var btn = document.createElement('button');
  element.innerHTML = 'Hello Webpack';
  btn.innerHTML = 'Click me and check console!';
  btn.onclick = printMe;
  element.append(btn);
  return element;
}
document.body.appendChild(component());
console.log('module.hot: ', module.hot);
if (module.hot) {

  module.hot.accept('./print.js', () => {
    console.log('accept the update printMe')
    printMe()
  })
}