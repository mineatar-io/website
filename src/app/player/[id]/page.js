import Image from 'next/image';
import DownloadIcon from '../../../assets/icons/download.svg';
import CopyToClipboardButton from '../../../components/CopyToClipboardButton';

const hyphenateUUID = (uuid) => `${uuid.slice(0, 8)}-${uuid.slice(8, 12)}-${uuid.slice(12, 16)}-${uuid.slice(16, 20)}-${uuid.slice(20, 32)}`;

export async function getProfile(uuid) {
	if (/^[A-Za-z0-9_]{1,16}$/.test(uuid)) {
		const result = await fetch(`${process.env.NEXT_PUBLIC_INTERNAL_API_HOST}/lookup?username=${encodeURIComponent(uuid)}`);

		if (result.status !== 200) {
			const body = await result.text();

			throw new Error(body);
		}

		const body = await result.json();
		uuid = body.id;
	}

	const result = await fetch(`${process.env.NEXT_PUBLIC_INTERNAL_API_HOST}/player?uuid=${encodeURIComponent(uuid)}`);
	const body = await result.json();

	try {
		// This is to ensure that the skin will be fetched from Mojang before
		// all the rendered images are served to the client, to prevent any
		// race conditions on the server.
		await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/skin/${encodeURIComponent(body.id)}`);
	} catch {
		// Ignore
	}

	return body;
}

export default async function Page({ params: { id } }) {
	const profile = await getProfile(id);

	return (
		<>
			<div className="border border-neutral-200 rounded-lg p-10 mt-5">
				<div className="flex flex-row items-center gap-10">
					<div className="pl-2 pr-10 border-r border-r-neutral-200 py-5">
						<Image src={`${process.env.NEXT_PUBLIC_API_HOST}/body/full/${profile.id}?scale=16`} width="96" height="216" alt={`Full body of ${profile.name}`} />
					</div>
					<div className="flex flex-col gap-3 grow">
						<div>
							<p className="font-bold text-xl">Username</p>
							<p className="mt-1 font-mono">{profile.name}</p>
						</div>
						<div>
							<p className="font-bold text-xl">UUID</p>
							<p className="flex flex-row gap-3 items-center mt-1">
								<span className="font-mono">{hyphenateUUID(profile.id.replaceAll('-', ''))}</span>
								<CopyToClipboardButton text={hyphenateUUID(profile.id.replaceAll('-', ''))} />
							</p>
						</div>
						<div>
							<p className="font-bold text-xl">Trimmed UUID</p>
							<p className="flex flex-row gap-3 items-center mt-1">
								<span className="font-mono">{profile.id.replaceAll('-', '')}</span>
								<CopyToClipboardButton text={profile.id.replaceAll('-', '')} />
							</p>
						</div>
						<div className="flex flex-row gap-3 mt-2">
							<a className="flex flex-row items-center gap-2 px-3 py-2 rounded border border-neutral-300 hover:border-neutral-500" href={`https://api.mineatar.io/skin/${profile.id}?download=true`} target="_blank" rel="noreferrer">
								<DownloadIcon width="20" height="20" />
								<span>Download Raw Skin</span>
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className="flex flex-row items-center gap-5 mt-5">
				<div className="border border-neutral-200 rounded-lg p-6 flex flex-col gap-5 items-center grow">
					<Image src={`${process.env.NEXT_PUBLIC_API_HOST}/body/front/${profile.id}?scale=16`} width="256" height="512" className="max-h-[216px] w-auto" alt={`Front side body of ${profile.name}`} />
					<p className="font-bold">Front Side of Body</p>
				</div>
				<div className="border border-neutral-200 rounded-lg p-6 flex flex-col gap-5 items-center grow">
					<Image src={`${process.env.NEXT_PUBLIC_API_HOST}/body/left/${profile.id}?scale=16`} width="128" height="512" className="max-h-[216px] w-auto" alt={`Left side body of ${profile.name}`} />
					<p className="font-bold">Left Side of Body</p>
				</div>
				<div className="border border-neutral-200 rounded-lg p-6 flex flex-col gap-5 items-center grow">
					<Image src={`${process.env.NEXT_PUBLIC_API_HOST}/body/back/${profile.id}?scale=16`} width="256" height="512" className="max-h-[216px] w-auto" alt={`Back side body of ${profile.name}`} />
					<p className="font-bold">Back Side of Body</p>
				</div>
				<div className="border border-neutral-200 rounded-lg p-6 flex flex-col gap-5 items-center grow">
					<Image src={`${process.env.NEXT_PUBLIC_API_HOST}/body/right/${profile.id}?scale=16`} width="128" height="512" className="max-h-[216px] w-auto" alt={`Right side body of ${profile.name}`} />
					<p className="font-bold">Right Side of Body</p>
				</div>
			</div>
			<div className="flex flex-row items-center gap-5 mt-5">
				<div className="border border-neutral-200 rounded-lg p-6 flex flex-col gap-5 items-center grow">
					<Image src={`${process.env.NEXT_PUBLIC_API_HOST}/face/${profile.id}?scale=32`} width="256" height="256" className="max-h-[216px] w-auto" alt={`Face of ${profile.name}`} />
					<p className="font-bold">Face</p>
				</div>
				<div className="border border-neutral-200 rounded-lg p-6 flex flex-col gap-5 items-center grow">
					<Image src={`${process.env.NEXT_PUBLIC_API_HOST}/head/${profile.id}?scale=16`} width="221" height="256" className="max-h-[216px] w-auto" alt={`Head of ${profile.name}`} />
					<p className="font-bold">Head</p>
				</div>
			</div>
		</>
	);
}