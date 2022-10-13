import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    const foodCategoriesTable = await knex.schema.hasTable("food_categories");
    if (!foodCategoriesTable) {
        await knex.schema.createTable("food_categories", (table) => {
            table.increments();
            table.string("name");
            table.timestamps(false, true);
        });
    }
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTableIfExists("food_categories");
}

