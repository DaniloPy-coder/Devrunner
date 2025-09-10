import { BarChart2, Calendar, Clock, Flame } from "lucide-react";

export default function Features() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
            <div className="container px-4 md:px-6">
                <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-5xl md:text-5xl mb-12">
                    Recursos Principais
                </h2>
                <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-start">
                    <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded">
                        <Calendar className="h-8 w-8 text-red-600" />
                        <h3 className="text-xl font-bold">Registro detalhado</h3>
                        <p className="text-sm text-gray-500 text-center">
                            Registre data, hora, distância, e duração de cada treino.
                        </p>
                    </div>

                    <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded">
                        <Clock className="h-8 w-8 text-red-600" />
                        <h3 className="text-xl font-bold">Registro detalhado</h3>
                        <p className="text-sm text-gray-500 text-center">
                            Acompanhe seu ritmo médio por quilômetro em cada corrida.
                        </p>
                    </div>

                    <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded">
                        <Flame className="h-8 w-8 text-red-600" />
                        <h3 className="text-xl font-bold">Calorias queimadas</h3>
                        <p className="text-sm text-gray-500 text-center">
                            Estime as calorias perdidas por cada sessão de treino.
                        </p>
                    </div>
                    <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded">
                        <BarChart2 className="h-8 w-8 text-red-600" />
                        <h3 className="text-xl font-bold">Análise de evolução</h3>
                        <p className="text-sm text-gray-500 text-center">
                            Visualize graficamente seu progresso ao longo do tempo.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}