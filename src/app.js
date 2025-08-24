import express from 'express';      // (1) Importa o Express (CommonJS). Retorna uma função que cria uma app.
import routes from './routes';      // (2) Importa o arquivo de rotas (deve exportar um Router do Express).

class App {                        // (3) Define uma classe para organizar a aplicação.
    constructor() {                // (4) Executado ao criar 'new App()'.
        this.app = express();      // (5) Cria a instância da aplicação Express.
        this.middlewares();        // (6) Registra middlewares globais (válidos para todas as rotas).
        this.routes();             // (7) Registra as rotas da aplicação.
    }

    middlewares() {                // (8) Método responsável por configurar middlewares.
        this.app.use(express.json()) // (9) Middleware nativo do Express para ler JSON no body das requisições.
    }

    routes() {                    // (10) Método responsável por registrar as rotas.
        this.app.use(routes)      // (11) Usa o conjunto de rotas importado de './routes'.
    }
}

export default new App().app   // (12) Exporta a instância da app pronta (não a classe).
