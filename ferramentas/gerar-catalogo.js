/**
 * Gera conteudo/catalogo.json e catalogo.js a partir de ferramentas/catalogo-fonte.js.
 * Uso:  node ferramentas/gerar-catalogo.js
 */
const fs = require("fs");
const path = require("path");
const fonte = require("./catalogo-fonte.js");

const raiz = path.join(__dirname, "..");
const MODULOS = ["np1", "np2", "geral"];

// Confere o catálogo antes de gerar: identificadores repetidos ou páginas sem endereço seriam erros silenciosos no site.
const problemas = [];
for (const s of fonte.semestres) {
  const ids = new Set();
  for (const m of s.materias) {
    if (ids.has(m.id)) problemas.push(`matéria repetida no ${s.nome}: ${m.id}`);
    ids.add(m.id);
    for (const mod of MODULOS) {
      for (const p of m[mod] ?? []) {
        if (!p.url || !p.titulo || !p.tipo) problemas.push(`página incompleta em ${s.nome} / ${m.nome} / ${mod}`);
      }
    }
  }
}
for (const p of (fonte.provas?.itens ?? [])) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(p.data) || Number.isNaN(Date.parse(p.data))) problemas.push("data de prova inválida: " + p.materia + " " + p.data);
}
if (problemas.length > 0) {
  console.error("Catálogo com problemas:\n- " + problemas.join("\n- "));
  process.exit(1);
}

fs.mkdirSync(path.join(raiz, "conteudo"), { recursive: true });
fs.writeFileSync(path.join(raiz, "conteudo", "catalogo.json"), JSON.stringify(fonte, null, 2) + "\n");
// catalogo.js permite abrir o site direto do computador (sem servidor), onde fetch() não funciona.
fs.writeFileSync(path.join(raiz, "catalogo.js"), `window.CATALOGO = ${JSON.stringify(fonte)};\n`);

let paginas = 0;
for (const s of fonte.semestres) for (const m of s.materias) for (const mod of MODULOS) paginas += (m[mod] ?? []).length;
console.log(`Catálogo gerado: ${fonte.semestres.length} semestres, ${fonte.semestres.reduce((n, s) => n + s.materias.length, 0)} matérias, ${paginas} páginas.`);
