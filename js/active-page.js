function setCurrentPage() {
    let currentPage = document.location.pathname
    console.log(currentPage)
    let navbar = document.getElementsByClassName("menu-items")[0]
    let item
    for (item = navbar.firstElementChild; item; item = item.nextElementSibling) {
        if (item.getAttribute('href') === currentPage) {
            if (item.getAttribute('class') === "help")
            {
                item.setAttribute('class', 'help active')
                break
            }
            item.setAttribute('class', 'active')
            break
        }
    }
}

if (typeof window !== "undefined") {
    window.addEventListener("load", setCurrentPage);
}