'use client';

import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import * as Yup from 'yup';

export default function Search({ username = '' }) {
	const { push } = useRouter();

	const form = useFormik({
		initialValues: {
			username
		},
		validationSchema: Yup.object()
			.shape({
				username: Yup.string().matches(/^[A-Za-z0-9_]{1,16}$|^[A-Fa-f0-9]{32}$|^[A-Fa-f0-9]{8}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{12}$/, 'Must be a valid username or UUID (with or without hyphens)').required('Required')
			})
			.required('Required'),
		onSubmit: ({ username }) => push(`/player/${encodeURIComponent(username)}`)
	});

	return (
		<div className="border border-neutral-200 rounded-lg p-5">
			<form onSubmit={form.handleSubmit}>
				<label className="font-bold text-lg" htmlFor="username">Lookup Player</label>
				<div className="flex flex-row gap-3 mt-2">
					<input type="text" className={`px-3 py-2 border ${form.errors.username ? 'border-red-500' : 'border-neutral-300 hover:border-neutral-500 focus:border-neutral-500'} rounded grow outline-none`} defaultValue={form.values.username} placeholder="Username or UUID" id="username" onChange={form.handleChange} onBlur={form.handleBlur} autoComplete="off" spellCheck="false" autoCapitalize="off" autoCorrect="off" autoFocus={true} />
					<button type="submit" className="px-3 py-2 border disabled:border-neutral-100 disabled:bg-neutral-100 [&:not(:disabled)]:border-neutral-300 hover:[&:not(:disabled)]:border-neutral-500 focus:[&:not(:disabled)]:border-neutral-500 rounded" disabled={!form.isValid || form.isSubmitting || !form.dirty}>Submit</button>
				</div>
				{
					form.errors.username
						? <p className="font-bold text-red-500 mt-2">{form.errors.username}</p>
						: null
				}
			</form>
		</div>
	);
}