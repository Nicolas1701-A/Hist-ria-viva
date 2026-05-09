const eventos = [
  {
    titulo: "Revolução Francesa (1789)",
    imagem: "imagens/franca.jpg",
    resumo:
      "Transformou a política moderna e inspirou movimentos democráticos."
  },

  {
    titulo: "Chegada à Lua (1969)",
    imagem: "imagens/lua.jpg",
    resumo:
      "Marco da exploração espacial durante a Guerra Fria."
  },

  {
    titulo: "Queda do Império Romano (476 d.C.)",
    imagem: "imagens/roma.jpg",
    resumo:
      "Mudou completamente a organização política da Europa."
  },

  {
    titulo: "Construção das Pirâmides do Egito (2686 a.C) ",
    imagem: "https://s5.static.brasilescola.uol.com.br/be/2023/01/piramides-egito.jpg",
    resumo:
      "Uma das maiores realizações arquitetônicas da antiguidade."
  },

  {
    titulo: "Descobrimento da América (1492)",
    imagem: "https://aventurasnahistoria.com.br/media/uploads/legacy/2019/07/29/caravelas.jpg",
    resumo:
      "Mudou o comércio, a cultura e a política mundial."
  },

  {
    titulo: "Primeira Guerra Mundial (1914–1918)",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Bundesarchiv_Bild_183-R05148%2C_Westfront%2C_britischer_Panzer.jpg",
    resumo:
      "Conflito global que alterou fronteiras e potências mundiais."
  },

  {
    titulo: "Segunda Guerra Mundial (1939–1945)",
    imagem: "https://aventurasnahistoria.com.br/media/uploads/segunda_guerra_mundial_capa.jpg",
    resumo:
      "Maior guerra da história, envolvendo dezenas de países."
  },

  {
    titulo: "Queda do Muro de Berlim (1989)",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/f/f6/Bundesarchiv_Bild_183-1989-1110-018%2C_Berlin%2C_Mauerfall.jpg",
    resumo:
      "Símbolo do fim da Guerra Fria e da divisão da Alemanha."
  },

  {
    titulo: "Independência do Brasil (1822)",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Independencia_o_morte.jpg",
    resumo:
      "Marcou o fim do domínio colonial português no Brasil."
  },

  {
    titulo: "Renascimento Europeu",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Escola_de_Atenas_-_Vaticano.jpg",
    resumo:
      "Movimento cultural que revolucionou a arte, ciência e filosofia."
  },

  {
    titulo: "Revolução Industrial",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/5/59/Industrial_Revolution.jpg",
    resumo:
      "Transformou a economia mundial com máquinas e fábricas."
  },

  {
    titulo: "Criação da Internet",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Internet_map_1024.jpg",
    resumo:
      "Mudou completamente a comunicação e o acesso à informação."
  }
];

const pessoas = [
  {
    nome: "Albert Einstein",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Albert_Einstein_Head_cleaned.jpg/250px-Albert_Einstein_Head_cleaned.jpg",
    resumo:
      "Criador da teoria da relatividade."
  },

  {
    nome: "Marie Curie",
    imagem: "https://super.abril.com.br/wp-content/uploads/2021/04/Marie-Curie-a-polonesa-mais-brilhante-da-historia.png?resize=1080,565&crop=1",
    resumo:
      "Pioneira na pesquisa radiológica."
  },

  {
    nome: "Leonardo da Vinci",
    imagem: "https://aventurasnahistoria.com.br/wp-content/uploads/leonardo_da_vinci_2.jpg",
    resumo:
      "Artista e inventor do Renascimento."
  },

  {
    nome: "Cleópatra",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEwOIT8UezPOFf1EgLnxm6aWcjzUkdoT2vrg&s",
    resumo:
      "Última rainha do Egito Antigo e figura política influente."
  },

  {
    nome: "Napoleão Bonaparte",
    imagem: "https://fernandoeichenberg.com/wp-content/uploads/2021/04/Capture-de%CC%81cran-2021-04-17-a%CC%80-09.37.13-1024x615.png",
    resumo:
      "Imperador francês conhecido por suas conquistas militares."
  },

  {
    nome: "Mahatma Gandhi",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/d/d1/Portrait_Gandhi.jpg",
    resumo:
      "Líder da independência da Índia através da resistência pacífica."
  },

  {
    nome: "Martin Luther King Jr.",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Martin_Luther_King%2C_Jr..jpg/330px-Martin_Luther_King%2C_Jr..jpg",
    resumo:
      "Lutou pelos direitos civis e igualdade racial nos EUA."
  },

  {
    nome: "Júlio César",
    imagem: "https://www.walksinsiderome.com/_next/image/?url=https%3A%2F%2Fwww.walksinsiderome.com%2Fuploads%2F2022%2F09%2FJulius-Caesar-1024x576-1.jpg&w=1920&q=75",
    resumo:
      "General romano que influenciou profundamente a história de Roma."
  },

  {
    nome: "Isaac Newton",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Portrait_of_Sir_Isaac_Newton%2C_1689_%28brightened%29.jpg",
    resumo:
      "Desenvolveu leis fundamentais da física e matemática."
  },

  {
    nome: "Nelson Mandela",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/0/02/Nelson_Mandela_1994.jpg",
    resumo:
      "Símbolo mundial da luta contra o apartheid."
  },

  {
    nome: "William Shakespeare",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Shakespeare.jpg",
    resumo:
      "Dramaturgo e poeta inglês amplamente considerado o mais renomado escritor da língua inglesa."
  },

  {
    nome: "Abraham Lincoln",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Abraham_Lincoln_O-77_matte_collodion_print.jpg",
    resumo:
      "Presidente dos EUA que liderou o país durante a Guerra Civil."
  },

  {
    nome: "Charles Darwin",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Charles_Darwin_by_Julia_Margaret_Cameron_2.jpghttps://upload.wikimedia.org/wikipedia/commons/thumb/0/02/1878_Darwin_photo_by_Leonard_from_Woodall_1884_-_cropped_grayed_partially_cleaned.jpg/250px-1878_Darwin_photo_by_Leonard_from_Woodall_1884_-_cropped_grayed_partially_cleaned.jpg",
    resumo:
      "Criador da teoria da evolução das espécies."
  },

  {
    nome: "Galileu Galilei",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/2/29/Galileo.arp.300pix.jpg",
    resumo:
      "Astrônomo que revolucionou a ciência moderna."
  },

  {
    nome: "Cristovão Colombo",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Portrait_of_a_Man%2C_Said_to_be_Christopher_Columbus.jpg",
    resumo:
      "Descobridor das Américas e navegador italiano."
  }
];