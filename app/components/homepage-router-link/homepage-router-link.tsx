import "./homepage-router-link.scss";

export default function HomepageRouterLink({ text, hint, path }: { text: string, hint: string, path: string }) {
    return (
        <a href={path} className="homepage-router-link heavy-text-shadow">
            <h2 className="homepage-router-link-title">{text}</h2>
            <p className="homepage-router-link-hint">{hint}</p>
        </a>
    )
}