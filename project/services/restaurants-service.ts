import { Knex } from "knex";


export class RestaurantsService {
    constructor(private knex: Knex) { }

    async getRestaurantInfo(category_id: number): Promise<any> {
        let cardResults = (
            await this.knex.raw(/*sql*/`
            SELECT *
            FROM restaurants
            WHERE category_id  = ${category_id}
        `,
            ))
        return cardResults
    }
}    