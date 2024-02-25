export default async function generateSitemap() {
    const lastModified = new Date().toISOString();

    return [
        { url: 'https://mineatar.io/', lastModified },
        { url: 'https://mineatar.io/docs', lastModified },
        { url: 'https://mineatar.io/about', lastModified }
    ];
}