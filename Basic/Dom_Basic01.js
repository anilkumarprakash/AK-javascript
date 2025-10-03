//append this new element to the container


const container = document.getElementById('container');
const newElement = document.createElement('p');
const demo  = document.createElement('demo');

container.append(newElement);
container.append(demo);
newElement.innerText='This is a <b>new</b> Heading.';
demo.innerHTML='This is a <b>new</b> Paragraph.';



//replace this old element with new element

const oldsecond = document.getElementById('second');
const newsecond = document.getElementById('second');

//replace this old id or class with new id or class

newsecond.innerText='This is a new Paragraph Replaced.';
oldsecond.replaceWith(newsecond);
console.log(fourth.getAttribute ('id'));
fourth.setAttribute('class','fourthclass');
console.log(fourth.getAttribute ('class'));

//change color of element
newElement.style.color='red';
demo.style.color='blue';
newsecond.style.color='green';

//query selector append and innerhtml
const output = document.querySelector('.output');
const head = document.querySelector('#head1');

head.innerHTML ='<b> This is appended text</b>';  



// Event handling

const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');

function putname(e){
    let text = prompt('Enter your name');
    this.innerHTML= text;
    this.setAttribute('style','color:white; background-color:green;');
}

// count button clicks

btn1.addEventListener('click', putname);

let count = 0;
btn2.addEventListener('click', function(e){
    count++;
    alert('Button clicked '+ count + ' times');
})


// Change color on button click

function changecolor(e){
    let color = ["red","green","blue","yellow","purple","pink","orange"];
    let random = Math.floor(Math.random()*color.length);
    this.style.backgroundColor = color[random];

}
btn3.addEventListener('click', changecolor);