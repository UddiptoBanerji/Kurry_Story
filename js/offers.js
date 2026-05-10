
document.addEventListener('DOMContentLoaded', async function () {

    try {

        const response = await fetch('./config/content-pages.json');
        const data = await response.json();

        const page = data.offersPage;

        const title = document.getElementById('offersTitle');
        const subtitle = document.getElementById('offersSubtitle');
        const container = document.getElementById('offersContainer');

        if(title) title.innerText = page.title;
        if(subtitle) subtitle.innerText = page.subtitle;

        if(container){

            container.innerHTML = '';

            page.offers.forEach(offer => {

                container.innerHTML += `
                    <div class="offer-card">
                        <h3>${offer.title}</h3>
                        <p>${offer.description}</p>
                        <strong>${offer.price}</strong>
                    </div>
                `;
            });
        }

    } catch(error) {
        console.error('Error loading offers config', error);
    }
});
