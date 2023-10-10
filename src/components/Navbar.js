'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import DiscordIcon from '@/assets/icons/discord.svg';
import GitHub from '@/assets/icons/github.svg';
import MenuIcon from '@/assets/icons/menu.svg';
import CloseIcon from '@/assets/icons/x.svg';
import head from '@/assets/img/head.png';

export default function Navbar() {
    const path = usePathname();
    const [showBackground, setShowBackground] = useState(false);
    const [isExpanded, setExpanded] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setShowBackground(window.scrollY > 0);
        };

        onScroll();

        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        if (isExpanded) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
    }, [isExpanded]);

    return (
        <nav className={`sticky top-0 py-5 ${showBackground || isExpanded ? 'bg-black/75 backdrop-blur' : ''} transition-colors`}>
            <div className={`relative container mx-auto flex ${isExpanded ? 'flex-wrap h-screen' : ''} items-center justify-between`}>
                <Link href="/">
                    <div className="flex items-center gap-3 hover:bg-white/5 px-4 py-3 rounded-full transition-colors duration-100">
                        <Image src={head} alt="Mineatar icon" width="24" height="24" priority />
                        <span>
                            <span className="font-bold">Mine</span>
                            <span>atar</span>
                        </span>
                    </div>
                </Link>
                <button type="button" className="md:hidden p-2" onClick={() => setExpanded(!isExpanded)}>
                    {
                        isExpanded
                            ? <CloseIcon width="24" height="24" />
                            : <MenuIcon width="24" height="24" />
                    }
                </button>
                <ul className={`${isExpanded ? 'flex w-screen h-screen items-start justify-center gap-3' : 'hidden md:flex gap-2'} list-none flex-col md:flex-row items-center`}>
                    <li className="md:ml-auto">
                        <Link href="/">
                            <span className={`block ${path === '/' ? 'bg-neutral-800 text-white' : 'hover:bg-neutral-800 text-neutral-400 hover:text-white'} transition-colors duration-100 px-4 py-3 rounded-full text-sm`}>Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/docs" >
                            <span className={`block ${path === '/docs' ? 'bg-neutral-800 text-white' : 'hover:bg-neutral-800 text-neutral-400 hover:text-white'} transition-colors duration-100 px-4 py-3 rounded-full text-sm`}>
                                <span>API</span>
                                <span className="md:hidden"> Documentation</span>
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/about">
                            <span className={`block ${path === '/about' ? 'bg-neutral-800 text-white' : 'hover:bg-neutral-800 text-neutral-400 hover:text-white'} transition-colors duration-100 px-4 py-3 rounded-full text-sm`}>About</span>
                        </Link>
                    </li>
                    <li>
                        <a href="https://discord.gg/QwvzbA9KGz" className="flex items-center gap-5 hover:bg-neutral-800 p-3 rounded-full text-sm transition-colors duration-100">
                            <DiscordIcon width="20" height="20" />
                            <span className="font-bold md:sr-only">Discord</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/mineatar-io" className="flex items-center gap-5 hover:bg-neutral-800 p-3 rounded-full text-sm transition-colors duration-100">
                            <GitHub width="20" height="20" />
                            <span className="font-bold md:sr-only">GitHub</span>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}