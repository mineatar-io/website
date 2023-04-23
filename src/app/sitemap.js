export default function generateSitemap() {
	const lastModified = new Date().toISOString();

	return [
		{ url: 'https://mineatar.io/', lastModified }
	];
}