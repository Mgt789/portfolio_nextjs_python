import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black container max-w-6xl mx-auto">
      <div className="heroBackground">
        <div className="flex absolute">
          <Image
            src="/images/me.webp"
            alt="Me"
            width={300}
            height={300}
            priority
          />
        </div>
        <div className="flex align-item-center">

          <Image
            src="/images/me-glow.webp"
            alt="Me"
            width={300}
            height={300}
            priority
          />
          <div>
            <p className="text-2xl">A Designer who</p>

            <h1 className="text-5xl tracking-tight lg:text-7xl font-semibold text-white leading-tight">
              Judges a book
              <br />
              by its{" "}
              <span className="relative inline-block">
                {/* <Image
                  src="/assets/circle.png"
                  alt="Circle"
                  width={200}
                  height={200}
                  className="absolute mt-2"
                /> */}
                <span className="bg-gradient-to-r from-violet-600 via-violet-400 to-violet-600 bg-clip-text text-transparent">
                  cover
                </span>
              </span>
              ...
            </h1>

            <p className="text-md text-white/80">
              Because if the cover does not impress you what else can?
            </p>
          </div>

        </div>

      </div>
    </div>
  );

}
