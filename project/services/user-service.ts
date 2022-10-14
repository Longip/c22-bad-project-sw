import { Knex } from "knex";


export class UserService {
    constructor(private knex: Knex) { }

    async getUserByUsername(username: string): Promise<any> {
        (
            await this.knex.raw(/*sql*/`
            SELECT * 
            FROM users 
            WHERE username = ?
        `,
                [username])
        ).rows[0]
    }

    async createUser(username: string, password: string): Promise<any> {
        await this.knex.raw(/*sql*/`
            INSERT INTO users 
            (username, password, created_at) 
            VALUES (?,?, NOW())
        `,
            [username, password])
    }


}