    //Botão de inspeção
    // Função para gerenciar a seleção de botões e aplicar estilos ativos
    document.addEventListener('DOMContentLoaded', () => {
        const labelApto = document.getElementById('labelApto');
        const labelNaoApto = document.getElementById('labelNaoApto');
        const radioApto = document.getElementById('apto');
        const radioNaoApto = document.getElementById('naoApto');

        // Função para ativar/desativar botões visualmente
        function updateActiveState() {
            if (radioApto.checked) {
                labelApto.classList.add('btn-success', 'text-white');
                labelApto.classList.remove('btn-outline-success');
                labelNaoApto.classList.remove('btn-danger', 'text-white');
                labelNaoApto.classList.add('btn-outline-danger');
            } else if (radioNaoApto.checked) {
                labelNaoApto.classList.add('btn-danger', 'text-white');
                labelNaoApto.classList.remove('btn-outline-danger');
                labelApto.classList.remove('btn-success', 'text-white');
                labelApto.classList.add('btn-outline-success');
            }
        }

        // Adicionar eventos de clique para as labels
        labelApto.addEventListener('click', () => {
            radioApto.checked = true;
            updateActiveState();
        });

        labelNaoApto.addEventListener('click', () => {
            radioNaoApto.checked = true;
            updateActiveState();
        });

        // Inicializa o estado ativo com base na seleção existente
        updateActiveState();
    });



    //itens de vistoria
   // Função para marcar todos os checkboxes
function selectAll() {
    const checkboxes = document.querySelectorAll('.form-check-input');
    checkboxes.forEach(checkbox => checkbox.checked = true);
    document.getElementById('selectAllBtn').textContent = 'Desmarcar Todos';  // Altera o texto para "Desmarcar Todos"
}

// Função para desmarcar todos os checkboxes
function deselectAll() {
    const checkboxes = document.querySelectorAll('.form-check-input');
    checkboxes.forEach(checkbox => checkbox.checked = false);
    document.getElementById('selectAllBtn').textContent = 'Selecionar Todos';  // Altera o texto para "Selecionar Todos"
}

// Adiciona um evento de clique ao botão 'selectAllBtn'
document.getElementById('selectAllBtn').addEventListener('click', function (event) {
    // Impede o comportamento padrão do botão (evita o recarregamento da página)
    event.preventDefault();
    
    // Verifica o estado do primeiro checkbox
    const firstCheckbox = document.querySelector('.form-check-input');
    
    // Se o primeiro checkbox estiver desmarcado, marque todos
    if (!firstCheckbox.checked) {
        selectAll();
    } else {
        deselectAll();
    }
});

