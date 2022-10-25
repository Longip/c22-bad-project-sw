import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    try {
        const userTable = await knex.schema.hasTable("users");
        if (!userTable) {
            await knex.schema.createTable("users", (table) => {
                table.increments();
                table.string("username");
                table.string("password");
                table.string("email");
                table.timestamps(false, true);
            });
        }
    } catch (err) {
        console.log(err);
    }


}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTableIfExists("users");
}


