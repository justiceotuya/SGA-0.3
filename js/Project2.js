var button = document.querySelectorAll("button");
button.forEach(element => {
    element.addEventListener("click", function () {
        this.disabled = true;
        this.innerHTML = "Liked";
        this.style.backgroundColor = "white";
        this.style.color = 'black';

    });

});