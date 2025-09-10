"use server";

import { currentUser } from "@clerk/nextjs/server";
import { Decimal } from "@prisma/client/runtime/library";

import { db } from "@/lib/prisma";

export type TrainningSessionInput = {
    session_datetime: string;
    distance_km: number;
    duration_min: number;
    calories_burned_kcal: number;
    average_pace_km_per_min: number;
};

export type TrainningSession = {
    id: string;
    external_user_id: string;
    session_datetime: Date;
    distance_km: number;
    duration_min: number;
    calories_burned_kcal: number;
    average_pace_km_per_min: number;
};

export async function createTrainningSession(
    input: TrainningSessionInput
): Promise<TrainningSession> {
    const user = await currentUser();
    if (!user) throw new Error("Usuário não encontrado");

    const session = await db.trainning_session.create({
        data: {
            external_user_id: user.id,
            session_datetime: new Date(input.session_datetime),
            distance_km: new Decimal(input.distance_km),
            duration_min: input.duration_min,
            calories_burned_kcal: input.calories_burned_kcal,
            average_pace_km_per_min: new Decimal(input.average_pace_km_per_min),
        },
    });

    return {
        ...session,
        id: session.id.toString(),
        distance_km: Number(session.distance_km),
        average_pace_km_per_min: Number(session.average_pace_km_per_min),
    };
}

// Buscar corridas do usuário
export async function getTrainningSessions(): Promise<TrainningSession[]> {
    const user = await currentUser();
    if (!user) throw new Error("Usuário não encontrado");

    const sessions = await db.trainning_session.findMany({
        where: { external_user_id: user.id },
        orderBy: { session_datetime: "desc" },
    });

    return sessions.map((s) => ({
        ...s,
        id: s.id.toString(),
        distance_km: Number(s.distance_km),
        average_pace_km_per_min: Number(s.average_pace_km_per_min),
    }));
}
