
        // Alternar visibilidade da senha
        document.getElementById('togglePassword').addEventListener('click', function() {
            const passwordField = document.getElementById('password');
            const type = passwordField.type === 'password' ? 'text' : 'password';
            passwordField.type = type;
            this.querySelector('i').classList.toggle('fa-eye-slash');
        });

        // Validação de formulário e exibição de erro
        document.getElementById('loginForm').addEventListener('submit', function(event) {
            let valid = true;
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            if (!username || !password) {
                valid = false;
                document.getElementById('error-message').style.display = 'block';
            }

            if (!valid) {
                event.preventDefault();
            } else {
                document.getElementById('error-message').style.display = 'none';
            }
        });

        