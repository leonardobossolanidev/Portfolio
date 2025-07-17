// Exemplo de componente Vue para o formulário de contato
new Vue({
  el: '#app',
  data: {
    nome: '',
    email: '',
    mensagem: '',
    mensagemEnviada: false
  },
  methods: {
    enviarFormulario() {
      // Aqui você pode adicionar validação extra ou integração com backend
      this.mensagemEnviada = true;
      this.nome = '';
      this.email = '';
      this.mensagem = '';
      setTimeout(() => {
        this.mensagemEnviada = false;
      }, 3000);
    }
  }
});
