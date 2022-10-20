let cardContainer = document.querySelector('.row1');
let mapContainer = document.querySelector('#map');
let displayCardElem = document.querySelector('.switchMap');
mapContainer.style.display = 'none';

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

    let res = await fetch('/restaurants/category')
    cardDatas = (await res.json()).result

    let html = ''
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
    const container = document.querySelector('.row1')
    container.innerHTML = html


}
displayCard();

async function initMap() {
    const tourStops = [];

    let res = await fetch('/restaurants/category')
    cardDatas = (await res.json()).result
    for (let cardData of cardDatas) {
        let tempData = []
        tempData.push({ lat: cardData['coordinates']['x'], lng: cardData['coordinates']['y'] })
        tempData.push(cardData['name'])
        tempData.push(cardData['shop_photo'])
        tempData.push(cardData['address'])
        tourStops.push(tempData)
    }
    console.log(tourStops)

    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 18,
        center: tourStops[0][0],
    });

    const infoWindow = new google.maps.InfoWindow();

    // Create markers
    tourStops.forEach(([position, name, photo, address], i) => {
        const marker = new google.maps.Marker({
            position,
            map,
            title: `
        <img class="portrait-crop" alt="Qries" src="${photo}">
        <div class="mapInfoName">${i + 1}. ${name}</div>
        <div class="mapInfoAddress"> ${address}</div>
        `,
            // label: `${i + 1}`,
            optimized: false,
        });

        // Add listener for each marker
        marker.addListener("click", () => {
            infoWindow.close();
            infoWindow.setContent(marker.getTitle());
            infoWindow.open(marker.getMap(), marker);
        });
    });
}
window.initMap = initMap;

//make two display "block" and "none"
displayCardElem.addEventListener('click', function() {
    if (mapContainer.style.display === 'block') {
        mapContainer.style.display = 'none';
        cardContainer.style.display = 'block';
      } else {
        mapContainer.style.display = 'block';
        cardContainer.style.display = 'none';
      }
})
