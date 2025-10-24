import Image from "next/image";
import HomepageRouterLink from "./components/homepage-router-link/homepage-router-link";

export default function Home() {
  return (
    <div className="h-screen sm:w-3/4 max-w-4xl place-self-center border-l border-r  border-[rgba(255,255,255,0.25)] bg-[#ff7f00] flex flex-col ">
      <div className="relative min-h-42 w-full">
        <Image
          src="/dithered-dorfic-clouds.png"
          alt="Background image"
          fill={true} // Makes the image fill its parent container
          sizes="100vw" // Important for responsive sizing
          style={{ objectFit: 'cover', imageRendering: 'pixelated' }}
          className="antialiased"
        />
      </div>
      <main className="flex flex-col h-full ">

        <div className="flex justify-between  border-white px-2 pt-2">
          <h1 className="text-6xl font-bold text-shadow-gray-950">Media Archive</h1>
          <p className="text-3xl font-bold">=</p>
        </div>
        <div className="flex  border-white px-2 ">
          <h2 className="text-3xl  text-shadow-gray-950 tracking-wide">GAMES/TELEVISION/FILM</h2>
        </div>

        <div className="flex place-self-center flex-1 items-center border-white px-2 ">
          <a href="/" className="text-xl border px-2 rounded-4xl hover:bg-white hover:text-[#ff7f00] transition text-shadow-gray-950 tracking-wide">Log In</a>
        </div>

        <div className="flex-1 place-content-end">
          <HomepageRouterLink text="Your Collections" hint="Create, browse, & organize your media" path="/collections/" />
          <HomepageRouterLink text="Import Tools" hint="Bring a collection from elsewhere" path="/import" />
          <HomepageRouterLink text="Export Tools" hint="Take your collections to-go" path="/export/" />
        </div>
      </main >
      <footer className="text-lg  content-end text-center py-1">Swanson Digital Arts &copy; 2025</footer>
    </div >
  );
}
