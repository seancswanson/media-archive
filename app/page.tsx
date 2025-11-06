import Header from "./components/header/header";

export default function Home() {
  return (
    <div className="h-screen sm:w-3/4 max-w-4xl place-self-center  bg-[#ff7f00] flex flex-col ">

      <Header />
      <main className="flex flex-col h-full ">
        content area
      </main>
      <footer className="text-lg content-end text-center py-1">Swanson Digital Arts &copy; 2025</footer>
    </div>
  );
}
