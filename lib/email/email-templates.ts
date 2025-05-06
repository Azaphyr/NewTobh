export const getAdminContactFormTemplate = (name: string, email: string, subject: string, message: string, currentDate: string, language: 'en' | 'fr' = 'en') => {
  const translations = {
    en: {
      title: 'New Contact Form Submission',
      intro: 'You have received a new message from your website\'s contact form.',
      name: 'Name:',
      email: 'Email:',
      date: 'Date:',
      subject: 'Subject:',
      message: 'Message:',
      response: 'Please respond to this inquiry at your earliest convenience.',
      replyButton: 'Reply to Customer',
      copyright: '© 2025 Tales of Bruss\'hell. All rights reserved.',
      automated: 'This is an automated notification from your website\'s contact form.'
    },
    fr: {
      title: 'Nouveau Message du Formulaire de Contact',
      intro: 'Vous avez reçu un nouveau message via le formulaire de contact de votre site web.',
      name: 'Nom :',
      email: 'Email :',
      date: 'Date :',
      subject: 'Sujet :',
      message: 'Message :',
      response: 'Veuillez répondre à cette demande dès que possible.',
      replyButton: 'Répondre au Client',
      copyright: '© 2025 Tales of Bruss\'hell. Tous droits réservés.',
      automated: 'Ceci est une notification automatique du formulaire de contact de votre site web.'
    }
  }

  const t = translations[language]

  return `
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
    <!--[if gte mso 9]>
    <xml>
      <o:OfficeDocumentSettings>
        <o:AllowPNG/>
        <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
    </xml>
    <![endif]-->
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="x-apple-disable-message-reformatting">
    <meta name="color-scheme" content="light">
    <meta name="supported-color-schemes" content="light">
    <title>${t.title} - Tales of Bruss'hell</title>
    <style type="text/css">
      /* Base styles */
      body {
        margin: 0 !important;
        padding: 0 !important;
        width: 100% !important;
        -webkit-text-size-adjust: 100% !important;
        -ms-text-size-adjust: 100% !important;
        -webkit-font-smoothing: antialiased !important;
      }
      
      /* iOS BLUE LINKS */
      a[x-apple-data-detectors] {
        color: inherit !important;
        text-decoration: none !important;
        font-size: inherit !important;
        font-family: inherit !important;
        font-weight: inherit !important;
        line-height: inherit !important;
      }
      
      /* Gmail blue links */
      u + #body a {
        color: inherit !important;
        text-decoration: none !important;
        font-size: inherit !important;
        font-family: inherit !important;
        font-weight: inherit !important;
        line-height: inherit !important;
      }
      
      /* Samsung blue links */
      #MessageViewBody a {
        color: inherit !important;
        text-decoration: none !important;
        font-size: inherit !important;
        font-family: inherit !important;
        font-weight: inherit !important;
        line-height: inherit !important;
      }
      
      /* Responsive styles */
      @media only screen and (max-width: 600px) {
        .container {
          width: 100% !important;
          max-width: 100% !important;
        }
        .responsive-table {
          width: 100% !important;
        }
        .mobile-padding {
          padding-left: 15px !important;
          padding-right: 15px !important;
        }
        .mobile-stack {
          display: block !important;
          width: 100% !important;
        }
        .mobile-center {
          text-align: center !important;
        }
        .mobile-img {
          height: auto !important;
          width: 100% !important;
          max-width: 100% !important;
        }
      }
    </style>
  </head>
  <body id="body" style="margin: 0; padding: 0; background-color: #F7F7F7; font-family: Arial, sans-serif;">
    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;">
      <tr>
        <td bgcolor="#F7F7F7" align="center" style="padding: 20px 0px;">
          <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;" class="container">
            <tr>
              <td align="center" bgcolor="#B06821" style="padding: 20px 0px;">
                <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fullLogoWhite-XOy0494hHe4mmeupIvWuoF7gv0TxJB.png" width="180" height="auto" alt="Tales of Bruss'hell" style="display: block; border: 0px; max-width: 180px;" />
              </td>
            </tr>
            <tr>
              <td align="left" bgcolor="#ffffff" style="padding: 30px 30px 0px 30px; color: #1b2a30; font-family: Arial, sans-serif; font-size: 16px; line-height: 24px;">
                <h1 style="margin: 0; font-size: 24px; font-weight: bold; line-height: 36px; color: #9e2c21;">${t.title}</h1>
              </td>
            </tr>
            <tr>
              <td align="left" bgcolor="#ffffff" style="padding: 20px 30px 0px 30px; color: #1b2a30; font-family: Arial, sans-serif; font-size: 16px; line-height: 24px;">
                <p style="margin: 0;">${t.intro}</p>
              </td>
            </tr>
            <tr>
              <td align="left" bgcolor="#ffffff" style="padding: 20px 30px 0px 30px;">
                <table border="0" cellpadding="0" cellspacing="0" width="100%">
                  <tr>
                    <td width="30%" bgcolor="#F7F7F7" style="padding: 10px; font-family: Arial, sans-serif; font-size: 16px; line-height: 24px; font-weight: bold; border: 1px solid #F0F0F0;">${t.name}</td>
                    <td width="70%" bgcolor="#ffffff" style="padding: 10px; font-family: Arial, sans-serif; font-size: 16px; line-height: 24px; border: 1px solid #F0F0F0;">${name}</td>
                  </tr>
                  <tr>
                    <td width="30%" bgcolor="#F7F7F7" style="padding: 10px; font-family: Arial, sans-serif; font-size: 16px; line-height: 24px; font-weight: bold; border: 1px solid #F0F0F0;">${t.email}</td>
                    <td width="70%" bgcolor="#ffffff" style="padding: 10px; font-family: Arial, sans-serif; font-size: 16px; line-height: 24px; border: 1px solid #F0F0F0;">${email}</td>
                  </tr>
                  <tr>
                    <td width="30%" bgcolor="#F7F7F7" style="padding: 10px; font-family: Arial, sans-serif; font-size: 16px; line-height: 24px; font-weight: bold; border: 1px solid #F0F0F0;">${t.date}</td>
                    <td width="70%" bgcolor="#ffffff" style="padding: 10px; font-family: Arial, sans-serif; font-size: 16px; line-height: 24px; border: 1px solid #F0F0F0;">${currentDate}</td>
                  </tr>
                  <tr>
                    <td width="30%" bgcolor="#F7F7F7" style="padding: 10px; font-family: Arial, sans-serif; font-size: 16px; line-height: 24px; font-weight: bold; border: 1px solid #F0F0F0;">${t.subject}</td>
                    <td width="70%" bgcolor="#ffffff" style="padding: 10px; font-family: Arial, sans-serif; font-size: 16px; line-height: 24px; border: 1px solid #F0F0F0;">${subject}</td>
                  </tr>
                  <tr>
                    <td width="30%" bgcolor="#F7F7F7" style="padding: 10px; font-family: Arial, sans-serif; font-size: 16px; line-height: 24px; font-weight: bold; border: 1px solid #F0F0F0; vertical-align: top;">${t.message}</td>
                    <td width="70%" bgcolor="#ffffff" style="padding: 10px; font-family: Arial, sans-serif; font-size: 16px; line-height: 24px; border: 1px solid #F0F0F0;">${message.replace(/\n/g, '<br>')}</td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td align="left" bgcolor="#ffffff" style="padding: 20px 30px 0px 30px; color: #1b2a30; font-family: Arial, sans-serif; font-size: 16px; line-height: 24px;">
                <p style="margin: 0;">${t.response}</p>
              </td>
            </tr>
            <tr>
              <td align="left" bgcolor="#ffffff" style="padding: 25px 30px 30px 30px;">
                <table border="0" cellpadding="0" cellspacing="0" width="100%">
                  <tr>
                    <td align="center">
                      <table border="0" cellpadding="0" cellspacing="0">
                        <tr>
                          <td align="center" bgcolor="#9e2c21" style="border-radius: 4px;">
                            <a href="mailto:${email}" target="_blank" style="display: inline-block; padding: 16px 36px; font-family: Arial, sans-serif; font-size: 16px; color: #ffffff; text-decoration: none; border-radius: 4px; font-weight: bold; background-color: #9e2c21;">
                              ${t.replyButton}
                            </a>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td align="center" bgcolor="#1b2a30" style="padding: 20px 30px 10px 30px; color: #ffffff; font-family: Arial, sans-serif; font-size: 12px; line-height: 18px;">
                <p style="margin: 0;">${t.copyright}</p>
              </td>
            </tr>
            <tr>
              <td align="center" bgcolor="#1b2a30" style="padding: 0px 30px 20px 30px; color: #ffffff; font-family: Arial, sans-serif; font-size: 11px; line-height: 16px;">
                <p style="margin: 0;">${t.automated}</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
  </html>
`
}

export const getUserContactFormTemplate = (name: string, email: string, subject: string, message: string, websiteUrl: string, language: 'en' | 'fr' = 'en') => {
  const translations = {
    en: {
      title: 'Thank You for Contacting Us!',
      greeting: 'Dear',
      thankYou: 'Thank you for reaching out to Tales of Bruss\'hell. We have received your message and appreciate your interest in connecting with us.',
      response: 'Our team is reviewing your inquiry and will get back to you as soon as possible. We typically respond within 24-48 hours during business days.',
      reference: 'For your reference, here\'s a summary of the information you provided:',
      name: 'Name:',
      email: 'Email:',
      subject: 'Subject:',
      message: 'Message:',
      urgent: 'If you have any urgent matters, please don\'t hesitate to visit our website or follow us on social media for the latest updates.',
      visitButton: 'Visit Our Website',
      regards: 'Warm regards,',
      team: 'The Tales of Bruss\'hell Team',
      copyright: '© 2025 Tales of Bruss\'hell. All rights reserved.',
      automated: 'This email was sent in response to your inquiry through our contact form.'
    },
    fr: {
      title: 'Merci de Nous Avoir Contactés !',
      greeting: 'Cher/Chère',
      thankYou: 'Merci d\'avoir contacté Tales of Bruss\'hell. Nous avons bien reçu votre message et nous apprécions votre intérêt pour notre association.',
      response: 'Notre équipe examine votre demande et vous répondra dans les plus brefs délais. Nous répondons généralement dans un délai de 24 à 48 heures pendant les jours ouvrables.',
      reference: 'Pour votre référence, voici un résumé des informations que vous avez fournies :',
      name: 'Nom :',
      email: 'Email :',
      subject: 'Sujet :',
      message: 'Message :',
      urgent: 'Si vous avez des questions urgentes, n\'hésitez pas à visiter notre site web ou à nous suivre sur les réseaux sociaux pour les dernières mises à jour.',
      visitButton: 'Visiter Notre Site Web',
      regards: 'Cordialement,',
      team: 'L\'équipe de Tales of Bruss\'hell',
      copyright: '© 2025 Tales of Bruss\'hell. Tous droits réservés.',
      automated: 'Cet email a été envoyé en réponse à votre demande via notre formulaire de contact.'
    }
  }

  const t = translations[language]

  return `
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
    <!--[if gte mso 9]>
    <xml>
      <o:OfficeDocumentSettings>
        <o:AllowPNG/>
        <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
    </xml>
    <![endif]-->
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="x-apple-disable-message-reformatting">
    <meta name="color-scheme" content="light">
    <meta name="supported-color-schemes" content="light">
    <title>${t.title} - Tales of Bruss'hell</title>
    <style type="text/css">
      /* Base styles */
      body {
        margin: 0 !important;
        padding: 0 !important;
        width: 100% !important;
        -webkit-text-size-adjust: 100% !important;
        -ms-text-size-adjust: 100% !important;
        -webkit-font-smoothing: antialiased !important;
      }
      
      /* iOS BLUE LINKS */
      a[x-apple-data-detectors] {
        color: inherit !important;
        text-decoration: none !important;
        font-size: inherit !important;
        font-family: inherit !important;
        font-weight: inherit !important;
        line-height: inherit !important;
      }
      
      /* Gmail blue links */
      u + #body a {
        color: inherit !important;
        text-decoration: none !important;
        font-size: inherit !important;
        font-family: inherit !important;
        font-weight: inherit !important;
        line-height: inherit !important;
      }
      
      /* Samsung blue links */
      #MessageViewBody a {
        color: inherit !important;
        text-decoration: none !important;
        font-size: inherit !important;
        font-family: inherit !important;
        font-weight: inherit !important;
        line-height: inherit !important;
      }
      
      /* Responsive styles */
      @media only screen and (max-width: 600px) {
        .container {
          width: 100% !important;
          max-width: 100% !important;
        }
        .responsive-table {
          width: 100% !important;
        }
        .mobile-padding {
          padding-left: 15px !important;
          padding-right: 15px !important;
        }
        .mobile-stack {
          display: block !important;
          width: 100% !important;
        }
        .mobile-center {
          text-align: center !important;
        }
        .mobile-img {
          height: auto !important;
          width: 100% !important;
          max-width: 100% !important;
        }
      }
    </style>
  </head>
  <body id="body" style="margin: 0; padding: 0; background-color: #F7F7F7; font-family: Arial, sans-serif;">
    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;">
      <tr>
        <td bgcolor="#F7F7F7" align="center" style="padding: 20px 0px;">
          <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;" class="container">
            <tr>
              <td align="center" bgcolor="#B06821" style="padding: 20px 0px;">
                <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fullLogoWhite-XOy0494hHe4mmeupIvWuoF7gv0TxJB.png" width="180" height="auto" alt="Tales of Bruss'hell" style="display: block; border: 0px; max-width: 180px;" />
              </td>
            </tr>
            <tr>
              <td align="left" bgcolor="#ffffff" style="padding: 30px 30px 0px 30px; color: #1b2a30; font-family: Arial, sans-serif; font-size: 16px; line-height: 24px;">
                <h1 style="margin: 0; font-size: 24px; font-weight: bold; line-height: 36px; color: #9e2c21;">${t.title}</h1>
              </td>
            </tr>
            <tr>
              <td align="left" bgcolor="#ffffff" style="padding: 20px 30px 0px 30px; color: #1b2a30; font-family: Arial, sans-serif; font-size: 16px; line-height: 24px;">
                <p style="margin: 0;">${t.greeting} ${name},</p>
              </td>
            </tr>
            <tr>
              <td align="left" bgcolor="#ffffff" style="padding: 20px 30px 0px 30px; color: #1b2a30; font-family: Arial, sans-serif; font-size: 16px; line-height: 24px;">
                <p style="margin: 0;">${t.thankYou}</p>
              </td>
            </tr>
            <tr>
              <td align="left" bgcolor="#ffffff" style="padding: 20px 30px 0px 30px; color: #1b2a30; font-family: Arial, sans-serif; font-size: 16px; line-height: 24px;">
                <p style="margin: 0;">${t.response}</p>
              </td>
            </tr>
            <tr>
              <td align="left" bgcolor="#ffffff" style="padding: 20px 30px 0px 30px; color: #1b2a30; font-family: Arial, sans-serif; font-size: 16px; line-height: 24px;">
                <p style="margin: 0;">${t.reference}</p>
              </td>
            </tr>
            <tr>
              <td align="left" bgcolor="#ffffff" style="padding: 20px 30px 0px 30px;">
                <table border="0" cellpadding="0" cellspacing="0" width="100%">
                  <tr>
                    <td width="30%" bgcolor="#F7F7F7" style="padding: 10px; font-family: Arial, sans-serif; font-size: 16px; line-height: 24px; font-weight: bold; border: 1px solid #F0F0F0;">${t.name}</td>
                    <td width="70%" bgcolor="#ffffff" style="padding: 10px; font-family: Arial, sans-serif; font-size: 16px; line-height: 24px; border: 1px solid #F0F0F0;">${name}</td>
                  </tr>
                  <tr>
                    <td width="30%" bgcolor="#F7F7F7" style="padding: 10px; font-family: Arial, sans-serif; font-size: 16px; line-height: 24px; font-weight: bold; border: 1px solid #F0F0F0;">${t.email}</td>
                    <td width="70%" bgcolor="#ffffff" style="padding: 10px; font-family: Arial, sans-serif; font-size: 16px; line-height: 24px; border: 1px solid #F0F0F0;">${email}</td>
                  </tr>
                  <tr>
                    <td width="30%" bgcolor="#F7F7F7" style="padding: 10px; font-family: Arial, sans-serif; font-size: 16px; line-height: 24px; font-weight: bold; border: 1px solid #F0F0F0;">${t.subject}</td>
                    <td width="70%" bgcolor="#ffffff" style="padding: 10px; font-family: Arial, sans-serif; font-size: 16px; line-height: 24px; border: 1px solid #F0F0F0;">${subject}</td>
                  </tr>
                  <tr>
                    <td width="30%" bgcolor="#F7F7F7" style="padding: 10px; font-family: Arial, sans-serif; font-size: 16px; line-height: 24px; font-weight: bold; border: 1px solid #F0F0F0; vertical-align: top;">${t.message}</td>
                    <td width="70%" bgcolor="#ffffff" style="padding: 10px; font-family: Arial, sans-serif; font-size: 16px; line-height: 24px; border: 1px solid #F0F0F0;">${message.replace(/\n/g, '<br>')}</td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td align="left" bgcolor="#ffffff" style="padding: 20px 30px 0px 30px; color: #1b2a30; font-family: Arial, sans-serif; font-size: 16px; line-height: 24px;">
                <p style="margin: 0;">${t.urgent}</p>
              </td>
            </tr>
            <tr>
              <td align="left" bgcolor="#ffffff" style="padding: 25px 30px 0px 30px;">
                <table border="0" cellpadding="0" cellspacing="0" width="100%">
                  <tr>
                    <td align="center">
                      <table border="0" cellpadding="0" cellspacing="0">
                        <tr>
                          <td align="center" bgcolor="#9e2c21" style="border-radius: 4px;">
                            <a href="${websiteUrl}" target="_blank" style="display: inline-block; padding: 16px 36px; font-family: Arial, sans-serif; font-size: 16px; color: #ffffff; text-decoration: none; border-radius: 4px; font-weight: bold; background-color: #9e2c21;">
                              ${t.visitButton}
                            </a>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td align="left" bgcolor="#ffffff" style="padding: 25px 30px 0px 30px; color: #1b2a30; font-family: Arial, sans-serif; font-size: 16px; line-height: 24px;">
                <p style="margin: 0;">${t.regards}</p>
              </td>
            </tr>
            <tr>
              <td align="left" bgcolor="#ffffff" style="padding: 10px 30px 30px 30px; color: #1b2a30; font-family: Arial, sans-serif; font-size: 16px; line-height: 24px; font-weight: bold;">
                <p style="margin: 0;">${t.team}</p>
              </td>
            </tr>
            <tr>
              <td align="center" bgcolor="#1b2a30" style="padding: 20px 30px 10px 30px; color: #ffffff; font-family: Arial, sans-serif; font-size: 12px; line-height: 18px;">
                <p style="margin: 0;">${t.copyright}</p>
              </td>
            </tr>
            <tr>
              <td align="center" bgcolor="#1b2a30" style="padding: 0px 30px 20px 30px; color: #ffffff; font-family: Arial, sans-serif; font-size: 11px; line-height: 16px;">
                <p style="margin: 0;">${t.automated}</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
  </html>
`
} 