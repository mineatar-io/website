import AnchorHeader from '@/components/AnchorHeader';

export const metadata = {
    title: 'About',
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
    }
};

export default function Page() {
    return (
        <>
            <section>
                <h1 className="title">About</h1>
                <p className="text-neutral-300 leading-7 mt-3">Mineatar was built to be an alternative to existing Minecraft skin API services which improves the speed and efficiency of rendering Minecraft player skins as 3-dimensional images. Everything was built from the ground-up using <a href="https://go.dev" className="link">Go</a> as the language of choice for extreme performance, and this website was built using <a href="https://nextjs.org" className="link">NextJS</a>. </p>
            </section>
            <section className="pt-12">
                <AnchorHeader size={2} id="faq">Frequently Asked Questions</AnchorHeader>
                <AnchorHeader size={3} className="text-lg mt-5" id="faq-1">1. Why can I not use usernames instead of UUIDs?</AnchorHeader>
                <p className="text-neutral-300 mt-1 leading-7">It is possible for us to enable username lookup, but the limitations that Mojang puts in place makes it impossible for our service to grow. Mojang heavily rate limits the API route required to convert usernames into UUIDs. We used to allow this, but deprecated and disabled the feature in early May of 2023.</p>
                <AnchorHeader size={3} className="text-lg mt-5" id="faq-2">2. What is this service built with?</AnchorHeader>
                <p className="text-neutral-300 mt-1 leading-7">We decided that Go would be one of the best choices for building a scalable image rendering service due to the concurrency model the Go development team used. It is also a high level syntax language, making it easy for experienced and inexperienced developers alike to understand the source code. It also happens to be one of the languages that the main developer is familiar with.</p>
                <AnchorHeader size={3} className="text-lg mt-5" id="faq-3">3. How do I force a new image to be rendered?</AnchorHeader>
                <p className="text-neutral-300 mt-1 leading-7">The short answer: you can&apos;t. Just be patient, our service is intentionally designed to cache and store skins and renders for up to 24 hours to prevent abuse. Please do not attempt to contact us to request any exceptions to our cache.</p>
            </section>
            <section className="pt-12">
                <AnchorHeader size={2} id="credit">Credit</AnchorHeader>
                <p className="text-neutral-300 mt-1">Without the support of other services, this service would not be possible. We would like to give credit to the services that made us possible.</p>
                <ul className="list-disc list-inside mt-3">
                    <li>
                        <span className="text-neutral-500 dark:text-neutral-300">
                            <a href="https://github.com/crafatar/crafatar" className="link">Crafatar</a> &ndash; Provided an example of how isometric skin parts are rendered
                        </span>
                    </li>
                    <li>
                        <span className="text-neutral-500 dark:text-neutral-300">
                            <a href="https://feathericons.com/" className="link">Feather Icons</a> &ndash; Modern icons used on this website
                        </span>
                    </li>
                </ul>
            </section>
            <section className="pt-12">
                <AnchorHeader size={2} id="contact">Contact</AnchorHeader>
                <p className="text-neutral-300 mt-1">If you would like to contact us, you can do so by sending an email to <a href="mailto:contact@mineatar.io" className="link">contact@mineatar.io</a> or joining our <a href="https://discord.gg/QwvzbA9KGz" className="link">Discord server</a>.</p>
            </section>
        </>
    );
}