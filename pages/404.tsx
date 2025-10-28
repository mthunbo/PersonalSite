import Link from 'next/link';
import { Button } from '../components/Button';

export default function Custom404() {
    return (
        <div className="min-h-screen bg-[#25272B] relative p-4">
            <div
                className="absolute inset-0 bg-no-repeat bg-center opacity-70 z-0"
                style={{ backgroundImage: 'url(/404NotFound.png)', backgroundSize: 'contain' }}
            ></div>
            <div className="absolute top-8 left-0 right-0 z-10 text-center px-4">
                <h1 className="text-5xl sm:text-7xl font-heading text-gold-header mb-4">
                    Page Not Found
                </h1>
            </div>
            <div className="absolute bottom-8 left-0 right-0 z-10 text-center px-4">
                <Button variant="primary" size="lg">
                    <Link
                        className="block w-full h-full items-center justify-center px-6 py-3 text-text"
                        href="/"
                    >
                        Return to the Citadel (Home)
                    </Link>
                </Button>
            </div>
        </div>
    );
}
