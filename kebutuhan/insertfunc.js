import { postWithBearer } from "https://jscroot.github.io/api/croot.js";
export let URLPost = `https://asia-southeast2-rock-prism-401900.cloudfunctions.net/Register`
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
        const username = document.querySelector("#username").value;
        const password = document.querySelector("#password").value;
        console.log(password)
    
        const data = {
            username: username,
            password: password,
        };
        return data
    }
    
    export function ResponsePost(result) {
        AlertPost(result);
    }