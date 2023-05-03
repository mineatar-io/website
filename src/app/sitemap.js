export default async function generateSitemap() {
	const result = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/list`, {
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