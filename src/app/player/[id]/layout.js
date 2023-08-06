import Link from 'next/link';
import CornerUpLeftIcon from '@/assets/icons/corner-up-left.svg';
import Header from '@/components/Header';
import Search from '@/components/Search';

export default async function Page({ params: { id }, children }) {
    return (
        <>
            <Header />
            <div className="container py-12">
                <Link href="/" className="block w-fit">
                    <p className="font-bold text-xl link flex flex-row gap-3 items-center mb-5 p-1">
                        <CornerUpLeftIcon width="24" heigh="24" />
                        <span>Back to Home</span>
                    </p>
                </Link>
                <Search defaultUsername={id} />
                {children}
            </div>
        </>
    );
}