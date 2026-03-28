const nodemailer = require('nodemailer');

// Configuração do transporter com Gmail SMTP
const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });
};

// Função para escapar HTML e prevenir XSS
const escapeHtml = (text) => {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, m => map[m]);
};

// Template HTML para o admin (notificação de novo contato)
const formatAdminEmailHTML = (data) => {
  return `
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Nova Mensagem - Portfolio</title>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@900&family=Barlow:wght@400;600&display=swap" rel="stylesheet">
      <style>
        body {
          margin: 0;
          padding: 0;
          font-family: 'Barlow', Arial, Helvetica, sans-serif;
          background-color: #f4f4f4;
          line-height: 1.6;
        }
        .email-wrapper {
          max-width: 600px;
          margin: 20px auto;
          background: #ffffff;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }
        .header {
          background: linear-gradient(135deg, #FFE84D, #FF8C55, #FF5EC4);
          padding: 50px 30px;
          text-align: center;
        }
        .header h1 {
          color: #ffffff;
          margin: 0;
          font-family: 'Montserrat', 'Arial Black', 'Impact', sans-serif;
          font-size: 28px;
          font-weight: 900;
          text-shadow: 2px 2px 8px rgba(0,0,0,0.2);
          letter-spacing: -0.5px;
        }
        .content {
          padding: 35px;
          background: #ffffff;
        }
        .intro-text {
          font-family: 'Barlow', Arial, sans-serif;
          font-size: 15px;
          color: #888;
          margin: 0 0 25px 0;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-weight: 600;
        }
        .field {
          margin-bottom: 20px;
          border-bottom: 1px solid #e8e8e8;
          padding-bottom: 20px;
        }
        .field:last-of-type {
          border-bottom: none;
        }
        .field-label {
          font-family: 'Barlow', Arial, sans-serif;
          font-weight: 600;
          color: #bbb;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          margin-bottom: 6px;
          display: block;
        }
        .field-value {
          color: #333;
          font-size: 15px;
          font-family: 'Barlow', Arial, sans-serif;
        }
        .field-value a {
          color: #FF5EC4;
          text-decoration: none;
          font-weight: 600;
        }
        .message-value {
          color: #555;
          font-size: 15px;
          line-height: 1.7;
          white-space: pre-wrap;
          font-style: italic;
        }
        .footer {
          background: #202020;
          text-align: center;
          padding: 35px 20px 25px;
        }
        .footer-name {
          font-family: 'Montserrat', 'Arial Black', 'Impact', sans-serif;
          font-weight: 900;
          font-size: 28px;
          color: #FF17DE;
          margin: 0 0 4px 0;
          letter-spacing: -1px;
        }
        .footer-title {
          font-family: 'Montserrat', 'Arial Black', sans-serif;
          font-weight: 900;
          font-size: 14px;
          color: #ffffff;
          margin: 0 0 20px 0;
        }
        .footer-note {
          font-family: 'Barlow', Arial, sans-serif;
          font-size: 11px;
          color: #666;
          margin: 0 0 4px 0;
        }
        @media only screen and (max-width: 600px) {
          .email-wrapper { margin: 10px; }
          .content { padding: 20px; }
          .header h1 { font-size: 22px; }
        }
      </style>
    </head>
    <body>
      <div class="email-wrapper">

        <div class="header">
          <h1>Nova mensagem recebida!</h1>
        </div>

        <div class="content">
          <p class="intro-text">Alguém entrou em contato pelo seu portfólio</p>

          <div class="field">
            <span class="field-label">Nome</span>
            <div class="field-value">${escapeHtml(data.name)}</div>
          </div>

          <div class="field">
            <span class="field-label">Email</span>
            <div class="field-value"><a href="mailto:${data.email}" style="color:#FF5EC4;text-decoration:none;font-weight:600;">${escapeHtml(data.email)}</a></div>
          </div>

          ${data.telefone ? `
          <div class="field">
            <span class="field-label">Telefone</span>
            <div class="field-value">${escapeHtml(data.telefone)}</div>
          </div>
          ` : ''}

          ${data['cidade-uf'] ? `
          <div class="field">
            <span class="field-label">Cidade / UF</span>
            <div class="field-value">${escapeHtml(data['cidade-uf'])}</div>
          </div>
          ` : ''}

          ${data.empresa ? `
          <div class="field">
            <span class="field-label">Empresa / Cargo</span>
            <div class="field-value">${escapeHtml(data.empresa)}</div>
          </div>
          ` : ''}

          ${data['meio-contato'] ? `
          <div class="field">
            <span class="field-label">Como encontrou</span>
            <div class="field-value">${escapeHtml(data['meio-contato'])}</div>
          </div>
          ` : ''}

          <div class="field">
            <span class="field-label">Mensagem</span>
            <div class="message-value">${escapeHtml(data.message)}</div>
          </div>

          <div style="text-align:center;margin-top:30px;">
            <a href="mailto:${data.email}" style="display:inline-block;padding:12px 32px;background:linear-gradient(45deg,#8001FB,#FF17DE,#FF4E48);color:#ffffff;text-decoration:none;border-radius:25px;font-family:'Barlow',Arial,sans-serif;font-weight:600;font-size:14px;">Responder</a>
          </div>
        </div>

        <div class="footer">
          <p class="footer-name" style="font-family:'Montserrat','Arial Black','Impact',sans-serif;font-weight:900;font-size:28px;color:#FF17DE;margin:0 0 4px 0;letter-spacing:-1px;">Lara Pires</p>
          <p class="footer-title">Designer &amp; Diretora de Arte</p>
          <p class="footer-note">Esta mensagem foi enviada através do formulário de contato do seu portfólio.</p>
        </div>

      </div>
    </body>
    </html>
  `;
};

// Template HTML para auto-resposta ao usuário
const formatUserConfirmationEmailHTML = (data) => {
  const messagePreview = escapeHtml(data.message).substring(0, 300) + (data.message.length > 300 ? '...' : '');

  return `
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Mensagem Recebida - Lara Pires</title>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@900&family=Barlow:wght@400;600&display=swap" rel="stylesheet">
      <style>
        body {
          margin: 0;
          padding: 0;
          font-family: 'Barlow', Arial, Helvetica, sans-serif;
          background-color: #f4f4f4;
          line-height: 1.6;
        }
        .email-wrapper {
          max-width: 600px;
          margin: 20px auto;
          background: #ffffff;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }
        /* HEADER */
        .header {
          background: linear-gradient(135deg, #FFE84D, #FF8C55, #FF5EC4);
          padding: 50px 30px;
          text-align: center;
        }
        .header h1 {
          color: #ffffff;
          margin: 0;
          font-family: 'Montserrat', 'Arial Black', sans-serif;
          font-size: 30px;
          font-weight: 900;
          text-shadow: 2px 2px 8px rgba(0,0,0,0.25);
          letter-spacing: -0.5px;
        }
        /* CONTENT */
        .content {
          padding: 40px 35px;
          color: #333;
        }
        .greeting {
          font-family: 'Barlow', Arial, sans-serif;
          font-size: 26px;
          font-weight: 600;
          color: #202020;
          margin: 0 0 20px 0;
        }
        .message-text {
          font-family: 'Barlow', Arial, sans-serif;
          font-size: 16px;
          line-height: 1.8;
          color: #555;
          margin: 0 0 10px 0;
        }
        .divider {
          border: none;
          border-top: 1px solid #e0e0e0;
          margin: 30px 0;
        }
        /* PREVIEW DA MENSAGEM */
        .preview-box {
          padding: 20px 0;
          margin: 0 0 30px 0;
        }
        .preview-label {
          font-family: 'Barlow', Arial, sans-serif;
          font-weight: 600;
          color: #bbb;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          margin-bottom: 10px;
        }
        .preview-text {
          color: #888;
          font-size: 14px;
          font-style: italic;
          line-height: 1.7;
          white-space: pre-wrap;
        }
        /* CTA */
        .cta-section {
          text-align: center;
          margin: 30px 0 10px 0;
        }
        .cta-title {
          font-family: 'Barlow', Arial, sans-serif;
          font-size: 15px;
          font-weight: 600;
          color: #888;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin: 0 0 18px 0;
        }
        .btn-trabalho {
          display: inline-block;
          margin: 6px 8px;
          padding: 12px 28px;
          background: #ffffff;
          color: #ED008C;
          text-decoration: none;
          border-radius: 25px;
          font-family: 'Barlow', Arial, sans-serif;
          font-weight: 600;
          font-size: 14px;
          border: 2px solid #ED008C;
        }
        .btn-bastidores {
          display: inline-block;
          margin: 6px 8px;
          padding: 12px 28px;
          background: linear-gradient(45deg, #8001FB, #FF17DE, #FF4E48);
          color: #ffffff;
          text-decoration: none;
          border-radius: 25px;
          font-family: 'Barlow', Arial, sans-serif;
          font-weight: 600;
          font-size: 14px;
          box-shadow: 0 4px 14px rgba(128, 1, 251, 0.3);
        }
        /* FOOTER */
        .footer {
          background: #202020;
          text-align: center;
          padding: 35px 20px 25px;
        }
        .footer-name {
          font-family: 'Montserrat', 'Arial Black', sans-serif;
          font-weight: 900;
          font-size: 22px;
          color: #FF17DE;
          margin: 0 0 4px 0;
        }
        .footer-title {
          font-family: 'Montserrat', 'Arial Black', sans-serif;
          font-weight: 900;
          font-size: 14px;
          color: #ffffff;
          margin: 0 0 20px 0;
        }
        .footer-note {
          font-family: 'Barlow', Arial, sans-serif;
          font-size: 11px;
          color: #666;
          margin: 0 0 4px 0;
        }
        @media only screen and (max-width: 600px) {
          .email-wrapper { margin: 10px; }
          .content { padding: 25px 20px; }
          .header h1 { font-size: 22px; }
          .greeting { font-size: 22px; }
        }
      </style>
    </head>
    <body>
      <div class="email-wrapper">

        <div class="header">
          <h1>Sua mensagem foi enviada!</h1>
        </div>

        <div class="content">
          <p class="greeting">Olá, ${escapeHtml(data.name)}!</p>

          <p class="message-text">Muito obrigada por ter entrado em contato comigo!</p>
          <p class="message-text">Recebi a sua mensagem e ficarei muito feliz em conversar com você sobre seu projeto.</p>
          <p class="message-text">Retornarei o contato em breve, geralmente em até 24 horas.</p>

          <hr class="divider">

          <div class="preview-box">
            <div class="preview-label">Sua mensagem</div>
            <div class="preview-text">${messagePreview}</div>
          </div>

          <div class="cta-section">
            <p class="cta-title">Enquanto isso, conheça mais:</p>
            <a href="${process.env.PORTFOLIO_URL || 'https://larapires.design'}" class="btn-trabalho" style="display:inline-block;margin:6px 8px;padding:12px 28px;background:#ffffff;color:#ED008C !important;text-decoration:none;border-radius:25px;font-family:'Barlow',Arial,sans-serif;font-weight:600;font-size:14px;border:2px solid #ED008C;">Meu trabalho</a>
            <a href="${process.env.INSTAGRAM_URL || 'https://instagram.com/larapires'}" class="btn-bastidores" style="display:inline-block;margin:6px 8px;padding:12px 28px;background:linear-gradient(45deg,#8001FB,#FF17DE,#FF4E48);color:#ffffff !important;text-decoration:none;border-radius:25px;font-family:'Barlow',Arial,sans-serif;font-weight:600;font-size:14px;">Bastidores</a>
          </div>
        </div>

        <div class="footer">
          <p class="footer-name" style="font-family:'Montserrat','Arial Black','Impact',sans-serif;font-weight:900;font-size:28px;color:#FF17DE;margin:0 0 4px 0;letter-spacing:-1px;">Lara Pires</p>
          <p class="footer-title">Designer &amp; Diretora de Arte</p>
          <p class="footer-note">Esta é apenas uma resposta automática para confirmação de recebimento de sua mensagem.</p>
          <p class="footer-note">Você receberá uma resposta personalizada em breve.</p>
        </div>

      </div>
    </body>
    </html>
  `;
};

// Função principal de envio - envia 2 emails (admin + auto-reply)
const sendContactEmail = async (formData) => {
  const transporter = createTransporter();

  // Email 1: Notificação para o admin (Lara)
  const adminMailOptions = {
    from: `"Portfolio Lara Pires" <${process.env.GMAIL_USER}>`,
    to: process.env.GMAIL_USER,
    subject: `📬 Contato do Portfolio: ${formData.name}`,
    html: formatAdminEmailHTML(formData),
    replyTo: formData.email,
  };

  // Email 2: Confirmação automática para o usuário
  const userMailOptions = {
    from: `"Lara Pires" <${process.env.GMAIL_USER}>`,
    to: formData.email,
    subject: `✨ Mensagem recebida - Lara Pires Design`,
    html: formatUserConfirmationEmailHTML(formData),
    replyTo: process.env.GMAIL_USER,
  };

  try {
    // Enviar ambos em paralelo
    const [adminResult, userResult] = await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(userMailOptions)
    ]);

    console.log('✅ Email admin enviado:', adminResult.messageId);
    console.log('✅ Email confirmação enviado:', userResult.messageId);

    return {
      success: true,
      adminMessageId: adminResult.messageId,
      userMessageId: userResult.messageId,
    };
  } catch (error) {
    console.error('❌ Erro ao enviar emails:', error);
    throw error;
  }
};

module.exports = {
  sendContactEmail,
};
