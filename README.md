# ProjetoCulturaDevops
Primeiro projeto da aula de cultura Devops

Esse mini projeto foi realizado utilizando JavaScript para fazer uma calculadora super simples e Jest realizar os testes unitários.

Foi construída uma pipeline de CI/CD que é acionada a cada push na main e ela executa automaticamente os testes unitários para garantir a integridade do código antes do deploy.

Observando a página https://github.com/GustavNunes/ProjetoCulturaDevops/actions, podemos ver que os testes estão rodando adequadamente.

Pipeline:

A pipeline foi buildada para rodar na versão mais recente do Ubuntu, e ela tem as seguintes etapas:

1 - Checkout code: Faz o checkout do código do repositório.

2 - Set up Node.js: Configura o ambiente Node.js utilizando a versão 14.

3 - Install dependencies: Instala as dependências do projeto utilizando npm install.

4 - Run tests: Executa os testes automatizados utilizando npm test.

5 - Deploy: Esta é uma seção opcional, não cheguei a utilizar mas deixei criada para estudar mais sobre no futuro.
