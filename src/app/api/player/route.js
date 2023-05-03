import { NextResponse } from 'next/server';

export async function GET(req) {
	if (!req.nextUrl.searchParams.has('uuid')) return new NextResponse('Missing uuid from query parameters', { status: 400 });

	const uuid = req.nextUrl.searchParams.get('uuid');

	if (!/^[A-Fa-f0-9]{32}$|^[A-Fa-f0-9]{8}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{12}$/.test(uuid)) return new NextResponse('Invalid UUID', { status: 400 });

	const result = await fetch(`https://sessionserver.mojang.com/session/minecraft/profile/${encodeURIComponent(uuid)}`);
	if (result.status !== 200) return new NextResponse(result.body, result);

	const body = await result.json();

	return NextResponse.json(body);
}