import Image from 'next/image';
import Link from 'next/link';
import logoImg from '@/assets/logo.png';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="mt-auto border-t border-base-300 bg-base-100 px-5">
            <div className="container mx-auto px-1 py-6">
                <div className="flex flex-col items-center gap-3 text-center sm:flex-row sm:justify-between sm:text-left">

                    <Link href="/" className="flex items-center gap-2">
                        <Image
                            src={logoImg}
                            width={24}
                            height={24}
                            alt="Fitlog"
                        />

                        <span className="text-sm font-bold tracking-wide">
                            FITLOG
                        </span>
                    </Link>

                    <p className="text-xs opacity-60">
                        © {year} FitLog — Workout Library. Train hard, log honest.
                    </p>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
