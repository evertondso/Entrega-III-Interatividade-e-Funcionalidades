import { initSPA } from './spa.js';

document.addEventListener('DOMContentLoaded', () => {
  try {
    const app = document.getElementById('app-container');
    if (!app) return console.error('Elemento #app-container não encontrado.');

    // Mensagem temporária enquanto a SPA inicializa
    app.innerHTML = '<p class="loading">Carregando...</p>';

    // Inicializa o roteamento SPA (handleRoute + listener de hashchange)
    initSPA();
  } catch (err) {
    console.error('Erro ao inicializar SPA:', err);
    document.body.insertAdjacentHTML('beforeend', '<p style="color:red">Erro ao carregar conteúdo. Veja console.</p>');
  }
});

