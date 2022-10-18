// logout 

async function logoutInit() {
    let logoutElem = document.querySelector('.logout-btn');

    logoutElem.addEventListener('click', async function (event) {
        event.preventDefault();
        const res = await fetch('/user/logout', {
            method: 'POST',
        })
        console.log("test logout")
        if (res.ok) {
            // alert('Logout successfully')
            location.replace('/index.html')
        }
    })
}

logoutInit();


// display card


async function displayCard() {

    let displayCardElem = document.querySelector('.display-btn');
    displayCardElem.addEventListener("click", async function (event) {

        event.preventDefault();


        let res = await fetch('/restaurants/card')
        let cardDatas = (await res.json()).result

        let html = ''
        console.log(cardDatas)
        for (let cardData of cardDatas) {
            html += `
        <div class="column">
            <div class="card">
                <div class="restaurant-image-area">
                    <div class="restaurant-image"><img class="portrait-crop" alt="Qries" src="${cardData.shop_photo}"></div>
                </div>
                <div class="restaurant-info">
                    <div class="rest-name">Name: ${cardData.name}</div>
                    <div class="rest-address">Address: ${cardData.address}</div>
                    <div class="rest-phone">Phone: ${cardData.phone}</div>
                    <div class="rest-price">Price: ${cardData.price_range_id}</div>
                </div>
            </div>
        </div>
            `

        }
        const container = document.querySelector('.row')
        container.innerHTML = html

    })
}
displayCard();