function _(a) {
    return document.querySelector(a)
}

function __(a) {
    return document.querySelectorAll(a)
}

function opnMenue() {
    let open = _("#menue").classList.toggle("open");
    return open;
}
const runner = () => {
    _(".menue").classList.remove("open");
};
_("#menue").addEventListener("click", runner);

let imgs = __("img");

imgs.forEach(ig => {
    ig.addEventListener("click", (e) => {
        const mw = _("#mainWrap");
        let newimg = document.createElement('img'),
            w = window.innerWidth,
            h = window.innerHeight,
            x = (w / 2) - (ig.width / 2),
            y = (h / 2) - (ig.height / 2),
            contain = document.createElement("div");
        contain.classList.add("enlarge");
        newimg.src = ig.src;
        contain.append(newimg);


        mw.append(contain);

        mw.style.overflow = "scroll";
        newimg.addEventListener("click", (e) => {
            contain.remove();
        });


    });
});
const scrollContainer = document.querySelectorAll(".yscroll");
scrollContainer.forEach((el) => {
    el.addEventListener("wheel", (evt) => {
        evt.preventDefault();
        el.scrollLeft += evt.deltaY;
    })
})