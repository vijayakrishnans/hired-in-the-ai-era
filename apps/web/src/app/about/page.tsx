import type { Metadata } from "next";
import Container from "@/app/_components/container";
import Header from "@/app/_components/header";
import { SOURCE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: "Who this site is for and how its articles are written.",
};

export default function About() {
  return (
    <main>
      <Container>
        <Header />
        <article className="max-w-2xl mx-auto mb-32 text-lg leading-relaxed space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tighter leading-tight">
            About
          </h1>
          <p>
            Hired in the AI Era is for people looking for work, changing
            careers, or wondering what to do next while AI changes how hiring
            works. It offers practical reasoning you can test against your own
            situation, not predictions about the future of work.
          </p>
          <h2 className="text-3xl font-bold tracking-tighter pt-4">
            How the articles are written
          </h2>
          <p>
            The articles were drafted with AI, which seems only fair given the
            subject. They contain no invented statistics, quotes or success
            stories, and if a figure is ever added it will link to its source.
          </p>
          <p>
            Hiring differs a lot by country, industry and employer, so treat
            this as general guidance. It isn&apos;t professional, legal or
            financial advice.
          </p>
          <h2 className="text-3xl font-bold tracking-tighter pt-4">
            What this site is
          </h2>
          <p>
            This is a showcase of a product built on Orunbase from its blog
            baseline: Markdown in a repository, deployed to Cloudflare Workers
            on every merge. The{" "}
            <a href={SOURCE_URL} className="underline hover:text-blue-600">
              source is on GitHub
            </a>
            , and you can follow new articles through the{" "}
            <a href="/feed.xml" className="underline hover:text-blue-600">
              RSS feed
            </a>
            .
          </p>
        </article>
      </Container>
    </main>
  );
}
