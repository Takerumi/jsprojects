//  console.log(document.head);
//  console.log(document.documentElement);
//  console.log(document.body.childNodes);
//  console.log(document.body.firstChild);
//  console.log(document.body.firstElemChild);
//  console.log(document.body.lastChild);
// console.log(document.querySelector('#current').parentNode.parentNode);
// console.log(document.querySelector('#current').parentElement);
// console.log(document.querySelector('[data-current="3"]').previousSibling);
// console.log(document.querySelector('[data-current="3"]').nextElemSibling);

for (let node of document.body.childNodes) {
    if (node.nodeName == '#text') {
        continue;
    }
    console.log(node);
}