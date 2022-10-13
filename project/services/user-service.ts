import { client } from "../main";

export class UserService {
    constructor() { }

    async getUserByUsername(username: string): Promise<any> {
        (
            await client.query(/*sql*/`
            SELECT * 
            FROM users 
            WHERE username = $1
        `,
                [username])
        ).rows[0]
    }

    async createUser(username: string, password: string): Promise<any> {
        await client.query(/*sql*/`
            INSERT INTO users 
            (username, password, created_at) 
            VALUES ($1, $2, NOW())
        `,
            [username, password])
    }


}