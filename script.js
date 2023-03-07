console.log("hello world");

const h1 = document.querySelector("h1")

console.log(h1);

const content = document.querySelector('.content')

console.log(content);

const img = document.querySelectorAll('footer a img')

console.log(img[0]);
console.log(img[1]);
console.log(img[2]);
console.log(img[3]);

const explore = document.querySelector('#explore')
console.log(explore);

explore.addEventListener('click', () => {
  console.log('Click Me Here');
  console.log(h1.style.color);
  h1.style.color = 'black'
})