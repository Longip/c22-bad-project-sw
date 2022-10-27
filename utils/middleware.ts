import grant from "grant";
import { env } from "./env";

// Google Login
export const grantExpress = grant.express({
    defaults: {
        origin: "http://localhost:8080", // To be changed to the elastic IP if not working on AWS server
        transport: "session",
        state: true,
    },
    google: {
        key: env.GOOGLE_CLIENT_ID || "",
        secret: env.GOOGLE_CLIENT_SECRET || "",
        scope: ["profile", "email"],
        callback: "/user/login/google",
    },
});
