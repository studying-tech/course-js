let element = document.getElementById('myElement');
// element.style.color = 'red';
// element.style.fontSize = '20px';
element.style.marginTop = '10px';

let styles = window.getComputedStyle(element);
console.log(styles);
console.log(styles.color);
console.log(styles.fontSize);
