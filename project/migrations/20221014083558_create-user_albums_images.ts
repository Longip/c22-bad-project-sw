import { Knex } from "knex";



export async function up(knex: Knex): Promise<void> {
    try {
        const userTable = await knex.schema.hasTable("user_album_images");
        if (!userTable) {
            await knex.schema.createTable("user_album_images", (table) => {
                table.increments();
                table.string("image_source");
                table.integer("user_id").unsigned().notNullable();
                table.foreign("user_id").references("users.id");
                table.timestamps(false, true);
            });
        }
    } catch (err) {
        console.log(err);
    }


}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTableIfExists("user_album_images");
}
