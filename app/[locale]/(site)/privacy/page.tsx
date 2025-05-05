import Link from "next/link"
import Image from "next/image"

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-purple-800/70 z-10" />
        <Image
          src="/placeholder.svg?height=300&width=1600"
          alt="Privacy Policy"
          width={1600}
          height={300}
          className="w-full h-[200px] md:h-[300px] object-cover"
          priority
        />
        <div className="container relative z-20 flex flex-col items-center justify-center h-[200px] md:h-[300px] text-center text-white">
          <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-lg max-w-2xl">How we collect, use, and protect your information.</p>
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
            <span className="font-medium text-foreground">Privacy Policy</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container max-w-4xl">
          <div className="prose prose-stone max-w-none">
            <p className="lead">Last updated: April 29, 2025</p>

            <p>
              D&D ASBL ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how
              we collect, use, disclose, and safeguard your information when you visit our website or participate in our
              events.
            </p>

            <h2>Information We Collect</h2>

            <p>We may collect information about you in a variety of ways, including:</p>

            <h3>Personal Data</h3>
            <p>
              When you register for membership, sign up for events, or contact us, we may collect personally
              identifiable information, such as:
            </p>
            <ul>
              <li>Your name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Mailing address</li>
              <li>Payment information (processed securely through third-party payment processors)</li>
            </ul>

            <h3>Website Usage Data</h3>
            <p>When you visit our website, we may collect non-personal identification information, including:</p>
            <ul>
              <li>Browser type</li>
              <li>Operating system</li>
              <li>Pages visited</li>
              <li>Time and date of your visit</li>
              <li>Referring website addresses</li>
            </ul>

            <h2>How We Use Your Information</h2>

            <p>We may use the information we collect about you for various purposes, including:</p>

            <ul>
              <li>Processing membership applications and event registrations</li>
              <li>Communicating with you about events, services, and updates</li>
              <li>Improving our website and services</li>
              <li>Sending newsletters and promotional materials (if you've opted in)</li>
              <li>Responding to your inquiries and providing customer support</li>
              <li>Complying with legal obligations</li>
            </ul>

            <h2>Cookies and Tracking Technologies</h2>

            <p>
              We use cookies and similar tracking technologies to track activity on our website and hold certain
              information. Cookies are files with a small amount of data that may include an anonymous unique
              identifier.
            </p>

            <p>
              You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However,
              if you do not accept cookies, you may not be able to use some portions of our website.
            </p>

            <h2>Third-Party Services</h2>

            <p>
              We may use third-party service providers to help us operate our website, process payments, or administer
              activities on our behalf. These third parties have access to your personal information only to perform
              these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
            </p>

            <h2>Data Security</h2>

            <p>
              We implement reasonable precautions and follow industry best practices to protect your personal
              information and ensure that it is not inappropriately lost, misused, accessed, disclosed, altered, or
              destroyed.
            </p>

            <p>
              However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot
              guarantee absolute security.
            </p>

            <h2>Your Rights</h2>

            <p>
              Under the General Data Protection Regulation (GDPR), you have certain rights regarding your personal data,
              including:
            </p>

            <ul>
              <li>The right to access your personal data</li>
              <li>The right to rectify inaccurate personal data</li>
              <li>The right to request the deletion of your personal data</li>
              <li>The right to restrict the processing of your personal data</li>
              <li>The right to data portability</li>
              <li>The right to object to the processing of your personal data</li>
            </ul>

            <p>To exercise any of these rights, please contact us using the information provided below.</p>

            <h2>Children's Privacy</h2>

            <p>
              Our website and services are not intended for individuals under the age of 16. We do not knowingly collect
              personal information from children under 16. If you are a parent or guardian and believe your child has
              provided us with personal information, please contact us.
            </p>

            <h2>Changes to This Privacy Policy</h2>

            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
              Privacy Policy on this page and updating the "Last updated" date.
            </p>

            <p>
              You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy
              are effective when they are posted on this page.
            </p>

            <h2>Contact Us</h2>

            <p>If you have any questions about this Privacy Policy, please contact us at:</p>

            <address>
              D&D ASBL
              <br />
              123 Main Street
              <br />
              Brussels, Belgium
              <br />
              Email: privacy@dndasbl.org
              <br />
              Phone: +32 123 456 789
            </address>
          </div>
        </div>
      </section>
    </div>
  )
}
