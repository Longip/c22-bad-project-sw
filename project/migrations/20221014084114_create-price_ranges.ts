import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    const priceRangeTable = await knex.schema.hasTable("price_ranges");
    if (!priceRangeTable) {
        await knex.schema.createTable("price_ranges", (table) => {
            table.increments();
            table.string("range");
            table.timestamps(false, true);
        });
    }
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTableIfExists("price_ranges");
}
