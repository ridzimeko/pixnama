import { Button } from "./ui/button";
import { HeroCards } from "./HeroCards";
import { FrameIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="container mx-auto grid lg:grid-cols-2 place-items-center px-6 py-20 md:py-32 gap-8">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            Buat{" "}
            <span className="inline bg-gradient-to-r from-primary/90 to-primary text-transparent bg-clip-text">
              Twibbon
            </span>{" "}
            Menarik Dalam Sekejap!
          </h1>{" "}
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          Bikin dan bagikan twibbon online hanya dalam beberapa klik, tanpa
          perlu install aplikasi.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Button asChild className="w-full md:w-1/3">
            <Link href="/create">
              <FrameIcon />
              Buat Twibbon Baru
            </Link>
          </Button>
        </div>
      </div>

      {/* Hero cards sections */}
      <div className="z-10">
        <HeroCards />
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
