const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    });
});




// //a função resposta1() chama a função aparecer1(), uma função dentro da outra
// // function resposta1(){ 
// //     aparecer1();
// // }

// function aparecer1() {
//     document.getElementById("resposta1").style.display = "block";
//     document.getElementsByClassName("mais1").style.display = "none";
//     document.getElementById("menos1").style.display = "block";
// }

// function desaparecer1() {
//     document.getElementById("resposta1").style.display = "none";
//     document.getElementById("mais1").style.display = "block";
//     document.getElementById("menos1").style.display = "none";

// }

// function aparecer2() {
//     document.getElementById("resposta2").style.display = "block";
//     document.getElementById("mais2").style.display = "none";
//     document.getElementById("menos2").style.display = "block";
// }

// function desaparecer2() {
//     document.getElementById("resposta2").style.display = "none";
//     document.getElementById("mais2").style.display = "block";
//     document.getElementById("menos2").style.display = "none";

// }

// function aparecer3() {
//     document.getElementById("resposta3").style.display = "block";
//     document.getElementById("mais3").style.display = "none";
//     document.getElementById("menos3").style.display = "block";
// }

// function desaparecer3() {
//     document.getElementById("resposta3").style.display = "none";
//     document.getElementById("mais3").style.display = "block";
//     document.getElementById("menos3").style.display = "none";

// }

// function aparecer4() {
//     document.getElementById("resposta4").style.display = "block";
//     document.getElementById("mais4").style.display = "none";
//     document.getElementById("menos4").style.display = "block";
// }

// function desaparecer4() {
//     document.getElementById("resposta4").style.display = "none";
//     document.getElementById("mais4").style.display = "block";
//     document.getElementById("menos4").style.display = "none";

// }




