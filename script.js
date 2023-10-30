const arrowButton = document.querySelectorAll(".arrow");

arrowButton.forEach((el) => {
    el.addEventListener("click", (event) => {
        const dropdownList = event.target.parentElement.querySelector(".dropdownList");
        dropdownList.classList.toggle("dropdownList-open");
        el.classList.toggle("arrow-up")
    })
})


