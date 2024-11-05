const menuIcon = document.querySelector(".menu-icon")
menuIcon.addEventListener ("click", () => {
    if (hamburgerIcon.classList[1] === "fa-bars") {
        hamburgerIcon.classList.add("fa-xmark")
        hamburgerIcon.classList.remove("fa-bars")
        menuList.classList.add('menu-visible')
    } else {
        hamburgerIcon.classList.add("fa-bars")
        hamburgerIcon.classList.remove("fa-xmark")
         menuList.classList.remove('menu-hidden')
    }
})

const menuList = document.querySelector("nav")
const hamburgerIcon = document.querySelector(".fa-solid")

//obrázky najetí
const image1 = document.querySelector(".image1")
const image2 = document.querySelector(".image2")
const image3 = document.querySelector(".image3")


image1.addEventListener("mouseenter", () => {
    image1.classList.add('image-hover')
})

image1.addEventListener("mouseleave", () => {
    image1.classList.remove('image-hover')
})

image2.addEventListener("mouseenter", () => {
    image2.classList.add('image-hover')
})
image2.addEventListener("mouseleave", () => {
    image2.classList.remove('image-hover')
})

image3.addEventListener("mouseenter", () => {
    image3.classList.add('image-hover')
})
image3.addEventListener("mouseleave", () => {
    image3.classList.remove('image-hover')
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
        body.classList.add('dark-mode')
    } else {
        mode = "svetly" 
        body.classList.remove('dark-mode')
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
   
    password1.addEventListener("input", checkPasswords)
    password2.addEventListener("input", checkPasswords)
    
    function checkPasswords() {
// Kontrola prázdných polí
        if (password1.value === "") {
            notPassword1.style.display = "block"
        } else {
            notPassword1.style.display = "none"
        }
    
        if (password2.value === "") {
            notPassword2.style.display = "block"
        } else {
            notPassword2.style.display = "none"
        }
    
// Kontrola shody hesel
        if (password1.value !== password2.value && password1.value !== "" && password2.value !== "") {
            nogood.style.display = "block"
            Thankyou.style.display = "none"
        } else if (password1.value === password2.value && password1.value !== "" && password2.value !== "") {
            nogood.style.display = "none"
            Thankyou.style.display = "block"
        }
    
// Kontrola zda jsou obě pole prázdná
        if (password1.value === "" && password2.value === "") {
            nofilled.style.display = "block"
        } else {
            nofilled.style.display = "none"}
        }


