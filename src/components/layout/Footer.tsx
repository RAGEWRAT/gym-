import { Button } from "@/components/ui/Button";

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-white/10 bg-navy py-8 text-center text-sm text-offwhite">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 md:px-8">
        <p>© {new Date().getFullYear()} IRONFORGE GYM. All rights reserved.</p>
        <div className="flex gap-3">
          <Button variant="outline" size="sm" href="#terms">
            Terms
          </Button>
          <Button variant="outline" size="sm" href="#privacy">
            Privacy
          </Button>
        </div>
      </div>
    </footer>
  );
}
