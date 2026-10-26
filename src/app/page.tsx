import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, MicrophoneIcon } from "@/components/icons";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const sampleObservations = [
  {
    index: "01",
    title: "The wind arrives before the weather does",
    excerpt:
      "The water can stay flat under a clear sky, then turn in twenty minutes. The older fishers watch the direction of the ripples, not only the forecast.",
    category: "Fishing conditions",
    location: "Eastern bay",
    source: "Firsthand sample",
  },
  {
    index: "02",
    title: "A current that runs against the tide",
    excerpt:
      "For a short window, the water pulls north while the tide is still rising. The weed lines show it before the surface does.",
    category: "Local knowledge",
    location: "The rocky point",
    source: "Firsthand sample",
  },
  {
    index: "03",
    title: "What an old repair can teach you",
    excerpt:
      "A patched net can hold as well as a new one when the knot carries the same tension as the mesh around it. The lesson is passed down by hand, not written in a manual.",
    category: "Gear and equipment",
    location: "Harbour wall",
    source: "Secondhand sample",
  },
];

const voiceSteps = [
  {
    index: "01",
    title: "Record when you are ready",
    copy: "Microphone access is requested only after you choose to record.",
  },
  {
    index: "02",
    title: "Read and correct",
    copy: "Review the transcript, fix local names or phrasing, and make it sound like you.",
  },
  {
    index: "03",
    title: "Publish with confidence",
    copy: "Nothing is saved as an observation until you confirm the final text.",
  },
];

const buttonPrimary =
  "inline-flex items-center justify-center gap-2 rounded-[2px] bg-accent px-6 py-3.5 text-sm font-medium text-background transition-colors hover:bg-[#3b655a]";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-background focus:px-4 focus:py-3 focus:text-sm focus:font-medium focus:text-foreground"
      >
        Skip to content
      </a>

      <SiteHeader />

      <main id="main" className="flex-1">
        <section
          aria-labelledby="hero-heading"
          className="mx-auto grid max-w-[1240px] grid-cols-1 items-start gap-12 px-5 pt-14 pb-20 sm:px-8 sm:pt-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:px-10 lg:pt-24 lg:pb-28"
        >
          <div>
            <p className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.18em] text-accent uppercase sm:text-[11px] sm:tracking-[0.22em]">
              <span aria-hidden="true" className="h-px w-7 bg-accent" />
              Local knowledge. Shared wisdom.
            </p>

            <h1
              id="hero-heading"
              aria-label="Knowledge travels from voice to voice."
              className="mt-6 font-serif text-[clamp(2.55rem,6.4vw,4.6rem)] leading-[0.98] tracking-[-0.035em]"
            >
              <span className="block">Knowledge travels</span>
              <span className="block">
                from <em className="text-accent italic">voice</em>
              </span>
              <span className="block">to voice.</span>
            </h1>

            <p className="mt-8 max-w-[43ch] text-[17px] leading-7 text-muted-strong">
              Every fisher has a story. FishFolk helps communities preserve
              local knowledge, share observations, and learn from one another.
            </p>

            <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-7">
              <Link href="/app/share" className={buttonPrimary}>
                Share your knowledge
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                href="/app"
                className="group inline-flex items-center gap-2 py-2 text-sm font-medium text-foreground transition-colors hover:text-accent"
              >
                Explore stories
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          <figure className="lg:border-l lg:border-line lg:pl-8">
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#e5e0d4] sm:aspect-[16/10] lg:aspect-[4/5]">
              <Image
                src="/images/mending-nets.jpg"
                alt="A fisher sits cross-legged on a tarp, mending a long net beside stacked sacks and a parked motorcycle."
                fill
                priority
                sizes="(min-width: 1024px) 38vw, 100vw"
                className="object-cover object-center"
              />
            </div>
            <figcaption className="mt-4 grid gap-2 border-t border-line pt-3 text-xs sm:grid-cols-[auto_1fr] sm:gap-5">
              <span className="font-semibold tracking-[0.16em] text-accent uppercase">
                Field note
              </span>
              <span className="leading-5 text-muted-strong">
                Mending nets before the morning set, Chabahar, Iran.
                Photograph by Parastoo Maleki, via Unsplash.
              </span>
            </figcaption>
          </figure>
        </section>

        <section
          aria-labelledby="why-heading"
          className="border-y border-line"
        >
          <div className="mx-auto grid max-w-[1240px] gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.42fr_0.58fr] lg:gap-20 lg:px-10 lg:py-24">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.22em] text-accent uppercase">
                Why FishFolk exists
              </p>
              <span
                aria-hidden="true"
                className="mt-6 block h-px w-16 bg-accent/40"
              />
            </div>

            <div>
              <h2
                id="why-heading"
                className="max-w-[20ch] font-serif text-[clamp(2rem,4.2vw,3.25rem)] leading-[1.06] tracking-[-0.03em] text-balance"
              >
                Experience is knowledge. Knowledge deserves to be shared.
              </h2>
              <div className="mt-8 grid gap-5 text-[16px] leading-7 text-muted-strong sm:grid-cols-2 sm:gap-8">
                <p>
                  Fishing communities hold generations of practical
                  understanding: how the wind shifts before a front, where a
                  current runs against the tide, which repair holds through a
                  long season.
                </p>
                <p>
                  Most of it lives in conversation. When the conversation ends,
                  the knowledge can go with it. FishFolk gives those
                  observations a place to stay, and a way to reach the person
                  who needs them next.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="stories-heading"
          className="mx-auto max-w-[1240px] px-5 py-20 sm:px-8 lg:px-10 lg:py-28"
        >
          <div className="grid gap-8 lg:grid-cols-[1fr_20rem] lg:items-end">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.22em] text-accent uppercase">
                Featured observations
              </p>
              <h2
                id="stories-heading"
                className="mt-4 font-serif text-[clamp(2.5rem,5.5vw,4.25rem)] leading-[1.0] tracking-[-0.035em]"
              >
                Stories from the water.
              </h2>
            </div>
            <div className="lg:pb-1">
              <p className="max-w-sm text-sm leading-6 text-muted-strong">
                Three illustrative entries, written to show how community
                observations will be presented. They are not verified reports.
              </p>
              <Link
                href="/app"
                className="group mt-4 inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline hover:underline-offset-4"
              >
                Explore all observations
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          <div className="mt-10 border-y border-line">
            {sampleObservations.map((observation) => (
              <article
                key={observation.index}
                className="border-t border-line first:border-t-0"
              >
                <Link
                  href="/app"
                  className="group grid gap-x-6 gap-y-4 py-8 sm:grid-cols-[2.75rem_minmax(0,1fr)] lg:grid-cols-[3.5rem_minmax(0,1fr)_13rem_1.5rem] lg:py-10"
                >
                  <span
                    aria-hidden="true"
                    className="text-[11px] font-semibold tracking-[0.16em] text-muted"
                  >
                    {observation.index}
                  </span>

                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="max-w-[30ch] font-serif text-2xl leading-tight tracking-[-0.02em] transition-colors group-hover:text-accent sm:text-[1.7rem]">
                        {observation.title}
                      </h3>
                      <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-muted transition-colors group-hover:text-accent lg:hidden" />
                    </div>
                    <p className="mt-3 max-w-[62ch] text-[15px] leading-6 text-muted-strong">
                      {observation.excerpt}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-start gap-x-3 gap-y-2 text-[10px] font-semibold tracking-[0.14em] sm:col-start-2 lg:col-start-auto lg:flex-col lg:items-start lg:pt-1">
                    <span className="text-accent uppercase">
                      {observation.category}
                    </span>
                    <span className="text-muted-strong uppercase">
                      {observation.location}
                    </span>
                    <span className="border border-line px-2 py-1 text-muted-strong uppercase">
                      {observation.source}
                    </span>
                  </div>

                  <ArrowUpRight className="hidden h-5 w-5 text-muted transition-colors group-hover:text-accent lg:block" />
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section
          aria-labelledby="voice-heading"
          className="border-y border-line bg-sage"
        >
          <div className="mx-auto grid max-w-[1240px] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:px-10 lg:py-28">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.22em] text-accent uppercase">
                Voice-first by design
              </p>
              <div className="mt-8 flex h-14 w-14 items-center justify-center border border-accent/30 text-accent">
                <MicrophoneIcon className="h-6 w-6" />
              </div>
              <p className="mt-6 max-w-xs text-sm leading-6 text-muted-strong">
                Voice capture is in development. Text entry will always remain
                available, and no transcript is published without review.
              </p>
            </div>

            <div>
              <h2
                id="voice-heading"
                className="max-w-[22ch] font-serif text-[clamp(2.1rem,4.5vw,3.5rem)] leading-[1.04] tracking-[-0.03em] text-balance"
              >
                Some knowledge is easier to tell than to type.
              </h2>
              <p className="mt-6 max-w-[58ch] text-[16px] leading-7 text-muted-strong">
                Speak naturally. FishFolk is being built to turn your recording
                into a transcript you can read, edit, and confirm before it
                becomes an observation.
              </p>

              <ol className="mt-10 grid gap-6 sm:grid-cols-3">
                {voiceSteps.map((step) => (
                  <li
                    key={step.index}
                    className="border-t border-accent/25 pt-4"
                  >
                    <span className="text-[11px] font-semibold tracking-[0.16em] text-accent">
                      {step.index}
                    </span>
                    <h3 className="mt-3 text-sm font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-muted-strong">
                      {step.copy}
                    </p>
                  </li>
                ))}
              </ol>

              <Link href="/app/share" className={`${buttonPrimary} mt-10`}>
                Share an observation
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="closing-heading"
          className="on-accent bg-accent text-background"
        >
          <div className="mx-auto max-w-[1240px] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="text-[11px] font-semibold tracking-[0.22em] text-background uppercase">
                  Keep the knowledge moving
                </p>
                <h2
                  id="closing-heading"
                  className="mt-4 max-w-[18ch] font-serif text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[1.0] tracking-[-0.035em] text-balance"
                >
                  Your experience could help someone else.
                </h2>
                <p className="mt-6 max-w-[42ch] text-[16px] leading-7 text-background">
                  Keep local knowledge moving. Share what you have learned.
                </p>
              </div>

              <Link
                href="/app/share"
                className="inline-flex items-center justify-center gap-2 rounded-[2px] bg-background px-6 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-[#eeede6]"
              >
                Share your knowledge
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
