# 📚 Projeto Instituições de Ensino  

Sistema em **React + Bootstrap** para cadastro, listagem e gerenciamento de Instituições de Ensino.  
Permite inserir dados de escolas, selecionar **estado**, **município** e a **região é preenchida automaticamente** com base no estado escolhido.  
Os dados ficam salvos no **LocalStorage**, garantindo que persistam mesmo após atualizar a página.  

<img align="center" alt="Javascript" src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/> 
<img align="center" alt="React" src="https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB&style=for-the-badge"/> 
<img align="center" alt="Bootstrap" src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white"/> 

---

## 🚀 Funcionalidades  

- Cadastro de novas instituições (código, nome, estado, município, região e matrículas).  
- Listagem das instituições cadastradas em uma tabela.  
- Região detectada automaticamente ao selecionar o estado.  
-  Municípios filtrados de acordo com o estado selecionado.  
- Persistência de dados com **LocalStorage**.  
- Notificação com **Toast** ao salvar uma nova instituição.  

---

## 🛠️ Tecnologias utilizadas  

- Resct
- React Bootstrap
- React Router 
- JavaScript (ES6+)  

--- 

## 📂 Estrutura do Projeto  
````
src/
├── components/
│ └── InstituicaoEnsino.js # Componente principal
├── datasets/
│ ├── estados.js # Lista de estados com código e região
│ ├── cidades.js # Lista de cidades vinculadas ao estado
│ └── censoescolar.js # Base inicial de instituições
├── App.js
├── index.js
└── ...
````
