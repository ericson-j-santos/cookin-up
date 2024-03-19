<template>
<header class="banner">
    <div class="apresentacao">
      <img src="../assets/images/logo.svg" alt="Logo do Cookin' Up" class="logo">
      <p class="cabecalho-lg frase-cabecalho">
        <span class="texto-verde">Um banquete de ideias para </span>
        despertar o chef que há em você!
      </p>

      <p class="subtitulo-lg">
        Explore novas receitas todos os dias com os ingredientes que estão ao seu alcance!
      </p>

    </div>

    <img src="../assets/images/foto-banner.png" alt="Foto de uma mulher cozinhando" class="foto-banner">

  </header>
</template>

<style scoped>
/* Estilos gerais para o banner da página, definindo o layout, cores e espaçamentos */
.banner {
  padding: 4rem 7.5rem; /* Espaçamento interno */
  color: var(--creme); /* Cor do texto, definida por variável CSS */

  display: flex; /* Usa Flexbox para layout */
  justify-content: space-between; /* Alinha itens para cada lado do container */
  align-items: center; /* Alinha itens verticalmente no centro */
  column-gap: 3.25rem; /* Espaço entre as colunas */
}

/* Estilos para o logo dentro do banner */
.logo {
  height: 4.5rem; /* Altura fixa */
  margin-bottom: 3rem; /* Espaçamento abaixo do logo */
}

/* Estilos para a frase de cabeçalho dentro do banner */
.frase-cabecalho {
  margin-bottom: 2rem; /* Espaçamento abaixo da frase */
}

/* Estilos para texto que deve ser destacado em verde */
.texto-verde {
  color: var(--verde-medio, #3D6D4A); /* Cor do texto verde, com fallback */
}

/* Estilos para a foto dentro do banner */
.foto-banner {
  width: 35rem; /* Largura fixa */
}

/* Ajustes para telas com largura máxima de 1300px */
@media only screen and (max-width: 1300px) {
  .banner {
    padding: 4rem 3.75rem; /* Reduz o espaçamento interno */
    flex-direction: column; /* Itens do Flexbox em coluna */
    align-items: center; /* Centraliza itens */
    gap: 1rem; /* Espaço entre os itens quando em coluna */
  }

  .logo {
    display: block; /* Garante que o logo seja um bloco */
    margin-left: auto; /* Centraliza horizontalmente */
    margin-right: auto; /* Centraliza horizontalmente */
  }
}

/* Ajustes para telas com largura máxima de 767px */
@media only screen and (max-width: 767px) {
  .banner {
    padding: 4rem 1.5rem; /* Reduz ainda mais o espaçamento interno */
  }

  .foto-banner {
    width: min(100%, 21.25rem); /* Ajusta a largura para ser responsiva */
  }
}
</style>