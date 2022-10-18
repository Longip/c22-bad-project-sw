import { Knex } from "knex";


export class RestaurantsService {
    constructor(private knex: Knex) { }

    async getRestaurantInfo(id: number): Promise<any> {
        let cardResults = (
            await this.knex.raw(/*sql*/`
            SELECT *
            FROM restaurants
            WHERE district_id  = 1
            limit 10
        `,
            ))
        return cardResults
    }
}    