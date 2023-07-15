import RedHeartIcon from '@/assets/icons/heart-red.svg';

export default function Footer() {
    return (
        <footer className="bg-neutral-200">
            <div className="container mx-auto max-w-4xl pt-2 pb-6 px-8">
                <div className="flex flex-col md:flex-row gap-3 md:gap-0 justify-between items-center">
                    <p className="flex flex-row items-center gap-2">
                        <span>Made with</span>
                        <RedHeartIcon width="18" height="18" />
                        <span>by</span>
                        <a href="https://passthemayo.dev" className="font-bold link">PassTheMayo</a>
                    </p>
                    <ul className="flex flex-row items-center gap-3 list-none">
                        <li>
                            <a href="https://discord.gg/Tf4xwK3Ke7" className="link p-1">Discord</a>
                        </li>
                        <li>
                            <a href="https://github.com/mineatar-io" className="link p-1">GitHub</a>
                        </li>
                        <li>
                            <a href="https://status.mineatar.io" className="link p-1">Status Page</a>
                        </li>
                        <li>
                            <a className="block ml-1 rounded bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 font-mono text-sm" href={`https://github.com/mineatar-io/website/commit/${process.env.NEXT_PUBLIC_COMMIT_ID}`}>MA-{process.env.NEXT_PUBLIC_COMMIT_ID.slice(0, 7)}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}