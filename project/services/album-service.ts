import { Knex } from "knex";


export class AlbumService {
    constructor(private knex: Knex) { }

    async uploadToAlbum(image_source: string, user_id: number): Promise<any> {
        return (await this.knex.insert({ image_source, user_id}).into("user_album_images"))
    }

    // async getMe()
}    