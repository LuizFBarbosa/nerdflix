import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";

import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';

function CadastroFakeVideo(){
  return (
    <div>
      Página Fake para Teste do Cadastro do Video
    </div>
  )
}

// No react ele espera uma função, então você pode  fazer desta forma
// Até para um teste rápido para saber esta roteando a página. Você cria um retorno rápido 
// Você pode utilizar assim: Route component={() => (<div>404 Página não encontrada </div>)}
// Temos um desafio de criar um jogo para a página 404
const Pagina404 = () => (<div>Página 404</div>)

ReactDOM.render(
  <BrowserRouter> 
  <Switch>
    <Route path ="/" component={Home} exact/>    
    <Route path ="/cadastro/video" component={CadastroVideo} exact />
    <Route path="/cadastro/categoria" component={CadastroCategoria} />
    <Route component={Pagina404} /> 
  </Switch>
    
  </BrowserRouter>,
  document.getElementById('root')
);


