'use server';

import 'server-only';

export default async function lookupUsername(username) {
    if (!/^[A-Za-z0-9_]{1,16}$/.test(username)) throw new Error('Invalid username: ' + username);

    const result = await fetch(`https://api.mojang.com/users/profiles/minecraft/${encodeURIComponent(username)}`);

    if (!result.ok) {
        if (result.status === 404) return null;

        throw new Error(await result.text());
    }

    return await result.json();
}