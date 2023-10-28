function setCurrentPage() {
    let currentPage = document.location.pathname
    console.log(currentPage)
    let navbar = document.getElementsByClassName("menu-items")[0]
    let item
    for (item = navbar.firstElementChild; item; item = item.nextElementSibling) {
        if (item.getAttribute('href') === currentPage) {
            let value = item.getAttribute('class')
            item.setAttribute('class', value + ' active')
            break
        }
    }
}

if (typeof window !== "undefined") {
    window.addEventListener("load", setCurrentPage);
}