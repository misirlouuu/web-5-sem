window.addEventListener('load', () => {
    donations = JSON.parse(localStorage.getItem('donations')) || []; // получение данных о пожертвованиях из localStorage
    const uncompletedForm = document.getElementById("uncompleted-new-donation-form");
    const form = document.getElementById("new-donation-form");

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const donation = {
            id: Math.random(),
            name: uncompletedForm.name.value,
            surname: uncompletedForm.surname.value[0],
            amount: e.target.elements.amount.value,
            timestamp: new Date().getTime(),
        }

        if (!donation.amount) {
            alert("Provide donation");
            return;
        }

        donations.push(donation);
        localStorage.setItem('donations', JSON.stringify(donations));
        e.target.reset();
        show_donations();
    });

    show_donations();
});

function show_donations() {
    const donationsContainer = document.getElementById("donations");
    donationsContainer.innerHTML = ''; // очистка контейнера перед добавлением новых пожертвований

    donations.forEach(donation => {
        const donationBox = document.createElement("div");
        // код для создания и добавления HTML-элементов пожертвования в контейнер

        const div = document.createElement("div");
        div.classList.add("donation-box");
        const textcard_heading_wrapper = document.createElement("span");

        const timestamp = document.createElement("span");
        timestamp.classList.add("user-name");
        timestamp.innerText = "Пожертвование от " + donation.name + " " + donation.surname + " " + (new Date(donation.timestamp)).toLocaleString();

        const textcard_desc_wrapper = document.createElement("div");
        document.createElement("div");
        const p = document.createElement("p");
        p.classList.add("user-text");
        p.innerText = donation.amount + "₽";

        textcard_heading_wrapper.appendChild(timestamp);
        textcard_desc_wrapper.appendChild(p);

        div.appendChild(textcard_heading_wrapper);
        div.appendChild(textcard_desc_wrapper);
        donationBox.appendChild(div);
        donationsContainer.appendChild(donationBox); // добавление пожертвования в контейнер
    });
}