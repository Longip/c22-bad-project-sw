import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    const quantityTable = await knex.schema.hasTable("qty_report");
    if (!quantityTable) {
        await knex.schema.createTable("qty_report", (table) => {
            table.increments();
            table.integer("vietnamese");
            table.integer("japanese");
            table.integer("western");
            table.integer("chinese");
            table.integer("indian");
            table.integer("korean");
            table.integer("thai");
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
            table.timestamps(false, true);
        });
    }
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTableIfExists("qty_report");
}
