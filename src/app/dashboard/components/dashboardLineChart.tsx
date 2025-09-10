"use client"

import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"

import { TrainningSession } from "../actions/create_trainning_session"

export const description = "A line chart with dots"

const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "hsl(var(--chart-1))",
    },
} satisfies ChartConfig

type DashboardLineProps = {
    sessions: TrainningSession[]
}

export default function DashboardLineChart({ sessions }: DashboardLineProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>KM corridos por dia</CardTitle>
                <CardDescription>Janeiro - Junho 2024</CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <LineChart
                        accessibilityLayer
                        data={sessions}
                        margin={{ left: 12, right: 12 }}
                    >
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="session_datetime"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            tickFormatter={(value) =>
                                new Date(value).toLocaleDateString("pt-BR", {
                                    day: "2-digit",
                                    month: "short",
                                })
                            }
                        />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Line
                            dataKey="distance_km"
                            type="natural"
                            stroke="hsl(var(--chart-1))"
                            strokeWidth={2}
                            dot={{ fill: "hsl(var(--chart-1))" }}
                            activeDot={{ r: 6 }}
                        />
                    </LineChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}
