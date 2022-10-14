import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    const quantityTable = await knex.schema.hasTable("qty_report");
    if (!quantityTable) {
        await knex.schema.createTable("qty_report", (table) => {
            table.increments();
            table.integer("japanese");
            table.integer("dimsum");
            table.integer("curry");
            table.integer("hot_pot");
            table.integer("dessert");
            table.integer("bakery");
            table.integer("pizza");
            table.integer("steak");
            table.integer("bbq");
            table.integer("seafood");
            table.integer("noodles");
            table.integer("beverage");
            table.integer("fastfood");
            table.integer("burger");
            table.timestamps(false, true);
        });
    }
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTableIfExists("qty_report");
}