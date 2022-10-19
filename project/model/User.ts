export class User {
    id: number;
    username: string;
    password?: string;
    email: string | null;
    created_at: Date;
    updated_at: Date
}