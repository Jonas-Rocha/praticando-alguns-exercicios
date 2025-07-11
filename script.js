/*
Enunciado simplificado:
Você tem n cupons, cada um com 3 informações:

code[i]: o código do cupom (string).

businessLine[i]: a categoria do cupom (string).

isActive[i]: se o cupom está ativo (booleano: true ou false).

Você precisa validar os cupons e retornar uma lista de códigos válidos, com as seguintes regras:

✅ Um cupom é válido se:
O código (code[i]):

Não é vazio.

Contém apenas letras, números e sublinhado (_).

A categoria (businessLine[i]) é uma dessas:

"electronics"

"grocery"

"pharmacy"

"restaurant"

O cupom está ativo (isActive[i] === true)

🧹 Depois, organize os cupons válidos assim:
Primeiro por ordem da categoria:

"electronics" vem antes de "grocery"

"grocery" antes de "pharmacy"

"pharmacy" antes de "restaurant"

Depois, ordem alfabética do código dentro de cada categoria.

📦 Exemplo 1:
js
Copy
Edit
code = ["SAVE20","","PHARMA5","SAVE@20"]
businessLine = ["restaurant","grocery","pharmacy","restaurant"]
isActive = [true,true,true,true]
Validação:
"SAVE20" — ✅ válido.

"" — ❌ inválido (vazio).

"PHARMA5" — ✅ válido.

"SAVE@20" — ❌ inválido (@ não é permitido).

Resultados válidos:
"SAVE20" (restaurant)

"PHARMA5" (pharmacy)

Ordem final:
Primeiro "pharmacy" → "PHARMA5"

Depois "restaurant" → "SAVE20"

✔️ Resultado final: ["PHARMA5", "SAVE20"]
*/

const businessLineDefault = [
  "electronics",
  "grocery",
  "pharmacy",
  "restaurant",
];

const regex = /^[a-zA-Z0-9_]+$/;
const alphabetNumbers = [
  ["A", 1],
  ["B", 2],
  ["C", 3],
  ["D", 4],
  ["E", 5],
  ["F", 6],
  ["G", 7],
  ["H", 8],
  ["I", 9],
  ["J", 10],
  ["K", 11],
  ["L", 12],
  ["M", 13],
  ["N", 14],
  ["O", 15],
  ["P", 16],
  ["Q", 17],
  ["R", 18],
  ["S", 19],
  ["T", 20],
  ["U", 21],
  ["V", 22],
  ["W", 23],
  ["X", 24],
  ["Y", 25],
  ["Z", 26],
];

const alphabetMap = new Map(alphabetNumbers);

/*
OBS:
Eu fiz esse array bidimensional pois estava tentando buscar uma lógica para 
filtrar os cupons em ordem alfabética, porém não conseguir fazer uma lógica
para comparar os valores dos cupons recebidos no input com o array bidimensional.
A ideia inicial era usar números para criar um ID para o cupom baseado no array bidimensional,
depois eu usaria esses ID's para rankear de forma crescente os números(letras) dentro de um novo array

ex:
A palavra "Comida" dentro do primeiro input receberia a atribuição dos números
baseados no array bidimencional ex: ("C" = 3, "o" = 15, "m" = 13, "i" = 9, "d" = 4, "a" = 1) COMIDA.
logo, comida receberia o id de 31513941 e seria colocado num "ranking" númerico dentro de um array.
se todas as palavras recebessem esse tipo de ID, seria simples ordenar por ordem alfabetica baseado apenas na atribuição dos números
*/

// console.log(alphabetMap.get("A")); // 1
// console.log(alphabetMap.get("Z")); // 26

const listResults = [];

function results(code, businessLine) {
  let codeValue = regex.test(code);
  let businessLineValue = businessLineDefault.includes(businessLine);

  if (codeValue && businessLineValue) {
    console.log("Cupom válido!");
    const obj = {
      code: String(code).toUpperCase(),
      businessLine: String(businessLine).toUpperCase(),
    };

    listResults.push(obj);
    // Ordena por 'code' toda vez que adicionar
    listResults.sort((a, b) => a.code.localeCompare(b.code));
  } else {
    console.log("Cupom inválido!");
  }
}
