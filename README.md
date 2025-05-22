# Projeto Sprint-final - CCR

## Visão Geral

O Sprint-final é um projeto desenvolvido pela equipe Projeto-CCR que consiste em uma aplicação web para visualização e interação com informações relacionadas a estações de transporte. A aplicação foi construída utilizando tecnologias modernas de desenvolvimento web, com foco em performance e experiência do usuário. Este documento fornece todas as informações necessárias para entender, instalar, configurar e utilizar o sistema.

## Demonstração

Para visualizar o projeto em funcionamento, acesse os links abaixo:

- **Aplicação em produção**: [https://sprin-final.vercel.app/](https://sprin-final.vercel.app/)
- **Vídeo demonstrativo**: [https://youtu.be/d-p25cK8UtAc](https://youtu.be/bSzLQwBR6Go)

## Tecnologias Utilizadas

O projeto foi desenvolvido utilizando um conjunto de tecnologias modernas para desenvolvimento web. A base do projeto é construída com Next.js na versão 15.3.2, um framework React que oferece renderização do lado do servidor, geração de sites estáticos e outras funcionalidades avançadas. O React na versão 19.0.0 é utilizado para a construção da interface do usuário, permitindo a criação de componentes reutilizáveis e uma experiência interativa.

Para a estilização, o projeto utiliza TailwindCSS, um framework CSS utilitário que permite a criação de designs personalizados sem sair do HTML. O TypeScript é empregado para adicionar tipagem estática ao JavaScript, melhorando a qualidade do código e facilitando a manutenção.

A aplicação também utiliza diversas ferramentas de desenvolvimento como ESLint para garantir a qualidade do código e PostCSS para processamento de CSS.

## Estrutura do Projeto

O projeto segue uma estrutura organizada que facilita a manutenção e o desenvolvimento. A estrutura principal do repositório é a seguinte:

O diretório principal `app-via` contém todo o código fonte da aplicação, incluindo configurações, dependências e arquivos de código. Dentro deste diretório, encontramos a seguinte estrutura:

- `src`: Contém todo o código fonte da aplicação
  - `app`: Contém os arquivos relacionados às páginas e rotas da aplicação Next.js
  - `components`: Armazena os componentes React reutilizáveis
  - `img`: Contém as imagens utilizadas no projeto

Além disso, na raiz do diretório `app-via`, encontramos arquivos de configuração importantes:

- `package.json`: Define as dependências e scripts do projeto
- `tsconfig.json`: Configurações do TypeScript
- `next.config.ts`: Configurações específicas do Next.js
- `postcss.config.mjs`: Configurações do PostCSS
- `eslint.config.mjs`: Configurações do ESLint
- `.gitignore`: Lista de arquivos e diretórios ignorados pelo Git

## Requisitos do Sistema

Para executar o projeto localmente, é necessário ter instalado em seu ambiente de desenvolvimento:

- Node.js (versão 20.0.0 ou superior)
- npm (gerenciador de pacotes do Node.js)
- Git (para clonar o repositório)

É recomendável utilizar um editor de código como Visual Studio Code, que oferece suporte nativo a TypeScript e React.

## Instalação

Para instalar e configurar o projeto em seu ambiente local, siga os passos abaixo:

Primeiramente, clone o repositório utilizando o Git. Abra um terminal ou prompt de comando e execute:

```
git clone https://github.com/Projeto-CCR/Sprint-final.git
```

Após clonar o repositório, navegue até o diretório da aplicação:

```
cd Sprint-final/app-via
```

Em seguida, instale as dependências do projeto utilizando o npm:

```
npm install
```

Este comando irá instalar todas as dependências listadas no arquivo package.json, incluindo React, Next.js, TailwindCSS e outras bibliotecas necessárias.

## Execução do Projeto

Após a instalação das dependências, você pode executar o projeto em modo de desenvolvimento utilizando o seguinte comando:

```
npm run dev
```

Este comando inicia o servidor de desenvolvimento do Next.js, que oferece recursos como hot-reloading (atualização automática do navegador quando os arquivos são modificados). A aplicação estará disponível no endereço `http://localhost:3000`.

Para criar uma versão de produção otimizada do projeto, execute:

```
npm run build
```

Este comando gera uma versão otimizada da aplicação na pasta `.next`. Após a conclusão do build, você pode iniciar o servidor de produção com:

```
npm start
```

Para verificar a qualidade do código e identificar possíveis problemas, execute:

```
npm run lint
```

## Desenvolvimento

Durante o desenvolvimento, é importante seguir as convenções e padrões estabelecidos no projeto. O TypeScript é utilizado para garantir a tipagem estática, e o ESLint para manter a consistência do código.

A estrutura de componentes segue o padrão do React, com componentes reutilizáveis armazenados na pasta `components`. As páginas da aplicação são definidas na pasta `app`, seguindo a convenção do Next.js App Router.

Para adicionar novas funcionalidades, recomenda-se criar componentes isolados e testáveis, seguindo os princípios de componentização do React.

## Deploy

O projeto está configurado para ser facilmente implantado na plataforma Vercel, que oferece suporte nativo a aplicações Next.js. A versão atual está hospedada em [https://sprin-final.vercel.app/](https://sprin-final.vercel.app/).

Para realizar o deploy em sua própria conta Vercel, siga os passos:

1. Crie uma conta na Vercel (https://vercel.com)
2. Conecte sua conta GitHub à Vercel
3. Importe o repositório na plataforma Vercel
4. Configure as variáveis de ambiente necessárias (se houver)
5. Inicie o deploy

A Vercel detectará automaticamente que se trata de um projeto Next.js e aplicará as configurações adequadas.

## Contribuição

Para contribuir com o projeto, siga as etapas abaixo:

1. Faça um fork do repositório
2. Crie uma branch para sua feature (`git checkout -b feature/nova-funcionalidade`)
3. Faça commit das suas alterações (`git commit -m 'Adiciona nova funcionalidade'`)
4. Faça push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

Certifique-se de seguir os padrões de código estabelecidos e adicionar testes para novas funcionalidades quando aplicável.

## Solução de Problemas

Se encontrar problemas durante a instalação ou execução do projeto, verifique:

- Se todas as dependências foram instaladas corretamente
- Se as versões do Node.js e npm são compatíveis com o projeto
- Se há erros no console do navegador ou no terminal

Para problemas específicos, consulte a documentação oficial das tecnologias utilizadas:
- [Next.js](https://nextjs.org/docs)
- [React](https://reactjs.org/docs)
- [TailwindCSS](https://tailwindcss.com/docs)
- [TypeScript](https://www.typescriptlang.org/docs)

## Contato

O projeto é mantido pelos contribuidores:
- Renato Bezerra (Renato-005)
- Felipe Carlos Abreu (felipecarlos1)
- JhowQT

Para questões relacionadas ao projeto, abra uma issue no repositório GitHub.

## Licença

Este projeto não especifica uma licença explícita. Para mais informações sobre direitos de uso, entre em contato com os mantenedores do projeto.
