import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("food_categories").del();

    // Inserts seed entries
    const [{ id }]: Array<{ id: number }> = await knex.insert([
        { name: "vietnamese" },
        { name: "japanese" },
        { name: "western" },
        { name: "chinese" },
        { name: "indian" },
        { name: "korean" },
        { name: "thai" },
        { name: "hot_pot" },
        { name: "dessert" },
        { name: "bakery" },
        { name: "pizza" },
        { name: "steak" },
        { name: "bbq" },
        { name: "seafood" },
        { name: "noodles" },
        { name: "beverage" },
        { name: "fastfood" },
    ]).into('food_categories').returning('id');


    return await knex.insert([
        {
            name: ,
            address: ,
            district_id: ,
            category_id: ,
            shop_photo: ,
            like_count: ,
            dislike_count: ,
            upper_price: ,
            lower_price: 
    },
    ]).into('restaurants');
};
