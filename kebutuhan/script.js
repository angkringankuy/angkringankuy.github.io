import data from "./data.json" assert { type: "json" };
import { setInner } from "https://jscroot.github.io/element/croot.js";

console.log(`${data.title}`)

setInner("awaltitle", data.title);

//card1
setInner("cardanama", data.carda.nama);
setInner("cardanpm", data.carda.npm);
setInner("cardaemail", data.carda.email);
setInner("cardatext", data.carda.text);
//selesai