document.getElementById("enableCaptureSession").addEventListener("click", function(event) {
    event.preventDefault(); // Previne o comportamento padrão de formulario
    document.getElementById("photoCaptureSection").classList.remove("d-none");

    // Configura as capturas para cada foto
    setupCapture('videoChassi', 'captureButtonChassi', 'canvasChassi', 'resetButtonChassi', 'capturedChassi');
    setupCapture('videoMotor', 'captureButtonMotor', 'canvasMotor', 'resetButtonMotor', 'capturedMotor');
    setupCapture('videoPanoramica', 'captureButtonPanoramica', 'canvasPanoramica', 'resetButtonPanoramica', 'capturedPanoramica');
});

// Função para habilitar a câmera
function enableCamera(videoId) {
    const video = document.getElementById(videoId);

    // Solicita acesso à câmera
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(function(stream) {
                video.srcObject = stream;
            })
            .catch(function(err) {
                console.error("Erro ao acessar a câmera: " + err);
            });
    } else {
        alert("O navegador não suporta a captura de vídeo.");
    }
}

// Função para configurar a captura de vídeo e foto para cada seção
function setupCapture(videoId, buttonId, canvasId, resetButtonId, capturedImgId) {
    const video = document.getElementById(videoId);
    const button = document.getElementById(buttonId);
    const canvas = document.getElementById(canvasId);
    const resetButton = document.getElementById(resetButtonId);
    const capturedImg = document.getElementById(capturedImgId);
    const context = canvas.getContext('2d');
    
    let stream;

    // Habilita a câmera
    enableCamera(videoId);

    // Captura a imagem ao clicar no botão
    button.addEventListener('click', (event) => {
        event.preventDefault(); // Previne o comportamento padrão (como recarregar a página)

        // Verificar se o vídeo tem largura e altura antes de capturar
        if (video.videoWidth && video.videoHeight) {
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;

            // Desenha a imagem do vídeo no canvas
            context.drawImage(video, 0, 0, canvas.width, canvas.height);

            // Exibe o canvas e a imagem capturada
            canvas.classList.remove('d-none');
            capturedImg.classList.remove('d-none');
            capturedImg.src = canvas.toDataURL('image/png'); // Converte o canvas para uma imagem

            // Esconde o vídeo
            video.classList.add('d-none');
        } else {
            console.error("Erro: O vídeo não tem largura e altura.");
        }
    });

    // Reiniciar a captura
    resetButton.addEventListener('click', (event) => {
        event.preventDefault(); //prevevine o comportamento padrão de recarregar a página

        // Parar o stream da câmera
        if (stream) {
            stream.getTracks().forEach(track => track.stop());
        }
        
        // Esconde o canvas e exibe o vídeo novamente
        canvas.classList.add('d-none');
        capturedImg.classList.add('d-none');
        video.classList.remove('d-none');

        // Reinicia a captura
        setupCapture(videoId, buttonId, canvasId, resetButtonId, capturedImgId);
    });
}