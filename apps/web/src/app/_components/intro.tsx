import { SITE_NAME } from "@/lib/site";

export function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight md:pr-8">
        {SITE_NAME}.
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8 md:max-w-md">
        Practical, honest advice on getting a job now: what changed, what
        didn&apos;t, and what to do about it.
      </h4>
    </section>
  );
}
