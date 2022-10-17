import { Knex } from "knex";
import fetch from "cross-fetch"


export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries (including id reset)
    await knex.raw(`TRUNCATE  food_categories  RESTART IDENTITY CASCADE`)
    await knex.raw(`TRUNCATE  price_ranges  RESTART IDENTITY CASCADE`)
    // await knex.raw(`TRUNCATE  restaurants  RESTART IDENTITY CASCADE`)

    await knex.insert([
        { name: "japanese_food" },
        { name: "dim_sum" },
        { name: "curry" },
        { name: "hot_pot" },
        { name: "dessert" },
        { name: "bakery" },
        { name: "pizza" },
        { name: "steak" },
        { name: "bbq" },
        { name: "seafood" },
        { name: "noodles" },
        { name: "beverage" },
        { name: "fast_food" },
        { name: "burger" },
    ]).into('food_categories');

    await knex.insert([
        { range: "below $50" },
        { range: "$51-100" },
        { range: "$101-200" },
        { range: "$201-400" },
        { range: "$401-800" },
        { range: "$801 above" },
    ]).into('price_ranges');

    const options = {
        method: 'GET',
        headers: { cookie: 'DefaultRegionIds=%7B%22hk%22%3A0%7D; RegionId=0; webhash=68c4458d-eecd-4870-91f2-d0a1274b0a43; isguest=1; _gcl_au=1.1.1989161410.1664529584; __utmc=183676536; CookiesAgreed=agreed; CultureInfo=zh-HK; __utmz=183676536.1665627171.6.2.utmcsr=hk.search.yahoo.com|utmccn=(referral)|utmcmd=referral|utmcct=/; autha=iQ-gC_r5Nl2Bp97XQFaDvTRtrCJB2GtUJc6I7LTPY2RdPQVUl0JZm_JvNv21H1cfrTO2BKxiQr0tZluHBMa1n6anFUfQsSoNg7XeYvRrKT2j92ezv1Xoh88K1AJx6PFJvfmyn1knqZs8voUT3dWteOVuR-MOb8nSf5Ia4-XxHS34QY6RyGV6SbmF1UUqpDzblhakKiCx_UCNtO91ZsNYpj6quo4qdPlCFNEWv7Hh07tsc1fvlsW0S8ZxDFVEllFBhQTowRdKnppcTYV4xzUaCjpMKvBxyZhiK6jVamzxUUa_Q_O096n8lwzfu_WJ2onsZhMOqIWTx2j6OZ0Fsya6pPAeVfTmVXnZKbKUD2MECHBw5nfug3ua15RPodHR2Wae-H9o1aV767nF5QUsQqVDJmj8jr2DbeHs9PMfhHTWz-g6DDBR5KEVcP8lFrGDtrINPbxzlg; authr=bDgJ1xDEjzAjerb3Kq-H6pS-H2VvJ6ORc-orreFd4sIfmr-2UcYHFcDKEuTffC2hmhLqFf1aNryPS1gMTZBJtnodMsT9Wla16v4FnrJ1M0xcw4UHjEaBZr9UOuAd_tkbnLmX8N4TOw2dG_1F9ahfKPmXqjsZOsR3GZ5KyJ1jX7EEsIcBNBs3Rhvc3XvioZIC_lo7TYlwUpBDrwI1L3gMCtZ0L9gfiE3H8BDOHGPz4iHmOXZFmmTwXMwFzswjwtiobFwUQFmSeXXt2fUiCsLOfUheXYzN59geBmcfZz0SXUp9YfTJaB6RUc58PS5X4aM9ujI-Zd9cWcOH6WoTxYzK_fp74-agG6nVsbTr7Xs5AYpjMTNazzP-fb9kgT5tFP8Xpr-qznFnmldr-IO080BlVFZeV3fq-zdykj5DBo_qVPJUNsRcLyYFSTOmpGly660jnJe_ZjHMPZIW0UTnwJ5G2cCVXLY; authe=I5MbeYB1HGZ06FjyjOarr1yyelDB3WfRhwXicEdwkWr/nhrZHX7ejEtoulx1fe624g4y0E5EnKTrS3gdcYhzUNTvADExnyuQ7GMmfA0md+U=; __utma=183676536.968376170.1664529584.1665801014.1665971259.16; __utmt_UA-652541-1=1; __utmb=183676536.1.10.1665971259; _gid=GA1.2.1063574153.1665971259; _ga_WM2DLEGHYP=GS1.1.1665971258.18.1.1665971258.0.0.0; _ga=GA1.1.968376170.1664529584' }
    };

    //日本菜 1
    for (let page = 1; page < 10; page++) {

        // change
        let response = await fetch(`https://www.openrice.com/api/pois?uiLang=zh&uiCity=hongkong&page=${page}&sortBy=Default&cuisineId=2009`, options)
        let searchResult = (await response.json()).searchResult;
        for (let i = 4; i < 14; i++) {

            let districtName = searchResult.paginationResult.results[i].district.name
            let districtId = (await knex.select('id').from('districts').where({ name: districtName }))[0]?.id
            if (!districtId) {
                districtId = (await knex('districts').insert({ name: districtName }).returning('id'))[0].id
            }
            let price_range_id
            if (searchResult.paginationResult.results[i].priceUI == "$50以下") {
                price_range_id = 1
            } else if (searchResult.paginationResult.results[i].priceUI == "$51-100") {
                price_range_id = 2
            } else if (searchResult.paginationResult.results[i].priceUI == "$101-200") {
                price_range_id = 3
            } else if (searchResult.paginationResult.results[i].priceUI == "$201-400") {
                price_range_id = 4
            } else if (searchResult.paginationResult.results[i].priceUI == "$401-800") {
                price_range_id = 5
            } else if (searchResult.paginationResult.results[i].priceUI == "$801以上") {
                price_range_id = 6
            }

            await knex.insert([
                {
                    name: searchResult.paginationResult.results[i].name,
                    address: searchResult.paginationResult.results[i].address,
                    district_id: districtId,
                    //change
                    category_id: 1,
                    shop_photo: searchResult.paginationResult.results[i].doorPhoto?.url || "no photo",
                    like_count: searchResult.paginationResult.results[i].scoreSmile,
                    dislike_count: searchResult.paginationResult.results[i].scoreCry,
                    phone: searchResult.paginationResult.results[i].phones[0],
                    price_range_id: price_range_id
                },
            ]).into('restaurants');


        }

    }

    //dim sum(中菜) 2
    for (let page = 1; page < 10; page++) {

        // change
        let response = await fetch(`https://www.openrice.com/api/pois?uiLang=zh&uiCity=hongkong&page=${page}&sortBy=Default&categoryGroupId=10002`, options)
        let searchResult = (await response.json()).searchResult;
        for (let i = 4; i < 14; i++) {

            let districtName = searchResult.paginationResult.results[i].district.name
            let districtId = (await knex.select('id').from('districts').where({ name: districtName }))[0]?.id
            if (!districtId) {
                districtId = (await knex('districts').insert({ name: districtName }).returning('id'))[0].id
            }
            let price_range_id
            if (searchResult.paginationResult.results[i].priceUI == "$50以下") {
                price_range_id = 1
            } else if (searchResult.paginationResult.results[i].priceUI == "$51-100") {
                price_range_id = 2
            } else if (searchResult.paginationResult.results[i].priceUI == "$101-200") {
                price_range_id = 3
            } else if (searchResult.paginationResult.results[i].priceUI == "$201-400") {
                price_range_id = 4
            } else if (searchResult.paginationResult.results[i].priceUI == "$401-800") {
                price_range_id = 5
            } else if (searchResult.paginationResult.results[i].priceUI == "$801以上") {
                price_range_id = 6
            }

            await knex.insert([
                {
                    name: searchResult.paginationResult.results[i].name,
                    address: searchResult.paginationResult.results[i].address,
                    district_id: districtId,
                    //change
                    category_id: 2,
                    shop_photo: searchResult.paginationResult.results[i].doorPhoto?.url || "no photo",
                    like_count: searchResult.paginationResult.results[i].scoreSmile,
                    dislike_count: searchResult.paginationResult.results[i].scoreCry,
                    phone: searchResult.paginationResult.results[i].phones[0],
                    price_range_id: price_range_id
                },
            ]).into('restaurants');


        }

    }

    //Curry (印度菜) 3
    for (let page = 1; page < 10; page++) {

        // change
        let response = await fetch(`https://www.openrice.com/api/pois?uiLang=zh&uiCity=hongkong&page=${page}&sortBy=Default&what=%E5%8D%B0%E5%BA%A6%E8%8F%9C`, options)
        let searchResult = (await response.json()).searchResult;
        for (let i = 4; i < 14; i++) {

            let districtName = searchResult.paginationResult.results[i].district.name
            let districtId = (await knex.select('id').from('districts').where({ name: districtName }))[0]?.id
            if (!districtId) {
                districtId = (await knex('districts').insert({ name: districtName }).returning('id'))[0].id
            }
            let price_range_id
            if (searchResult.paginationResult.results[i].priceUI == "$50以下") {
                price_range_id = 1
            } else if (searchResult.paginationResult.results[i].priceUI == "$51-100") {
                price_range_id = 2
            } else if (searchResult.paginationResult.results[i].priceUI == "$101-200") {
                price_range_id = 3
            } else if (searchResult.paginationResult.results[i].priceUI == "$201-400") {
                price_range_id = 4
            } else if (searchResult.paginationResult.results[i].priceUI == "$401-800") {
                price_range_id = 5
            } else if (searchResult.paginationResult.results[i].priceUI == "$801以上") {
                price_range_id = 6
            }

            await knex.insert([
                {
                    name: searchResult.paginationResult.results[i].name,
                    address: searchResult.paginationResult.results[i].address,
                    district_id: districtId,
                    //change
                    category_id: 3,
                    shop_photo: searchResult.paginationResult.results[i].doorPhoto?.url || "no photo",
                    like_count: searchResult.paginationResult.results[i].scoreSmile,
                    dislike_count: searchResult.paginationResult.results[i].scoreCry,
                    phone: searchResult.paginationResult.results[i].phones[0],
                    price_range_id: price_range_id
                },
            ]).into('restaurants');


        }

    }

    //火鍋 4
    for (let page = 1; page < 10; page++) {

        // change
        let response = await fetch(`https://www.openrice.com/api/pois?uiLang=zh&uiCity=hongkong&page=${page}&sortBy=Default&dishId=1001`, options)
        let searchResult = (await response.json()).searchResult;
        for (let i = 4; i < 14; i++) {

            let districtName = searchResult.paginationResult.results[i].district.name
            let districtId = (await knex.select('id').from('districts').where({ name: districtName }))[0]?.id
            if (!districtId) {
                districtId = (await knex('districts').insert({ name: districtName }).returning('id'))[0].id
            }
            let price_range_id
            if (searchResult.paginationResult.results[i].priceUI == "$50以下") {
                price_range_id = 1
            } else if (searchResult.paginationResult.results[i].priceUI == "$51-100") {
                price_range_id = 2
            } else if (searchResult.paginationResult.results[i].priceUI == "$101-200") {
                price_range_id = 3
            } else if (searchResult.paginationResult.results[i].priceUI == "$201-400") {
                price_range_id = 4
            } else if (searchResult.paginationResult.results[i].priceUI == "$401-800") {
                price_range_id = 5
            } else if (searchResult.paginationResult.results[i].priceUI == "$801以上") {
                price_range_id = 6
            }

            await knex.insert([
                {
                    name: searchResult.paginationResult.results[i].name,
                    address: searchResult.paginationResult.results[i].address,
                    district_id: districtId,
                    //change
                    category_id: 4,
                    shop_photo: searchResult.paginationResult.results[i].doorPhoto?.url || "no photo",
                    like_count: searchResult.paginationResult.results[i].scoreSmile,
                    dislike_count: searchResult.paginationResult.results[i].scoreCry,
                    phone: searchResult.paginationResult.results[i].phones[0],
                    price_range_id: price_range_id
                },
            ]).into('restaurants');


        }

    }

    //甜品 5
    for (let page = 1; page < 10; page++) {

        // change
        let response = await fetch(`https://www.openrice.com/api/pois?uiLang=zh&uiCity=hongkong&page=${page}&sortBy=Default&dishId=1014`, options)
        let searchResult = (await response.json()).searchResult;
        for (let i = 4; i < 14; i++) {

            let districtName = searchResult.paginationResult.results[i].district.name
            let districtId = (await knex.select('id').from('districts').where({ name: districtName }))[0]?.id
            if (!districtId) {
                districtId = (await knex('districts').insert({ name: districtName }).returning('id'))[0].id
            }
            let price_range_id
            if (searchResult.paginationResult.results[i].priceUI == "$50以下") {
                price_range_id = 1
            } else if (searchResult.paginationResult.results[i].priceUI == "$51-100") {
                price_range_id = 2
            } else if (searchResult.paginationResult.results[i].priceUI == "$101-200") {
                price_range_id = 3
            } else if (searchResult.paginationResult.results[i].priceUI == "$201-400") {
                price_range_id = 4
            } else if (searchResult.paginationResult.results[i].priceUI == "$401-800") {
                price_range_id = 5
            } else if (searchResult.paginationResult.results[i].priceUI == "$801以上") {
                price_range_id = 6
            }

            await knex.insert([
                {
                    name: searchResult.paginationResult.results[i].name,
                    address: searchResult.paginationResult.results[i].address,
                    district_id: districtId,
                    //change
                    category_id: 5,
                    shop_photo: searchResult.paginationResult.results[i].doorPhoto?.url || "no photo",
                    like_count: searchResult.paginationResult.results[i].scoreSmile,
                    dislike_count: searchResult.paginationResult.results[i].scoreCry,
                    phone: searchResult.paginationResult.results[i].phones[0],
                    price_range_id: price_range_id
                },
            ]).into('restaurants');


        }

    }

    //麵包 6
    for (let page = 1; page < 10; page++) {

        // change
        let response = await fetch(`https://www.openrice.com/api/pois?uiLang=zh&uiCity=hongkong&page=${page}&sortBy=Default&categoryGroupId=20014`, options)
        let searchResult = (await response.json()).searchResult;
        for (let i = 4; i < 14; i++) {

            let districtName = searchResult.paginationResult.results[i].district.name
            let districtId = (await knex.select('id').from('districts').where({ name: districtName }))[0]?.id
            if (!districtId) {
                districtId = (await knex('districts').insert({ name: districtName }).returning('id'))[0].id
            }
            let price_range_id
            if (searchResult.paginationResult.results[i].priceUI == "$50以下") {
                price_range_id = 1
            } else if (searchResult.paginationResult.results[i].priceUI == "$51-100") {
                price_range_id = 2
            } else if (searchResult.paginationResult.results[i].priceUI == "$101-200") {
                price_range_id = 3
            } else if (searchResult.paginationResult.results[i].priceUI == "$201-400") {
                price_range_id = 4
            } else if (searchResult.paginationResult.results[i].priceUI == "$401-800") {
                price_range_id = 5
            } else if (searchResult.paginationResult.results[i].priceUI == "$801以上") {
                price_range_id = 6
            }

            await knex.insert([
                {
                    name: searchResult.paginationResult.results[i].name,
                    address: searchResult.paginationResult.results[i].address,
                    district_id: districtId,
                    //change
                    category_id: 6,
                    shop_photo: searchResult.paginationResult.results[i].doorPhoto?.url || "no photo",
                    like_count: searchResult.paginationResult.results[i].scoreSmile,
                    dislike_count: searchResult.paginationResult.results[i].scoreCry,
                    phone: searchResult.paginationResult.results[i].phones[0],
                    price_range_id: price_range_id
                },
            ]).into('restaurants');


        }

    }

    //薄餅 7
    for (let page = 1; page < 10; page++) {

        // change
        let response = await fetch(`https://www.openrice.com/api/pois?uiLang=zh&uiCity=hongkong&page=${page}&sortBy=Default&dishId=1022`, options)
        let searchResult = (await response.json()).searchResult;
        for (let i = 4; i < 14; i++) {

            let districtName = searchResult.paginationResult.results[i].district.name
            let districtId = (await knex.select('id').from('districts').where({ name: districtName }))[0]?.id
            if (!districtId) {
                districtId = (await knex('districts').insert({ name: districtName }).returning('id'))[0].id
            }
            let price_range_id
            if (searchResult.paginationResult.results[i].priceUI == "$50以下") {
                price_range_id = 1
            } else if (searchResult.paginationResult.results[i].priceUI == "$51-100") {
                price_range_id = 2
            } else if (searchResult.paginationResult.results[i].priceUI == "$101-200") {
                price_range_id = 3
            } else if (searchResult.paginationResult.results[i].priceUI == "$201-400") {
                price_range_id = 4
            } else if (searchResult.paginationResult.results[i].priceUI == "$401-800") {
                price_range_id = 5
            } else if (searchResult.paginationResult.results[i].priceUI == "$801以上") {
                price_range_id = 6
            }

            await knex.insert([
                {
                    name: searchResult.paginationResult.results[i].name,
                    address: searchResult.paginationResult.results[i].address,
                    district_id: districtId,
                    //change
                    category_id: 7,
                    shop_photo: searchResult.paginationResult.results[i].doorPhoto?.url || "no photo",
                    like_count: searchResult.paginationResult.results[i].scoreSmile,
                    dislike_count: searchResult.paginationResult.results[i].scoreCry,
                    phone: searchResult.paginationResult.results[i].phones[0],
                    price_range_id: price_range_id
                },
            ]).into('restaurants');


        }

    }

    //扒房 8
    for (let page = 1; page < 10; page++) {

        // change
        let response = await fetch(`https://www.openrice.com/api/pois?uiLang=zh&uiCity=hongkong&page=${page}&sortBy=Default&amenityId=1003`, options)
        let searchResult = (await response.json()).searchResult;
        for (let i = 4; i < 14; i++) {

            let districtName = searchResult.paginationResult.results[i].district.name
            let districtId = (await knex.select('id').from('districts').where({ name: districtName }))[0]?.id
            if (!districtId) {
                districtId = (await knex('districts').insert({ name: districtName }).returning('id'))[0].id
            }
            let price_range_id
            if (searchResult.paginationResult.results[i].priceUI == "$50以下") {
                price_range_id = 1
            } else if (searchResult.paginationResult.results[i].priceUI == "$51-100") {
                price_range_id = 2
            } else if (searchResult.paginationResult.results[i].priceUI == "$101-200") {
                price_range_id = 3
            } else if (searchResult.paginationResult.results[i].priceUI == "$201-400") {
                price_range_id = 4
            } else if (searchResult.paginationResult.results[i].priceUI == "$401-800") {
                price_range_id = 5
            } else if (searchResult.paginationResult.results[i].priceUI == "$801以上") {
                price_range_id = 6
            }

            await knex.insert([
                {
                    name: searchResult.paginationResult.results[i].name,
                    address: searchResult.paginationResult.results[i].address,
                    district_id: districtId,
                    //change
                    category_id: 8,
                    shop_photo: searchResult.paginationResult.results[i].doorPhoto?.url || "no photo",
                    like_count: searchResult.paginationResult.results[i].scoreSmile,
                    dislike_count: searchResult.paginationResult.results[i].scoreCry,
                    phone: searchResult.paginationResult.results[i].phones[0],
                    price_range_id: price_range_id
                },
            ]).into('restaurants');


        }

    }

    //烤肉 9
    for (let page = 1; page < 10; page++) {

        // change
        let response = await fetch(`https://www.openrice.com/api/pois?uiLang=zh&uiCity=hongkong&page=${page}&sortBy=Default&dishId=1025`, options)
        let searchResult = (await response.json()).searchResult;
        for (let i = 4; i < 14; i++) {

            let districtName = searchResult.paginationResult.results[i].district.name
            let districtId = (await knex.select('id').from('districts').where({ name: districtName }))[0]?.id
            if (!districtId) {
                districtId = (await knex('districts').insert({ name: districtName }).returning('id'))[0].id
            }
            let price_range_id
            if (searchResult.paginationResult.results[i].priceUI == "$50以下") {
                price_range_id = 1
            } else if (searchResult.paginationResult.results[i].priceUI == "$51-100") {
                price_range_id = 2
            } else if (searchResult.paginationResult.results[i].priceUI == "$101-200") {
                price_range_id = 3
            } else if (searchResult.paginationResult.results[i].priceUI == "$201-400") {
                price_range_id = 4
            } else if (searchResult.paginationResult.results[i].priceUI == "$401-800") {
                price_range_id = 5
            } else if (searchResult.paginationResult.results[i].priceUI == "$801以上") {
                price_range_id = 6
            }

            await knex.insert([
                {
                    name: searchResult.paginationResult.results[i].name,
                    address: searchResult.paginationResult.results[i].address,
                    district_id: districtId,
                    //change
                    category_id: 9,
                    shop_photo: searchResult.paginationResult.results[i].doorPhoto?.url || "no photo",
                    like_count: searchResult.paginationResult.results[i].scoreSmile,
                    dislike_count: searchResult.paginationResult.results[i].scoreCry,
                    phone: searchResult.paginationResult.results[i].phones[0],
                    price_range_id: price_range_id
                },
            ]).into('restaurants');


        }

    }

    //海鮮 10
    for (let page = 1; page < 10; page++) {

        // change
        let response = await fetch(`https://www.openrice.com/api/pois?uiLang=zh&uiCity=hongkong&page=${page}&sortBy=Default&dishId=1009`, options)
        let searchResult = (await response.json()).searchResult;
        for (let i = 4; i < 14; i++) {

            let districtName = searchResult.paginationResult.results[i].district.name
            let districtId = (await knex.select('id').from('districts').where({ name: districtName }))[0]?.id
            if (!districtId) {
                districtId = (await knex('districts').insert({ name: districtName }).returning('id'))[0].id
            }
            let price_range_id
            if (searchResult.paginationResult.results[i].priceUI == "$50以下") {
                price_range_id = 1
            } else if (searchResult.paginationResult.results[i].priceUI == "$51-100") {
                price_range_id = 2
            } else if (searchResult.paginationResult.results[i].priceUI == "$101-200") {
                price_range_id = 3
            } else if (searchResult.paginationResult.results[i].priceUI == "$201-400") {
                price_range_id = 4
            } else if (searchResult.paginationResult.results[i].priceUI == "$401-800") {
                price_range_id = 5
            } else if (searchResult.paginationResult.results[i].priceUI == "$801以上") {
                price_range_id = 6
            }

            await knex.insert([
                {
                    name: searchResult.paginationResult.results[i].name,
                    address: searchResult.paginationResult.results[i].address,
                    district_id: districtId,
                    //change
                    category_id: 10,
                    shop_photo: searchResult.paginationResult.results[i].doorPhoto?.url || "no photo",
                    like_count: searchResult.paginationResult.results[i].scoreSmile,
                    dislike_count: searchResult.paginationResult.results[i].scoreCry,
                    phone: searchResult.paginationResult.results[i].phones[0],
                    price_range_id: price_range_id
                },
            ]).into('restaurants');


        }

    }

    //粉面 11
    for (let page = 1; page < 10; page++) {

        // change
        let response = await fetch(`https://www.openrice.com/api/pois?uiLang=zh&uiCity=hongkong&page=${page}&sortBy=Default&dishId=1010`, options)
        let searchResult = (await response.json()).searchResult;
        for (let i = 4; i < 14; i++) {

            let districtName = searchResult.paginationResult.results[i].district.name
            let districtId = (await knex.select('id').from('districts').where({ name: districtName }))[0]?.id
            if (!districtId) {
                districtId = (await knex('districts').insert({ name: districtName }).returning('id'))[0].id
            }
            let price_range_id
            if (searchResult.paginationResult.results[i].priceUI == "$50以下") {
                price_range_id = 1
            } else if (searchResult.paginationResult.results[i].priceUI == "$51-100") {
                price_range_id = 2
            } else if (searchResult.paginationResult.results[i].priceUI == "$101-200") {
                price_range_id = 3
            } else if (searchResult.paginationResult.results[i].priceUI == "$201-400") {
                price_range_id = 4
            } else if (searchResult.paginationResult.results[i].priceUI == "$401-800") {
                price_range_id = 5
            } else if (searchResult.paginationResult.results[i].priceUI == "$801以上") {
                price_range_id = 6
            }

            await knex.insert([
                {
                    name: searchResult.paginationResult.results[i].name,
                    address: searchResult.paginationResult.results[i].address,
                    district_id: districtId,
                    //change
                    category_id: 11,
                    shop_photo: searchResult.paginationResult.results[i].doorPhoto?.url || "no photo",
                    like_count: searchResult.paginationResult.results[i].scoreSmile,
                    dislike_count: searchResult.paginationResult.results[i].scoreCry,
                    phone: searchResult.paginationResult.results[i].phones[0],
                    price_range_id: price_range_id
                },
            ]).into('restaurants');


        }

    }

    //飲料 12
    for (let page = 1; page < 10; page++) {

        // change
        let response = await fetch(`https://www.openrice.com/api/pois?uiLang=zh&uiCity=hongkong&page=${page}&sortBy=Default&dishId=1006`, options)
        let searchResult = (await response.json()).searchResult;
        for (let i = 4; i < 14; i++) {

            let districtName = searchResult.paginationResult.results[i].district.name
            let districtId = (await knex.select('id').from('districts').where({ name: districtName }))[0]?.id
            if (!districtId) {
                districtId = (await knex('districts').insert({ name: districtName }).returning('id'))[0].id
            }
            let price_range_id
            if (searchResult.paginationResult.results[i].priceUI == "$50以下") {
                price_range_id = 1
            } else if (searchResult.paginationResult.results[i].priceUI == "$51-100") {
                price_range_id = 2
            } else if (searchResult.paginationResult.results[i].priceUI == "$101-200") {
                price_range_id = 3
            } else if (searchResult.paginationResult.results[i].priceUI == "$201-400") {
                price_range_id = 4
            } else if (searchResult.paginationResult.results[i].priceUI == "$401-800") {
                price_range_id = 5
            } else if (searchResult.paginationResult.results[i].priceUI == "$801以上") {
                price_range_id = 6
            }

            await knex.insert([
                {
                    name: searchResult.paginationResult.results[i].name,
                    address: searchResult.paginationResult.results[i].address,
                    district_id: districtId,
                    //change
                    category_id: 12,
                    shop_photo: searchResult.paginationResult.results[i].doorPhoto?.url || "no photo",
                    like_count: searchResult.paginationResult.results[i].scoreSmile,
                    dislike_count: searchResult.paginationResult.results[i].scoreCry,
                    phone: searchResult.paginationResult.results[i].phones[0],
                    price_range_id: price_range_id
                },
            ]).into('restaurants');


        }

    }

    //fast food 13
    for (let page = 1; page < 10; page++) {

        // change
        let response = await fetch(`https://www.openrice.com/api/pois?uiLang=zh&uiCity=hongkong&page=${page}&sortBy=Default&amenityId=1007`, options)
        let searchResult = (await response.json()).searchResult;
        for (let i = 4; i < 14; i++) {

            let districtName = searchResult.paginationResult.results[i].district.name
            let districtId = (await knex.select('id').from('districts').where({ name: districtName }))[0]?.id
            if (!districtId) {
                districtId = (await knex('districts').insert({ name: districtName }).returning('id'))[0].id
            }
            let price_range_id
            if (searchResult.paginationResult.results[i].priceUI == "$50以下") {
                price_range_id = 1
            } else if (searchResult.paginationResult.results[i].priceUI == "$51-100") {
                price_range_id = 2
            } else if (searchResult.paginationResult.results[i].priceUI == "$101-200") {
                price_range_id = 3
            } else if (searchResult.paginationResult.results[i].priceUI == "$201-400") {
                price_range_id = 4
            } else if (searchResult.paginationResult.results[i].priceUI == "$401-800") {
                price_range_id = 5
            } else if (searchResult.paginationResult.results[i].priceUI == "$801以上") {
                price_range_id = 6
            }

            await knex.insert([
                {
                    name: searchResult.paginationResult.results[i].name,
                    address: searchResult.paginationResult.results[i].address,
                    district_id: districtId,
                    //change
                    category_id: 13,
                    shop_photo: searchResult.paginationResult.results[i].doorPhoto?.url || "no photo",
                    like_count: searchResult.paginationResult.results[i].scoreSmile,
                    dislike_count: searchResult.paginationResult.results[i].scoreCry,
                    phone: searchResult.paginationResult.results[i].phones[0],
                    price_range_id: price_range_id
                },
            ]).into('restaurants');


        }

    }

    //burger 14
    for (let page = 1; page < 10; page++) {

        // change
        let response = await fetch(`https://www.openrice.com/api/pois?uiLang=zh&uiCity=hongkong&page=${page}&sortBy=Default&amenityId=1007`, options)
        let searchResult = (await response.json()).searchResult;
        for (let i = 4; i < 14; i++) {

            let districtName = searchResult.paginationResult.results[i].district.name
            let districtId = (await knex.select('id').from('districts').where({ name: districtName }))[0]?.id
            if (!districtId) {
                districtId = (await knex('districts').insert({ name: districtName }).returning('id'))[0].id
            }
            let price_range_id
            if (searchResult.paginationResult.results[i].priceUI == "$50以下") {
                price_range_id = 1
            } else if (searchResult.paginationResult.results[i].priceUI == "$51-100") {
                price_range_id = 2
            } else if (searchResult.paginationResult.results[i].priceUI == "$101-200") {
                price_range_id = 3
            } else if (searchResult.paginationResult.results[i].priceUI == "$201-400") {
                price_range_id = 4
            } else if (searchResult.paginationResult.results[i].priceUI == "$401-800") {
                price_range_id = 5
            } else if (searchResult.paginationResult.results[i].priceUI == "$801以上") {
                price_range_id = 6
            }

            await knex.insert([
                {
                    name: searchResult.paginationResult.results[i].name,
                    address: searchResult.paginationResult.results[i].address,
                    district_id: districtId,
                    //change
                    category_id: 14,
                    shop_photo: searchResult.paginationResult.results[i].doorPhoto?.url || "no photo",
                    like_count: searchResult.paginationResult.results[i].scoreSmile,
                    dislike_count: searchResult.paginationResult.results[i].scoreCry,
                    phone: searchResult.paginationResult.results[i].phones[0],
                    price_range_id: price_range_id
                },
            ]).into('restaurants');


        }

    }
};
