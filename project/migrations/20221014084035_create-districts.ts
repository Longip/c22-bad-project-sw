import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    const districtTable = await knex.schema.hasTable("districts");
    if (!districtTable) {
        await knex.schema.createTable("districts", (table) => {
            table.increments();
            table.string("name");
            table.timestamps(false, true);
        });
    }
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTableIfExists("districts");
}
