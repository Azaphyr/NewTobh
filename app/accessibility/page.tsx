import Link from "next/link"
import Image from "next/image"

export default function AccessibilityPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-purple-800/70 z-10" />
        <Image
          src="/placeholder.svg?height=300&width=1600"
          alt="Accessibility Statement"
          width={1600}
          height={300}
          className="w-full h-[200px] md:h-[300px] object-cover"
          priority
        />
        <div className="container relative z-20 flex flex-col items-center justify-center h-[200px] md:h-[300px] text-center text-white">
          <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4">Accessibility Statement</h1>
          <p className="text-lg max-w-2xl">Our commitment to making our content accessible to everyone.</p>
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
            <span className="font-medium text-foreground">Accessibility</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container max-w-4xl">
          <div className="prose prose-stone max-w-none">
            <p className="lead">Last updated: April 29, 2025</p>

            <p>
              D&D ASBL is committed to ensuring digital accessibility for people with disabilities. We are continually
              improving the user experience for everyone and applying the relevant accessibility standards.
            </p>

            <h2>Conformance Status</h2>

            <p>
              Our website aims to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 level AA standards.
              These guidelines explain how to make web content more accessible for people with disabilities and more
              user-friendly for everyone.
            </p>

            <p>
              We have conducted internal reviews to identify and fix accessibility issues. However, we recognize that
              this is an ongoing process, and we are committed to regular testing and improvements.
            </p>

            <h2>Accessibility Features</h2>

            <p>Our website includes the following accessibility features:</p>

            <ul>
              <li>Semantic HTML structure for better screen reader navigation</li>
              <li>Keyboard navigation support for all interactive elements</li>
              <li>Sufficient color contrast ratios for text and important graphics</li>
              <li>Text resizing without loss of content or functionality</li>
              <li>Alternative text for images and meaningful link descriptions</li>
              <li>ARIA landmarks and roles where appropriate</li>
              <li>Responsive design that works on various devices and screen sizes</li>
            </ul>

            <h2>Physical Accessibility at Events</h2>

            <p>
              In addition to digital accessibility, we strive to make our in-person events accessible to all
              participants:
            </p>

            <ul>
              <li>We select venues with wheelchair accessibility whenever possible</li>
              <li>We provide information about accessibility features of venues in advance</li>
              <li>We welcome service animals at all our events</li>
              <li>We offer reserved seating for individuals with specific needs</li>
              <li>We are open to accommodation requests and will do our best to meet them</li>
            </ul>

            <h2>Feedback and Assistance</h2>

            <p>
              We welcome your feedback on the accessibility of our website and events. If you encounter accessibility
              barriers or have suggestions for improvement, please contact us at:
            </p>

            <address>
              Email: accessibility@dndasbl.org
              <br />
              Phone: +32 123 456 789
            </address>

            <p>We try to respond to feedback within 3 business days.</p>

            <h2>Financial Accessibility</h2>

            <p>
              We believe that financial constraints should not prevent anyone from participating in our community. We
              offer:
            </p>

            <ul>
              <li>Reduced membership fees for students, seniors, and individuals with limited income</li>
              <li>Scholarship opportunities for events with higher registration costs</li>
              <li>Free community events throughout the year</li>
              <li>Payment plans for membership fees upon request</li>
            </ul>

            <p>To learn more about our financial accessibility options, please contact us at info@dndasbl.org.</p>

            <h2>Continuous Improvement</h2>

            <p>We are committed to ongoing accessibility improvements. Our accessibility roadmap includes:</p>

            <ul>
              <li>Regular accessibility audits of our website</li>
              <li>Staff training on accessibility best practices</li>
              <li>Consultation with accessibility experts and users with disabilities</li>
              <li>Implementation of new technologies and standards as they become available</li>
            </ul>

            <p>
              This statement was created on April 29, 2025, and will be reviewed and updated annually or when
              significant changes are made to the website or our services.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
