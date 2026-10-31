import nodemailer from 'nodemailer';

// Sends the lead to the agency inbox when SMTP_* env vars are set; otherwise a no-op.
export async function notifyLead(lead) {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, LEAD_TO } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) return false;

  const transport = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT) || 587,
    secure: Number(SMTP_PORT) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  await transport.sendMail({
    from: SMTP_USER,
    to: LEAD_TO || 'brmarketingagency02@gmail.com',
    subject: `New BR brief${lead.name ? ' from ' + lead.name : ''}`,
    text: `${lead.message}\n\nName: ${lead.name || '-'}\nServices: ${lead.services.join(', ') || '-'}\nLanguage: ${lead.lang}\nReceived: ${lead.createdAt}`,
  });
  return true;
}
