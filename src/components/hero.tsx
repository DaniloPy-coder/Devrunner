import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import Link from "next/link";

import { Button } from "./ui/button";

export default function Hero() {
    return (
        <div className="relative bg-red-50">
            <div className="relative mx-auto max-w-3xl px-6 py-24 text-center lg:py-32">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                    Eleve seu desempenho na corrida
                </h1>

                <p className="mt-6 text-lg leading-relaxed text-gray-600 sm:text-xl">
                    O <span className="font-semibold text-primary">Dev Runner</span> é a plataforma perfeita para você que gosta de correr.
                    Registre suas corridas, acompanhe seu progresso e alcance seus objetivos.
                </p>

                <div className="mt-10 flex items-center justify-center">
                    <SignedOut>
                        <SignInButton>
                            <Button className="rounded-xl bg-primary px-6 py-3 text-base font-semibold text-white shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl">
                                Crie a sua conta
                            </Button>
                        </SignInButton>
                    </SignedOut>
                    <SignedIn>
                        <Link href="/dashboard">
                            <Button className="rounded-xl bg-primary px-6 py-3 text-base font-semibold text-white shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl">
                                Dashboard
                            </Button>                        </Link>
                    </SignedIn>
                </div>
            </div>
        </div >
    );
}
