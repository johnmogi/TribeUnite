export const metadata = {
  title: "Privacy Policy — TRIBES UNITE",
  description: "How we handle your data: email subscriptions, media, and site usage.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-16 max-w-3xl">
        <header className="mb-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Privacy Policy</h1>
          <p className="text-gray-300">Effective date: <span className="font-medium">2025-09-06</span></p>
        </header>

        <article className="prose prose-invert max-w-none prose-headings:mb-3 prose-p:leading-relaxed">
          <h2>Overview</h2>
          <p>
            We collect only what we need to run this site and keep you informed about TRIBES UNITE.
            This page explains what we collect, why, and your choices.
          </p>

          <h2>What we collect</h2>
          <ul>
            <li><strong>Email address</strong> when you subscribe (required for updates).</li>
            <li><strong>Basic logs</strong> (IP, user agent) for security and abuse prevention.</li>
            <li><strong>Media metadata</strong> (when browsing the gallery), strictly non-personal.</li>
          </ul>

          <h2>How we use your data</h2>
          <ul>
            <li>Send project updates, playtest invites, and relevant announcements.</li>
            <li>Maintain site security and performance.</li>
            <li>Measure basic, anonymized engagement (if analytics are enabled in the future).</li>
          </ul>

          <h2>How we store it</h2>
          <p>
            Emails are stored in our database or a trusted email provider. We apply reasonable
            safeguards and limit access to authorized maintainers only.
          </p>

          <h2>Your choices & rights</h2>
          <ul>
            <li><strong>Unsubscribe</strong> at any time via the link in our emails.</li>
            <li><strong>Request deletion</strong> of your email from our list: <a className="underline" href="mailto:hello@tribesunite.game">hello@tribesunite.game</a>.</li>
            <li><strong>Access/rectify</strong> your data by contacting us.</li>
          </ul>

          <h2>Cookies & analytics</h2>
          <p>
            We currently do not use tracking cookies. If we add privacy-friendly analytics (e.g., Plausible),
            we will update this page and avoid personal data wherever possible.
          </p>

          <h2>Third-party services</h2>
          <p>
            We may use providers like an email service (for newsletters) or a CDN (for images/videos).
            These providers process data on our behalf and are bound by their own privacy terms.
          </p>

          <h2>Children</h2>
          <p>
            This site is not directed to children under 13 (or the minimum age in your jurisdiction).
          </p>

          <h2>Changes</h2>
          <p>
            We may update this policy as the project evolves. Material changes will be posted here
            with an updated effective date.
          </p>

          <h2>Contact</h2>
          <p>
            Questions? Email <a className="underline" href="mailto:hello@tribesunite.game">hello@tribesunite.game</a>.
          </p>

          <hr />
          <p className="text-xs text-gray-400">
            This Privacy Policy is provided for informational purposes and does not constitute legal advice.
          </p>
        </article>
      </div>
    </main>
  );
}
