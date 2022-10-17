import fetch from "cross-fetch"

async function main() {
  const options = {
    method: 'GET',
    headers: { cookie: 'DefaultRegionIds=%7B%22hk%22%3A0%7D; RegionId=0; webhash=68c4458d-eecd-4870-91f2-d0a1274b0a43; isguest=1; _gcl_au=1.1.1989161410.1664529584; __utmc=183676536; CookiesAgreed=agreed; CultureInfo=zh-HK; __utmz=183676536.1665627171.6.2.utmcsr=hk.search.yahoo.com|utmccn=(referral)|utmcmd=referral|utmcct=/; _gid=GA1.2.1416207267.1665627171; autha=5C45_gTl4cIV1bX15PV74s7VGVBx2ZuTpyRmLWzs06UGJpdo4EGvcWf2bQGRJXDG5fX9vXC32jAqqLJto4erst860mkkTxnIjBttGabZ2GTHeqkTZmIajRCetw2E37jg0ta8R4fEoO_xU5cco98dz9pJBCd5L6Aa1XctBy9Na-2KTH9X92Y7To7lB_MEFtUBl_JPc4dpPLTUdbLm7IfoVUPVsR3Am0EFUifokz64MQ4TqK3Ww199w2Lt-x0Uzd1q4naxkPOXsP_SSCBc-voSAHTiXqS2O7vHPckiOCvTAuuV5oMAo7TqP_xABPnPdIBfLIcFKgiWMZ2OsyTf2-LsO_sEt7NDsALSzDm1Ivboz3yJKZLi0mkkba_pTkqirzfehSXSjve2wp3piboz5ANVQBxj5Y3L44tVVqY-Sbhz61nq2TqeAH8W6D20GwTeY7kWnRk27w; authr=9z2lepJZJUvGjgsXwiRxp-pZwcRYZ_87r2aghr3c3Kc7eThRWBEx4CBcu1fAeNVd7x43UW9sOVFxQy0Pn9eB9mLrUmRMdOqXBiN-wfvK9gbNlgPrK8k39z4lX4DKBcLtGTeVWkRRBc8qUY6-1L1Yl2at1JV5nu2clNlt16b27jVz8dWzMS5dt2h1svqwkr6SAqefX2mOKNLtksF8kWLEqzy5TbRLbftHXqhqpUNglyLrFdStOJpRaZUvUlvod7MyNoGQD-43LgvPF65Y1ZSiPO2Es45DNIxomzKInUuGDAzqZXMcMGB0Fm2gk0rhc_zBK6MoIgf-nbNrLUwX7yekeZ2VwYQTgUUXAmbLRAJ-OeWoaDAlSqfpLArb38zA7FODwdjciO02ZfjAi5nWVFhIk09dq4sP0cGBwEK382Gn1Y00goWL07wSw75YtaDs1BOSq6RvKMHTIQiAfcbd2l4ufYA4mgY; authe=I5MbeYB1HGZ06FjyjOarr1yyelDB3WfRhwXicEdwkWr/nhrZHX7ejEtoulx1fe624g4y0E5EnKTrS3gdcYhzUKTqt7cg8xb3+vAQ88F7VoM=; __utma=183676536.968376170.1664529584.1665734104.1665740256.13; __utmt_UA-652541-1=1; __utmb=183676536.1.10.1665740256; _ga_WM2DLEGHYP=GS1.1.1665740255.15.1.1665740256.0.0.0; _ga=GA1.1.968376170.1664529584' }
  };

  for (let page = 1; page < 10; page++) {

    //日本菜 1
    fetch(`https://www.openrice.com/api/pois?uiLang=zh&uiCity=hongkong&page=${page}&sortBy=Default&cuisineId=2009`, options)

    //dim sum(中菜) 2
    // fetch(`https://www.openrice.com/api/pois?uiLang=zh&uiCity=hongkong&page=${page}&sortBy=Default&categoryGroupId=10002`, options)

    //Curry (印度菜) 3
    // fetch(`https://www.openrice.com/api/pois?uiLang=zh&uiCity=hongkong&page=${page}&sortBy=Default&what=%E5%8D%B0%E5%BA%A6%E8%8F%9C`, options)

    //火鍋 4
    // fetch(`https://www.openrice.com/api/pois?uiLang=zh&uiCity=hongkong&page=${page}&sortBy=Default&dishId=1001`, options)

    //甜品 5
    // fetch(`https://www.openrice.com/api/pois?uiLang=zh&uiCity=hongkong&page=${page}&sortBy=Default&dishId=1014`, options)

    //麵包 6
    // fetch(`https://www.openrice.com/api/pois?uiLang=zh&uiCity=hongkong&page=${page}&sortBy=Default&categoryGroupId=20014`, options)

    //薄餅 7
    // fetch(`https://www.openrice.com/api/pois?uiLang=zh&uiCity=hongkong&page=${page}&sortBy=Default&dishId=1022`, options)

    //扒房 8
    // fetch(`https://www.openrice.com/api/pois?uiLang=zh&uiCity=hongkong&page=${page}&sortBy=Default&amenityId=1003`, options)

    //烤肉 9
    // fetch(`https://www.openrice.com/api/pois?uiLang=zh&uiCity=hongkong&page=${page}&sortBy=Default&dishId=1025`, options)

    //海鮮 10
    // fetch(`https://www.openrice.com/api/pois?uiLang=zh&uiCity=hongkong&page=${page}&sortBy=Default&dishId=1009`, options)

    //粉面 11
    // fetch(`https://www.openrice.com/api/pois?uiLang=zh&uiCity=hongkong&page=${page}&sortBy=Default&dishId=1010`, options)

    //飲料 12
    // fetch(`https://www.openrice.com/api/pois?uiLang=zh&uiCity=hongkong&page=${page}&sortBy=Default&dishId=1006`, options)

    //fast food 13
    // fetch(`https://www.openrice.com/api/pois?uiLang=zh&uiCity=hongkong&page=${page}&sortBy=Default&amenityId=1007`, options)

      .then(response => response.json())
      .then(
        (response) => {

          for (let i = 4; i < 14; i++) {
            console.log(i)
            // console.log("name: " + response.searchResult.paginationResult.results[i].name)
            // console.log("address: " + response.searchResult.paginationResult.results[i].address)
            // console.log("region: " + response.searchResult.paginationResult.results[i].district.name)
            // //need to change!!!!!!
            // console.log("category_id: 1")
            // console.log("shop_photo: " + response.searchResult.paginationResult.results[i].doorPhoto.url)
            // console.log("like_count: " + response.searchResult.paginationResult.results[i].scoreSmile)
            // console.log("dislike_count: " + response.searchResult.paginationResult.results[i].scoreCry)
            // console.log("price_range: " + response.searchResult.paginationResult.results[i].priceUI)
            // console.log("phone_number: " + response.searchResult.paginationResult.results[i].phones[0])

            console.log({
              name: response.searchResult.paginationResult.results[i].name,
              address: response.searchResult.paginationResult.results[i].address,
              region: response.searchResult.paginationResult.results[i].district.name,
              //remind to change
              category_id: 1,
              shop_photo: response.searchResult.paginationResult.results[i].doorPhoto.url,
              like_count: response.searchResult.paginationResult.results[i].scoreSmile,
              dislike_count: response.searchResult.paginationResult.results[i].scoreCry,
              phone_number: response.searchResult.paginationResult.results[i].phones[0],
              price_range: response.searchResult.paginationResult.results[i].priceUI
            })
          }

        })
      .catch(err => console.error(err));
  }
}

main()