import { pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { user } from "./auth-schema";
import { createId } from '@paralleldrive/cuid2';

export const twibbons = pgTable("twibbons", {
  id: text("id").primaryKey().$defaultFn(() => createId()),
  title: text("title").notNull(),
  description: text("description").notNull(),
  link: text("link").notNull(),
  caption: text("caption").notNull(),
  image: text("image").notNull(),
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  createdAt: timestamp("created_at").defaultNow(),
});

export const twibbonRelations = relations(twibbons, ({ one }) => ({
  user: one(user, {
    fields: [twibbons.userId],
    references: [user.id],
  }),
}));
