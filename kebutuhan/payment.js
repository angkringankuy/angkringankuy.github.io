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

    export function ResponsePost(result) {
        if (result.status === "success") {
            showSuccessAlert("Pembayaran berhasil!");
        } else {
            showErrorAlert("Pembayaran gagal. Silakan coba lagi.");
        }
    }
    
    export function showSuccessAlert(result) {
        const alertElement = document.createElement("div");
        alertElement.className = "alert alert-success";
        alertElement.textContent = result;
    
        const form = document.querySelector("form");
        form.parentNode.insertBefore(alertElement, form.nextSibling);
    
        // Hapus pesan setelah beberapa detik (misalnya, 5 detik)
        setTimeout(() => {
            alertElement.remove();
        }, 5000);
    }
    
    export function showErrorAlert(result) {
        const alertElement = document.createElement("div");
        alertElement.className = "alert alert-danger";
        alertElement.textContent = result;
    
        const form = document.querySelector("form");
        form.parentNode.insertBefore(alertElement, form.nextSibling);
    
        // Hapus pesan setelah beberapa detik (misalnya, 5 detik)
        setTimeout(() => {
            alertElement.remove();
        }, 5000);
    }

  
