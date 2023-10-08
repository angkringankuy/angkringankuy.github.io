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

setInner("judulProposal", data.title);

//latar belakang
setInner("latarBelakangProposal", `
<h2>Latar Belakang</h2>
<p>${data.article.latarbelakang}</p>
<p>${data.article.latarbelakang2}</p>
<p>${data.article.latarbelakang3}</p>
<p>${data.article.latarbelakang4}</p>
`);

//deskripsi aplikasi
setInner("deskripsiWebsite", `
<h2>Deskripsi Website</h2>
<p>${data.article.deskripsiapk}</p>
<p>${data.article.deskripsiapk2}</p>
    `);
//kesimpulan
setInner("kesimpulan", `
<h2>Kesimpulan</h2>
<p>${data.article.kesimpulan1}</p>
<p>${data.article.kesimpulan2}</p>
<p>${data.article.kesimpulan3}</p>
`);

