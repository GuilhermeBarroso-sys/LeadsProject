-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_leads" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "phone" TEXT,
    "email" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "plan" TEXT NOT NULL
);
INSERT INTO "new_leads" ("created_at", "email", "id", "name", "phone", "plan") SELECT "created_at", "email", "id", "name", "phone", "plan" FROM "leads";
DROP TABLE "leads";
ALTER TABLE "new_leads" RENAME TO "leads";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
