function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 14,
      center: { lat: 22.323025, lng: 114.180657 },
    });

    const tourStops = [
      [{ lat: 22.280516, lng: 114.18492 }, "築地日本料理 (金百利廣場)", "https://static5.orstatic.com/userphoto2/photo/1F/14VP/082PH09F93982259693948lv.jpg", "記利佐治街1號金百利廣場7樓R1室"],
      [{ lat: 22.317753, lng: 114.17272 }, "申子居酒屋", "https://static5.orstatic.com/userphoto2/photo/1I/1724/08I74C106966BBCB9ACAA7lv.jpg", "黑布街74-76號藝興大廈地下1號舖"],
      [{ lat: 22.373743, lng: 114.11207 }, "初見", "https://static5.orstatic.com/userphoto2/photo/1O/1BLN/09EHWS881C2252C8DB7893lv.jpg", "海壩街22號華達樓地下F號舖"],
      [{ lat: 22.311295, lng: 114.226974 }, "古今二 (官塘工業中心)", "https://static5.orstatic.com/userphoto2/photo/1C/12AL/07KBD048E710F294FCC9EBlv.jpg", "觀塘道436-446號官塘工業中心4期1樓B室"],
      [{ lat: 22.30002, lng: 114.173 }, "Gram cafe & pancakes", "https://static5.orstatic.com/userphoto2/photo/1C/11ZZ/07I7TW46328F5C454616BFlv.jpg", "彌敦道100號The ONE 4樓L408舖"],
    ];

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
        label: `${i + 1}`,
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

