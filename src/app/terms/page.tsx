export const metadata = {
  title: "Terms of Use — TRIBES UNITE",
  description: "Rules for using this website, content, and donation links.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-16 max-w-3xl">
        <header className="mb-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Terms of Use</h1>
          <p className="text-gray-300">Effective date: <span className="font-medium">2025-09-06</span></p>
        </header>

        <article className="prose prose-invert max-w-none prose-headings:mb-3 prose-p:leading-relaxed">
          <h2>Acceptance of Terms</h2>
          <p>
            By accessing this site, you agree to these Terms and our Privacy Policy. If you do not agree,
            please do not use the site.
          </p>

          <h2>Use of the Site</h2>
          <ul>
            <li>Do not abuse, attack, or attempt to disrupt the service.</li>
            <li>Do not infringe others' intellectual property.</li>
            <li>Do not post or transmit unlawful, hateful, or harmful content.</li>
          </ul>

          <h2>Intellectual Property</h2>
          <p>
            Unless otherwise noted, all site content (text, art, logos, UI) is owned by the TRIBES UNITE project
            and protected by applicable law. You may not reproduce or distribute it without permission.
          </p>

          <h2>Donations</h2>
          <p>
            Links to Patreon/PayPal/other providers are offered for voluntary support. Donations are not purchases
            and are generally non-refundable (subject to the provider's terms). We may acknowledge supporters
            but cannot guarantee perks unless explicitly stated.
          </p>

          <h2>Third-Party Links</h2>
          <p>
            We are not responsible for content, policies, or practices of third-party sites or services linked here.
          </p>

          <h2>Disclaimer of Warranties</h2>
          <p>
            The site is provided "as is" and "as available" without warranties of any kind, express or implied,
            including fitness for a particular purpose or non-infringement.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, special,
            consequential, or punitive damages, or for any loss of data, revenue, or profits arising from your
            use of the site.
          </p>

          <h2>Changes to Terms</h2>
          <p>
            We may update these Terms from time to time. Continued use of the site constitutes acceptance of the updated Terms.
          </p>

          <h2>Contact</h2>
          <p>
            For questions about these Terms, contact <a className="underline" href="mailto:hello@tribesunite.game">hello@tribesunite.game</a>.
          </p>

          <hr />
          <p className="text-xs text-gray-400">
            These Terms are informational and not legal advice. Consider consulting a lawyer if you require tailored terms.
          </p>
        </article>
      </div>
    </main>
  );
}
