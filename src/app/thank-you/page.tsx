import ThankYouClient from "./ThankYouClient";
import { buildPageMeta } from "@/lib/seo";

export const metadata = buildPageMeta({
  title: "Thank you",
  description: "Your IronForge Gym booking request was received. We'll confirm your slot soon.",
  path: "/thank-you",
});

type Props = { searchParams: Record<string, string | string[] | undefined> };

export default function ThankYouPage({ searchParams }: Props) {
  const raw = searchParams.service;
  const service = typeof raw === "string" ? decodeURIComponent(raw) : "your booking";
  return <ThankYouClient service={service} />;
}
