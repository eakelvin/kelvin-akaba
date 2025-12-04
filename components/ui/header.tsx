import { Drama } from "lucide-react";
import Link from "next/link";

interface HeaderProps {
    activeSection: string;
}

export function Header({ activeSection }: HeaderProps) {
    return (
        <header className="lg:hidden sticky top-0 z-50 bg-slate-900/75 backdrop-blur-sm border-b border-slate-800">
            <div className="max-w-7xl mx-auto px-6 py-4">
                <nav className="flex items-center justify-between">
                    <div>
                        <Link href="/" className="group">
                            <Drama
                                size={50}
                                color="white"
                                className="transition-all duration-300 group-hover:scale-110 group-hover:text-cyan-300 group-hover:drop-shadow-[0_0_20px_rgba(34,211,238,0.3)]"
                            />
                        </Link>
                    </div>
                    <ul className="flex gap-6 text-xs font-bold uppercase tracking-wider">
                        {['about', 'experience', 'projects'].map((section) => {
                            const isProjects = section === "projects";
                            const href = isProjects ? "/projects" : `#${section}`;
                            return (
                                <li key={section}>
                                    <a
                                        href={href}
                                        className={`transition-colors ${activeSection === section
                                            ? 'text-slate-200'
                                            : 'text-slate-500 hover:text-slate-200'
                                            }`}
                                    >
                                        {section}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </div>
        </header>
    );
}
