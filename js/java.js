var prevScrollpos = window.pageYOffset;

window.onscroll = function(){
    var currentScrollpos = window.pageYOffset;
    if(this.prevScrollpos< 100){
        document.getElementById("NavbarHaut").style.top = "0";
        }else {
            document.getElementById("NavbarHaut").style.top = "-55px";

        }
        this.prevScrollpos = currentScrollpos;
}



