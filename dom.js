//EXAMINE THE DOCUMENT OBJECT//

console.dir(document);
console.log(document.domain);
console.log(document.URL);
console.log(document.title);
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.all[10]);
console.log(document.forms);
console.log(document.links);

var headerTitle = document.getElementById('header-title');
var header = document.getElementById('main-header');
header.style.borderBottom = 'solid 3px #000';



var titles = document.querySelectorAll('.title');
console.log(titles);
titles[0].style.fontWeight='bold';
titles[0].style.color='green'; 