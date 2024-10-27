'use client';

import { useEffect } from 'react';
import * as Swetrix from 'swetrix';

/* eslint-disable @next/next/no-img-element */

export default function SwetrixLoader() {
    useEffect(() => {
        Swetrix.init('kp2OoMucM3Ki', { apiURL: 'https://swetrix.mineatar.io/log' });
        Swetrix.trackViews();
    }, []);

    return (
        <noscript>
            <img
                src="https://swetrix.mineatar.io/log/noscript?pid=kp2OoMucM3Ki"
                alt=""
                referrerPolicy="no-referrer-when-downgrade"
            />
        </noscript>
    );
}