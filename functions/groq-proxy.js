exports.handler = async (event) => {
  try {
    // Pega a chave da variável secreta do Netlify
    const GROQ_API_KEY = process.env.GROQ_API_KEY;

    // Encaminha o corpo e os cabeçalhos recebidos
    const resposta = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${GROQ_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: event.body
    });

    const dados = await resposta.json();

    return {
      statusCode: resposta.status,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dados)
    };

  } catch (erro) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Erro interno no servidor" })
    };
  }
};
