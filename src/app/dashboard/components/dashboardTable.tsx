"use client";

import { useEffect, useState } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

import { getTrainningSessions } from "../actions/create_trainning_session";

type Session = {
    id: string;
    external_user_id: string;
    session_datetime: string;
    distance_km: number;
    duration_min: number;
    calories_burned_kcal: number;
    average_pace_km_per_min: number;
};

export default function RunningDashboardTable() {
    const [sessions, setSessions] = useState<Session[]>([]);

    useEffect(() => {
        async function fetchSessions() {
            const data = await getTrainningSessions();

            const sessionsFormatted: Session[] = data.map((session) => ({
                ...session,
                session_datetime: session.session_datetime.toISOString(), // converte Date para string
            }));

            setSessions(sessionsFormatted);
        }

        fetchSessions();
    }, []);

    return (
        <div className="p-4 space-y-8">
            <Card>
                <CardHeader>
                    <CardTitle className="text-xl font-semibold">Suas corridas</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Data</TableHead>
                                <TableHead>Distância (km)</TableHead>
                                <TableHead>Duração (min)</TableHead>
                                <TableHead>Calorias</TableHead>
                                <TableHead>Ritmo médio (min/km)</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {sessions.map((session) => (
                                <TableRow key={session.id.toString()}>
                                    <TableCell>
                                        {new Date(session.session_datetime).toLocaleDateString("pt-BR")}
                                    </TableCell>
                                    <TableCell>{session.distance_km.toFixed(2)}</TableCell>
                                    <TableCell>{session.duration_min}</TableCell>
                                    <TableCell>{session.calories_burned_kcal}</TableCell>
                                    <TableCell>{session.average_pace_km_per_min.toFixed(2)}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
}
