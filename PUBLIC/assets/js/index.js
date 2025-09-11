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
console.log(imgs);
imgs.forEach(ig => {
    ig.addEventListener("click", (e) => {
        console.log(ig);
        let newimg = document.createElement('img');
        newimg.src = ig.src;
        newimg.classList.add("enlarge");
        console.log(ig, newimg);
        _("body").append(newimg);
        newimg.addEventListener("click", (e) => {
            newimg.remove();
        })

    })
})
