import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, MicrophoneIcon } from "@/components/icons";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const sampleObservations = [
  {
    index: "01",
    title: "The wind arrives before the weather does",
    excerpt: "Flat water under a clear sky can turn within twenty minutes.",
    category: "Fishing conditions",
  },
  {
    index: "02",
    title: "A current that runs against the tide",
    excerpt: "A short northward pull near the rocky point, just before the tide turns.",
    category: "Local knowledge",
  },
  {
    index: "03",
    title: "What an old repair can teach you",
    excerpt: "A patched net holds when the knot matches the tension of the mesh.",
    category: "Gear and equipment",
  },
];

const primaryButton =
  "inline-flex items-center justify-center gap-1.5 rounded-[2px] bg-accent px-4 py-2.5 text-[13px] font-medium text-background transition-colors hover:bg-[#3b655a]";

const secondaryButton =
  "inline-flex items-center justify-center gap-1.5 rounded-[2px] border border-line px-4 py-2.5 text-[13px] font-medium text-foreground transition-colors hover:border-accent hover:text-accent";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-background focus:px-3 focus:py-2 focus:text-[13px] focus:font-medium focus:text-foreground"
      >
        Skip to content
      </a>

      <SiteHeader />

      <main id="main" className="flex-1">
        <section
          aria-labelledby="hero-heading"
          className="mx-auto grid max-w-[1120px] grid-cols-1 items-center gap-8 px-4 pt-8 pb-10 sm:px-6 sm:pt-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:pt-12 lg:pb-14"
        >
          <div>
            <p className="flex items-center gap-2.5 text-[10px] font-semibold tracking-[0.18em] text-accent uppercase sm:text-[11px]">
              <span aria-hidden="true" className="h-px w-6 bg-accent" />
              Local knowledge. Shared wisdom.
            </p>

            <h1
              id="hero-heading"
              aria-label="Knowledge travels from voice to voice."
              className="mt-4 font-display text-[clamp(2.75rem,5.2vw,4.75rem)] leading-[0.92] tracking-[0.01em]"
            >
              <span className="block">Knowledge travels</span>
              <span className="block">
                from <span className="text-accent">voice</span>
              </span>
              <span className="block">to voice.</span>
            </h1>

            <p className="mt-4 max-w-[42ch] text-[15px] leading-6 text-muted-strong">
              Preserve local wisdom, share observations, and learn from the
              experiences of fishing communities.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-2.5">
              <Link href="/app/share" className={primaryButton}>
                Share knowledge
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
              <Link href="/app" className={secondaryButton}>
                Explore observations
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          <figure>
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#e5e0d4]">
              <Image
                src="/images/mending-nets.jpg"
                alt="A fisher sits cross-legged on a tarp, mending a long net beside stacked sacks and a parked motorcycle."
                fill
                priority
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover object-center"
              />
            </div>
            <figcaption className="mt-2.5 flex flex-col gap-1 border-t border-line pt-2.5 text-[11px] leading-4 text-muted-strong sm:flex-row sm:gap-4">
              <span className="shrink-0 font-semibold tracking-[0.14em] text-accent uppercase">
                Field note
              </span>
              <span>
                Mending nets before the morning set, Chabahar, Iran.
                Photograph by Parastoo Maleki, via Unsplash.
              </span>
            </figcaption>
          </figure>
        </section>

        <section
          aria-labelledby="stories-heading"
          className="border-t border-line"
        >
          <div className="mx-auto max-w-[1120px] px-4 py-10 sm:px-6 lg:py-14">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="font-editorial text-[11px] font-medium tracking-[0.16em] text-accent uppercase sm:text-[12px]">
                  From the community
                </p>
                <h2
                  id="stories-heading"
                  className="mt-2 font-display text-[clamp(2rem,3.8vw,3.5rem)] leading-[0.95] tracking-[0.01em]"
                >
                  Stories from the water.
                </h2>
              </div>
              <div className="sm:text-right">
                <p className="text-xs leading-5 text-muted-strong">
                  Illustrative examples, not verified reports.
                </p>
                <Link
                  href="/app"
                  className="group mt-1 inline-flex items-center gap-1.5 text-[13px] font-medium text-accent hover:underline hover:underline-offset-4"
                >
                  Explore all observations
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>

            <div className="mt-6 border-t border-line">
              {sampleObservations.map((observation) => (
                <article
                  key={observation.index}
                  className="border-b border-line last:border-b-0"
                >
                  <Link
                    href="/app"
                    className="group grid gap-2 py-4 sm:grid-cols-[2rem_minmax(0,1fr)_auto_1rem] sm:items-center sm:gap-4"
                  >
                    <span
                      aria-hidden="true"
                      className="hidden text-[10px] font-semibold tracking-[0.14em] text-muted sm:block"
                    >
                      {observation.index}
                    </span>

                    <div className="min-w-0">
                      <h3 className="font-display text-xl leading-[1.05] tracking-[0.01em] transition-colors group-hover:text-accent sm:text-[1.35rem]">
                        {observation.title}
                      </h3>
                      <p className="mt-1 text-[13px] leading-5 text-muted-strong">
                        {observation.excerpt}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 text-[10px] font-medium tracking-[0.1em] uppercase">
                      <span className="bg-sage px-2 py-1 text-accent">
                        {observation.category}
                      </span>
                      <span className="text-muted-strong">Sample</span>
                    </div>

                    <ArrowUpRight className="hidden h-4 w-4 text-muted transition-colors group-hover:text-accent sm:block" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          aria-labelledby="voice-heading"
          className="border-y border-line bg-sage"
        >
          <div className="mx-auto flex max-w-[1120px] flex-col gap-5 px-4 py-6 sm:px-6 md:flex-row md:items-center md:justify-between md:gap-8 lg:py-7">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-accent/25 text-accent">
                <MicrophoneIcon className="h-5 w-5" />
              </div>
              <div>
                <p className="font-editorial text-[11px] font-medium tracking-[0.16em] text-accent uppercase sm:text-[12px]">
                  Voice-first by design
                </p>
                <h2
                  id="voice-heading"
                  className="mt-1 font-display text-[clamp(1.5rem,2.4vw,2rem)] leading-[1.05] tracking-[0.01em]"
                >
                  Some knowledge is easier to tell than to type.
                </h2>
                <p className="mt-1 max-w-[62ch] font-editorial text-[14px] leading-5 text-muted-strong">
                  Voice capture is in development: record a thought, review the
                  transcript, and publish only when you are ready.
                </p>
              </div>
            </div>

            <Link
              href="/app/share"
              className="group inline-flex shrink-0 items-center gap-1.5 border-b border-accent pb-1 text-[13px] font-medium text-accent transition-colors hover:border-foreground hover:text-foreground md:ml-4"
            >
              Share an observation
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
