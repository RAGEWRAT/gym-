import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4">
      <h1 className="text-5xl md:text-7xl font-extrabold text-center mb-6">
        READY TO <span className="text-brandRed">TRAIN?</span>
      </h1>
      <Button size="lg" href="#packages">VIEW MEMBERSHIPS</Button>
    </div>
  );
}