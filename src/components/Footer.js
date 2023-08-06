import RedHeartIcon from '@/assets/icons/heart-red.svg';

export default function Footer() {
    return (
        <footer className="bg-neutral-200 dark:bg-neutral-800">
            <div className="container mx-auto max-w-4xl py-6 px-8">
                <div className="flex flex-col md:flex-row gap-3 md:gap-0 justify-between items-center">
                    <p className="flex flex-row items-center gap-2">
                        <span>Made with</span>
                        <RedHeartIcon width="18" height="18" />
                        <span>by</span>
                        <a href="https://passthemayo.dev" className="font-bold link">PassTheMayo</a>
                    </p>
                    <a className="block ml-1 rounded bg-blue-600 hover:bg-blue-700 text-white px-2 py-1 font-mono text-sm" href={`https://github.com/mineatar-io/website/commit/${process.env.NEXT_PUBLIC_COMMIT_ID}`}>MA-{process.env.NEXT_PUBLIC_COMMIT_ID.slice(0, 7)}</a>
                </div>
            </div>
        </footer>
    );
}