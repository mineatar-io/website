'use client';

import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import * as Yup from 'yup';
import ArrowRightIcon from '@/assets/icons/arrow-right.svg';

export default function Search({ username = '', className = '', ...props }) {
    const { push } = useRouter();

    const form = useFormik({
        validateOnBlur: false,
        validateOnChange: false,
        initialValues: {
            username
        },
        validationSchema: Yup.object({
            username: Yup.string().matches(/^[A-Za-z0-9_]{1,16}$|^[A-Fa-f0-9]{32}$|^[A-Fa-f0-9]{8}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{12}$/, 'Must be a valid username or UUID (with or without hyphens)').required('Required')
        }).required('Required'),
        onSubmit: ({ username }) => push(`/player/${encodeURIComponent(username)}`)
    });

    return (
        <div className={`border border-neutral-200 rounded-lg p-5 ${className}`} {...props}>
            <form onSubmit={form.handleSubmit}>
                <label className="font-bold" htmlFor="username">Lookup Player</label>
                <div className="flex flex-col sm:flex-row gap-3 mt-2">
                    <input type="text" className="input grow font-mono" defaultValue={form.values.username} placeholder="Username or UUID" id="username" onChange={form.handleChange} autoComplete="off" spellCheck="false" autoCapitalize="off" autoCorrect="off" autoFocus={true} />
                    <button type="submit" className="button flex items-center justify-center gap-2" disabled={!form.isValid || form.isSubmitting || !form.dirty}>
                        <span>Search</span>
                        <ArrowRightIcon width="16" height="16" />
                    </button>
                </div>
            </form>
        </div>
    );
}