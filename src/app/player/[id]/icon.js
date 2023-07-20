import { ImageResponse } from 'next/server';
import { getProfile } from '@/app/player/[id]/page';

export const runtime = 'edge';

export const size = {
    width: 64,
    height: 64
};

export const contentType = 'image/png';

export default async function Icon({ params: { id } }) {
    const profile = await getProfile(id);

    return new ImageResponse(
        (
            <div style={{ display: 'flex' }}>
                <img src={`${process.env.NEXT_PUBLIC_API_HOST}/head/${profile.id}?scale=4`} width="55" height="64" style={{ left: '4px' }} />
            </div>
        ),
        size
    );
}