window.addEventListener('load', () => {
    donations = JSON.parse(localStorage.getItem('donations')) || []; // получение данных о пожертвованиях из localStorage
    const form = document.getElementById("new-donation-form");

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const donation = {
            id: Math.random(),
            content: e.target.elements.content.value,
        }

        if (!donation.content) {
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
        const p = document.createElement("p");
        p.innerText = donation.content;
        donationBox.appendChild(p);
        donationsContainer.appendChild(donationBox); // добавление пожертвования в контейнер
    });
}


// function show_donations() {
//     const donations_list = document.getElementById("donations");
//     donations_list.innerHTML = '';
//
//     donations.forEach(donation => {
//         const donation_box = document.createElement("div");
//         // donation_box.setAttribute("display", "flex");
//         // donation_box.setAttribute("flex-direction", "column");
//         // const div = document.createElement("div");
//         // const textcard_heading_wrapper = document.createElement("span");
//         // textcard_heading_wrapper.setAttribute("display", "flex");
//
//         // const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
//         // svg.setAttribute("aria-hidden", "true");
//         // svg.classList.add("mini-svg");
//         // svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
//         // const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
//         // const path_1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
//         // path_1.setAttribute("style", "fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:4;");
//         // path_1.setAttribute("d", "M 4.001953 8.197266 L 12 14.097656 L 19.998047 8.197266 ");
//         // path_1.setAttribute("transform", "matrix(0.666667,0,0,0.666667,0,0)");
//         // const path_2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
//         // path_2.setAttribute("style", "fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:4;");
//         // path_2.setAttribute("d", "M 4.998047 6.498047 L 19.001953 6.498047 C 20.103516 6.498047 21 7.394531 21 8.501953 L 21 18.498047 C 21 19.605469 20.103516 20.501953 19.001953 20.501953 L 4.998047 20.501953 C 3.896484 20.501953 3 19.605469 3 18.498047 L 3 8.501953 C 3 7.394531 3.896484 6.498047 4.998047 6.498047 Z M 4.998047 6.498047 ");
//         // path_2.setAttribute("transform", "matrix(0.666667,0,0,0.666667,0,0)");
//
//         // const timestamp = document.createElement("span");
//         // timestamp.innerText = "Donation from " + (new Date(donation.timestamp)).toLocaleString();
//
//         // const textcard_desc_wrapper = document.createElement("div");
//         // textcard_desc_wrapper.classList.add("textcard-desc-wrapper");
//         // const textcard_desc = document.createElement("div");
//         // textcard_desc.classList.add("textcard-desc");
//         // const textcard_desc_main = document.createElement("div");
//         // textcard_desc_main.classList.add("textcard-desc-main");
//         const p = document.createElement("p");
//         p.innerText = donation.content
//
//         // const actions = document.createElement("div");
//         // actions.classList.add("donation-actions", "flex");
//         // const button_delete = document.createElement("button");
//         // button_delete.classList.add("donation-delete");
//         // button_delete.innerText = "delete";
//
//         // g.appendChild(path_1);
//         // g.appendChild(path_2);
//         // svg.appendChild(g);
//         // textcard_heading_wrapper.appendChild(svg);
//         // textcard_heading_wrapper.appendChild(timestamp);
//         // textcard_desc_main.appendChild(p);
//         // textcard_desc.appendChild(textcard_desc_main);
//         // textcard_desc_wrapper.appendChild(textcard_desc);
//         // div.appendChild(textcard_heading_wrapper);
//         // div.appendChild(textcard_desc_wrapper);
//         // actions.appendChild(button_delete);
//         // div.appendChild(p);
//         donation_box.appendChild(p);
//         // donation_box.appendChild(actions);
//         donations.appendChild(donation_box);
//
//         // button_delete.addEventListener('click', () => {
//         //     messages_json = donations.filter(el => el !== donation);
//         //     localStorage.setItem('messages', JSON.stringify(messages_json));
//         //     show_donations();
//         // });
//     });
// }