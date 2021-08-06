class mobilenavbar {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll();
        this.activeClass = "active"
    }

    handleClick() {
        console.log(this);
        this.navList.classList.toggle(this.activeClass);
    }
    addClickEvent() {
        this.mobileMenu.addEventListener("click", () => console.log("teste"))
    }

    init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }

    mobileNavbar = new Mobilenavbar;
    ".mobile-menu";
    ".nav-list";
    ".nav-list li";

    Mobilenavbar.init()
}