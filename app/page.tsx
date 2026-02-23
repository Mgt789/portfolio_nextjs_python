import Image from "next/image";
import TypingText from "@/app/animationText"

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen  bg-zinc-50 font-sans dark:bg-[var(--background)]  max-w-12xl mx-auto">
      <section id="home" className="container flex items-center justify-center absolute" style={{ top: '20%', flexDirection: 'column' }}>
        <div className="heroBackground items-center flex">
          <div className="flex absolute items-center">
            <Image
              src="/images/me.webp"
              alt="Me"
              width={400}
              height={400}
              priority
            />
          </div>
          <div className="flex align-item-center items-center">

            <Image
              src="/images/me-glow.webp"
              alt="Me"
              width={400}
              height={400}
              priority
            />
            <div>
              <p className="text-2xl">A Designer who</p>

              <h1 className="text-5xl tracking-tight lg:text-7xl font-semibold text-white leading-tight">
                Judges a book
                <br />
                by its{" "}
                <span className="relative inline-block">
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

        <div className="">
          <TypingText />
        </div>
      </section>

      {/* <section>
        <h1>test</h1>
      </section> */}

    </div>
  );

}
