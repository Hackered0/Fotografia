## 👋 Boas-vindas ao banco de dados!

Se você chegou até aqui para dar uma olhada no código ou na modelagem desse banco de dados, 
deixa eu te contar rapidinho como organizei tudo por aqui.

### 🔍 O que você vai encontrar?

A ideia principal foi estruturar um banco de dados relacional utilizando o **MySQL**. 
Eu queria garantir que os dados ficassem bem organizados, fáceis de consultar e, claro, sem duplicidade.

Aqui está o que fiz:

* **Desenho do Banco (Modelagem):** Antes de digitar qualquer linha de código, montei a lógica de tabelas.
Usei chaves primárias (PK) para garantir que cada registro seja único 
e chaves estrangeiras (FK) para conectar as informações de forma inteligente.

* **O Código (SQL):** Escrevi um script limpo e direto. Você vai ver comandos para criar o banco, 
estruturar as tabelas e algumas consultas com `JOIN` para juntar os dados de tabelas diferentes em um único resultado.

### Por que fiz dessa forma? e não o código primeiro
A estrutura foi pensada para ser escalável.
Se o volume de dados crescer, o banco continua rápido porque 
os relacionamentos foram bem planejados desde o início.

Fique à vontade para explorar o arquivo SQL, rodar os testes.
Lembre-se do que disse antes:
>A casa é sua
