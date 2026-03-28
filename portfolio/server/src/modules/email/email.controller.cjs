const { sendContactEmail } = require('./email.service.cjs');

const sendEmail = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Campos obrigatórios faltando: nome, email e mensagem',
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Email inválido',
      });
    }

    const result = await sendContactEmail(req.body);

    return res.status(200).json({
      success: true,
      message: 'Email enviado com sucesso! Você receberá uma confirmação no seu email.',
      adminMessageId: result.adminMessageId,
      userMessageId: result.userMessageId,
    });

  } catch (error) {
    console.error('Erro no controller de email:', error);

    return res.status(500).json({
      success: false,
      message: 'Erro ao enviar email. Tente novamente mais tarde.',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined,
    });
  }
};

module.exports = {
  sendEmail,
};
