function closeAside(){
    let aside = document.getElementById("aside");
    aside.classList.toggle("hideAside");
    // aside.classList.toggle("hide");
}
let screenWidth = screen.width;

let menuBtn = document.getElementById("menuBtn");
if(screenWidth >= 1000){
    window.addEventListener('load', (event) => {
        menuBtn.click();
      });
}