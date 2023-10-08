// The following code is based off a toggle menu by @Bradcomp
// source: https://gist.github.com/Bradcomp/a9ef2ef322a8e8017443b626208999c1
(function() {
    var burger = document.querySelector('.burger');
    var menu = document.querySelector('#'+burger.dataset.target);
    burger.addEventListener('click', function() {
        burger.classList.toggle('is-active');
        menu.classList.toggle('is-active');
    });
})();

import data from "./data.json" assert { type: "json" };
import { setInner } from "https://jscroot.github.io/element/croot.js";

console.log(`${data.title}`)

setInner("title", data.title);

setInner("subtitle", data.subtitle);

setInner("carda", `
<h2>Team</h2>
<p>${data.carda.nama}</p>
<p>${data.carda.npm}</p>
<p>${data.carda.email}</p>
<p>${data.carda.text}</p>
`);
setInner("cardb", `
<p>${data.cardb.nama}</p>
<p>${data.cardb.npm}</p>
<p>${data.cardb.email}</p>
<p>${data.cardb.text}</p>
`);

