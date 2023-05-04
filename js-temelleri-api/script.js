// let deger = true;

// const yeni = new Promise((dogru, yanlis)=>{
//     if(deger){
//         dogru("Deger dogru");
//     }
//     else{
//         yanlis("Deger yanlış");
//     }
// })

// yeni
// .then((cevap)=> console.log(cevap))
// .catch((cevap1) => console.log(cevap1))

// const text = document.querySelector(".text");

// const apiTest = function(url){
//     fetch(url)
//     .then((data)=>{
//         return data.json();
//     })
//     .then((item)=>{
//         Array.from(item).forEach((data1)=>{
//             console.log(data1)
//             console.log(data1.name)
//             text.insertAdjacentHTML("beforebegin", `<p>${data1.website}</p>`)
//         })
//     })
// }

// apiTest("https://jsonplaceholder.typicode.com/users");

const input = document.querySelector(".input");
const btn = document.querySelector(".btn-input");
const textDiv = document.querySelector(".genel-div");

eventBtn();

function eventBtn(){
    btn.addEventListener("click", inputdeger)
}

let inputdeger1;

function inputdeger(){
    inputdeger1 = input.value.trim();

    if(inputdeger1 === "" || inputdeger1.length < 3){
        alert("En az 3 karakter olmalı")
        return;
    }

    textDiv.innerHTML = "";
    input.value = "";

    fetch(`https://restcountries.com/v3.1/name/${inputdeger1}`)
    .then((data=> data.json()))
    .then((item)=>{
        Array.from(item).forEach((item1)=>{
            console.log(item1)
            textDiv.insertAdjacentHTML("beforeend", `
            <div class="div">
            <img src="${item1.flags.png}" class="ulke-bayrak">
            <div class="bilgiler">
                <h2 class="ulke-adi">🌏${item1.name.common}</h2>
                <h4 class="baskent-adi">🚩${item1.capital}</h4>
                <h4 class="nufus-adi">👪${(item1.population / 1000000).toFixed(1)} Mn</h4>
            </div>
            </div>
            `)
        })
    })
    .catch(()=>{
       console.log("hata")
    })
}
