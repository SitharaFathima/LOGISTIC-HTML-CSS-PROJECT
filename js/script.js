let hamberger = document.querySelector("div.mobilemenu");
hamberger.addEventListener("click", () => {
    document.querySelector("section.menu").classList.toggle("active");
    document.querySelector("span.overlay").classList.add("active")
})

let close = document.querySelector("div.close");
close.addEventListener("click", () => {
    document.querySelector("section.menu").classList.remove("active");
    document.querySelector("span.overlay").classList.remove("active")
}) 