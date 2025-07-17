document.addEventListener('DOMContentLoaded', function() {
    // Formulário de contato
    const form = document.getElementById('formContato');
    const mensagemEnviada = document.getElementById('mensagemEnviada');

    // Função para exibir mensagem de sucesso
    function mostrarMensagemEnviada() {
        if (mensagemEnviada) {
            mensagemEnviada.classList.add('mensagem-visivel');
            setTimeout(() => {
                mensagemEnviada.classList.remove('mensagem-visivel');
            }, 3000);
        }
    }

    // Função para validar e-mail
    function validarEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    if(form && mensagemEnviada) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            // Validação dos campos
            let valido = true;
            const nome = form.querySelector('input[name="nome"], input#nome');
            const email = form.querySelector('input[type="email"], input#email');
            const mensagem = form.querySelector('textarea[name="mensagem"], textarea#mensagem');
            // Remove classes de erro
            [nome, email, mensagem].forEach(campo => {
                if (campo) campo.classList.remove('campo-invalido');
            });
            // Validação
            if (nome && nome.value.trim() === '') {
                nome.classList.add('campo-invalido');
                valido = false;
            }
            if (email && !validarEmail(email.value)) {
                email.classList.add('campo-invalido');
                valido = false;
            }
            if (mensagem && mensagem.value.trim() === '') {
                mensagem.classList.add('campo-invalido');
                valido = false;
            }
            if (!valido) {
                // Mensagem de erro
                if (mensagemEnviada) {
                    mensagemEnviada.textContent = 'Preencha todos os campos corretamente!';
                    mensagemEnviada.classList.add('mensagem-visivel', 'mensagem-erro');
                    setTimeout(() => {
                        mensagemEnviada.classList.remove('mensagem-visivel', 'mensagem-erro');
                        mensagemEnviada.textContent = 'Mensagem enviada! Obrigado pelo contato 🚀';
                    }, 2500);
                }
                return;
            }
            // Animação no botão
            const botao = form.querySelector('button[type="submit"]');
            if (botao) {
                botao.classList.add('botao-animado');
                setTimeout(() => botao.classList.remove('botao-animado'), 400);
            }
            mostrarMensagemEnviada();
            form.reset();
        });
    }

    // Scroll suave para navegação usando delegação de eventos
    const nav = document.querySelector('nav');
    if (nav) {
        nav.addEventListener('click', function(e) {
            const target = e.target;
            if (target.tagName === 'A') {
                const href = target.getAttribute('href');
                if (href && href.startsWith('#')) {
                    e.preventDefault();
                    const destino = document.querySelector(href);
                    if (destino) {
                        destino.scrollIntoView({ behavior: 'smooth' });
                    }
                }
            }
        });
    }
});