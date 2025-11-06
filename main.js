let cursor = document.querySelector(".cursor");
let cursor2 = document.querySelector(".cursor2");
    
document.addEventListener("mousemove", function(event) {
    let x = event.clientX;
    let y = event.clientY;
    
    cursor.style.cssText = `left: ${x}px; top: ${y}px;`;
    cursor2.style.cssText = `left: ${x}px; top: ${y}px;`;
});