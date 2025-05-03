import nodemailer from "nodemailer"

type EmailPayload = {
  to: string
  subject: string
  html: string
}

// Configure email transport
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_SERVER_HOST,
  port: Number(process.env.EMAIL_SERVER_PORT),
  secure: Boolean(process.env.EMAIL_SERVER_SECURE),
  auth: {
    user: process.env.EMAIL_SERVER_USER,
    pass: process.env.EMAIL_SERVER_PASSWORD,
  },
})

export const sendEmail = async (payload: EmailPayload) => {
  try {
    const info = await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      ...payload,
    })
    return { success: true, messageId: info.messageId }
  } catch (error) {
    console.error("Error sending email:", error)
    return { success: false, error }
  }
}

export const sendContactFormEmail = async (name: string, email: string, subject: string, message: string) => {
  const adminEmail = process.env.ADMIN_EMAIL || "info@talesofbrusshell.org"

  const html = `
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Subject:</strong> ${subject}</p>
    <p><strong>Message:</strong></p>
    <p>${message.replace(/\n/g, "<br>")}</p>
  `

  return sendEmail({
    to: adminEmail,
    subject: `Contact Form: ${subject}`,
    html,
  })
}

export const sendMembershipConfirmation = async (email: string, firstName: string, membershipType: string) => {
  const html = `
    <h2>Thank you for your membership application!</h2>
    <p>Dear ${firstName},</p>
    <p>We have received your application for the ${membershipType} membership with Tales of Bruss'hell.</p>
    <p>Our team will review your application and get back to you shortly with payment instructions.</p>
    <p>If you have any questions, please don't hesitate to contact us.</p>
    <p>Best regards,<br>Tales of Bruss'hell Team</p>
  `

  return sendEmail({
    to: email,
    subject: "Your Tales of Bruss'hell Membership Application",
    html,
  })
}

export const sendEventRegistrationConfirmation = async (
  email: string,
  firstName: string,
  eventTitle: string,
  eventDate: Date,
) => {
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    dateStyle: "full",
    timeStyle: "short",
  }).format(eventDate)

  const html = `
    <h2>Event Registration Confirmation</h2>
    <p>Dear ${firstName},</p>
    <p>Thank you for registering for "${eventTitle}" on ${formattedDate}.</p>
    <p>We look forward to seeing you there!</p>
    <p>Best regards,<br>Tales of Bruss'hell Team</p>
  `

  return sendEmail({
    to: email,
    subject: `Registration Confirmed: ${eventTitle}`,
    html,
  })
}
