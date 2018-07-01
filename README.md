# Projeto
Projeto Angular gerado com o Angular CLI (Versão 1.7.3).

Este projeto tem como objetivo listar o conteúdo de posts recebidos pela API do site https://jsonplaceholder.typicode.com/.

Este projeto encontra-se disponível em https://list-post-angular.herokuapp.com/  

## Desenvolvimento

Para rodar o servidor no ambiente de desenvolvimento, no terminal inserir o comando `ng serve`. Neste modo, qualquer alteração feita e salva no projeto, refletirá automaticamente.

## Build

Utilizar o comando `ng build` para dar o build no projeto. Esse comando criará uma nova pasta no diretório da aplicação chamada `dist/`.
Se utilizar a flag `--prod` o projeto será otimizado no build de produção.

A flag `--prod` utiliza o The Ahead-of-Time (AOT) Compiler para converter o cõdigo para Javascript, faz o deploy do enviroment de production (para casos de alteração de link de API, por exemplo), minifica os arquivos e remove código inutilizado.

## Testes unitários

Utilizar o comando `ng test -cc` para executar os testes unitários da aplicação. Para conferir o progresso de cobertura de testes, acessar o arquivo `coverage/html/index.html` 
