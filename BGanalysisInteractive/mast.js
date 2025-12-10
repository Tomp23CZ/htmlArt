const masts = document.querySelectorAll("mast")

masts.forEach(mast => {
    const clone = mast.cloneNode(false)
    clone.setAttribute("class", "mast-outline")
    mast.appendChild(clone)
});