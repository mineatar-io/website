'use client';

import { useEffect, useState } from 'react';
import CopyIcon from '@/assets/icons/copy.svg';

export default function CopyToClipboardButton({ text, className = '', ...props }) {
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
        <button type="button" className={`button w-fit px-2 py-1 flex items-center gap-2 ${className}`} onClick={() => copyToClipboard(text)} disabled={isCopied} {...props}>
            <CopyIcon width="16" height="16" />
            <span>{isCopied ? 'Copied!' : 'Copy'}</span>
        </button>
    );
}