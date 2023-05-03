'use client';

import { useEffect, useState } from 'react';
import CopyIcon from '../assets/icons/copy.svg';

export default function CopyToClipboardButton({ text }) {
	const [isCopied, setCopied] = useState(false);

	const copyToClipboard = async (text) => {
		await navigator.clipboard.writeText(text);

		setCopied(true);
	};

	useEffect(() => {
		if (!isCopied) return;

		const timer = setTimeout(() => setCopied(false), 1000 * 2);

		return () => clearTimeout(timer);
	}, [isCopied]);

	return (
		<button type="button" className="px-2 py-1 flex flex-row gap-2 items-center rounded border border-neutral-300 hover:border-neutral-500" onClick={() => copyToClipboard(text)} disabled={isCopied}>
			<CopyIcon width="16" height="16" />
			<span>{isCopied ? 'Copied!' : 'Copy'}</span>
		</button>
	);
}