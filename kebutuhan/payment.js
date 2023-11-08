import { postWithBearer } from "https://jscroot.github.io/api/croot.js";
export let URLPost = `https://asia-southeast2-rock-prism-401900.cloudfunctions.net/InfoTransaksi`
export let token = 'token';


document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        let data = GetDataForm();
        postWithBearer(URLPost, token, data, ResponsePost)
    });
});

    export function GetDataForm(){
        const email = document.querySelector("#email").value;
        const infobeli = document.querySelector("#infobeli").value;
        const orderid = document.querySelector("#orderid").value;
        const nohp = document.querySelector("#nohp").value;
        
        console.log(orderid)
    
        const data = {
            email: email,
            infobeli : infobeli,
            orderid : orderid,
            nohp: nohp,
        };
        return data
    }

    export function AlertPost(message) {
        alert(message);
    }

    export function ResponsePost(result) {
      if (result.status === "success") {
        AlertPost(" Berhasil buat daftar pembayaran !");
    } else {
        AlertPost("Gagal membuat daftar pembayaran. Silakan coba lagi.");
    }

    }

  
