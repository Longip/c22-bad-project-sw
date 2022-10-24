import { Knex } from "knex";


export class AlbumService {
    constructor(private knex: Knex) { }

    async uploadToAlbum(image_source: string, user_id: number): Promise<any> {
        return (await this.knex.insert({ image_source, user_id}).into("user_album_images"))
    }

    async getAlbum(user_id: number): Promise<any> {

        const results = await this.knex.select("*").from("user_album_images").where("user_id", "=", user_id);

        
        return results;
    }

    async deletePhoto(image_source:string){   
        await this.knex.raw('delete from user_album_images where image_source = ?', [image_source])
    }

    async updateCategory(user_id: number, category_id: number): Promise<any> {

        await this.knex.raw(`
        DELETE from user_food_category where user_id = ${user_id}
        `)

        await this.knex.raw(`
            INSERT INTO user_food_category 
            (user_id, category_id) 
            VALUES (?,?)
        `,
            [user_id, category_id])
    }
}    