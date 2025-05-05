import Link from "next/link"
import Image from "next/image"

export default function TermsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-purple-800/70 z-10" />
        <Image
          src="/placeholder.svg?height=300&width=1600"
          alt="Terms and Conditions"
          width={1600}
          height={300}
          className="w-full h-[200px] md:h-[300px] object-cover"
          priority
        />
        <div className="container relative z-20 flex flex-col items-center justify-center h-[200px] md:h-[300px] text-center text-white">
          <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4">Terms and Conditions</h1>
          <p className="text-lg max-w-2xl">The rules and guidelines for using our services.</p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <section className="border-b py-2">
        <div className="container">
          <div className="flex text-sm text-muted-foreground">
            <Link href="/" className="hover:text-purple-800">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="font-medium text-foreground">Terms and Conditions</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container max-w-4xl">
          <div className="prose prose-stone max-w-none">
            <p className="lead">Last updated: April 29, 2025</p>

            <p>
              Please read these Terms and Conditions ("Terms", "Terms and Conditions") carefully before using the
              website and services operated by D&D ASBL ("us", "we", "our").
            </p>

            <p>
              Your access to and use of our services is conditioned on your acceptance of and compliance with these
              Terms. These Terms apply to all visitors, users, and others who access or use our services.
            </p>

            <p>
              By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part of
              the terms, you may not access our services.
            </p>

            <h2>Membership</h2>

            <p>Membership in D&D ASBL is subject to the following conditions:</p>

            <ul>
              <li>You must provide accurate, current, and complete information during the registration process.</li>
              <li>
                Membership fees are non-refundable except in exceptional circumstances at the discretion of D&D ASBL.
              </li>
              <li>Membership is valid for one year from the date of registration and must be renewed annually.</li>
              <li>Membership benefits are non-transferable and for the sole use of the registered member.</li>
              <li>
                D&D ASBL reserves the right to revoke membership for violation of our code of conduct or these Terms.
              </li>
            </ul>

            <h2>Events and Activities</h2>

            <p>Participation in D&D ASBL events and activities is subject to the following conditions:</p>

            <ul>
              <li>Registration for events may require additional fees, which will be clearly indicated.</li>
              <li>Event cancellations by participants may be subject to our refund policy, which varies by event.</li>
              <li>D&D ASBL reserves the right to cancel or reschedule events due to unforeseen circumstances.</li>
              <li>Participants must adhere to our code of conduct during all events and activities.</li>
              <li>
                Photography and recording at events are permitted unless otherwise specified, but should not disrupt the
                event or infringe on others' privacy.
              </li>
            </ul>

            <h2>Code of Conduct</h2>

            <p>All members and participants in D&D ASBL activities are expected to:</p>

            <ul>
              <li>Treat others with respect, kindness, and consideration.</li>
              <li>Refrain from discriminatory, harassing, or offensive behavior.</li>
              <li>Respect the privacy and personal boundaries of others.</li>
              <li>Follow the specific rules and guidelines for each event or activity.</li>
              <li>Use D&D ASBL resources and facilities responsibly.</li>
            </ul>

            <p>
              Violation of our code of conduct may result in removal from events, suspension, or termination of
              membership without refund.
            </p>

            <h2>Intellectual Property</h2>

            <p>
              The content on our website, including text, graphics, logos, images, and software, is the property of D&D
              ASBL or its content suppliers and is protected by copyright and other intellectual property laws.
            </p>

            <p>
              You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform,
              republish, download, store, or transmit any of the material on our website without our prior written
              consent.
            </p>

            <h2>User-Generated Content</h2>

            <p>
              By posting, uploading, or otherwise making available any content on our platforms or during our events,
              you grant D&D ASBL a non-exclusive, royalty-free, worldwide, perpetual license to use, modify, publicly
              display, reproduce, and distribute such content in connection with our services.
            </p>

            <p>
              You represent and warrant that you own or control all rights to the content you provide, and that such
              content does not violate these Terms or any applicable law.
            </p>

            <h2>Limitation of Liability</h2>

            <p>
              In no event shall D&D ASBL, its directors, employees, partners, agents, suppliers, or affiliates be liable
              for any indirect, incidental, special, consequential, or punitive damages, including without limitation,
              loss of profits, data, use, goodwill, or other intangible losses, resulting from:
            </p>

            <ul>
              <li>Your access to or use of or inability to access or use our services;</li>
              <li>Any conduct or content of any third party on our services;</li>
              <li>Any content obtained from our services; and</li>
              <li>Unauthorized access, use, or alteration of your transmissions or content.</li>
            </ul>

            <h2>Governing Law</h2>

            <p>
              These Terms shall be governed and construed in accordance with the laws of Belgium, without regard to its
              conflict of law provisions.
            </p>

            <p>
              Our failure to enforce any right or provision of these Terms will not be considered a waiver of those
              rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining
              provisions of these Terms will remain in effect.
            </p>

            <h2>Changes to Terms</h2>

            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will
              provide notice of any changes by posting the new Terms on this page and updating the "Last updated" date.
            </p>

            <p>
              Your continued use of our services after any such changes constitutes your acceptance of the new Terms.
            </p>

            <h2>Contact Us</h2>

            <p>If you have any questions about these Terms, please contact us at:</p>

            <address>
              D&D ASBL
              <br />
              123 Main Street
              <br />
              Brussels, Belgium
              <br />
              Email: legal@dndasbl.org
              <br />
              Phone: +32 123 456 789
            </address>
          </div>
        </div>
      </section>
    </div>
  )
}