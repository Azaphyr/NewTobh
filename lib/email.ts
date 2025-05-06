import { Resend } from 'resend'

// Initialize Resend with API key
const resend = new Resend(process.env.RESEND_API_KEY)

type EmailPayload = {
  to: string
  subject: string
  html: string
}

export const sendEmail = async (payload: EmailPayload) => {
  try {
    const { data, error } = await resend.emails.send({
      from: process.env.EMAIL_FROM || 'Tales of Bruss\'hell <info@talesofbrusshell.be>',
      ...payload,
    })

    if (error) {
      console.error('Error sending email:', error)
      return { success: false, error }
    }

    return { success: true, messageId: data?.id }
  } catch (error) {
    console.error('Error sending email:', error)
    return { success: false, error }
  }
}

export const sendContactFormEmail = async (name: string, email: string, subject: string, message: string) => {
  const adminEmail = process.env.ADMIN_EMAIL || 'info@talesofbrusshell.be'

  const html = `
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Subject:</strong> ${subject}</p>
    <p><strong>Message:</strong></p>
    <p>${message.replace(/\n/g, '<br>')}</p>
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
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    dateStyle: 'full',
    timeStyle: 'short',
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
