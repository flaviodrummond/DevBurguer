import { Router } from 'express'; // Importa a função Router de dentro do pacote 'express'

const routes = new Router(); // Cria uma instância do Router para definir as rotas

routes.get('/', (request, response) => {
  // Define uma rota GET no caminho '/' (raiz)
  return response.status(200).json({ message: 'Hello Word' });
});

export default routes; // Exporta as rotas para serem usadas em outro arquivo (ex: App.js)
