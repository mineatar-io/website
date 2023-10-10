import Image from 'next/image';
import { notFound } from 'next/navigation';
import getPlayer from '@/actions/getPlayer';
import lookupUsername from '@/actions/lookupUsername';
import DownloadIcon from '@/assets/icons/download.svg';
import CopyToClipboardButton from '@/components/CopyToClipboardButton';

const hyphenateUUID = (uuid) => `${uuid.slice(0, 8)}-${uuid.slice(8, 12)}-${uuid.slice(12, 16)}-${uuid.slice(16, 20)}-${uuid.slice(20, 32)}`;

export async function getProfile(input) {
    if (!/(?:^[A-Fa-f0-9]{32}$|^[A-Fa-f0-9]{8}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{12}$)|(?:^[A-Za-z0-9_]{1,16}$)/.test(input)) return null;

    if (/^[A-Za-z0-9_]{1,16}$/.test(input)) {
        const result = await lookupUsername(input);
        if (!result) return null;

        input = result.id;
    }

    return await getPlayer(input);
}

export async function generateMetadata({ params: { id } }) {
    const profile = await getProfile(id);

    return {
        title: profile?.name ?? 'Unknown',
        description: `The profile information and rendered skin for the Minecraft player ${profile?.name ?? 'unknown'}.`,
        openGraph: {
            title: `${profile?.name ?? 'Unknown'} - Mineatar`,
            description: `The profile information and rendered skin for the Minecraft player ${profile?.name ?? 'unknown'}.`,
            url: `/player/${id}`,
            siteName: 'Mineatar',
            images: [
                {
                    url: '/img/icon.png',
                    width: 591,
                    height: 591
                }
            ],
            locale: 'en-US',
            type: 'website'
        }
    };
}

export default async function Page({ params: { id } }) {
    const profile = await getProfile(id);
    if (!profile) return notFound();

    const uuidWithHyphens = profile.id ? hyphenateUUID(profile.id) : null;

    return (
        <>
            <div className="mt-5">
                <div className="flex flex-col md:flex-row gap-5">
                    <a className="card card-hover flex flex-col justify-center items-center min-w-[180px] p-6" href={`${process.env.NEXT_PUBLIC_API_HOST}/body/full/${profile.id}?scale=16`}>
                        <Image src={`${process.env.NEXT_PUBLIC_API_HOST}/body/full/${profile.id}?scale=16`} width="96" height="216" className="mx-auto md:mx-0" alt={`Full body of ${profile.name}`} priority />
                    </a>
                    <div className="flex flex-col gap-5 grow break-all">
                        <div className="card">
                            <p className="font-bold text-xl">Username</p>
                            <p className="mt-1 font-mono">{profile.name}</p>
                        </div>
                        <div className="card">
                            <p className="font-bold text-xl">UUID</p>
                            <p className="flex flex-col md:flex-row gap-1 md:gap-3 md:items-center mt-1">
                                <span className="font-mono">{uuidWithHyphens}</span>
                                <CopyToClipboardButton text={uuidWithHyphens} />
                            </p>
                        </div>
                        <div className="card">
                            <p className="font-bold text-xl">Trimmed UUID</p>
                            <p className="flex flex-col md:flex-row gap-1 md:gap-3 md:items-center mt-1">
                                <span className="font-mono">{profile.id}</span>
                                <CopyToClipboardButton text={profile.id} />
                            </p>
                        </div>
                        <div className="card">
                            <div className="flex items-center gap-3 mt-1">
                                <a className="button flex items-center gap-2" href={`https://api.mineatar.io/skin/${profile.id}?download=true`} target="_blank" rel="noreferrer">
                                    <DownloadIcon width="20" height="20" />
                                    <span>Download Raw Skin</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row md:items-center gap-5 mt-5">
                <a className="card card-hover p-6 flex flex-col gap-5 items-center basis-1/4" href={`${process.env.NEXT_PUBLIC_API_HOST}/body/front/${profile.id}?scale=16`}>
                    <Image src={`${process.env.NEXT_PUBLIC_API_HOST}/body/front/${profile.id}?scale=16`} width="256" height="512" className="max-h-[216px] w-auto" alt={`Front side body of ${profile.name}`} priority />
                    <p className="font-bold">Front Side of Body</p>
                </a>
                <a className="card card-hover p-6 flex flex-col gap-5 items-center basis-1/4" href={`${process.env.NEXT_PUBLIC_API_HOST}/body/left/${profile.id}?scale=16`}>
                    <Image src={`${process.env.NEXT_PUBLIC_API_HOST}/body/left/${profile.id}?scale=16`} width="256" height="512" className="max-h-[216px] w-auto" alt={`Left side body of ${profile.name}`} priority />
                    <p className="font-bold">Left Side of Body</p>
                </a>
                <a className="card card-hover p-6 flex flex-col gap-5 items-center basis-1/4" href={`${process.env.NEXT_PUBLIC_API_HOST}/body/back/${profile.id}?scale=16`}>
                    <Image src={`${process.env.NEXT_PUBLIC_API_HOST}/body/back/${profile.id}?scale=16`} width="256" height="512" className="max-h-[216px] w-auto" alt={`Back side body of ${profile.name}`} priority />
                    <p className="font-bold">Back Side of Body</p>
                </a>
                <a className="card card-hover p-6 flex flex-col gap-5 items-center basis-1/4" href={`${process.env.NEXT_PUBLIC_API_HOST}/body/right/${profile.id}?scale=16`}>
                    <Image src={`${process.env.NEXT_PUBLIC_API_HOST}/body/right/${profile.id}?scale=16`} width="256" height="512" className="max-h-[216px] w-auto" alt={`Right side body of ${profile.name}`} priority />
                    <p className="font-bold">Right Side of Body</p>
                </a>
            </div>
            <div className="flex flex-col md:flex-row md:items-center gap-5 mt-5">
                <a className="card card-hover p-6 flex flex-col gap-5 items-center basis-1/2" href={`${process.env.NEXT_PUBLIC_API_HOST}/face/${profile.id}?scale=32`}>
                    <Image src={`${process.env.NEXT_PUBLIC_API_HOST}/face/${profile.id}?scale=32`} width="256" height="256" className="max-h-[216px] w-auto" alt={`Face of ${profile.name}`} priority />
                    <p className="font-bold">Face</p>
                </a>
                <a className="card card-hover p-6 flex flex-col gap-5 items-center basis-1/2" href={`${process.env.NEXT_PUBLIC_API_HOST}/head/${profile.id}?scale=16`}>
                    <Image src={`${process.env.NEXT_PUBLIC_API_HOST}/head/${profile.id}?scale=16`} width="221" height="256" className="max-h-[216px] w-auto" alt={`Head of ${profile.name}`} priority />
                    <p className="font-bold">Head</p>
                </a>
            </div>
        </>
    );
}