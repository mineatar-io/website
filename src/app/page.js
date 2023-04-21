import Image from 'next/image';
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

export default function Page() {
	return (
		<>
			<div className="bg-neutral-200">
				<div className="container mx-auto max-w-4xl pt-24 pb-12">
					<div className="flex flex-row items-center gap-8">
						<Image src={head} alt="Head" width="80" />
						<hgroup>
							<h1 className="text-6xl text-black">
								<span className="font-black">Mine</span>
								<span>atar</span>
							</h1>
							<p className="text-2xl mt-1">A fast and efficient Minecraft avatar service</p>
						</hgroup>
					</div>
				</div>
			</div>
			<WaveImage width="100vw" height="120px" className="text-neutral-200" />
			<div className="container mx-auto max-w-4xl py-8">
				<AnchorHeader size={2} className="text-2xl font-bold" id="about">What is Mineatar?</AnchorHeader>
				<p className="mt-3">Mineatar is an online API for developers and website owners that allows the embedding of Minecraft avatars as images, including faces, head renders, and full body renders. It is incredibly fast and supports all of the latest Minecraft features, like slim player models and overlays.</p>
				<p className="mt-3">It is really easy to get started using our service: simply find the type of image that you are wanting to embed on your own website or service, and copy the URL. Replace the <code>&lt;uuid&gt;</code> text in the URL with the UUID of the Minecraft player, with or without hyphens, both are allowed.</p>
				<AnchorHeader size={2} className="text-2xl font-bold mt-8" id="features">Features</AnchorHeader>
				<AnchorHeader size={3} className="text-xl font-semibold mt-5" id="incredibly-fast">Incredibly fast</AnchorHeader>
				<p className="mt-1">Our service is incredibly efficient and fast at rendering the skin of any Minecraft player, typically only in a couple of milliseconds once the skin is fetched on our end. We built our service using the Go programming language, a fast language that can handle large workloads like our own.</p>
				<AnchorHeader size={3} className="text-xl font-semibold mt-5" id="efficient-caching">Efficient caching</AnchorHeader>
				<p className="mt-1">Once a new player has been fetched once, the skin will be stored in the database of our server for up to a day. This allows any further renders to be fast, and we do not need to wait to fetch a new Minecraft skin from the Mojang API. After the cache has expired, the latest skin will be downloaded from Mojang during any new requests.</p>
				<AnchorHeader size={3} className="text-xl font-semibold mt-5" id="custom-scaling">Custom scaling</AnchorHeader>
				<p className="mt-1">TODO</p>
				<AnchorHeader size={3} className="text-xl font-semibold mt-5" id="overlay-toggling">Overlay toggling</AnchorHeader>
				<p className="mt-1">Every image route supports toggling the overlay (helmet) of the Minecraft skin being rendered. This allows you to view the player without this layer if it is necessary. It is enabled by default on all routes, but it can be disabled using query parameters. You can learn more by viewing the <Link href="#options" className="link">options section</Link>.</p>
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
					<div className="flex border border-neutral-200 p-5 rounded-lg">
						<div className="border-r border-r-neutral-200 pr-5 grow">
							<p className="flex items-center gap-2">
								<span className="bg-green-500 text-white text-sm font-mono px-2 py-1 rounded">GET</span>
								<code>https://api.mineatar.io<span className="font-bold">/face/&lt;uuid&gt;</span></code>
							</p>
							<p className="font-bold mt-5">Query Parameters</p>
							<table className="table table-auto w-full border border-neutral-200 mt-2">
								<thead className="table-header-group">
									<tr className="table-row">
										<th className="table-cell text-left p-3 border-b border-b-neutral-200 w-2/12">Name</th>
										<th className="table-cell text-left p-3 border-b border-b-neutral-200 w-2/12">Data Type</th>
										<th className="table-cell text-left p-3 border-b border-b-neutral-200 w-1/12">Default</th>
										<th className="table-cell text-left p-3 border-b border-b-neutral-200 w-7/12">Description</th>
									</tr>
								</thead>
								<tbody className="table-row-group">
									<tr className="table-row">
										<th className="table-cell text-left p-3"><code>scale</code></th>
										<td className="table-cell text-left p-3"><code>integer</code></td>
										<td className="table-cell text-left p-3"><code>4</code></td>
										<td className="table-cell text-left p-3">The scaling factor applied to the image dimensions (1 - 64)</td>
									</tr>
									<tr className="table-row">
										<th className="table-cell text-left p-3"><code>overlay</code></th>
										<td className="table-cell text-left p-3"><code>boolean</code></td>
										<td className="table-cell text-left p-3"><code>true</code></td>
										<td className="table-cell text-left p-3">Enables the overlay layer of the skin</td>
									</tr>
									<tr className="table-row">
										<th className="table-cell text-left p-3"><code>fallback</code></th>
										<td className="table-cell text-left p-3"><code>boolean</code></td>
										<td className="table-cell text-left p-3"><code>true</code></td>
										<td className="table-cell text-left p-3">Fallback to default skin if skin is unavailable</td>
									</tr>
									<tr className="table-row">
										<th className="table-cell text-left p-3"><code>download</code></th>
										<td className="table-cell text-left p-3"><code>boolean</code></td>
										<td className="table-cell text-left p-3"><code>false</code></td>
										<td className="table-cell text-left p-3">Force the browser to open a download dialog</td>
									</tr>
								</tbody>
							</table>
						</div>
						<div className="pl-5">
							<Image src={face} width="96" height="96" />
						</div>
					</div>
					<div className="flex border border-neutral-200 p-5 rounded-lg">
						<div className="border-r border-r-neutral-200 pr-5 grow">
							<p className="flex items-center gap-2">
								<span className="bg-green-500 text-white text-sm font-mono px-2 py-1 rounded">GET</span>
								<code>https://api.mineatar.io<span className="font-bold">/head/&lt;uuid&gt;</span></code>
							</p>
							<p className="font-bold mt-5">Query Parameters</p>
							<table className="table table-auto w-full border border-neutral-200 mt-2">
								<thead className="table-header-group">
									<tr className="table-row">
										<th className="table-cell text-left p-3 border-b border-b-neutral-200 w-2/12">Name</th>
										<th className="table-cell text-left p-3 border-b border-b-neutral-200 w-2/12">Data Type</th>
										<th className="table-cell text-left p-3 border-b border-b-neutral-200 w-1/12">Default</th>
										<th className="table-cell text-left p-3 border-b border-b-neutral-200 w-7/12">Description</th>
									</tr>
								</thead>
								<tbody className="table-row-group">
									<tr className="table-row">
										<th className="table-cell text-left p-3"><code>scale</code></th>
										<td className="table-cell text-left p-3"><code>integer</code></td>
										<td className="table-cell text-left p-3"><code>4</code></td>
										<td className="table-cell text-left p-3">The scaling factor applied to the image dimensions (1 - 64)</td>
									</tr>
									<tr className="table-row">
										<th className="table-cell text-left p-3"><code>overlay</code></th>
										<td className="table-cell text-left p-3"><code>boolean</code></td>
										<td className="table-cell text-left p-3"><code>true</code></td>
										<td className="table-cell text-left p-3">Enables the overlay layer of the skin</td>
									</tr>
									<tr className="table-row">
										<th className="table-cell text-left p-3"><code>fallback</code></th>
										<td className="table-cell text-left p-3"><code>boolean</code></td>
										<td className="table-cell text-left p-3"><code>true</code></td>
										<td className="table-cell text-left p-3">Fallback to default skin if skin is unavailable</td>
									</tr>
									<tr className="table-row">
										<th className="table-cell text-left p-3"><code>download</code></th>
										<td className="table-cell text-left p-3"><code>boolean</code></td>
										<td className="table-cell text-left p-3"><code>false</code></td>
										<td className="table-cell text-left p-3">Force the browser to open a download dialog</td>
									</tr>
								</tbody>
							</table>
						</div>
						<div className="pl-5">
							<Image src={head} width="96" />
						</div>
					</div>
					<div className="flex border border-neutral-200 p-5 rounded-lg">
						<div className="border-r border-r-neutral-200 pr-5 grow">
							<p className="flex items-center gap-2">
								<span className="bg-green-500 text-white text-sm font-mono px-2 py-1 rounded">GET</span>
								<code>https://api.mineatar.io<span className="font-bold">/body/full/&lt;uuid&gt;</span></code>
							</p>
							<p className="font-bold mt-5">Query Parameters</p>
							<table className="table table-auto w-full border border-neutral-200 mt-2">
								<thead className="table-header-group">
									<tr className="table-row">
										<th className="table-cell text-left p-3 border-b border-b-neutral-200 w-2/12">Name</th>
										<th className="table-cell text-left p-3 border-b border-b-neutral-200 w-2/12">Data Type</th>
										<th className="table-cell text-left p-3 border-b border-b-neutral-200 w-1/12">Default</th>
										<th className="table-cell text-left p-3 border-b border-b-neutral-200 w-7/12">Description</th>
									</tr>
								</thead>
								<tbody className="table-row-group">
									<tr className="table-row">
										<th className="table-cell text-left p-3"><code>scale</code></th>
										<td className="table-cell text-left p-3"><code>integer</code></td>
										<td className="table-cell text-left p-3"><code>4</code></td>
										<td className="table-cell text-left p-3">The scaling factor applied to the image dimensions (1 - 64)</td>
									</tr>
									<tr className="table-row">
										<th className="table-cell text-left p-3"><code>overlay</code></th>
										<td className="table-cell text-left p-3"><code>boolean</code></td>
										<td className="table-cell text-left p-3"><code>true</code></td>
										<td className="table-cell text-left p-3">Enables the overlay layer of the skin</td>
									</tr>
									<tr className="table-row">
										<th className="table-cell text-left p-3"><code>fallback</code></th>
										<td className="table-cell text-left p-3"><code>boolean</code></td>
										<td className="table-cell text-left p-3"><code>true</code></td>
										<td className="table-cell text-left p-3">Fallback to default skin if skin is unavailable</td>
									</tr>
									<tr className="table-row">
										<th className="table-cell text-left p-3"><code>download</code></th>
										<td className="table-cell text-left p-3"><code>boolean</code></td>
										<td className="table-cell text-left p-3"><code>false</code></td>
										<td className="table-cell text-left p-3">Force the browser to open a download dialog</td>
									</tr>
								</tbody>
							</table>
						</div>
						<div className="pl-5">
							<Image src={fullBody} width="96" />
						</div>
					</div>
					<div className="flex border border-neutral-200 p-5 rounded-lg">
						<div className="border-r border-r-neutral-200 pr-5 grow">
							<p className="flex items-center gap-2">
								<span className="bg-green-500 text-white text-sm font-mono px-2 py-1 rounded">GET</span>
								<code>https://api.mineatar.io<span className="font-bold">/body/front/&lt;uuid&gt;</span></code>
							</p>
							<p className="font-bold mt-5">Query Parameters</p>
							<table className="table table-auto w-full border border-neutral-200 mt-2">
								<thead className="table-header-group">
									<tr className="table-row">
										<th className="table-cell text-left p-3 border-b border-b-neutral-200 w-2/12">Name</th>
										<th className="table-cell text-left p-3 border-b border-b-neutral-200 w-2/12">Data Type</th>
										<th className="table-cell text-left p-3 border-b border-b-neutral-200 w-1/12">Default</th>
										<th className="table-cell text-left p-3 border-b border-b-neutral-200 w-7/12">Description</th>
									</tr>
								</thead>
								<tbody className="table-row-group">
									<tr className="table-row">
										<th className="table-cell text-left p-3"><code>scale</code></th>
										<td className="table-cell text-left p-3"><code>integer</code></td>
										<td className="table-cell text-left p-3"><code>4</code></td>
										<td className="table-cell text-left p-3">The scaling factor applied to the image dimensions (1 - 64)</td>
									</tr>
									<tr className="table-row">
										<th className="table-cell text-left p-3"><code>overlay</code></th>
										<td className="table-cell text-left p-3"><code>boolean</code></td>
										<td className="table-cell text-left p-3"><code>true</code></td>
										<td className="table-cell text-left p-3">Enables the overlay layer of the skin</td>
									</tr>
									<tr className="table-row">
										<th className="table-cell text-left p-3"><code>fallback</code></th>
										<td className="table-cell text-left p-3"><code>boolean</code></td>
										<td className="table-cell text-left p-3"><code>true</code></td>
										<td className="table-cell text-left p-3">Fallback to default skin if skin is unavailable</td>
									</tr>
									<tr className="table-row">
										<th className="table-cell text-left p-3"><code>download</code></th>
										<td className="table-cell text-left p-3"><code>boolean</code></td>
										<td className="table-cell text-left p-3"><code>false</code></td>
										<td className="table-cell text-left p-3">Force the browser to open a download dialog</td>
									</tr>
								</tbody>
							</table>
						</div>
						<div className="pl-5">
							<Image src={frontBody} width="96" />
						</div>
					</div>
					<div className="flex border border-neutral-200 p-5 rounded-lg">
						<div className="border-r border-r-neutral-200 pr-5 grow">
							<p className="flex items-center gap-2">
								<span className="bg-green-500 text-white text-sm font-mono px-2 py-1 rounded">GET</span>
								<code>https://api.mineatar.io<span className="font-bold">/body/back/&lt;uuid&gt;</span></code>
							</p>
							<p className="font-bold mt-5">Query Parameters</p>
							<table className="table table-auto w-full border border-neutral-200 mt-2">
								<thead className="table-header-group">
									<tr className="table-row">
										<th className="table-cell text-left p-3 border-b border-b-neutral-200 w-2/12">Name</th>
										<th className="table-cell text-left p-3 border-b border-b-neutral-200 w-2/12">Data Type</th>
										<th className="table-cell text-left p-3 border-b border-b-neutral-200 w-1/12">Default</th>
										<th className="table-cell text-left p-3 border-b border-b-neutral-200 w-7/12">Description</th>
									</tr>
								</thead>
								<tbody className="table-row-group">
									<tr className="table-row">
										<th className="table-cell text-left p-3"><code>scale</code></th>
										<td className="table-cell text-left p-3"><code>integer</code></td>
										<td className="table-cell text-left p-3"><code>4</code></td>
										<td className="table-cell text-left p-3">The scaling factor applied to the image dimensions (1 - 64)</td>
									</tr>
									<tr className="table-row">
										<th className="table-cell text-left p-3"><code>overlay</code></th>
										<td className="table-cell text-left p-3"><code>boolean</code></td>
										<td className="table-cell text-left p-3"><code>true</code></td>
										<td className="table-cell text-left p-3">Enables the overlay layer of the skin</td>
									</tr>
									<tr className="table-row">
										<th className="table-cell text-left p-3"><code>fallback</code></th>
										<td className="table-cell text-left p-3"><code>boolean</code></td>
										<td className="table-cell text-left p-3"><code>true</code></td>
										<td className="table-cell text-left p-3">Fallback to default skin if skin is unavailable</td>
									</tr>
									<tr className="table-row">
										<th className="table-cell text-left p-3"><code>download</code></th>
										<td className="table-cell text-left p-3"><code>boolean</code></td>
										<td className="table-cell text-left p-3"><code>false</code></td>
										<td className="table-cell text-left p-3">Force the browser to open a download dialog</td>
									</tr>
								</tbody>
							</table>
						</div>
						<div className="pl-5">
							<Image src={backBody} width="96" />
						</div>
					</div>
					<div className="flex border border-neutral-200 p-5 rounded-lg">
						<div className="border-r border-r-neutral-200 pr-5 grow">
							<p className="flex items-center gap-2">
								<span className="bg-green-500 text-white text-sm font-mono px-2 py-1 rounded">GET</span>
								<code>https://api.mineatar.io<span className="font-bold">/body/left/&lt;uuid&gt;</span></code>
							</p>
							<p className="font-bold mt-5">Query Parameters</p>
							<table className="table table-auto w-full border border-neutral-200 mt-2">
								<thead className="table-header-group">
									<tr className="table-row">
										<th className="table-cell text-left p-3 border-b border-b-neutral-200 w-2/12">Name</th>
										<th className="table-cell text-left p-3 border-b border-b-neutral-200 w-2/12">Data Type</th>
										<th className="table-cell text-left p-3 border-b border-b-neutral-200 w-1/12">Default</th>
										<th className="table-cell text-left p-3 border-b border-b-neutral-200 w-7/12">Description</th>
									</tr>
								</thead>
								<tbody className="table-row-group">
									<tr className="table-row">
										<th className="table-cell text-left p-3"><code>scale</code></th>
										<td className="table-cell text-left p-3"><code>integer</code></td>
										<td className="table-cell text-left p-3"><code>4</code></td>
										<td className="table-cell text-left p-3">The scaling factor applied to the image dimensions (1 - 64)</td>
									</tr>
									<tr className="table-row">
										<th className="table-cell text-left p-3"><code>overlay</code></th>
										<td className="table-cell text-left p-3"><code>boolean</code></td>
										<td className="table-cell text-left p-3"><code>true</code></td>
										<td className="table-cell text-left p-3">Enables the overlay layer of the skin</td>
									</tr>
									<tr className="table-row">
										<th className="table-cell text-left p-3"><code>fallback</code></th>
										<td className="table-cell text-left p-3"><code>boolean</code></td>
										<td className="table-cell text-left p-3"><code>true</code></td>
										<td className="table-cell text-left p-3">Fallback to default skin if skin is unavailable</td>
									</tr>
									<tr className="table-row">
										<th className="table-cell text-left p-3"><code>download</code></th>
										<td className="table-cell text-left p-3"><code>boolean</code></td>
										<td className="table-cell text-left p-3"><code>false</code></td>
										<td className="table-cell text-left p-3">Force the browser to open a download dialog</td>
									</tr>
								</tbody>
							</table>
						</div>
						<div className="pl-5">
							<Image src={leftBody} width="64" className="mx-4" />
						</div>
					</div>
					<div className="flex border border-neutral-200 p-5 rounded-lg">
						<div className="border-r border-r-neutral-200 pr-5 grow">
							<p className="flex items-center gap-2">
								<span className="bg-green-500 text-white text-sm font-mono px-2 py-1 rounded">GET</span>
								<code>https://api.mineatar.io<span className="font-bold">/body/right/&lt;uuid&gt;</span></code>
							</p>
							<p className="font-bold mt-5">Query Parameters</p>
							<table className="table table-auto w-full border border-neutral-200 mt-2">
								<thead className="table-header-group">
									<tr className="table-row">
										<th className="table-cell text-left p-3 border-b border-b-neutral-200 w-2/12">Name</th>
										<th className="table-cell text-left p-3 border-b border-b-neutral-200 w-2/12">Data Type</th>
										<th className="table-cell text-left p-3 border-b border-b-neutral-200 w-1/12">Default</th>
										<th className="table-cell text-left p-3 border-b border-b-neutral-200 w-7/12">Description</th>
									</tr>
								</thead>
								<tbody className="table-row-group">
									<tr className="table-row">
										<th className="table-cell text-left p-3"><code>scale</code></th>
										<td className="table-cell text-left p-3"><code>integer</code></td>
										<td className="table-cell text-left p-3"><code>4</code></td>
										<td className="table-cell text-left p-3">The scaling factor applied to the image dimensions (1 - 64)</td>
									</tr>
									<tr className="table-row">
										<th className="table-cell text-left p-3"><code>overlay</code></th>
										<td className="table-cell text-left p-3"><code>boolean</code></td>
										<td className="table-cell text-left p-3"><code>true</code></td>
										<td className="table-cell text-left p-3">Enables the overlay layer of the skin</td>
									</tr>
									<tr className="table-row">
										<th className="table-cell text-left p-3"><code>fallback</code></th>
										<td className="table-cell text-left p-3"><code>boolean</code></td>
										<td className="table-cell text-left p-3"><code>true</code></td>
										<td className="table-cell text-left p-3">Fallback to default skin if skin is unavailable</td>
									</tr>
									<tr className="table-row">
										<th className="table-cell text-left p-3"><code>download</code></th>
										<td className="table-cell text-left p-3"><code>boolean</code></td>
										<td className="table-cell text-left p-3"><code>false</code></td>
										<td className="table-cell text-left p-3">Force the browser to open a download dialog</td>
									</tr>
								</tbody>
							</table>
						</div>
						<div className="pl-5">
							<Image src={rightBody} width="64" className="mx-4" />
						</div>
					</div>
					<div className="flex border border-neutral-200 p-5 rounded-lg">
						<div className="border-r border-r-neutral-200 pr-5 grow">
							<p className="flex items-center gap-2">
								<span className="bg-green-500 text-white text-sm font-mono px-2 py-1 rounded">GET</span>
								<code>https://api.mineatar.io<span className="font-bold">/skin/&lt;uuid&gt;</span></code>
							</p>
							<p className="font-bold mt-5">Query Parameters</p>
							<table className="table table-auto w-full border border-neutral-200 mt-2">
								<thead className="table-header-group">
									<tr className="table-row">
										<th className="table-cell text-left p-3 border-b border-b-neutral-200 w-2/12">Name</th>
										<th className="table-cell text-left p-3 border-b border-b-neutral-200 w-2/12">Data Type</th>
										<th className="table-cell text-left p-3 border-b border-b-neutral-200 w-1/12">Default</th>
										<th className="table-cell text-left p-3 border-b border-b-neutral-200 w-7/12">Description</th>
									</tr>
								</thead>
								<tbody className="table-row-group">
									<tr className="table-row">
										<th className="table-cell text-left p-3"><code>fallback</code></th>
										<td className="table-cell text-left p-3"><code>boolean</code></td>
										<td className="table-cell text-left p-3"><code>true</code></td>
										<td className="table-cell text-left p-3">Fallback to default skin if skin is unavailable</td>
									</tr>
									<tr className="table-row">
										<th className="table-cell text-left p-3"><code>download</code></th>
										<td className="table-cell text-left p-3"><code>boolean</code></td>
										<td className="table-cell text-left p-3"><code>false</code></td>
										<td className="table-cell text-left p-3">Force the browser to open a download dialog</td>
									</tr>
								</tbody>
							</table>
						</div>
						<div className="pl-5">
							<Image src={rawSkin} width="96" />
						</div>
					</div>
				</div>
				<AnchorHeader size={2} className="text-2xl font-bold mt-8" id="credit">Credit</AnchorHeader>
				<AnchorHeader size={2} className="text-2xl font-bold mt-8" id="contact">Contact</AnchorHeader>
			</div>
			<div className="bg-neutral-200">
				<div className="container mx-auto max-w-4xl py-6">
					<p>&copy; {new Date().getFullYear()} PassTheMayo</p>
				</div>
			</div>
		</>
	);
}