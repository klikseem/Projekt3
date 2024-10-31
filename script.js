const menuIcon = document.querySelector(".menu-icon")
menuIcon.addEventListener ("click", () => {
    if (hamburgerIcon.classList[1] === "fa-bars") {
        hamburgerIcon.classList.add("fa-xmark")
        hamburgerIcon.classList.remove("fa-bars")
        menuList.style.display = "block" 
    } else {
        hamburgerIcon.classList.add("fa-bars")
        hamburgerIcon.classList.remove("fa-xmark")
        menuList.style.display = "none"
    }
})

const menuList = document.querySelector("nav")
const hamburgerIcon = document.querySelector(".fa-solid")

//obrázky najetí
const image1 = document.querySelector(".image1")
const image2 = document.querySelector(".image2")
const image3 = document.querySelector(".image3")


image1.addEventListener("mouseenter", () => {
 image1.style.transform = "scale(1.3)"})

image1.addEventListener("mouseleave", () => {
 image1.style.transform = "scale(1)"
})


image2.addEventListener("mouseenter", () => {
    image2.style.transform = "scale(1.3)"})
   
   image2.addEventListener("mouseleave", () => {
    image2.style.transform = "scale(1)"
   })

image3.addEventListener("mouseenter", () => {
    image3.style.transform = "scale(1.3)"})
    image3.addEventListener("mouseleave", () => {
    image3.style.transform = "scale(1)"
   })


//dark-light mode

let mode = "svetly"
const body = document.querySelector("body")
const header = document.querySelector ("header")
const Footer = document.querySelector ("footer")
const Form = document.querySelector (".form-main")
const blackButon = document.querySelector (".buttons")



blackButon.addEventListener("click", () => {
    
    if (mode === 'svetly') {
        mode = "tmavy"
        
        body.style.backgroundColor = "black"
        body.style.color = "#bab2b2";
        header.style.backgroundColor = "black"
        header.style.color = "#bab2b2"
        Footer.style.backgroundColor = "black"
        Footer.style.color = "#bab2b2"
        blackButon.style.Color = "black"
        Form.style.color = "white"

    } else {
        mode = "svetly"
        header.style.backgroundColor = "#433c3c"
        body.style.backgroundColor = "#bab2b2"
        body.style.color = "black"
        Footer.style.backgroundColor ="#433c3c"
    }
 
})


//scrolování
    window.addEventListener ("scroll", function(){
        let scrolled =window.scrollY
        let scrollable = document.documentElement.scrollHeight
        - window.innerHeight

        if (Math.ceil(scrolled)>200){
            let toTop = document.querySelector (".Top-page")
            toTop.style.display = "block"
            toTop.addEventListener ("click",function(){ toTop.style.display = "none"
        })
    }
    })


//formulář
    const formular = document.querySelector("form")
   const password1 = document.querySelector(".password1")
   const password2 = document.querySelector(".password2")
   const notPassword1 = document.querySelector(".oficialPassword")
    const notPassword2 = document.querySelector(".passwordRepeat")
    const Thankyou = document.querySelector(".Thankyou")
    const nogood = document.querySelector(".nogood")
    const nofilled = document.querySelector(".nofilled")
   
    formular.addEventListener("submit", (event) => {
    event.preventDefault()


    if (password1.value === "") {
        notPassword1.style.display = "block"}
    else {
        notPassword1.style.display = "none"}
        

    if (password2.value === "") {
         notPassword2.style.display = "block"}
    else {
            notPassword2.style.display = "none"}

    if (password1.value != password2.value && password1.value != "" && password2.value != "") {
        nogood.style.display = "block"}
    else {
            nogood.style.display = "none"}

    if (password1.value === password2.value) {
            Thankyou.style.display = "block"}
            else {
                Thankyou.style.display = "none"}
            
    if (password1.value === "" && password2.value === "") {
            nofilled.style.display = "block"} 
     else {
                nofilled.style.display = "none"}

    })


