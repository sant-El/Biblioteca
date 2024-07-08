const prompt = require("prompt-sync")();


var menu = `              
■■■■■ Menu de Consultas ■■■■■

1. Adicionar novo livro
2. Editar livro
3. Listar livros
4. Remover livro
5. Sair    
                `; 

console.log(menu)
let opcao = prompt ("Escolha uma opção: ")

