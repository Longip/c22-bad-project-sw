import { Knex } from "knex";


export class RestaurantService {
    constructor(private knex: Knex) { }

    async getRestaurantInfoByCategory(category_id: number): Promise<any> {
        let cardResults = (
            await this.knex.raw(/*sql*/`
            SELECT *
            FROM restaurants
            WHERE category_id  = ${category_id}
        `,
            ))
        return cardResults
    }

    async getRestaurantInfoByLocation(district_id: number): Promise<any> {
        let cardResults = (
            await this.knex.raw(/*sql*/`
            SELECT *
            FROM restaurants
            WHERE district_id  = ${district_id}
        `,
            ))
        return cardResults
    }

    async getTheNearestDistrict(x: any, y: any): Promise<any> {
        let locationResult = (
            await this.knex.raw(/*sql*/`
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
        `,
            ))
        return locationResult
    }

    async getUserCategory(user_id: any): Promise<any> {
        let result = (
            await this.knex.raw(`
            select * from user_food_category where user_id = ${user_id};
        `
            ))
        return result
    }
}    