"use client";

import { Activity, Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { calculatePace } from "@/helpers/calculate_pace";

import { createTrainningSession } from "../actions/create_trainning_session";

type FormDataType = {
    session_datetime: string;
    distance_km: string;
    duration_min: string;
    calories_burned_kcal: string;
};

export default function RunningDashboardForm() {
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState<FormDataType>({
        session_datetime: "",
        distance_km: "",
        duration_min: "",
        calories_burned_kcal: "",
    });

    const router = useRouter();

    const distance = parseFloat(form.distance_km) || 0;
    const duration = parseFloat(form.duration_min) || 0;
    const pace = calculatePace(duration, distance);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        try {
            await createTrainningSession({
                session_datetime: form.session_datetime,
                distance_km: distance,
                duration_min: duration,
                calories_burned_kcal: parseFloat(form.calories_burned_kcal),
                average_pace_km_per_min: pace,
            });
            setForm({ session_datetime: "", distance_km: "", duration_min: "", calories_burned_kcal: "" });
            toast.success("Corrida adicionada com sucesso!");
            router.refresh();
        } catch (err) {
            console.error(err);
            toast.error("Erro ao adicionar corrida");
        } finally {
            setLoading(false);
        }
    };

    const fields: { label: string; name: keyof FormDataType; type: string; step?: string; placeholder?: string }[] = [
        { label: "Data e hora", name: "session_datetime", type: "datetime-local" },
        { label: "Distância (km)", name: "distance_km", type: "number", step: "0.01", placeholder: "Ex: 5.2" },
        { label: "Duração (min)", name: "duration_min", type: "number", placeholder: "Ex: 30" },
        { label: "Calorias (kcal)", name: "calories_burned_kcal", type: "number", placeholder: "Ex: 250" },
    ];

    return (
        <div className="p-4 space-y-8">
            <Card>
                <CardHeader>
                    <CardTitle className="text-2xl font-bold flex items-center">
                        <Activity className="mr-2 h-6 w-6" /> Dashboard de Corridas
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {fields.map(f => (
                                <div className="space-y-2" key={f.name}>
                                    <Label htmlFor={f.name}>{f.label}</Label>
                                    <Input
                                        id={f.name}
                                        name={f.name}
                                        type={f.type}
                                        step={f.step}
                                        placeholder={f.placeholder}
                                        required
                                        value={form[f.name]}
                                        onChange={handleChange}
                                    />
                                </div>
                            ))}
                            <div className="space-y-2">
                                <Label htmlFor="pace">Ritmo médio (min/km)</Label>
                                <Input id="pace" name="pace" type="number" value={pace} readOnly />
                            </div>
                        </div>
                        <Button type="submit" disabled={loading} className="w-full md:w-auto">
                            <Plus className="mr-2 h-4 w-4" /> {loading ? "Salvando..." : "Adicionar Corrida"}
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}