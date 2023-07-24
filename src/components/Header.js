import Image from 'next/image';
import Link from 'next/link';
import head from '@/assets/img/head.png';

export default function Header() {
    return (
        <div className="bg-neutral-200 dark:bg-neutral-800">
            <div className="container mx-auto max-w-4xl md:py-12 p-3">
                <Link href="/" className="p-12 rounded-lg flex flex-col md:flex-row md:items-center gap-3 md:gap-8 hover:bg-neutral-300 dark:hover:bg-neutral-700 transition-colors">
                    <Image src={head} alt="Head" width="80" />
                    <hgroup>
                        <h1 className="title">
                            <span className="font-black">Mine</span>
                            <span>atar</span>
                        </h1>
                        <p className="subtitle">A fast and efficient Minecraft avatar service</p>
                    </hgroup>
                </Link>
            </div>
        </div>
    );
}