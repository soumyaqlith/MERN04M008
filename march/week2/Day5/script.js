let conObjs = document.getElementsByClassName("content");
console.log(conObjs[2]);
console.log(conObjs[2].innerText);
console.log(conObjs[2].innerHTML);

let h1s = document.getElementsByTagName("h1");
console.log(h1s[1])


// querySelector();
// querySelectorAll()


let h1 = document.querySelector("#heading6");
console.log(h1);

let allElemetns = document.querySelectorAll(".content");
console.log(allElemetns[2]);
console.log(allElemetns[1].className)
console.log(allElemetns[1].tagName)
console.log(allElemetns[1].childNodes)

console.log(allElemetns[2].childNodes)

console.log(document.childNodes)


// there are 4 types of node(objects) in java-script
// => Text node
// => comment node
// => element node
// => document node


console.log(allElemetns[2].children[0]);
console.log(allElemetns[2].children[0].innerText);
console.log(allElemetns[2].children[0].textContent);
console.log(allElemetns[2].children[0].parentNode);


let h2 = document.querySelector("#h2");
console.log(h2);
h2.innerText +=" from Qlith Innovation student";
console.log(h2);



