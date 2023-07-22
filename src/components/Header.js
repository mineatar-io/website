import Image from 'next/image';
import Link from 'next/link';
import head from '@/assets/img/head.png';

export default function Header() {
    return (
        <div className="bg-neutral-200">
            <div className="container mx-auto max-w-4xl pt-10 md:pt-20 md:pb-12 p-3">
                <Link href="/" className="p-12 rounded-lg flex flex-col md:flex-row md:items-center gap-3 md:gap-8 hover:bg-neutral-300 transition-colors">
                    <Image src={head} alt="Head" width="80" />
                    <hgroup>
                        <h1 className="text-4xl md:text-6xl text-black">
                            <span className="font-black">Mine</span>
                            <span>atar</span>
                        </h1>
                        <p className="text-lg md:text-2xl mt-1">A fast and efficient Minecraft avatar service</p>
                    </hgroup>
                </Link>
            </div>
        </div>
    );
}