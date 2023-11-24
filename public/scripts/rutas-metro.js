document.querySelectorAll(".modal").forEach(el => {
    el.addEventListener("click", function(ev) {
        ev.stopPropagation();
        
        const modaleContenedor = this.querySelector(".modale-contenedor");
        if (modaleContenedor){
            modaleContenedor.classList.add("active");
        }
    });
});

document.querySelectorAll(".modale-contenedor").forEach(el => {
    el.addEventListener("click", function(ev) {
        ev.stopPropagation();
        this.classList.remove("active");
    });
});

document.addEventListener("click", function() {
    document.querySelectorAll(".modale-contenedor.active").forEach(el => {
        el.classList.remove("active");
    });
});