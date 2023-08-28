import HeroSearch from '@/components/HeroSearch';

export default async function Page({ params: { id }, children }) {
    return (
        <>
            <HeroSearch defaultUsername={id} />
            {children}
        </>
    );
}