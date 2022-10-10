class MenuNavBar{    
    constructor(navList, navLinks, menumobile){
        menumobile = document.querySelector(this.menumobile),
        navlinks = document.querySelector(this.navlinks)
        navlist  = document.querySelector(this.navlist)
        activeClass = "Active"
        
        this.handleClick = this.handleClick.bind(this); 
    }
    animateLinks(){
        this.navLinks.forEach((link, index) => {
            console.log(index)
            link.style.animation
            ? (link.style.animation= "")
            : (link.style.animation= "navLinkFade 0.5s ease forwards 0.3s");
        });
    }

    handleClick(){
        this.navList.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    addClickEvent(){
        this.mobileMenu.addEventListener("click", this.handleClick);
    }
    init(){
        if(this.mobileMenu){
            this.addClickEvent();
        }
        return this;
    }
}
const mobileNavBar = new MobileNavBar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
);
mobileNavBar.init();
