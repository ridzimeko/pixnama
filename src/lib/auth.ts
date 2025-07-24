import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/db/"; 
import * as authSchema from "@/db/auth-schema";
import * as schema from "@/db/schema"

export const auth = betterAuth({
    emailAndPassword: {
        enabled: true, 
    },
    socialProviders: {
        google: {
            enabled: true,
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }
    },
    database: drizzleAdapter(db, {
        provider: "pg", // or "mysql", "sqlite"
        schema: {
            ...schema,
            ...authSchema
        }
    }),
});
