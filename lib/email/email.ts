import { getAdminContactFormTemplate, getUserContactFormTemplate } from './email-templates'

interface EmailOptions {
  to: string;
  subject: string;
  text?: string;
  html?: string;
  from?: string;
}

export async function sendEmail({ to, subject, text, html, from = process.env.EMAIL_FROM }: EmailOptions) {
  try {
    const response = await fetch('https://api.smtp2go.com/v3/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Smtp2go-Api-Key': process.env.SMTP2GO_API_KEY || '',
      },
      body: JSON.stringify({
        sender: from,
        to: [to],
        subject,
        text_body: text,
        html_body: html,
      }),
    });

    const data = await response.json();
    return { success: true, data };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error };
  }
}

export const sendContactFormEmail = async (name: string, email: string, subject: string, message: string, language: 'en' | 'fr' = 'en') => {
  const adminEmail = process.env.ADMIN_EMAIL || 'info@talesofbrusshell.be'
  const websiteUrl = process.env.NEXT_PUBLIC_WEBSITE_URL || 'https://talesofbrusshell.be'
  const currentDate = new Date().toLocaleDateString(language === 'fr' ? 'fr-FR' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })

  // Send both emails
  const [adminResponse, userResponse] = await Promise.all([
    sendEmail({
      to: adminEmail,
      subject: language === 'fr' ? `Formulaire de Contact : ${subject}` : `Contact Form: ${subject}`,
      html: getAdminContactFormTemplate(name, email, subject, message, currentDate, language),
    }),
    sendEmail({
      to: email,
      subject: language === 'fr' ? `Nous avons bien reçu votre message : ${subject}` : `We received your message: ${subject}`,
      html: getUserContactFormTemplate(name, email, subject, message, websiteUrl, language),
    })
  ]);

  return { adminResponse, userResponse };
}

export const sendMembershipConfirmation = async (email: string, firstName: string, membershipType: string, language: 'en' | 'fr' = 'en') => {
  const translations = {
    en: {
      title: 'Thank you for your membership application!',
      greeting: 'Dear',
      message: `We have received your application for the ${membershipType} membership with Tales of Bruss'hell.`,
      response: 'Our team will review your application and get back to you shortly with payment instructions.',
      questions: 'If you have any questions, please don\'t hesitate to contact us.',
      regards: 'Best regards,',
      team: 'Tales of Bruss\'hell Team',
      subject: 'Your Tales of Bruss\'hell Membership Application'
    },
    fr: {
      title: 'Merci pour votre demande d\'adhésion !',
      greeting: 'Cher/Chère',
      message: `Nous avons bien reçu votre demande d'adhésion pour le type ${membershipType} à Tales of Bruss'hell.`,
      response: 'Notre équipe examinera votre demande et vous contactera prochainement avec les instructions de paiement.',
      questions: 'Si vous avez des questions, n\'hésitez pas à nous contacter.',
      regards: 'Cordialement,',
      team: 'L\'équipe de Tales of Bruss\'hell',
      subject: 'Votre Demande d\'Adhésion à Tales of Bruss\'hell'
    }
  }

  const t = translations[language]

  const html = `
    <h2>${t.title}</h2>
    <p>${t.greeting} ${firstName},</p>
    <p>${t.message}</p>
    <p>${t.response}</p>
    <p>${t.questions}</p>
    <p>${t.regards}<br>${t.team}</p>
  `

  return sendEmail({
    to: email,
    subject: t.subject,
    html,
  })
}

export const sendEventRegistrationConfirmation = async (
  email: string,
  firstName: string,
  eventTitle: string,
  eventDate: Date,
  language: 'en' | 'fr' = 'en'
) => {
  const translations = {
    en: {
      title: 'Event Registration Confirmation',
      greeting: 'Dear',
      message: `Thank you for registering for "${eventTitle}" on`,
      lookingForward: 'We look forward to seeing you there!',
      regards: 'Best regards,',
      team: 'Tales of Bruss\'hell Team',
      subject: 'Registration Confirmed:'
    },
    fr: {
      title: 'Confirmation d\'Inscription à l\'Événement',
      greeting: 'Cher/Chère',
      message: `Merci de vous être inscrit(e) à "${eventTitle}" le`,
      lookingForward: 'Nous avons hâte de vous y voir !',
      regards: 'Cordialement,',
      team: 'L\'équipe de Tales of Bruss\'hell',
      subject: 'Inscription Confirmée :'
    }
  }

  const t = translations[language]

  const formattedDate = new Intl.DateTimeFormat(language === 'fr' ? 'fr-FR' : 'en-US', {
    dateStyle: 'full',
    timeStyle: 'short',
  }).format(eventDate)

  const html = `
    <h2>${t.title}</h2>
    <p>${t.greeting} ${firstName},</p>
    <p>${t.message} ${formattedDate}.</p>
    <p>${t.lookingForward}</p>
    <p>${t.regards}<br>${t.team}</p>
  `

  return sendEmail({
    to: email,
    subject: `${t.subject} ${eventTitle}`,
    html,
  })
}
