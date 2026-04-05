import ClassesClient from "@/components/classes/ClassesClient";
import { buildPageMeta } from "@/lib/seo";

export const metadata = buildPageMeta({
  title: "Classes & Trainers",
  description:
    "Weekly timetable, HIIT, strength, and mobility classes plus certified trainers at IronForge Gym, Kanpur.",
  path: "/classes",
});

export default function ClassesPage() {
  return <ClassesClient />;
}
