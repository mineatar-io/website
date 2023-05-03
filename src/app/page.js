import Link from 'next/link';
import AnchorHeader from '../components/AnchorHeader';
import WaveImage from '../assets/img/wave.svg';
import head from '../assets/img/head.png';
import face from '../assets/img/face.png';
import fullBody from '../assets/img/full-body.png';
import frontBody from '../assets/img/front-body.png';
import backBody from '../assets/img/back-body.png';
import leftBody from '../assets/img/left-body.png';
import rightBody from '../assets/img/right-body.png';
import rawSkin from '../assets/img/raw-skin.png';
import Route from '../components/Route';
import Search from '../components/Search';

export default function Page() {
	return (
		<>
			<div className="container mx-auto max-w-4xl py-8 px-4">
				<Search />
				<AnchorHeader size={2} className="text-2xl font-bold mt-8" id="about">What is Mineatar?</AnchorHeader>
				<p className="mt-3">Mineatar is an online API for developers and website owners that allows the embedding of Minecraft avatars as images, including faces, head renders, and full body renders. It is incredibly fast and supports all of the latest Minecraft features, like slim player models and overlays.</p>
				<p className="mt-3">It is really easy to get started using our service: simply find the type of image that you are wanting to embed on your own website or service, and copy the URL. Replace the <code>&lt;uuid&gt;</code> text in the URL with the UUID of the Minecraft player, with or without hyphens, both are allowed.</p>
				<AnchorHeader size={2} className="text-2xl font-bold mt-8" id="features">Features</AnchorHeader>
				<AnchorHeader size={3} className="text-xl font-semibold mt-5" id="incredibly-fast">Incredibly fast</AnchorHeader>
				<p className="mt-1">Our service is incredibly efficient and fast at rendering the skin of any Minecraft player, typically only in a couple of milliseconds once the skin is fetched on our end. We built our service using the Go programming language, a fast language that can handle large workloads like our own.</p>
				<AnchorHeader size={3} className="text-xl font-semibold mt-5" id="efficient-caching">Efficient caching</AnchorHeader>
				<p className="mt-1">Once a new player has been fetched once, the skin will be stored in the database of our server for up to a day. This allows any further renders to be fast, and we do not need to wait to fetch a new Minecraft skin from the Mojang API. After the cache has expired, the latest skin will be downloaded from Mojang during any new requests.</p>
				<AnchorHeader size={3} className="text-xl font-semibold mt-5" id="custom-scaling">Custom scaling</AnchorHeader>
				<p className="mt-1">Almost all of the routes support custom scaling, meaning you can change the dimensions of the image based on a scaling factor. Simply use the <code>scale</code> query parameter to change the scaling.</p>
				<AnchorHeader size={3} className="text-xl font-semibold mt-5" id="overlay-toggling">Overlay toggling</AnchorHeader>
				<p className="mt-1">Every image route supports toggling the overlay (helmet) of the Minecraft skin being rendered. This allows you to view the player without this layer if it is necessary. It is enabled by default on all routes, but it can be disabled using query parameters. Refer to the query parameters section of the route documentation below.</p>
				<AnchorHeader size={3} className="text-xl font-semibold mt-5" id="regular-and-slim-models">Regular and slim models</AnchorHeader>
				<p className="mt-1">In September of 2014, Mojang released a new variant of the Minecraft skin called slim (or &quot;Alex&quot;) which allowed skins to have 3-pixel wide arms instead of the default 4. Our service will correctly render both models, keeping the same image dimensions regardless of which variant was rendered.</p>
				<AnchorHeader size={2} className="text-2xl font-bold mt-8" id="open-source">Open Source</AnchorHeader>
				<p className="mt-3">Our service is entirely open source, allowing the developers in the community to make improvements and bug fixes on demand. This is also for transparency reasons, to openly show how the data you provide is used. If you would like to view the source code of our service, you can visit our <a href="https://github.com/mineatar-io" className="link">GitHub organization page</a>.</p>
				<AnchorHeader size={2} className="text-2xl font-bold mt-8" id="caching">Caching</AnchorHeader>
				<p className="mt-3">Mineatar uses caching on the server as well as the browser to make image loading faster as well as reducing server load. This means that both Minecraft player skins and the result of each render is cached on our server. It is not possible for you to bypass this cache in any way, as it was put in place to prevent abuse and malicious reasons.</p>
				<p className="mt-3">Once the skin of the Minecraft player has been fetched from Mojang, it will be stored in our database for 12 hours. After the cache expires, any further requests to the API will result in a fresh skin being retrieved from the Mojang API. In addition to the skin being cached, the rendered image of the player is also cached for 12 hours.</p>
				<p className="mt-3">If you recently updated the skin of your Minecraft player and are not seeing the changes from our API, please wait at least 24 hours and try again. If you still are seeing your old skin after 24 hours, please send us an email using the email address in the <Link href="#contact" className="link">contact section</Link> of this page.</p>
				<AnchorHeader size={2} className="text-2xl font-bold mt-8" id="faq">Frequently Asked Questions</AnchorHeader>
				<AnchorHeader size={2} className="font-semibold mt-5" id="faq-1">1. Why can I not use usernames instead of UUIDs?</AnchorHeader>
				<p className="mt-1">It is possible for us to enable username lookup, but the limitations that Mojang puts in place makes it impossible for our service to grow. Mojang heavily rate limits the API route required to convert usernames into UUIDs. We used to allow this, but deprecated and disabled the feature in early May of 2023.</p>
				<AnchorHeader size={2} className="font-semibold mt-5" id="faq-2">2. What is this service built with?</AnchorHeader>
				<p className="mt-1">We decided that Go would be one of the best choices for building a scalable image rendering service due to the concurrency model the Go development team used. It is also a high level syntax language, making it easy for experienced and inexperienced developers alike to understand the source code. It also happens to be one of the languages that the main developer is familiar with.</p>
				<AnchorHeader size={2} className="font-semibold mt-5" id="faq-3">3. How do I force a new image to be rendered?</AnchorHeader>
				<p className="mt-1">The short answer: you can&apos;t. Just be patient, our service is intentionally designed to cache and store skins and renders for up to 24 hours to prevent abuse. Please do not attempt to contact us to request any exceptions to our cache.</p>
				<AnchorHeader size={2} className="text-2xl font-bold mt-8" id="routes">Routes</AnchorHeader>
				<div className="flex flex-col gap-3 mt-5">
					<Route path="/face/<uuid>" result={face} query={[
						{ name: 'scale', type: 'integer', default: '4', description: 'The scaling factor applied to the image dimensions (1 - 64)' },
						{ name: 'overlay', type: 'boolean', default: 'true', description: 'Enables the overlay layer of the skin' },
						{ name: 'download', type: 'boolean', default: 'false', description: 'Forces the browser to open a download dialog' }
					]} />
					<Route path="/head/<uuid>" result={head} query={[
						{ name: 'scale', type: 'integer', default: '4', description: 'The scaling factor applied to the image dimensions (1 - 64)' },
						{ name: 'overlay', type: 'boolean', default: 'true', description: 'Enables the overlay layer of the skin' },
						{ name: 'download', type: 'boolean', default: 'false', description: 'Forces the browser to open a download dialog' }
					]} />
					<Route path="/body/full/<uuid>" result={fullBody} query={[
						{ name: 'scale', type: 'integer', default: '4', description: 'The scaling factor applied to the image dimensions (1 - 64)' },
						{ name: 'overlay', type: 'boolean', default: 'true', description: 'Enables the overlay layer of the skin' },
						{ name: 'download', type: 'boolean', default: 'false', description: 'Forces the browser to open a download dialog' }
					]} />
					<Route path="/body/front/<uuid>" result={frontBody} query={[
						{ name: 'scale', type: 'integer', default: '4', description: 'The scaling factor applied to the image dimensions (1 - 64)' },
						{ name: 'overlay', type: 'boolean', default: 'true', description: 'Enables the overlay layer of the skin' },
						{ name: 'download', type: 'boolean', default: 'false', description: 'Forces the browser to open a download dialog' }
					]} />
					<Route path="/body/back/<uuid>" result={backBody} query={[
						{ name: 'scale', type: 'integer', default: '4', description: 'The scaling factor applied to the image dimensions (1 - 64)' },
						{ name: 'overlay', type: 'boolean', default: 'true', description: 'Enables the overlay layer of the skin' },
						{ name: 'download', type: 'boolean', default: 'false', description: 'Forces the browser to open a download dialog' }
					]} />
					<Route path="/body/left/<uuid>" result={leftBody} query={[
						{ name: 'scale', type: 'integer', default: '4', description: 'The scaling factor applied to the image dimensions (1 - 64)' },
						{ name: 'overlay', type: 'boolean', default: 'true', description: 'Enables the overlay layer of the skin' },
						{ name: 'download', type: 'boolean', default: 'false', description: 'Forces the browser to open a download dialog' }
					]} />
					<Route path="/body/right/<uuid>" result={rightBody} query={[
						{ name: 'scale', type: 'integer', default: '4', description: 'The scaling factor applied to the image dimensions (1 - 64)' },
						{ name: 'overlay', type: 'boolean', default: 'true', description: 'Enables the overlay layer of the skin' },
						{ name: 'download', type: 'boolean', default: 'false', description: 'Forces the browser to open a download dialog' }
					]} />
					<Route path="/skin/<uuid>" result={rawSkin} query={[
						{ name: 'download', type: 'boolean', default: 'false', description: 'Forces the browser to open a download dialog' }
					]} />
				</div>
				<AnchorHeader size={2} className="text-2xl font-bold mt-8" id="credit">Credit</AnchorHeader>
				<p className="mt-1">Without the support of other services, this service would not be possible. We would like to give credit to the services that made us possible.</p>
				<ul className="list-disc list-inside mt-3">
					<li>
						<span className="text-neutral-500">
							<a href="https://github.com/crafatar/crafatar" className="link">Crafatar</a> &ndash; Provided an example of how isometric skin parts are rendered
						</span>
					</li>
					<li>
						<span className="text-neutral-500">
							<a href="https://feathericons.com/" className="link">Feather Icons</a> &ndash; Modern icons used on this website
						</span>
					</li>
				</ul>
				<AnchorHeader size={2} className="text-2xl font-bold mt-8" id="contact">Contact</AnchorHeader>
				<p className="mt-1">If you would like to contact us, you can do so by sending an email to <a href="mailto:contact@mineatar.io" className="link">contact@mineatar.io</a>.</p>
				<AnchorHeader size={2} className="text-2xl font-bold mt-8" id="also-check-out">Also check out...</AnchorHeader>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
					<a href="https://mcstatus.io">
						<div className="border border-neutral-200 hover:border-neutral-300 rounded-lg p-5">
							<p className="font-bold text-lg">mcstatus.io</p>
							<p className="mt-1">A fast and simple Minecraft server status utility that also has an API</p>
						</div>
					</a>
				</div>
			</div>
			<WaveImage width="100vw" height="60px" className="text-neutral-200 -scale-x-100 -scale-y-100" />
			<div className="bg-neutral-200">
				<div className="container mx-auto max-w-4xl pt-2 pb-6 px-8">
					<div className="flex flex-col md:flex-row gap-3 md:gap-0 justify-between items-center">
						<p>&copy; <span className="font-bold">{new Date().getFullYear()} Jacob Gunther</span></p>
						<ul className="flex flex-row gap-3 list-none">
							<li>
								<a href="https://github.com/mineatar-io" className="link p-1">GitHub</a>
							</li>
							<li>
								<a href="https://status.mineatar.io" className="link p-1">Status Page</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
}