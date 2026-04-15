import { Navbar } from "@/src/components/Navbar";
import { CardGrid } from "@/src/components/CardGrid";


export default function Home() {
  return (
    <div className="flex flex-col bg-[var(--color-navy-950)] w-full h-fit p-6 sm:py-10 sm:px-20 lg:flex-row lg:h-screen lg:py-20 lg:px-50 xl:py-40 xl:px-70" >
      <Navbar />
      <CardGrid />
    </div>
  );
}

