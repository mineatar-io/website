import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { Inter, Fira_Mono } from 'next/font/google';
import WaveImage from '../assets/img/wave.svg';
import RedHeartIcon from '../assets/icons/heart-red.svg';
import head from '../assets/img/head.png';
import '../styles/global.sass';

const interFont = Inter({
	variable: '--font-inter',
	display: 'swap',
	subsets: ['latin'],
	fallback: ['Arial', 'sans-serif']
});

const firaMonoFont = Fira_Mono({
	variable: '--font-fira-mono',
	weight: ['400', '700'],
	display: 'swap',
	subsets: ['latin'],
	fallback: ['Courier New', 'monospace']
});

export const metadata = {
	title: {
		default: 'Mineatar - A fast and efficient Minecraft avatar service',
		template: '%s - Mineatar'
	},
	description: 'An incredibly fast and efficient service for rendering the skin of any Minecraft player by UUID.',
	metadataBase: new URL('https://mineatar.io'),
	openGraph: {
		title: 'Mineatar - A fast and efficient Minecraft avatar service',
		description: 'An incredibly fast and efficient service for rendering the skin of any Minecraft player by UUID.',
		url: '/',
		siteName: 'Mineatar',
		images: [
			{
				url: '/img/icon.png',
				width: 591,
				height: 591
			}
		],
		locale: 'en-US',
		type: 'website'
	},
	robots: {
		index: true,
		follow: true
	},
	icons: {
		icon: [
			{ url: '/img/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
			{ url: '/img/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
			{ url: '/img/android-chrome-36x36.png', sizes: '36x36', type: 'image/png' },
			{ url: '/img/android-chrome-48x48.png', sizes: '48x48', type: 'image/png' },
			{ url: '/img/android-chrome-72x72.png', sizes: '72x72', type: 'image/png' },
			{ url: '/img/android-chrome-96x96.png', sizes: '96x96', type: 'image/png' },
			{ url: '/img/android-chrome-144x144.png', sizes: '144x144', type: 'image/png' },
			{ url: '/img/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
			{ url: '/img/favicon-194x194.png', sizes: '194x194', type: 'image/png' },
			{ url: '/img/android-chrome-256x256.png', sizes: '256x256', type: 'image/png' },
			{ url: '/img/android-chrome-384x384.png', sizes: '384x384', type: 'image/png' },
			{ url: '/img/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
		],
		apple: [
			{ url: '/img/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
			{ url: '/img/apple-touch-icon-57x57.png', sizes: '57x57', type: 'image/png' },
			{ url: '/img/apple-touch-icon-60x60.png', sizes: '60x60', type: 'image/png' },
			{ url: '/img/apple-touch-icon-72x72.png', sizes: '72x72', type: 'image/png' },
			{ url: '/img/apple-touch-icon-76x76.png', sizes: '76x76', type: 'image/png' },
			{ url: '/img/apple-touch-icon-114x114.png', sizes: '114x114', type: 'image/png' },
			{ url: '/img/apple-touch-icon-120x120.png', sizes: '120x120', type: 'image/png' },
			{ url: '/img/apple-touch-icon-144x144.png', sizes: '144x144', type: 'image/png' },
			{ url: '/img/apple-touch-icon-152x152.png', sizes: '152x152', type: 'image/png' },
			{ url: '/img/apple-touch-icon-180x180.png', sizes: '180x180', type: 'image/png' },
		],
		other: [
			{ rel: 'apple-touch-icon-precomposed', url: '/img/apple-touch-icon-57x57-precomposed.png', sizes: '57x57' },
			{ rel: 'apple-touch-icon-precomposed', url: '/img/apple-touch-icon-60x60-precomposed.png', sizes: '60x60' },
			{ rel: 'apple-touch-icon-precomposed', url: '/img/apple-touch-icon-72x72-precomposed.png', sizes: '72x72' },
			{ rel: 'apple-touch-icon-precomposed', url: '/img/apple-touch-icon-76x76-precomposed.png', sizes: '76x76' },
			{ rel: 'apple-touch-icon-precomposed', url: '/img/apple-touch-icon-114x114-precomposed.png', sizes: '114x114' },
			{ rel: 'apple-touch-icon-precomposed', url: '/img/apple-touch-icon-120x120-precomposed.png', sizes: '120x120' },
			{ rel: 'apple-touch-icon-precomposed', url: '/img/apple-touch-icon-144x144-precomposed.png', sizes: '144x144' },
			{ rel: 'apple-touch-icon-precomposed', url: '/img/apple-touch-icon-152x152-precomposed.png', sizes: '152x152' },
			{ rel: 'apple-touch-icon-precomposed', url: '/img/apple-touch-icon-180x180-precomposed.png', sizes: '180x180' },
			{ rel: 'mask-icon', url: '/img/safari-pinned-tab.svg', color: '#303030' }
		]
	},
	themeColor: '#303030',
	manifest: '/site.webmanifest',
	alternates: {
		canonical: '/'
	}
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={`${interFont.variable} ${firaMonoFont.variable}`}>
			<body className="bg-white overflow-x-hidden w-[100vw] scroll-smooth">
				<div className="bg-neutral-200">
					<div className="container mx-auto max-w-4xl pt-12 md:pt-24 md:pb-12 px-4">
						<Link href="/" className="flex flex-col md:flex-row md:items-center gap-3 md:gap-8">
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
				<div className="overflow-hidden">
					<WaveImage width="100vw" height="120px" className="text-neutral-200 min-w-[640px]" />
				</div>
				{children}
				<WaveImage width="100vw" height="60px" className="text-neutral-200 -scale-x-100 -scale-y-100" />
				<div className="bg-neutral-200">
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
				</div>
				<Script src="https://www.googletagmanager.com/gtag/js?id=G-76CZV53176" strategy="afterInteractive" />
				<Script src="/js/ga.js" id="google-analytics" strategy="afterInteractive" />
			</body>
		</html>
	);
}
