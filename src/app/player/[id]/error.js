'use client';

import { useEffect } from 'react';

export default function Error({ error }) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="border border-red-500 bg-red-100 rounded-lg p-5 mt-5">
            <p className="font-bold text-red-500">Failed to retrieve a profile by that username or UUID.</p>
        </div>
    );
}