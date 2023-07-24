import Image from 'next/image';

export default function Route({ path, query, result, ...props }) {
    return (
        <div className="card flex flex-col md:flex-row gap-5 max-w-full overflow-x-auto" {...props}>
            <div className="grow">
                <p className="flex items-center gap-2 leading-6">
                    <span className="bg-green-700 text-white text-xs px-2 py-1 rounded">GET</span>
                    <code>https://api.mineatar.io<span className="font-bold">{path}</span></code>
                </p>
                <p className="font-bold mt-5">Query Parameters</p>
                <table className="table table-auto border-x border-t border-neutral-200 dark:border-neutral-700 min-w-[640px] mt-2">
                    <thead className="table-header-group">
                        <tr className="table-row">
                            <th className="table-cell text-left p-3 border-b border-b-neutral-200 dark:border-b-neutral-700 w-2/12">Name</th>
                            <th className="table-cell text-left p-3 border-b border-b-neutral-200 dark:border-b-neutral-700 w-2/12">Data Type</th>
                            <th className="table-cell text-left p-3 border-b border-b-neutral-200 dark:border-b-neutral-700 w-1/12">Default</th>
                            <th className="table-cell text-left p-3 border-b border-b-neutral-200 dark:border-b-neutral-700 w-7/12">Description</th>
                        </tr>
                    </thead>
                    <tbody className="table-row-group">
                        {
                            query.map((param, index) => (
                                <tr className="table-row border-b border-b-neutral-200 dark:border-b-neutral-700" key={index}>
                                    <th className="table-cell text-left p-3"><code>{param.name}</code></th>
                                    <td className="table-cell text-left p-3"><code>{param.type}</code></td>
                                    <td className="table-cell text-left p-3"><code>{param.default}</code></td>
                                    <td className="table-cell text-left p-3">{param.description}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <div className="mt-5 md:mt-0 md:pl-5 md:w-[240px]">
                <Image src={result} width="256" height="256" alt={`Example result for ${path}`} className="max-h-[240px] md:min-h-[96px] md:mx-auto w-auto md:max-h-[420px]" />
            </div>
        </div>
    );
}