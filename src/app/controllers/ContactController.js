class ContactController {
  index(request, response) {
    response.send('rota de get de contatos');
  }

  show(request, response) {
    response.send('retorna 1 contato');
  }

  store(request, response) {
    response.send('cadastra contato');
  }

  update(request, response) {
    response.send('atualiza contato');
  }

  delete(request, response) {
    response.send('deleta contato');
  }
}

module.exports = new ContactController();
