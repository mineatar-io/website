export default function generateRobots() {
    return {
        rules: {
            userAgent: '*',
            allow: '/'
        },
        sitemap: 'https://mineatar.io/sitemap.xml'
    };
}