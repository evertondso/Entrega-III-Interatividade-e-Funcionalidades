import { templateHome, templateProjetos, templateCadastro } from './template.js';

import { setupFormValidation } from './validacao.js';

const rotas = {
    '': templateHome, 
    '#home': templateHome,
    '#projetos': templateProjetos,
    '#cadastro': templateCadastro
};

function renderPage(template) {
    const appContainer = document.getElementById('app-container');
    
    if (appContainer) {
        appContainer.innerHTML = template;
        
        if (window.location.hash === '#cadastro') {
            setupFormValidation(); 
        }
    }
}

export function handleRoute() {
    const hash = window.location.hash; 
    
    const template = rotas[hash] || rotas['']; 

    renderPage(template);
}

export function initSPA() {
    window.addEventListener('hashchange', handleRoute);
    
    handleRoute(); 
}