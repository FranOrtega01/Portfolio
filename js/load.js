window.onload = ()=>{
    // setTimeout(() => {
        document.getElementById("contLoader").style.opacity = 0;
        document.getElementById("contLoader").style.visibility = "hidden";
    // }, 2000); //Delay for testing
    setTimeout(() => {
        document.getElementById("contLoader").style.display = "none";
    }, 3500);
}
