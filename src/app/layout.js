import '@/styles/global.sass';

import { Fira_Mono, Inter } from 'next/font/google';
import Script from 'next/script';
import WaveImage from '@/assets/img/wave.svg';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

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
                <Header />
                <div className="overflow-hidden">
                    <WaveImage width="100vw" height="120px" className="text-neutral-200 min-w-[640px]" />
                </div>
                {children}
                <WaveImage width="100vw" height="60px" className="text-neutral-200 -scale-x-100 -scale-y-100" />
                <Footer />
                <Script src="https://www.googletagmanager.com/gtag/js?id=G-76CZV53176" strategy="afterInteractive" />
                <Script src="/js/ga.js" id="google-analytics" strategy="afterInteractive" />
            </body>
        </html>
    );
}
