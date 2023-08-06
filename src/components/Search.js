'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import ArrowRightIcon from '@/assets/icons/arrow-right.svg';

const validUsernameRegEx = /^[a-z0-9_]{1,16}$|^[a-f0-9]{8}-?[a-f0-9]{4}-?[a-f0-9]{4}-?[a-f0-9]{4}-?[a-f0-9]{12}$/i;

export default function Search({ defaultUsername = '', className = '', ...props }) {
    const [username, setUsername] = useState(defaultUsername);
    const { push } = useRouter();

    const isValid = () => username !== defaultUsername && validUsernameRegEx.test(username);

    const handleChange = (event) => {
        setUsername(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        push(`/player/${encodeURIComponent(username)}`);

        return false;
    };

    return (
        <div className={`card ${className}`} {...props}>
            <form onSubmit={handleSubmit}>
                <label className="font-bold" htmlFor="username">Lookup Player</label>
                <div className="flex flex-col sm:flex-row gap-3 mt-2">
                    <input type="text" className="input grow font-mono" onChange={handleChange} defaultValue={username} placeholder="Username or UUID (e.g. Notch)" id="username" autoComplete="off" spellCheck="false" autoCapitalize="off" autoCorrect="off" autoFocus={true} />
                    <button type="submit" className="button flex items-center justify-center gap-2" disabled={!isValid()}>
                        <span>Search</span>
                        <ArrowRightIcon width="16" height="16" />
                    </button>
                </div>
            </form>
        </div>
    );
}