CREATE TABLE "Artists" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(255) NOT NULL,
    "bio" TEXT,
    "photoUrl" VARCHAR(255)
);

CREATE TABLE "Songs" (
    "id" SERIAL PRIMARY KEY,
    "title" VARCHAR(255) NOT NULL,
    "artistId" INTEGER REFERENCES "Artists"("id"),
    "releaseYear" INTEGER,
    "duration" INTEGER,
    "coverUrl" VARCHAR(255)
);