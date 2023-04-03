let buttonColorGenerate = document.querySelector("#colorGenerate")

buttonColorGenerate.addEventListener("click", () =>{
    let background = document.querySelector("#background")
    background.style.background = '#' + Math.floor(Math.random() * 16777215).toString(16);
})