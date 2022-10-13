import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    const userTable = await knex.schema.hasTable("users");
    if (!userTable) {
        await knex.schema.createTable("users", (table) => {
            table.increments();
            table.string("name");
            table.string("password");
            table.string("email");
            table.integer("qty_report_id")
            table.timestamps(false, true);
        });
    }

}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTableIfExists("users");
}

