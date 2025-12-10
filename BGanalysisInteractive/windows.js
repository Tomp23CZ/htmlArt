const windows = document.querySelectorAll("svg path.window");
const windowGroup = document.getElementById("windows")
windows.forEach(window => {
    const ogPathDefinition =  window.getAttribute("d");
    const style = getComputedStyle(window)
    const repetitionCount = parseInt(style.getPropertyValue("--repeat-count"))
    const pattern = /^M\s*([\d.-]+)\s+([\d.-]+)\s*v\s*([\d.-]+)/i
    const match = ogPathDefinition.match(pattern)
    if(!match) return
    let Ypos = parseFloat(match[2])
    const height = parseFloat(match[3])
    const separation =  parseFloat(style.getPropertyValue("--separation"))
    const increment = height + separation
    Ypos+=increment
    for(let i = 0; i < repetitionCount; i++, Ypos+=increment){
        const windowClone = window.cloneNode(true);
        const replaced = ogPathDefinition.replace(pattern, (full, second, third, vNum) => {
            return full.replace(third, Ypos);
        });
        windowClone.setAttribute("d", replaced);
        windowGroup.appendChild(windowClone);
    }
});