import fetch from "cross-fetch"

async function main() {
  const options = {
    method: 'GET',
    headers: {cookie: 'DefaultRegionIds=%7B%22hk%22%3A0%7D; RegionId=0; webhash=68c4458d-eecd-4870-91f2-d0a1274b0a43; isguest=1; _gcl_au=1.1.1989161410.1664529584; __utmc=183676536; CookiesAgreed=agreed; CultureInfo=zh-HK; __utmz=183676536.1665627171.6.2.utmcsr=hk.search.yahoo.com|utmccn=(referral)|utmcmd=referral|utmcct=/; _gid=GA1.2.1416207267.1665627171; __utma=183676536.968376170.1664529584.1665644063.1665651125.8; autha=mxaZ0coJMJR_fg6xxMo3c9ptm1MZR79KwD314DGnlkA8jLQFuR5bB08efz9-bINysHBPYkmwAgbXnRTDRpCTZrn6ViGgk32pviXLRexSQCD010K1ibgY6GMP8km_Gl-DRncpMOBsaKBN3Y9kbAZnH2d48BKqqaJmWBqQVpp_v3mEyqAdpYfGHXpxug_IKcreDDqjKD8bEdiDfON2pRjVX6qqqYcTDEOEGUJEft0Tor4JZUNuG32pnQactsDN4GAbl8EvwyfmHMq6RMZMg3vFwcsTZnvSXnTAJqv8OCYt4CktljiD8nl6b8rmwutnPrqzRsirQeI-1_MmxbM8akYv0QiyUwqjgNSP-92OiI0tP7lhueYEc_Z6i51VxJV-DEoc-rDg1zBXWp_4dqJkCTHN03GqbNYIFrxZDVsSieFjTqMghNFx88VS3ql1880DihacUIK_tA; authr=2Rtb6bLY_KbsZ3Moq4P8_DmNOHgdWVrYsJ_07WjBwXT_dJCPlt1jJm5GbndSUcIXIcCHR3CXzgWeVnjXVo-QCSetJBLNMx3GaJplHyu6Flun7QIgf9Ft-ikjfX1fHnMmHMtWUE-Bxb06B-WjZt1j1GUTCGEIks78T3186jW7eaPCbCPNompoS8H4weUSvPC3cySNFX_cJQHKJvkpkrGYcTSMxgpbFrEaSnIbu7IjxYskmPOrEPcM7U_3u4JOUP3LZtIqobRKiO31cXvZi4e6-URfsFQId93gtAXGoKdfAw5BAPfuS7k50tUisC7-jztePs1NNJNz21hG38GKHeKa2Dql6Fdur6hJ1Hh8NkLFSYm1YP-vEljY5dEWKTlAS8eSVh7NcBf-IGycsuiPrMe6Dk_H8MOrThVFXsv_HK3B618oDJ0_GTb9QzDl6XqPqqGodFOKFQ; authe=I5MbeYB1HGZ06FjyjOarr1yyelDB3WfRhwXicEdwkWr/nhrZHX7ejEtoulx1fe624g4y0E5EnKTrS3gdcYhzUGBTIYit7E/CDcAoMgXWRM8=; __utmt_UA-652541-1=1; acw_sc__v2=6347ebd25e671066b7ab3b4710f916ffcb93f088; __utmb=183676536.76.10.1665651125; _ga_WM2DLEGHYP=GS1.1.1665652942.10.1.1665657816.0.0.0; _ga=GA1.1.968376170.1664529584'}
  };

  for (let page = 1; page < 10; page++) {

    //日本菜 2
    fetch(`https://www.openrice.com/api/pois?uiLang=zh&uiCity=hongkong&page=${page}&sortBy=Default&cuisineId=2009`, options)

      //印度菜 5
      // fetch(`https://www.openrice.com/api/pois?uiLang=zh&uiCity=hongkong&page=${page}&sortBy=Default&what=%E5%8D%B0%E5%BA%A6%E8%8F%9C`, options)

      //fast food 17
      // fetch(`https://www.openrice.com/api/pois?uiLang=zh&uiCity=hongkong&page=${page}&sortBy=Default&amenityId=1007`, options)

      //泰國菜 7
      // fetch(`https://www.openrice.com/api/pois?uiLang=zh&uiCity=hongkong&page=${page}&sortBy=Default&what=%E6%B3%B0%E5%9C%8B%E8%8F%9C`, options)

      //越南菜 1
      // fetch(`https://www.openrice.com/api/pois?uiLang=zh&uiCity=hongkong&page=${page}&sortBy=Default&what=%E8%B6%8A%E5%8D%97%E8%8F%9C`, options)

      //韓國菜 6
      // fetch(`https://www.openrice.com/api/pois?uiLang=zh&uiCity=hongkong&page=${page}&sortBy=Default&cuisineId=2001`, options)

      //火鍋 8
      // fetch(`https://www.openrice.com/api/pois?uiLang=zh&uiCity=hongkong&page=${page}&sortBy=Default&dishId=1001`, options)

      //甜品 9
      // fetch(`https://www.openrice.com/api/pois?uiLang=zh&uiCity=hongkong&page=${page}&sortBy=Default&dishId=1014`, options)

      //麵包 10
      // fetch(`https://www.openrice.com/api/pois?uiLang=zh&uiCity=hongkong&page=${page}&sortBy=Default&categoryGroupId=20014`, options)

      //薄餅 11
      // fetch(`https://www.openrice.com/api/pois?uiLang=zh&uiCity=hongkong&page=${page}&sortBy=Default&dishId=1022`, options)

      //扒房 12
      // fetch(`https://www.openrice.com/api/pois?uiLang=zh&uiCity=hongkong&page=${page}&sortBy=Default&amenityId=1003`, options)

      //海鮮 14
      // fetch(`https://www.openrice.com/api/pois?uiLang=zh&uiCity=hongkong&page=${page}&sortBy=Default&dishId=1009`, options)

      //粉面 15
      // fetch(`https://www.openrice.com/api/pois?uiLang=zh&uiCity=hongkong&page=${page}&sortBy=Default&dishId=1010`, options)

      //烤肉 13
      // fetch(`https://www.openrice.com/api/pois?uiLang=zh&uiCity=hongkong&page=${page}&sortBy=Default&dishId=1025`, options)

      //飲料 16
      // fetch(`https://www.openrice.com/api/pois?uiLang=zh&uiCity=hongkong&page=${page}&sortBy=Default&dishId=1006`, options)

      //中菜 4
      // fetch(`https://www.openrice.com/api/pois?uiLang=zh&uiCity=hongkong&page=${page}&sortBy=Default&categoryGroupId=10002`, options)

      //西式 3
      // fetch(`https://www.openrice.com/api/pois?uiLang=zh&uiCity=hongkong&page=${page}&sortBy=Default&cuisineId=4000`, options)

      .then(response => response.json())
      .then(
        (response) => {

          for (let i = 4; i < 14; i++) {
            console.log(i)
            console.log("name: " + response.searchResult.paginationResult.results[i].name)
            console.log("address: " + response.searchResult.paginationResult.results[i].address)
            console.log("region: " + response.searchResult.paginationResult.results[i].district.name)
            //need to change!!!!!!
            console.log("category_id: 1")
            console.log("shop_photo: " + response.searchResult.paginationResult.results[i].doorPhoto.url)
            console.log("like_count: " + response.searchResult.paginationResult.results[i].scoreSmile)
            console.log("dislike_count: " + response.searchResult.paginationResult.results[i].scoreCry)
            console.log("upper_price: " + response.searchResult.paginationResult.results[i].priceUI.substring(1).split('-')[0])
            console.log("upper_price: " + response.searchResult.paginationResult.results[i].priceUI.split("-").pop())
            // "$801以上"
            // "$50以下"
            // "$51-100"

            //可加
            console.log("phone_number: " + response.searchResult.paginationResult.results[i].phones[0])

            
          }

        })
      .catch(err => console.error(err));
  }
}

main()