const eventosDiv = document.getElementById("eventos");
const pessoasDiv = document.getElementById("pessoas");

function criarCards() {

  eventos.forEach(evento => {

    eventosDiv.innerHTML += `
      <div class="card">
        <img src="${evento.imagem}">

        <div class="card-content">
          <h4>${evento.titulo}</h4>

          <p>${evento.resumo}</p>
        </div>
      </div>
    `;
  });

  pessoas.forEach(pessoa => {

    pessoasDiv.innerHTML += `
      <div class="card">
        <img src="${pessoa.imagem}">

        <div class="card-content">
          <h4>${pessoa.nome}</h4>

          <p>${pessoa.resumo}</p>
        </div>
      </div>
    `;
  });
}

criarCards();

const chat = document.getElementById("chat");

document
.getElementById("abrirChat")
.onclick = () => {
  chat.classList.remove("hidden");
};

document
.getElementById("fecharChat")
.onclick = () => {
  chat.classList.add("hidden");
};

document
.getElementById("salvarKey")
.onclick = () => {

  const key =
  document.getElementById("apiKey").value;

  localStorage.setItem("openai_key", key);

  alert("Chave salva!");
};

async function enviarPergunta() {

  const pergunta =
  document.getElementById("pergunta").value;

  const mensagens =
  document.getElementById("mensagens");

  mensagens.innerHTML += `
    <div class="msg usuario">
      ${pergunta}
    </div>
  `;

  const apiKey =
  localStorage.getItem("openai_key");

  const resposta = await fetch(
    "https://api.openai.com/v1/responses",
    {
      method:"POST",

      headers:{
        "Content-Type":"application/json",
        "Authorization":
        `Bearer ${apiKey}`
      },

      body: JSON.stringify({

        model:"gpt-4.1-mini",

        input: `
          Você é um historiador especialista.

          Responda de forma educativa e simples.

          Pergunta:
          ${pergunta}
        `
      })
    }
  );

  const dados = await resposta.json();

  const texto =
  dados.output[0].content[0].text;

  mensagens.innerHTML += `
    <div class="msg">
      ${texto}
    </div>
  `;
}

document
.getElementById("enviar")
.onclick = enviarPergunta;