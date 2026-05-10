
document.addEventListener('DOMContentLoaded', async function () {

    try {

        const response = await fetch('./config/content-pages.json');
        const data = await response.json();

        const page = data.menuPage;

        const title = document.getElementById('menuPageTitle');
        const subtitle = document.getElementById('menuPageSubtitle');

        if(title) title.innerText = page.title;
        if(subtitle) subtitle.innerText = page.subtitle;

    } catch(error) {
        console.error('Error loading menu page config', error);
    }
});
