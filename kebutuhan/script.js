import data from "./data.json" assert { type: "json" };
import { setInner } from "https://jscroot.github.io/element/croot.js";

console.log(`${data.title}`)

setInner("awaltitle", data.title);

setInner("subtitle", data.subtitle);

//card1
// setInner("cardanama", data.carda.nama);
// setInner("cardanpm", data.carda.npm);
// setInner("cardaemail", data.carda.email);
// setInner("cardatext", data.carda.text);
// setInner("cardbnama", data.cardb.nama)
// setInner("cardbnpm", data.cardb.npm)
// setInner("cardbtext", data.cardb.text)
// setInner("cardbtext", data.cardb.text)
//selesai
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

