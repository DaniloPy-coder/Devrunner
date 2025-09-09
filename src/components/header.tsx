import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";

import { Button } from "./ui/button";

const Header = () => {
    return (
        <header className="px-4 lg:px-6 h-14 flex items-center">
            <Link href="#" className="flex items-center justify-center">
                <span className="ml-2 text-2xl font-bold text-gray-900">
                    Dev Runner
                </span>
            </Link>
            <nav className="ml-auto flex gap-4 sm:gap-6">
                <SignedIn>
                    <UserButton showName={true} />
                </SignedIn>
                <SignedOut>
                    <SignInButton>
                        <Button>
                            Entrar
                        </Button>
                    </SignInButton>
                </SignedOut>
            </nav>
        </header>
    );
}

export default Header;