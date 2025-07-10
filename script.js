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

function results(code, businessLine) {
  let codeValue = regex.test(code);
  let businessLineValue = businessLineDefault.includes(businessLine);

  if (codeValue && businessLineValue === true) {
    console.log("Cupom válido!");
    const listResults = [code, businessLine];
    return listResults;
  } else {
    console.log("Cupom inválido!");
  }
}
