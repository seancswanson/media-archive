export default function HomepageRouterLink({ text, hint, path }: { text: string, hint: string, path: string }) {
    return (
        <a href={path} className="flex justify-between items-end border-b first-of-type:border-t p-2 flex-1">
            <h2 className="text-4xl font-bold text-shadow-gray-950">{text}</h2>
            <p className="text-xl ">{hint}</p>
        </a>
    )
}