export default async function generateSitemap() {
	const result = await fetch('http://localhost:3001/list', {
		headers: {
			Authorization: process.env.AUTH_KEY
		}
	});

	const body = await result.json();

	const lastModified = new Date().toISOString();

	return [
		{ url: 'https://mineatar.io/', lastModified },
		...body.map((uuid) => ({ url: `https://mineatar.io/player/${uuid}`, lastModified }))
	];
}