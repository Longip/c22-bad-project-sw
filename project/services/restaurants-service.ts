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

    async getOneLocationForEachDistrict(): Promise<any> {
        let locationResults = (
            await this.knex.raw(/*sql*/`
            with 
            distinct_district as (
	        select 
	        distinct (district_id)as  district_id
	        from restaurants r order by district_id )
            SELECT coordinates, id, address FROM distinct_district dd join restaurants on dd.district_id = restaurants.id
        `,
            ))
        return locationResults
    }
}    