import data from "./data.json" assert { type: "json" };
import { setInner } from "https://jscroot.github.io/element/croot.js";

console.log(`${data.title}`)

setInner("awaltitle", data.title);

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