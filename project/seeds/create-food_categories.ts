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
        headers: { cookie: 'DefaultRegionIds=%7B%22hk%22%3A0%7D; RegionId=0; webhash=68c4458d-eecd-4870-91f2-d0a1274b0a43; isguest=1; _gcl_au=1.1.1989161410.1664529584; __utmc=183676536; CookiesAgreed=agreed; CultureInfo=zh-HK; _gid=GA1.2.1063574153.1665971259; __utmz=183676536.1665976347.17.3.utmcsr=google|utmccn=(organic)|utmcmd=organic|utmctr=(not%20provided); autha=QDC17fX9Qyf2NNcJy-AFbh8eVRhmudhhybq33ntIv1g6TtRBv9BRV8svHrQXTk72zXk96a__oOsylbBrnMcJsyplU89KwGMV4RpZKv_102e3SnyYf56gY7DDubPHthZgpTEe8qmJihv4PwcQuw50ACckWS72YAwq_hPmq_Gcp7L7JV-UEo7cCO8QAKrwOclDnaqieIsVJ7G3nSwgLx8LKuBo4Mv_zCkWitU7WM-kQHSfX2AR6gX7dEJCC0xg1yOol0B9Q3YX1wzvfqPuS4Cwk91gWMIvTYsLURZJwzbpi0gHhyHRR0IVGodL-9k-3rk5azqhqcaTP78GqI8WkGjrAAGqS2D9c1a47YSoe1teTs-9OtwayldcdMye3NZG6nCf399uDnlkKlNeo59HxwBBTlk_1e8d-QV4OWOvgX3fe063qtmEV0wnnGZhrIVZoCMpaxduYg; authr=vseHpi9pgumhlja8vKxkG2AwLtO8LeziHp0speVgRDTGQmL72nE5SOHetixiX9lhdzNUfNPSXKNmU0qtm2XnWHI0PKo_x_q-BrHyqvMlZf2pAZCKDghFh8VX2TXXOE73u6ZKTvolpsV2W4pm0HQgXa5JPhDLF3m8F5iqWramAV5KDsnDzdzVcee5BUJDCrKrw6QCZowXjvlSBjK5j6uzIOFpBWtZ5hKcqEpQwiqdndqgY0uqOYsSLivMOWHqUFHgFhg9xgD4kTH03RQV8rde0BhYEFm4Gc8DsKmOGoODalvlalrwtNy0U3GRZptFYvmt8sXIl_MrrbFATU-pfDC67RR0LD7VV8p7h38ju1NeIxUZZiT8g7Ud4uMwSOB52-q--6rLwCAEMtxRswGH0znyqkDBGU6ZlQieAkGsBPWGVhURxdMmDjbn2KFLrpvLht5E8ihtKA; authe=I5MbeYB1HGZ06FjyjOarr1yyelDB3WfRhwXicEdwkWr/nhrZHX7ejEtoulx1fe624g4y0E5EnKTrS3gdcYhzUCFnG4zZ3OidBblK3Pu1b7w=; __utma=183676536.968376170.1664529584.1665971259.1665971259.17; __utmt_UA-652541-1=1; __utmb=183676536.15.9.1665976667000; _ga_WM2DLEGHYP=GS1.1.1665976347.19.1.1665977647.0.0.0; _ga=GA1.1.968376170.1664529584' }
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
                    category_id: 1,
                    shop_photo: searchResult.paginationResult.results[i].doorPhoto?.url || "no photo",
                    like_count: searchResult.paginationResult.results[i].scoreSmile,
                    dislike_count: searchResult.paginationResult.results[i].scoreCry,
                    phone: searchResult.paginationResult.results[i].phones[0],
                    price_range_id: price_range_id,
                    latitude: searchResult.paginationResult.results[i].mapLatitude,
                    longitude: searchResult.paginationResult.results[i].mapLongitude
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
                    latitude: searchResult.paginationResult.results[i].mapLatitude,
                    longitude: searchResult.paginationResult.results[i].mapLongitude
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
                    latitude: searchResult.paginationResult.results[i].mapLatitude,
                    longitude: searchResult.paginationResult.results[i].mapLongitude
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
                    latitude: searchResult.paginationResult.results[i].mapLatitude,
                    longitude: searchResult.paginationResult.results[i].mapLongitude
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
                    latitude: searchResult.paginationResult.results[i].mapLatitude,
                    longitude: searchResult.paginationResult.results[i].mapLongitude
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
                    latitude: searchResult.paginationResult.results[i].mapLatitude,
                    longitude: searchResult.paginationResult.results[i].mapLongitude
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
                    latitude: searchResult.paginationResult.results[i].mapLatitude,
                    longitude: searchResult.paginationResult.results[i].mapLongitude
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
                    latitude: searchResult.paginationResult.results[i].mapLatitude,
                    longitude: searchResult.paginationResult.results[i].mapLongitude
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
                    latitude: searchResult.paginationResult.results[i].mapLatitude,
                    longitude: searchResult.paginationResult.results[i].mapLongitude
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
                    latitude: searchResult.paginationResult.results[i].mapLatitude,
                    longitude: searchResult.paginationResult.results[i].mapLongitude
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
                    latitude: searchResult.paginationResult.results[i].mapLatitude,
                    longitude: searchResult.paginationResult.results[i].mapLongitude
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
                    latitude: searchResult.paginationResult.results[i].mapLatitude,
                    longitude: searchResult.paginationResult.results[i].mapLongitude
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
                    latitude: searchResult.paginationResult.results[i].mapLatitude,
                    longitude: searchResult.paginationResult.results[i].mapLongitude
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
                    latitude: searchResult.paginationResult.results[i].mapLatitude,
                    longitude: searchResult.paginationResult.results[i].mapLongitude
                },
            ]).into('restaurants');


        }

    }
};
