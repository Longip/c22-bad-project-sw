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
}    