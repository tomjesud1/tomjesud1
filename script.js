document.querySelectorAll(".klikatelny-odkaz").forEach(odkaz => {
    odkaz.addEventListener("mouseover", () => {
        odkaz.style.color = "blue";
    });

    odkaz.addEventListener("mouseout", () => {
        odkaz.style.color = "#007bff";
    });
});
