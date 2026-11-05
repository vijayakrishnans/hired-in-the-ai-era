import Container from "@/app/_components/container";
import { SOURCE_URL } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200 dark:bg-slate-800">
      <Container>
        <div className="py-20 flex flex-col lg:flex-row items-center">
          <h3 className="text-3xl lg:text-4xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-8 lg:mb-0 lg:pr-4 lg:w-1/2">
            Advice you can check for yourself.
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <p className="mx-3 mb-4 lg:mb-0 text-center lg:text-left">
              A showcase built on Orunbase, running on Cloudflare Workers.
            </p>
            <a href={SOURCE_URL} className="mx-3 font-bold hover:underline whitespace-nowrap">
              View on GitHub
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
