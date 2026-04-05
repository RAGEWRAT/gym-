import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | IronForge Gym",
  description: "IronForge Gym privacy policy.",
};

export default function PrivacyPage() {
  return (
    <div className="bg-offwhite text-navy min-h-screen pt-28 pb-20 px-4">
      <article className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-black uppercase mb-8">Privacy Policy</h1>
        <p className="text-sm text-navy/80 leading-relaxed mb-4">
          IronForge Gym (“we”, “us”) operates this website to share information about our facility and to accept booking
          and contact requests. This policy describes how we handle information you submit through our forms.
        </p>
        <h2 className="text-lg font-bold mt-8 mb-2">Information we collect</h2>
        <p className="text-sm text-navy/80 leading-relaxed mb-4">
          When you use the contact or booking forms, we may collect your name, email address, phone number, preferred
          visit date and time, service interest, and any notes you choose to provide.
        </p>
        <h2 className="text-lg font-bold mt-8 mb-2">How we use it</h2>
        <p className="text-sm text-navy/80 leading-relaxed mb-4">
          We use this information only to respond to your inquiry, schedule visits, and communicate about memberships or
          services you asked about. We do not sell your personal data to third parties.
        </p>
        <h2 className="text-lg font-bold mt-8 mb-2">Retention</h2>
        <p className="text-sm text-navy/80 leading-relaxed mb-4">
          Messages may be retained for a reasonable period for operational and legal purposes, then deleted or anonymized
          where appropriate.
        </p>
        <h2 className="text-lg font-bold mt-8 mb-2">Contact</h2>
        <p className="text-sm text-navy/80 leading-relaxed mb-8">
          For privacy-related questions, email{" "}
          <a href="mailto:hello@ironforgegym.in" className="text-brandRed font-medium">
            hello@ironforgegym.in
          </a>
          .
        </p>
        <Link href="/" className="text-brandRed text-sm font-bold hover:underline">
          ← Back to home
        </Link>
      </article>
    </div>
  );
}
