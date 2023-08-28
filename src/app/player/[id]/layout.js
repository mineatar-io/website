import HeroSearch from '@/components/HeroSearch';
import Navbar from '@/components/Navbar';

export default async function Page({ params: { id }, children }) {
    return (
        <>
            <Navbar />
            <div className="container py-12">
                <HeroSearch defaultUsername={id} />
                {children}
            </div>
        </>
    );
}