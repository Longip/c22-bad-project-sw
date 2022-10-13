import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    const userAlbumTable = await knex.schema.hasTable("user_albums");
    if (!userAlbumTable) {
        await knex.schema.createTable("user_albums", (table) => {
            table.increments();
            table.integer("user_id").unsigned();
            table.foreign("user_id").references("users.id");
            table.timestamps(false, true);
        });
    }
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTableIfExists("user_albums");
}
