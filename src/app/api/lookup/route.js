import { NextResponse } from 'next/server';

export async function GET(req) {
    if (!req.nextUrl.searchParams.has('username')) return new NextResponse('Missing username from query parameters', { status: 400 });

    const username = req.nextUrl.searchParams.get('username');

    if (!/^[A-Za-z0-9_]{1,16}$/.test(username)) return new NextResponse('Invalid username', { status: 400 });

    const result = await fetch(`https://api.mojang.com/users/profiles/minecraft/${encodeURIComponent(username)}`);
    if (result.status === 404) return new NextResponse(`No Minecraft player found by the username ${username}`, { status: 404 });
    if (result.status !== 200) return new NextResponse(result.body, result);

    const body = await result.json();

    return NextResponse.json(body);
}