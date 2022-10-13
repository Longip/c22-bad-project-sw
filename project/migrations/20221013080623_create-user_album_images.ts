import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    const userAlbumImageTable = await knex.schema.hasTable("user_album_images");
    if (!userAlbumImageTable) {
        await knex.schema.createTable("user_album_images", (table) => {
            table.increments();
            table.integer("album_id").unsigned();
            table.foreign("album_id").references("user_albums.id");
            table.string("image_source")
            table.timestamps(false, true);
        });
    }
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTableIfExists("user_album_images");
}