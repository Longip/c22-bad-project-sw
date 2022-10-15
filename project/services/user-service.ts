import { Knex } from "knex";
import { hashPassword } from "../utils/hash"



export class UserService {
    constructor(private knex: Knex) { }

    async getUserByUsername(username: string): Promise<any> {
        let userResult = (
            await this.knex.raw(/*sql*/`
            SELECT * 
            FROM users 
            WHERE username = ?
        `,
                [username])
        )
        return userResult
    }

    async createUser(username: string, password: string): Promise<any> {

        let hashedPassword = await hashPassword(password)

        let userResult = await this.knex.raw(/*sql*/`
            INSERT INTO users 
            (username, password, created_at) 
            VALUES (?,?, NOW())
        `,
            [username, hashedPassword])

        return userResult
    }


}