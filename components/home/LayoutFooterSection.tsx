import { Separator } from "@/components/ui/separator";
import { ChevronsDownIcon } from "lucide-react";
import Link from "next/link";

export const LayoutFooterSection = () => {
  return (
    <footer id="footer" className="container py-24 sm:py-32">
      <div className="p-10 bg-card border border-secondary rounded-2xl">
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
          <div className="col-span-full xl:col-span-2">
            <Link href="/" className="flex font-bold items-center">
              <ChevronsDownIcon className="w-9 h-9 mr-2 bg-gradient-to-tr from-primary via-primary/70 to-primary rounded-lg border border-secondary" />
              <h3 className="text-2xl">StartwiseCRM</h3>
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Product</h3>
            <Link href="#features" className="opacity-60 hover:opacity-100">Features</Link>
            <Link href="#how-it-works" className="opacity-60 hover:opacity-100">How it works</Link>
            <Link href="#contact" className="opacity-60 hover:opacity-100">Contact</Link>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Resources</h3>
            <Link href="#faq" className="opacity-60 hover:opacity-100">FAQ</Link>
            <Link href="mailto:chirag@bidx.ai" className="opacity-60 hover:opacity-100">Email support</Link>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Legal</h3>
            <Link href="#" className="opacity-60 hover:opacity-100">Privacy Policy</Link>
            <Link href="#" className="opacity-60 hover:opacity-100">Terms</Link>
          </div>
        </div>
        <Separator className="my-6" />
        <section>
          <h3 className="">
            © {new Date().getFullYear()} StartwiseCRM. All rights reserved.
            <Link
              target="_blank"
              href="https://nextjs.org"
              className="text-primary transition-all border-primary hover:border-b-2 ml-1"
            >
              Built on Next.js
            </Link>
          </h3>
        </section>
      </div>
    </footer>
  );
};