// Array de objetos contendo os projetos
const projetos = [
    {
        titulo: "Projeto 1: Landing Page",
        descricao: "Uma landing page responsiva criada com HTML e CSS para um produto fictício.",
        imagem: "https://via.placeholder.com/400x200?text=Projeto+1",
        link: "#"
    },
    {
        titulo: "Projeto 2: To-Do List",
        descricao: "Um aplicativo de lista de tarefas interativo utilizando JavaScript para manipulação do DOM.",
        imagem: "https://via.placeholder.com/400x200?text=Projeto+2",
        link: "#"
    },
    {
        titulo: "Projeto 3: Calculadora",
        descricao: "Uma calculadora funcional construída com HTML, CSS e lógica em JavaScript.",
        imagem: "https://via.placeholder.com/400x200?text=Projeto+3",
        link: "#"
    }
];

// Função para renderizar os projetos
function renderizarProjetos() {
    const container = document.getElementById('projetos-container');
    
    // Limpa o container antes de adicionar (boa prática)
    container.innerHTML = '';

    // Itera sobre o array de projetos
    projetos.forEach(projeto => {
        // Cria a estrutura HTML para cada card de projeto
        const cardHTML = `
            <div class="projeto-card">
                <img src="${projeto.imagem}" alt="${projeto.titulo}" class="projeto-img">
                <div class="projeto-info">
                    <h3>${projeto.titulo}</h3>
                    <p>${projeto.descricao}</p>
                    <a href="${projeto.link}" class="projeto-link" target="_blank">Ver Projeto</a>
                </div>
            </div>
        `;
        
        // Adiciona o card ao container
        container.innerHTML += cardHTML;
    });
}

// Executa a função quando o DOM estiver completamente carregado
document.addEventListener('DOMContentLoaded', renderizarProjetos);
