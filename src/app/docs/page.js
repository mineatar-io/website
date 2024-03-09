import Image from 'next/image';
import backBody from '@/assets/img/back-body.png';
import face from '@/assets/img/face.png';
import frontBody from '@/assets/img/front-body.png';
import fullBody from '@/assets/img/full-body.png';
import head from '@/assets/img/head.png';
import leftBody from '@/assets/img/left-body.png';
import rawSkin from '@/assets/img/raw-skin.png';
import rightBody from '@/assets/img/right-body.png';
import AnchorHeader from '@/components/AnchorHeader';

export const metadata = {
    title: 'API Documentation',
    description: 'The API documentation of Mineatar and how to integrate our service into your own.',
    openGraph: {
        title: 'API Documentation - Mineatar',
        description: 'The API documentation of Mineatar and how to integrate our service into your own.',
        url: '/docs',
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
    alternates: {
        canonical: '/docs'
    }
};

export default function Page() {
    return (
        <>
            <h1 className="title">API Documentation</h1>
            <section className="pt-12">
                <AnchorHeader size={2} id="overview">Overview</AnchorHeader>
                <p className="text-neutral-300 leading-7 mt-3">Mineatar was built to be an alternative to existing service which improves the speed and efficiency of rendering Minecraft player skins as 3-dimensional images. Whether or not you are migrating from an alternative service, we make it easy to get up and running quickly by providing a simple API to use. Everything you need to know to get started is documented below.</p>
            </section>
            <section className="pt-12">
                <AnchorHeader size={2} id="caching">Caching</AnchorHeader>
                <p className="text-neutral-300 leading-7 mt-3">To prevent any abuse of our API, we implement a cache duration for all rendered images to reduce the amount of work our server has to do. When a skin is retrieved from Mojang, it is cached for 12 hours, meaning a fresh skin will not be retrieved until 12 hours from the previous. The rendered image is also cached for 12 hours. All requests will contain a <code>X-Cache-Hit</code> response header which contains a boolean value which determines whether you hit the cache for the resulting image. If the value was true, then the <code>X-Cache-Time-Remaining</code> header will contain the amount of seconds until that cache expires.</p>
            </section>
            <section className="pt-12">
                <AnchorHeader size={2} id="query-params">Query Parameters</AnchorHeader>
                <p className="text-neutral-300 leading-7 mt-3">There is a few ways to modify the resulting image from any API endpoint. Most endpoints support a <code>scale</code> query parameter which changes the size of the image, and a <code>download</code> parameter which tells your browser to open a save dialog. You can refer to the query parameters for each specific endpoint to learn about what you can modify.</p>
                <ul className="list-inside list-disc mt-3 pl-5">
                    <li>
                        <code>scale</code>
                        <span className="text-neutral-400"> (Number) &mdash; </span>
                        <span>Increases or decreases the size of the image</span>
                    </li>
                    <li>
                        <code>overlay</code>
                        <span className="text-neutral-400"> (Boolean) &mdash; </span>
                        <span>Toggles the overlay (helmet layer) of the skin</span>
                    </li>
                    <li>
                        <code>download</code>
                        <span className="text-neutral-400"> (Boolean) &mdash; </span>
                        <span>Forces the browser to open a save dialog</span>
                    </li>
                    <li>
                        <code>format</code>
                        <span className="text-neutral-400"> (String) &mdash; </span>
                        <span>Changes the format of the image returned</span>
                        <span className="text-neutral-400"> (values: <code>png</code>, <code>jpg</code>, <code>jpeg</code>, <code>gif</code>)</span>
                    </li>
                </ul>
            </section>
            <section className="pt-12">
                <AnchorHeader size={2} id="routes">Routes</AnchorHeader>
                <div className="card flex gap-3 mt-3">
                    <div className="grow">
                        <AnchorHeader size={3} id="face">Face</AnchorHeader>
                        <div className="flex items-center gap-2 mt-3">
                            <span className="badge badge-blue text-xs">GET</span>
                            <code>
                                <span>https://api.mineatar.io</span>
                                <span className="font-bold">/face/&lt;uuid&gt;</span>
                            </code>
                        </div>
                        <p className="mt-3">Accepted query parameters:</p>
                        <ul className="list-inside list-disc pl-3 mt-1">
                            <li>
                                <code>scale</code>
                                <span className="text-neutral-400"> (default is <code>4</code>)</span>
                            </li>
                            <li>
                                <code>overlay</code>
                                <span className="text-neutral-400"> (default is <code>true</code>)</span>
                            </li>
                            <li>
                                <code>download</code>
                                <span className="text-neutral-400"> (default is <code>false</code>)</span>
                            </li>
                            <li>
                                <code>format</code>
                                <span className="text-neutral-400"> (default is <code>png</code>)</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <Image src={face} alt="Face" className="w-[120px] [image-rendering:pixelated;]" />
                    </div>
                </div>
                <div className="card flex gap-3 mt-3">
                    <div className="grow">
                        <AnchorHeader size={3} id="head">Head</AnchorHeader>
                        <div className="flex items-center gap-2 mt-3">
                            <span className="badge badge-blue text-xs">GET</span>
                            <code>
                                <span>https://api.mineatar.io</span>
                                <span className="font-bold">/head/&lt;uuid&gt;</span>
                            </code>
                        </div>
                        <p className="mt-3">Accepted query parameters:</p>
                        <ul className="list-inside list-disc pl-3 mt-1">
                            <li>
                                <code>scale</code>
                                <span className="text-neutral-400"> (default is <code>4</code>)</span>
                            </li>
                            <li>
                                <code>overlay</code>
                                <span className="text-neutral-400"> (default is <code>true</code>)</span>
                            </li>
                            <li>
                                <code>download</code>
                                <span className="text-neutral-400"> (default is <code>false</code>)</span>
                            </li>
                            <li>
                                <code>format</code>
                                <span className="text-neutral-400"> (default is <code>png</code>)</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <Image src={head} alt="Head" className="w-[120px] [image-rendering:pixelated;]" />
                    </div>
                </div>
                <div className="card flex gap-3 mt-3">
                    <div className="grow">
                        <AnchorHeader size={3} id="full-body">Full Body</AnchorHeader>
                        <div className="flex items-center gap-2 mt-3">
                            <span className="badge badge-blue text-xs">GET</span>
                            <code>
                                <span>https://api.mineatar.io</span>
                                <span className="font-bold">/body/full/&lt;uuid&gt;</span>
                            </code>
                        </div>
                        <p className="mt-3">Accepted query parameters:</p>
                        <ul className="list-inside list-disc pl-3 mt-1">
                            <li>
                                <code>scale</code>
                                <span className="text-neutral-400"> (default is <code>4</code>)</span>
                            </li>
                            <li>
                                <code>overlay</code>
                                <span className="text-neutral-400"> (default is <code>true</code>)</span>
                            </li>
                            <li>
                                <code>download</code>
                                <span className="text-neutral-400"> (default is <code>false</code>)</span>
                            </li>
                            <li>
                                <code>format</code>
                                <span className="text-neutral-400"> (default is <code>png</code>)</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <Image src={fullBody} alt="Full Body" className="w-[120px] [image-rendering:pixelated;]" />
                    </div>
                </div>
                <div className="card flex gap-3 mt-3">
                    <div className="grow">
                        <AnchorHeader size={3} id="front-body">Front Body</AnchorHeader>
                        <div className="flex items-center gap-2 mt-3">
                            <span className="badge badge-blue text-xs">GET</span>
                            <code>
                                <span>https://api.mineatar.io</span>
                                <span className="font-bold">/body/front/&lt;uuid&gt;</span>
                            </code>
                        </div>
                        <p className="mt-3">Accepted query parameters:</p>
                        <ul className="list-inside list-disc pl-3 mt-1">
                            <li>
                                <code>scale</code>
                                <span className="text-neutral-400"> (default is <code>4</code>)</span>
                            </li>
                            <li>
                                <code>overlay</code>
                                <span className="text-neutral-400"> (default is <code>true</code>)</span>
                            </li>
                            <li>
                                <code>download</code>
                                <span className="text-neutral-400"> (default is <code>false</code>)</span>
                            </li>
                            <li>
                                <code>format</code>
                                <span className="text-neutral-400"> (default is <code>png</code>)</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <Image src={frontBody} alt="Front Body" className="w-[120px] [image-rendering:pixelated;]" />
                    </div>
                </div>
                <div className="card flex gap-3 mt-3">
                    <div className="grow">
                        <AnchorHeader size={3} id="back-body">Back Body</AnchorHeader>
                        <div className="flex items-center gap-2 mt-3">
                            <span className="badge badge-blue text-xs">GET</span>
                            <code>
                                <span>https://api.mineatar.io</span>
                                <span className="font-bold">/body/back/&lt;uuid&gt;</span>
                            </code>
                        </div>
                        <p className="mt-3">Accepted query parameters:</p>
                        <ul className="list-inside list-disc pl-3 mt-1">
                            <li>
                                <code>scale</code>
                                <span className="text-neutral-400"> (default is <code>4</code>)</span>
                            </li>
                            <li>
                                <code>overlay</code>
                                <span className="text-neutral-400"> (default is <code>true</code>)</span>
                            </li>
                            <li>
                                <code>download</code>
                                <span className="text-neutral-400"> (default is <code>false</code>)</span>
                            </li>
                            <li>
                                <code>format</code>
                                <span className="text-neutral-400"> (default is <code>png</code>)</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <Image src={backBody} alt="Back Body" className="w-[120px] [image-rendering:pixelated;]" />
                    </div>
                </div>
                <div className="card flex gap-3 mt-3">
                    <div className="grow">
                        <AnchorHeader size={3} id="left-body">Left Body</AnchorHeader>
                        <div className="flex items-center gap-2 mt-3">
                            <span className="badge badge-blue text-xs">GET</span>
                            <code>
                                <span>https://api.mineatar.io</span>
                                <span className="font-bold">/body/left/&lt;uuid&gt;</span>
                            </code>
                        </div>
                        <p className="mt-3">Accepted query parameters:</p>
                        <ul className="list-inside list-disc pl-3 mt-1">
                            <li>
                                <code>scale</code>
                                <span className="text-neutral-400"> (default is <code>4</code>)</span>
                            </li>
                            <li>
                                <code>overlay</code>
                                <span className="text-neutral-400"> (default is <code>true</code>)</span>
                            </li>
                            <li>
                                <code>download</code>
                                <span className="text-neutral-400"> (default is <code>false</code>)</span>
                            </li>
                            <li>
                                <code>format</code>
                                <span className="text-neutral-400"> (default is <code>png</code>)</span>
                            </li>
                        </ul>
                    </div>
                    <div className="w-[120px] flex justify-center">
                        <Image src={leftBody} alt="Left Body" className="w-[60px] [image-rendering:pixelated;]" />
                    </div>
                </div>
                <div className="card flex gap-3 mt-3">
                    <div className="grow">
                        <AnchorHeader size={3} id="right-body">Right Body</AnchorHeader>
                        <div className="flex items-center gap-2 mt-3">
                            <span className="badge badge-blue text-xs">GET</span>
                            <code>
                                <span>https://api.mineatar.io</span>
                                <span className="font-bold">/body/right/&lt;uuid&gt;</span>
                            </code>
                        </div>
                        <p className="mt-3">Accepted query parameters:</p>
                        <ul className="list-inside list-disc pl-3 mt-1">
                            <li>
                                <code>scale</code>
                                <span className="text-neutral-400"> (default is <code>4</code>)</span>
                            </li>
                            <li>
                                <code>overlay</code>
                                <span className="text-neutral-400"> (default is <code>true</code>)</span>
                            </li>
                            <li>
                                <code>download</code>
                                <span className="text-neutral-400"> (default is <code>false</code>)</span>
                            </li>
                            <li>
                                <code>format</code>
                                <span className="text-neutral-400"> (default is <code>png</code>)</span>
                            </li>
                        </ul>
                    </div>
                    <div className="w-[120px] flex justify-center">
                        <Image src={rightBody} alt="Right Body" className="w-[60px] [image-rendering:pixelated;]" />
                    </div>
                </div>
                <div className="card flex gap-3 mt-3">
                    <div className="grow">
                        <AnchorHeader size={3} id="raw-skin">Raw Skin</AnchorHeader>
                        <div className="flex items-center gap-2 mt-3">
                            <span className="badge badge-blue text-xs">GET</span>
                            <code>
                                <span>https://api.mineatar.io</span>
                                <span className="font-bold">/skin/&lt;uuid&gt;</span>
                            </code>
                        </div>
                        <p className="mt-3">Accepted query parameters:</p>
                        <ul className="list-inside list-disc pl-3 mt-1">
                            <li>
                                <code>download</code>
                                <span className="text-neutral-400"> (default is <code>false</code>)</span>
                            </li>
                            <li>
                                <code>format</code>
                                <span className="text-neutral-400"> (default is <code>png</code>)</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <Image src={rawSkin} alt="Raw Skin" className="w-[120px] [image-rendering:pixelated;]" />
                    </div>
                </div>
            </section>
            <section className="pt-12">
                <AnchorHeader size={2} id="support">Support</AnchorHeader>
                <p className="text-neutral-300 leading-7 mt-3">If you need any assistance with our service, feel free to reach out via our <a href="https://discord.gg/QwvzbA9KGz" className="link">Discord server</a> or shoot us an email at <a href="mailto:contact@mineatar.io" className="link">contact@mineatar.io</a>.</p>
            </section>
        </>
    );
}