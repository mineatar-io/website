import Image from 'next/image';
import Link from 'next/link';
import head from '@/assets/img/head.png';

export default function Header() {
    return (
        <div className="bg-neutral-200 dark:bg-neutral-800">
            <div className="container py-8 md:py-12">
                <Link href="/">
                    <div className="flex flex-col md:flex-row items-center gap-3 md:gap-8 p-5 md:p-12 rounded-lg hover:bg-neutral-300 dark:hover:bg-neutral-700 transition-colors">
                        <Image src={head} alt="Head" width="80" />
                        <hgroup className="text-center md:text-left">
                            <h1 className="title">
                                <span className="font-black">Mine</span>
                                <span>atar</span>
                            </h1>
                            <p className="subtitle">A fast and efficient Minecraft avatar service</p>
                        </hgroup>
                    </div>
                </Link>
            </div>
        </div>
    );
}