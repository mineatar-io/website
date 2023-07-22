import Link from 'next/link';
import CornerUpLeftIcon from '@/assets/icons/corner-up-left.svg';
import Search from '@/components/Search';

export default async function Page({ params: { id }, children }) {
    return (
        <div className="container mx-auto max-w-4xl py-8 px-4">
            <Link href="/" className="block w-fit">
                <p className="font-bold text-xl link flex flex-row gap-3 items-center mb-5 p-1">
                    <CornerUpLeftIcon width="24" heigh="24" />
                    <span>Back to Home</span>
                </p>
            </Link>
            <Search username={id} />
            {children}
        </div>
    );
}