'use server';

import 'server-only';

const uuidRegEx = /^[A-Fa-f0-9]{32}$|^[A-Fa-f0-9]{8}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{12}$/;

export default async function getPlayer(uuid) {
    if (!uuidRegEx.test(uuid)) throw new Error('Invalid UUID: ' + uuid);

    const result = await fetch(`https://sessionserver.mojang.com/session/minecraft/profile/${encodeURIComponent(uuid)}`);

    if (result.status !== 200) {
        if (result.status === 204 || result.status === 404) return null;

        throw new Error(await result.text());
    }

    return await result.json();
}