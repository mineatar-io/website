export default async function generateSitemap() {
    let uuids = [];

    if ('AUTH_KEY' in process.env && process.env.AUTH_KEY.length > 0) {
        const result = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/list`, {
            headers: {
                Authorization: process.env.AUTH_KEY
            }
        });

        uuids = await result.json();
    }

    const lastModified = new Date().toISOString();

    return [
        { url: 'https://mineatar.io/', lastModified },
        ...uuids.map((uuid) => ({ url: `https://mineatar.io/player/${uuid}`, lastModified }))
    ];
}