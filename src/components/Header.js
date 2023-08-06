'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import ClockIcon from '@/assets/icons/clock.svg';
import DiscordIcon from '@/assets/icons/discord.svg';
import GitHubIcon from '@/assets/icons/github.svg';
import head from '@/assets/img/head.png';

export default function Header() {
    const [count, setCount] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/count`);

                if (!result.ok) throw new Error(await result.text());

                const body = await result.json();

                setCount(body.count);
            } catch (e) {
                console.error(e);

                setCount(null);
            }
        };

        fetchData();

        const interval = setInterval(() => fetchData(), 1000 * 15);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-neutral-200 dark:bg-neutral-800">
            <div className="container py-8 md:py-12">
                <div className="flex flex-col gap-3">
                    <Link href="/">
                        <div className="flex flex-col md:flex-row items-center gap-3 md:gap-8 p-5 md:p-12 rounded-lg bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10">
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
                    <div className="flex flex-col md:flex-row items-center gap-3">
                        {
                            count !== null
                                ? <p className="hidden md:block text-neutral-700 dark:text-neutral-300">{count} unique players retrieved</p>
                                : <p className="hidden md:block text-neutral-700 dark:text-neutral-300">Loading...</p>
                        }
                        <a className="w-full md:w-fit md:ml-auto flex items-center justify-center gap-3 p-3 rounded bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10" href="https://discord.gg/QwvzbA9KGz">
                            <DiscordIcon width="22" height="22" />
                            <span>Discord</span>
                        </a>
                        <a className="w-full md:w-fit flex items-center justify-center gap-3 p-3 rounded bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10" href="https://github.com/mineatar-io">
                            <GitHubIcon width="22" height="22" />
                            <span>GitHub</span>
                        </a>
                        <a className="w-full md:w-fit flex items-center justify-center gap-3 p-3 rounded bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10" href="https://status.mineatar.io">
                            <ClockIcon width="22" height="22" />
                            <span>Status Page</span>
                        </a>
                        {
                            count !== null
                                ? <p className="block md:hidden text-neutral-700 dark:text-neutral-300">{count} unique players retrieved</p>
                                : <p className="block md:hidden text-neutral-700 dark:text-neutral-300">Loading...</p>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}