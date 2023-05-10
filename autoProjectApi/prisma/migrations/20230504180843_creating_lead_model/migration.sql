-- CreateTable
CREATE TABLE "leads" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "phone" INTEGER,
    "email" TEXT NOT NULL,
    "plan" TEXT NOT NULL
);
