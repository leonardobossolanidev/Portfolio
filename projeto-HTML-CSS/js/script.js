document.addEventListener('DOMContentLoaded', function() {
    // Formulário de contato
    const form = document.getElementById('formContato');
    if(form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            document.getElementById('mensagemEnviada').classList.add('mensagem-visivel');
            form.reset();
            setTimeout(() => {
                document.getElementById('mensagemEnviada').classList.remove('mensagem-visivel');
            }, 3000);
        });
    }
    // Scroll suave para navegação
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if(href.startsWith('#')) {
                e.preventDefault();
                document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});