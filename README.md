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
