const list = document.querySelector('#categories');

const children = list.querySelectorAll('.item');
console.log("Number of categories:", children.length); 

[...children].forEach((item) => {
    const catName = item.querySelector('h2');
    const elements = item.querySelectorAll('ul li');
    console.log("Category:", catName.textContent);
    console.log("Elements:", elements.length);
    });


