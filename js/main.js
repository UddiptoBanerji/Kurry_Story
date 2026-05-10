
document.addEventListener('DOMContentLoaded', async function () {

    let configData = {};

    async function loadConfig() {
        try {
            const response = await fetch('./config/config.json');
            configData = await response.json();

            loadRestaurantInfo();
            loadMenuItems('all');
            bindButtons();

        } catch (error) {
            console.error('Error loading config:', error);
        }
    }

    function loadRestaurantInfo() {

        const nameElements = document.querySelectorAll('.restaurant-name');
        nameElements.forEach(el => {
            el.innerText = configData.restaurant.name;
        });

        const tagline = document.getElementById('restaurantTagline');
        if(tagline){
            tagline.innerText = configData.restaurant.tagline;
        }
    }

    function loadMenuItems(category) {

        const container = document.getElementById('menuItems');

        if (!container) return;

        container.innerHTML = '';

        let items = configData.menu;

        if (category !== 'all') {
            items = items.filter(item =>
                item.category.toLowerCase() === category.toLowerCase()
            );
        }

        items.forEach(item => {

            const card = `
                <div class="menu-card">
                    <div class="menu-icon">${item.icon}</div>
                    <h3>${item.name}</h3>
                    <p>${item.description}</p>
                    <span class="price">${item.price}</span>
                </div>
            `;

            container.innerHTML += card;
        });
    }

    function bindButtons() {

        const buttons = document.querySelectorAll('.category-btn');

        buttons.forEach(btn => {

            btn.addEventListener('click', function () {

                buttons.forEach(b => b.classList.remove('active'));

                this.classList.add('active');

                const category = this.dataset.category;

                loadMenuItems(category);
            });
        });
    }

    loadConfig();
});
