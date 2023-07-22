export default async function Loading() {
    return (
        <>
            <div className="flex gap-6 mt-5">
                <div className="block rounded bg-neutral-200 dark:bg-neutral-900 w-[180px] h-[320px]" />
                <div className="block rounded bg-neutral-200 dark:bg-neutral-900 grow h-[320px]" />
            </div>
            <div className="flex gap-6 mt-5">
                <div className="block rounded bg-neutral-200 dark:bg-neutral-900 grow h-[320px]" />
                <div className="block rounded bg-neutral-200 dark:bg-neutral-900 grow h-[320px]" />
                <div className="block rounded bg-neutral-200 dark:bg-neutral-900 grow h-[320px]" />
                <div className="block rounded bg-neutral-200 dark:bg-neutral-900 grow h-[320px]" />
            </div>
            <div className="flex gap-6 mt-5">
                <div className="block rounded bg-neutral-200 dark:bg-neutral-900 grow h-[180px]" />
                <div className="block rounded bg-neutral-200 dark:bg-neutral-900 grow h-[180px]" />
            </div>
        </>
    );
}