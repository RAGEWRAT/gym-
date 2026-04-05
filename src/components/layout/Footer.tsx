import { Button } from "@/components/ui/Button";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-nearblack py-10 text-sm text-offwhite">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 md:px-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-black text-lg tracking-tight">IRONFORGE</p>
          <p className="text-gray-400 mt-1">© {new Date().getFullYear()} IronForge Gym. All rights reserved.</p>
        </div>
        <div className="flex flex-col sm:flex-row flex-wrap gap-3 w-full md:w-auto">
          <Button variant="outline" size="sm" href="/privacy" className="min-h-[44px] justify-center sm:min-w-[100px]">
            Privacy
          </Button>
          <Button variant="outline" size="sm" href="/contact" className="min-h-[44px] justify-center sm:min-w-[100px]">
            Contact
          </Button>
          <Button variant="outline" size="sm" href="/book" className="min-h-[44px] justify-center sm:min-w-[100px]">
            Book
          </Button>
        </div>
      </div>
    </footer>
  );
}
