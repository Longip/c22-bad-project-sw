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
        headers: { cookie: 'DefaultRegionIds=%7B%22hk%22%3A0%7D; RegionId=0; webhash=68c4458d-eecd-4870-91f2-d0a1274b0a43; isguest=1; _gcl_au=1.1.1989161410.1664529584; __utmc=183676536; CookiesAgreed=agreed; CultureInfo=zh-HK; _gid=GA1.2.1063574153.1665971259; autha=Jzyw6LAdLLKchm3bJOvYcromg58KIMbeW_5IW9esrgUkFHyIbJUd6bBJpxqS6SIOvhf9wBhRd8okCYxDPSMKLVb1VeJjEOUp7SSoEANMGTCbpQFbsgX7k0sE7tsdlXYS5Wyu45HCB6xLW-qYkNblkhvaQbTZ-JSf6qDYrNkQinbev1jOgvJUWfIWeqjigrBWkddP9jCY33Lac3gzwhcMG79WfzNbDUty55ZCfz4osykmBo7inuAdVO8SRtr7x9FZ17ADx6E7WsdekGss2Q0HirV6ON_7NZELDsCcZrKvVntZcUN2Ki8qeTGRTrGqST1b-M-Ev4i0iftakHbTfqBoeiY6SoVvv_6v1E_fPo_OPNaBo3U9mggIyK3t8TgbVeYTfMxSpziA0FZkBZPMtqZZlZzNwltaQUCu7ihZB6gTT32sY74l-JbL8hC1Kd5BNCdDmlmP3g; authr=BAUjpwoGk7mGMIQyzQMAnaSDtzdovY65B3cCJWppKkcEptu9rLN4ztR9zuBdGsiBML5sMmFLlNde6cKnZXE07y1UYkvZBphtLtXKN3uZ6QNoG2J_5G47b1xNQvhWQSjsZPPoBSTxXd1wz69dkLL4dfL5kHBlFS_lYw9cAIYrcLQtZ9YDRQDSSPFNnhgWKHaBL29cAsR_WgjFW9sM_MYvcI3CBFZiwHOQWNFLgnxMeHX2OZCw51H3g0Vdk7WWGofCNnkRlWf_y5IrPW-_w_kBQMEeuYTXfrSMyJRtiecl5iu_m8hfsvRJD8YuyXtg0uHFK3FY846dHl8kVIUq3sxw9TfPseGVCP5696PAGrJe-sCezKc-661Hnm1e-YLMg0UlduDFLeyg1Io1_z60xfjycYM6vMlBQ0ARhMh3k4avAlcwq0kPw_q3DsWSDEfvCrR07eF31w; authe=I5MbeYB1HGZ06FjyjOarr1yyelDB3WfRhwXicEdwkWr/nhrZHX7ejEtoulx1fe62bXDb+Fg2sx9Wg9do130wc81himXgIPlGtFxvdvWUnIk=; __utma=183676536.968376170.1664529584.1665992262.1666064100.20; __utmz=183676536.1666064100.20.4.utmcsr=google|utmccn=(organic)|utmcmd=organic|utmctr=(not%20provided); __utmt_UA-652541-1=1; __utmb=183676536.5.10.1666064100; _ga_WM2DLEGHYP=GS1.1.1666064100.22.1.1666064164.0.0.0; _ga=GA1.1.968376170.1664529584' }
    };

    // SELECT split_part(trim(coordinates::text, '()'), ',', 1)::float AS lat, split_part(trim(coordinates::text, '()'), ',', 2)::float AS lng FROM restaurants;

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
                    category_id: 1,
                    shop_photo: searchResult.paginationResult.results[i].doorPhoto?.url || "no photo",
                    like_count: searchResult.paginationResult.results[i].scoreSmile,
                    dislike_count: searchResult.paginationResult.results[i].scoreCry,
                    phone: searchResult.paginationResult.results[i].phones[0],
                    price_range_id: price_range_id,
                    coordinates: `${searchResult.paginationResult.results[i].mapLatitude},${searchResult.paginationResult.results[i].mapLongitude}`
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
                    price_range_id: price_range_id,
                    coordinates: `${searchResult.paginationResult.results[i].mapLatitude},${searchResult.paginationResult.results[i].mapLongitude}`
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
                    price_range_id: price_range_id,
                    coordinates: `${searchResult.paginationResult.results[i].mapLatitude},${searchResult.paginationResult.results[i].mapLongitude}`
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
                    price_range_id: price_range_id,
                    coordinates: `${searchResult.paginationResult.results[i].mapLatitude},${searchResult.paginationResult.results[i].mapLongitude}`
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
                    price_range_id: price_range_id,
                    coordinates: `${searchResult.paginationResult.results[i].mapLatitude},${searchResult.paginationResult.results[i].mapLongitude}`
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
                    price_range_id: price_range_id,
                    coordinates: `${searchResult.paginationResult.results[i].mapLatitude},${searchResult.paginationResult.results[i].mapLongitude}`
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
                    price_range_id: price_range_id,
                    coordinates: `${searchResult.paginationResult.results[i].mapLatitude},${searchResult.paginationResult.results[i].mapLongitude}`
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
                    price_range_id: price_range_id,
                    coordinates: `${searchResult.paginationResult.results[i].mapLatitude},${searchResult.paginationResult.results[i].mapLongitude}`
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
                    price_range_id: price_range_id,
                    coordinates: `${searchResult.paginationResult.results[i].mapLatitude},${searchResult.paginationResult.results[i].mapLongitude}`
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
                    price_range_id: price_range_id,
                    coordinates: `${searchResult.paginationResult.results[i].mapLatitude},${searchResult.paginationResult.results[i].mapLongitude}`
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
                    price_range_id: price_range_id,
                    coordinates: `${searchResult.paginationResult.results[i].mapLatitude},${searchResult.paginationResult.results[i].mapLongitude}`
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
                    price_range_id: price_range_id,
                    coordinates: `${searchResult.paginationResult.results[i].mapLatitude},${searchResult.paginationResult.results[i].mapLongitude}`
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
                    price_range_id: price_range_id,
                    coordinates: `${searchResult.paginationResult.results[i].mapLatitude},${searchResult.paginationResult.results[i].mapLongitude}`
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
                    price_range_id: price_range_id,
                    coordinates: `${searchResult.paginationResult.results[i].mapLatitude},${searchResult.paginationResult.results[i].mapLongitude}`
                },
            ]).into('restaurants');


        }

    }
};
