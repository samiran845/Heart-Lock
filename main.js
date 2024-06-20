const lock = document.querySelector(".lock")
const popUp = document.querySelector(".pop_up")

const lockClick = ()=>{
    popUp.style.display = "flex"
}

lock.addEventListener("click", lockClick)

const password = 250724;
const passBtn = document.querySelector(".pass_btn")
const pass = document.querySelector("#pass")

passBtn.addEventListener("click", ()=>{

    if(pass.value == password){
        lock.style.backgroundImage = "url(./Images/Heart_Open.png)"
        document.body.style.overflowY = "scroll"
        popUp.style.display = "none"
        lock.removeEventListener("click", lockClick)
    }
    else{
        pass.value = ""
        pass.placeholder = "Wrong..."
    }
})
