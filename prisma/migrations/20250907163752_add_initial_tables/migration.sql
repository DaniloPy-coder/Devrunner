-- CreateTable
CREATE TABLE "trainning_session" (
    "id" BIGSERIAL NOT NULL,
    "external_user_id" VARCHAR(50) NOT NULL,
    "session_datetime" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "duration_min" INTEGER NOT NULL,
    "calories_burned_kcal" INTEGER NOT NULL,
    "average_pace_km_per_min" DECIMAL(4,2) NOT NULL,

    CONSTRAINT "trainning_session_pkey" PRIMARY KEY ("id")
);
