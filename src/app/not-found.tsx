import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-[85vh] flex flex-col items-center justify-center px-4 bg-nearblack text-offwhite pt-20">
      <p className="text-brandRed font-black text-sm tracking-[0.4em] mb-4">IRONFORGE</p>
      <h1 className="text-8xl md:text-[10rem] font-black leading-none text-white/10 select-none">404</h1>
      <p className="text-gray-400 text-center max-w-md mt-6 mb-10">
        This page does not exist — maybe it moved, or the URL has a typo.
      </p>
      <Button size="lg" href="/">
        Go Back Home
      </Button>
    </div>
  );
}
