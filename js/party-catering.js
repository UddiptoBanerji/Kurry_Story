
document.addEventListener('DOMContentLoaded', async function () {

    async function loadPartyContent() {

        try {

            const response = await fetch('./config/content.json');
            const data = await response.json();

            const section = data.partyCatering;

            const title = document.getElementById('partyTitle');
            const subtitle = document.getElementById('partySubtitle');
            const servicesContainer = document.getElementById('servicesContainer');
            const contactInfo = document.getElementById('contactInfo');

            if(title) title.innerText = section.title;
            if(subtitle) subtitle.innerText = section.subtitle;

            if(servicesContainer){

                servicesContainer.innerHTML = '';

                section.services.forEach(service => {

                    servicesContainer.innerHTML += `
                        <div class="service-card">
                            <h3>${service.name}</h3>
                            <p>${service.description}</p>
                        </div>
                    `;
                });
            }

            if(contactInfo){

                contactInfo.innerHTML = `
                    <p><strong>Phone:</strong> ${section.contact.phone}</p>
                    <p><strong>Email:</strong> ${section.contact.email}</p>
                `;
            }

        } catch(error) {
            console.error('Unable to load content.json', error);
        }
    }

    loadPartyContent();
});
