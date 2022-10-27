import { Knex } from "knex";
import { User } from "../model/User";
import { hashPassword } from "../utils/hash";

export class UserService {
    constructor(private knex: Knex) {}

    async getUserByUsername(username: string): Promise<User> {
        let userResult = (
            await this.knex.raw(
                /*sql*/ `
            SELECT * 
            FROM users 
            WHERE username = ?
        `,
                [username]
            )
        ).first();

        let userReust2 = this.knex.select("*").from("users").where({ username, price: 20 }).first();
        console.log(userReust2.toSQL());
        await userReust2;
        return userResult;
    }

    async createUser(username: string, password: string, email: string | null): Promise<User> {
        let hashedPassword = await hashPassword(password);

        let result = await this.knex
            .insert({
                username: username,
                password: hashedPassword,
            })
            .into("users")
            .returning("*");

        return result[0];
    }

    async getDistrict(x: any, y: any): Promise<any> {
        let locationResult = await this.knex.raw(/*sql*/ `
            with 
            distinct_district as (
                select 
                distinct (district_id)as  district_id
                from restaurants r order by district_id 
            ),
            distriect_rand_resto as (
              select district_id, 
              (select id from restaurants where restaurants.district_id  = distinct_district.district_id limit 1 ) as restaurant_id  
              from distinct_district
            )
            select * from distriect_rand_resto join restaurants r on r.id = distriect_rand_resto.restaurant_id
            ORDER BY coordinates <-> point '(${x}, ${y})' LIMIT 1
        `);
        return locationResult;
    }

    async getDistrictName(district_id: number): Promise<any> {
        let districtResult = await this.knex.raw(`
            select name from districts where id = ${district_id}
        `);

        return districtResult;
    }
    async getFavouriteCatID(user_id: number): Promise<any> {
        let districtResult = await this.knex.raw(`
            select category_id from user_food_category where user_id = ${user_id}
        `);
        return districtResult;
    }

    async getFoodCat(cat_id: number): Promise<any> {
        let result = await this.knex.raw(`
            select name from food_categories where id = ${cat_id}
        `);
        return result;
    }
}
