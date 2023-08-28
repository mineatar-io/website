import Image from 'next/image';
import DatabaseIcon from '@/assets/icons/database.svg';
import LayersIcon from '@/assets/icons/layers.svg';
import MaximizeAltIcon from '@/assets/icons/maximize-2.svg';
import UsersIcon from '@/assets/icons/users.svg';
import ZapIcon from '@/assets/icons/zap.svg';
import mcstatusLogo from '@/assets/img/mcstatus.png';
import serverFlexLogo from '@/assets/img/serverflex.png';
import AnchorHeader from '@/components/AnchorHeader';
import HeroSearch from '@/components/HeroSearch';

export default function Page() {
    return (
        <>
            <HeroSearch />
            <section className="pt-12">
                <AnchorHeader size={2} id="about">What is Mineatar?</AnchorHeader>
                <p className="mt-3 leading-7">Mineatar is an online API for developers and website owners that allows the embedding of Minecraft avatars as images, including faces, head renders, and full body renders. It is incredibly fast and supports all of the latest Minecraft features, like slim player models and overlays.</p>
                <p className="mt-3 leading-7">It is really easy to get started using our service: simply find the type of image that you are wanting to embed on your own website or service, and copy the URL. Replace the <code>&lt;uuid&gt;</code> text in the URL with the UUID of the Minecraft player, with or without hyphens, both are allowed.</p>
            </section>
            <section className="pt-12">
                <AnchorHeader size={2} id="features">Features</AnchorHeader>
                <hgroup className="flex items-center gap-3 mt-5">
                    <ZapIcon width="18" height="18" />
                    <AnchorHeader size={3} id="incredibly-fast">Incredibly fast</AnchorHeader>
                </hgroup>
                <p className="mt-1 leading-7">Our service is incredibly efficient and fast at rendering the skin of any Minecraft player, typically only in a couple of milliseconds once the skin is fetched on our end. We built our service using the Go programming language, a fast language that can handle large workloads like our own.</p>
                <hgroup className="flex items-center gap-3 mt-5">
                    <DatabaseIcon width="18" height="18" />
                    <AnchorHeader size={3} id="efficient-caching">Efficient caching</AnchorHeader>
                </hgroup>
                <p className="mt-1 leading-7">Once a new player has been fetched once, the skin will be stored in the database of our server for up to a day. This allows any further renders to be fast, and we do not need to wait to fetch a new Minecraft skin from the Mojang API. After the cache has expired, the latest skin will be downloaded from Mojang during any new requests.</p>
                <hgroup className="flex items-center gap-3 mt-5">
                    <MaximizeAltIcon width="18" height="18" />
                    <AnchorHeader size={3} id="custom-scaling">Custom scaling</AnchorHeader>
                </hgroup>
                <p className="mt-1 leading-7">Almost all of the routes support custom scaling, meaning you can change the dimensions of the image based on a scaling factor. Simply use the <code>scale</code> query parameter to change the scaling.</p>
                <hgroup className="flex items-center gap-3 mt-5">
                    <LayersIcon width="18" height="18" />
                    <AnchorHeader size={3} id="overlay-toggling">Overlay toggling</AnchorHeader>
                </hgroup>
                <p className="mt-1 leading-7">Every image route supports toggling the overlay (helmet) of the Minecraft skin being rendered. This allows you to view the player without this layer if it is necessary. It is enabled by default on all routes, but it can be disabled using query parameters. Refer to the query parameters section of the route documentation below.</p>
                <hgroup className="flex items-center gap-3 mt-5">
                    <UsersIcon width="18" height="18" />
                    <AnchorHeader size={3} id="regular-and-slim-models">Regular and slim models</AnchorHeader>
                </hgroup>
                <p className="mt-1 leading-7">In September of 2014, Mojang released a new variant of the Minecraft skin called slim (or &quot;Alex&quot;) which allowed skins to have 3-pixel wide arms instead of the default 4. Our service will correctly render both models, keeping the same image dimensions regardless of which variant was rendered.</p>
            </section>
            <section className="pt-12">
                <AnchorHeader size={2} id="open-source">Open Source</AnchorHeader>
                <p className="mt-3 leading-7">Our service is entirely open source, allowing the developers in the community to make improvements and bug fixes on demand. This is also for transparency reasons, to openly show how the data you provide is used. If you would like to view the source code of our service, you can visit our <a href="https://github.com/mineatar-io" className="link">GitHub organization page</a>.</p>
            </section>
            <section className="pt-12">
                <AnchorHeader size={2} id="partners">Partners</AnchorHeader>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                    <a href="https://serverflex.io/product/minecraft-server-hosting?utm_source=mineatar.io">
                        <div className="card card-hover">
                            <div className="flex items-center gap-3">
                                <Image src={serverFlexLogo} alt="ServerFlex logo" width="28" height="28" />
                                <p className="font-bold text-lg">ServerFlex</p>
                            </div>
                            <p className="mt-2">Professional Minecraft server hosting, available in data centres around the world.</p>
                        </div>
                    </a>
                    <a href="https://mcstatus.io?utm_source=mineatar.io">
                        <div className="card card-hover">
                            <div className="flex items-center gap-3">
                                <Image src={mcstatusLogo} alt="Minecraft Server Status logo" width="28" height="28" />
                                <p className="font-bold text-lg">Minecraft Server Status</p>
                            </div>
                            <p className="mt-2">A fast and simple Minecraft server status utility that also has an API.</p>
                        </div>
                    </a>
                </div>
            </section>
        </>
    );
}