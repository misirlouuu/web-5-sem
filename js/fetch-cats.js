const gallery = document.getElementsByClassName("gallery")[0];
const preloader = document.getElementsByClassName("preloader")[0];
const api = "https://run.mocky.io/v3/83c77bde-4c57-4d01-a2d8-c7cca2b341a9";

function getData() {
    fetch(api)
        .then(response => response.json())
        .then(data => filterData(data))
        .then(data => displayData(data))
        .catch(err => reportLoadingError(err))
        .finally(() => preloader.classList.add("hidden"));
}

function reportLoadingError(err) {
    console.error(err);
    const errorReport = document.createElement("div");
    errorReport.classList.add("error_report");
    errorReport.textContent = "Упс... Что-то пошло не так:(";
    gallery.appendChild(errorReport);
}

function filterData(data) {
    const windowSize = 10;
    const from = Math.floor(Math.random() * (data.length - windowSize));
    return data.slice(from, from + windowSize);
}

function displayData(data) {
    gallery.innerHTML = (
        data.map(getPetCard).join("")
    );
}

function getPetCard(pet) {
    return `
<div class="pet">
    <div class="petImageBox"></div>
    <span class="name">${pet.name}</span>
    <div class="icons">
        <button class="heart2">
            <i class="fontawesome-heart-empty">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"
                     enable-background="new 0 0 50 50">
                    <path d="M25 39.7l-.6-.5C11.5 28.7 8 25 8 19c0-5 4-9 9-9 4.1 0 6.4 2.3 8 4.1 1.6-1.8 3.9-4.1 8-4.1 5 0 9 4 9 9 0 6-3.5 9.7-16.4 20.2l-.6.5zM17 12c-3.9 0-7 3.1-7 7 0 5.1 3.2 8.5 15 18.1 11.8-9.6 15-13 15-18.1 0-3.9-3.1-7-7-7-3.5 0-5.4 2.1-6.9 3.8L25 17.1l-1.1-1.3C22.4 14.1 20.5 12 17 12z"/>
                </svg>
            </i>
        </button>
        <img
            class="sex"
            src="img/${pet.sex}.svg"
            alt="sex"
        />
        <img
            class="condition"
            src="img/${pet.condition + "%20condition"}.svg"
            alt="condition"
        />
    </div>
    <span>${pet.description}</span>
</div>
   `;
}



window.addEventListener("load", getData);