
async function fetchData () {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');

        if(!response.ok) {
            throw new Error('Не удалось обработать данные')
        }
        const data = await response.json()
        const peopleBox = document.querySelector('.people__box');

        data.forEach(({ name, username, phone, email}) => {
            const peopleEl = `
            <div class="people">
                <button class="btn__del">Удалить</button>
                <div class="people__content">
                    <div class="people__desc">
                        <h2 class="people__name">${name}</h2>
                        <p class="people__username_label"><span class="people__username">Никнейм: ${username}</span></p>
                        <p class="people__phone">Телефон: ${phone}</p>
                        <p class="people__email">Почта: ${email}</p>
                    </div>
                </div>
            </div>`;
            peopleBox.insertAdjacentHTML('beforeend', peopleEl)
        });
        const deleteBtn = document.querySelectorAll('.btn__del')
        deleteBtn.forEach((button) => {
            button.addEventListener('click', () => {
                const people = button.closest('.people');       
                people.remove();
            })
        })
    } catch (error) {
        console.error(error)
    }
};

fetchData();