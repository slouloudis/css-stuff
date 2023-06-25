const textHello = document.getElementById('hello')
let arr = [];

for (let i = 10; i > 0; i--) {
  let clonedNode = textHello.cloneNode(true);
  arr.push(clonedNode)
}





console.log(arr)

let effect = document.getElementById('effect')

arr.forEach(element => {
  element.classList.add('clones')
  effect.appendChild(element)
});