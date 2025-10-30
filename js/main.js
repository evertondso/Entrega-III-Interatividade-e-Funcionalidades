mport { initSPA } from './spa.js';

document.addEventListener('DOMContentLoaded', () => {
  try {
    const app = document.getElementById('app-container');
    if (!app) return console.error('Elemento #app-container não encontrado.');

    app.innerHTML = '<p class="loading">Carregando...</p>';

    initSPA();
  } catch (err) {
    console.error('Erro ao inicializar SPA:', err);
    document.body.insertAdjacentHTML('beforeend', '<p style="color:red">Erro ao carregar conteúdo. Veja console.</p>');
  }
});