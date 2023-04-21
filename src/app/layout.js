import { Inter, Fira_Mono, Ubuntu } from 'next/font/google';
import '../styles/global.sass';

const interFont = Inter({
	variable: '--font-inter',
	display: 'swap',
	subsets: ['latin'],
	fallback: ['Arial', 'sans-serif']
});

const ubuntuFont = Ubuntu({
	variable: '--font-ubuntu',
	weight: ['400', '700'],
	display: 'swap',
	subsets: ['latin'],
	fallback: ['Verdana', 'sans-serif']
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
	description: 'An incredibly fast and efficient service for rendering the skin of any Minecraft player by UUID.'
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={`${interFont.variable} ${firaMonoFont.variable} ${ubuntuFont.variable}`}>
			<body className="bg-white overflow-x-hidden w-[100vw] scroll-smooth">
				{children}
			</body>
		</html>
	);
}
