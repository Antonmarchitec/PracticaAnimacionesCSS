
let contenedor_cajas_A = document.getElementById("contenedor_cajas_A")
let contenedor_cajas_B = document.getElementById("contenedor_cajas_B")

document.addEventListener("scroll", () =>{
    let positionScroll = document.documentElement.scrollTop
    let positionElement = contenedor_cajas_A.offsetTop    //1352
    //console.log(positionElement)

    if(positionScroll > positionElement - 250){
        console.log("contenedor_cajas_A")
        contenedor_cajas_A.classList.add("contenedor_cajas_A_JS")
        contenedor_cajas_B.classList.add("contenedor_cajas_B_JS")
    }
})