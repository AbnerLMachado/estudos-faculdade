/**
 * Fonte do catálogo do site: semestres, matérias e as páginas de cada módulo (NP1, NP2 ou geral).
 * Para incluir material novo, acrescente uma linha aqui e rode:  node ferramentas/gerar-catalogo.js
 *
 * pagina(repo, arquivo)  -> página antiga publicada no GitHub Pages do próprio Abner (links já divulgados à turma)
 * local(caminho)         -> página deste projeto (pasta paginas/)
 * tipo: "guia" | "simulado" | "questoes" | "mapa" | "resumo" | "ferramenta"
 */
const BASE_ANTIGAS = "https://abnerlmachado.github.io";
const pagina = (repo, arquivo) => `${BASE_ANTIGAS}/${repo}/${arquivo === "" ? "" : encodeURIComponent(arquivo)}`;
const local = (caminho) => `paginas/${caminho}`;

const item = (tipo, titulo, url) => ({ tipo, titulo, url });

module.exports = {
  titulo: "Estudos de Direito · UNIP",
  semestres: [
    {
      id: "6",
      nome: "6º semestre",
      periodo: "2026.2",
      materias: [
        {
          id: "tributario",
          nome: "Teoria Geral do Direito Tributário",
          professor: "Prof.ª Ana Laura",
          np1: [item("guia", "Plataforma de estudos NP1", pagina("Tributario", "Np1-Tributario-2026.html"))],
          np2: [item("guia", "Plataforma de estudos NP2 (espécies, limitações, imunidades, obrigação e crédito)", local("6/tributario/np2.html"))],
        },
        {
          id: "trabalho",
          nome: "Direito Individual do Trabalho",
          np1: [
            item("guia", "Plataforma de estudos NP1", pagina("Trabalhista", "DIT-NP1.html")),
            item("simulado", "Simulado de concursos e OAB (NP1)", pagina("Trabalhista", "questoes_concurso_np1.html")),
            item("questoes", "Banco de questões de concurso 1", pagina("Trabalhista", "Questões de Concurso trabalhista 1.html")),
            item("questoes", "Banco de questões de concurso 2", pagina("Trabalhista", "Questões de Concurso trabalhista 2.html")),
          ],
          np2: [item("guia", "Plataforma de estudos NP2 (aulas 6 a 10)", local("6/trabalho/np2.html"))],
        },
        {
          id: "contratos",
          nome: "Contratos em Geral",
          np1: [
            item("guia", "Plataforma de estudos NP1", pagina("TeoriaGeralContratos", "NP1.html")),
            item("simulado", "Simulado de concursos (NP1)", pagina("TeoriaGeralContratos", "QuestõesNP1.html")),
            item("questoes", "Banco de questões de concursos", pagina("TeoriaGeralContratos", "Questoes-concursos.html")),
          ],
          np2: [item("guia", "Plataforma de estudos NP2 (aulas 7 a 13)", local("6/contratos/np2.html"))],
        },
        {
          id: "sentenca-recursos",
          nome: "Sentença e Recursos Civil",
          np1: [
            item("guia", "Caderno acadêmico e plataforma NP1", pagina("SentencaseRecursos", "SeRNP1.html")),
            item("questoes", "Banco de questões 1", pagina("SentencaseRecursos", "questoes1.html")),
            item("questoes", "Banco de questões 2", pagina("SentencaseRecursos", "questoes2.html")),
            item("questoes", "Banco de questões 3", pagina("SentencaseRecursos", "questoes3.html")),
            item("questoes", "Banco de questões 4", pagina("SentencaseRecursos", "questoes4.html")),
          ],
          np2: [item("guia", "Plataforma de estudos NP2 (recursos, com revisão do módulo 1)", local("6/sentenca-recursos/np2.html"))],
        },
        {
          id: "protecao-penal",
          nome: "Proteção Penal ao Indivíduo",
          np1: [
            item("guia", "Guia dinâmico NP1", pagina("penal", "np1.html")),
            item("simulado", "Crimes contra a vida: estudo e quiz", pagina("penal", "crimescontavida.html")),
            item("mapa", "Crimes contra a vida: mapa mental", pagina("penal", "index1.html")),
          ],
          np2: [item("guia", "Plataforma de estudos NP2 (aborto, lesões, honra e estupro)", local("6/penal/np2.html"))],
        },
        { id: "ava-acao-penal", nome: "Ação Penal (AVA)" },
        { id: "ava-direito-globalizacao", nome: "Direito e Globalização (AVA)" },
        { id: "ava-metodos-pesquisa", nome: "Métodos de Pesquisa (AVA)" },
      ],
    },
    {
      id: "5",
      nome: "5º semestre",
      periodo: "2026.1",
      materias: [
        {
          id: "obrigacoes",
          nome: "Direito das Obrigações",
          np2: [
            item("guia", "Preparatório NP2", pagina("obrigacoes", "Np2_Obrigacoes.html")),
            item("simulado", "Questões no estilo da professora (NP2)", pagina("obrigacoes", "Questoes_estilosas_Np2.html")),
            item("simulado", "Simulado: inadimplemento das obrigações", pagina("obrigacoes", "Simulado_Np2.html")),
          ],
        },
        {
          id: "procedimento-comum",
          nome: "Procedimento Comum",
          np2: [item("guia", "Fase instrutória e decisória (NP2)", pagina("Procedimento_Comum", "procedimento Comum.html"))],
        },
        {
          id: "extincao-punibilidade",
          nome: "Extinção da Punibilidade",
          np1: [
            item("resumo", "Resumo da NP1", pagina("Extincao_de_punibilidade-NP1", "extincao-punibilidade1.html")),
            item("guia", "Estudo aprofundado", pagina("Extincao_de_punibilidade-NP1-aprofundado", "extincao-punibilidade.html")),
          ],
        },
        {
          id: "recuperacao-falencia",
          nome: "Recuperação Judicial e Falência",
          np1: [item("guia", "Estudo aprofundado NP1", pagina("RecJud_Falencia_NP1", "RecJud_e_falencia_NP1.html"))],
        },
        {
          id: "ava-bases-adm-publica",
          nome: "Bases Procedimentais da Administração Pública (AVA)",
          geral: [item("simulado", "Resumo e questões", pagina("BaseADMPub", "Resumo_e_Questoes.html"))],
        },
        {
          id: "ava-metodologia",
          nome: "Metodologia do Trabalho Acadêmico (AVA)",
          np2: [
            item("guia", "Plataforma de estudos NP2", pagina("MetTrabAcademico", "Estudo_Np2-met_trab_acad.html")),
            item("simulado", "Treinamento: provas passadas", pagina("MetTrabAcademico", "questoes_np2.html")),
          ],
        },
        {
          id: "ava-relacoes-etnico-raciais",
          nome: "Relações Étnico-Raciais e Afrodescendência (AVA)",
          np2: [item("guia", "Plataforma de estudos NP2", pagina("Relacoes_etico_raciais", "Np2_rel_etc_raciais.html"))],
        },
        {
          id: "ava-teoria-geral-processo-penal",
          nome: "Teoria Geral do Processo Penal (AVA)",
          geral: [item("guia", "Plataforma de estudos", pagina("Teoria_Geral_Proc_Penal", "tgpp_estudos.html"))],
        },
      ],
    },
    {
      id: "4",
      nome: "4º semestre",
      periodo: "2025.2",
      materias: [
        {
          id: "bases-const-adm-publica",
          nome: "Bases Constitucionais da Administração Pública",
          np1: [item("guia", "Material de estudo NP1", pagina("DireitoConstitucionalNP1", ""))],
        },
        {
          id: "controle-constitucionalidade",
          nome: "Controle de Constitucionalidade",
          np2: [item("guia", "Material de estudo NP2", pagina("DireitoConstitucionalNP2", ""))],
        },
        {
          id: "processo-relacao-processual",
          nome: "Processo e Relação Jurídica Processual",
          np1: [item("guia", "Material de estudo NP1", pagina("ProssesualNP1", ""))],
          np2: [item("guia", "Atos processuais, litisconsórcio e intervenção (NP2)", pagina("ProssesualNP2", "Index.html"))],
        },
        {
          id: "teoria-das-penas",
          nome: "Teoria das Penas",
          np1: [item("guia", "Material de estudo NP1", pagina("TeoriadasPenasNP1", ""))],
        },
        {
          id: "titulos-de-credito",
          nome: "Títulos de Crédito",
          np1: [item("guia", "Material de estudo NP1", pagina("TitulosdeCreditoNp1", ""))],
        },
        { id: "teoria-geral-das-obrigacoes", nome: "Teoria Geral das Obrigações" },
        {
          id: "ava-ciencias-sociais",
          nome: "Ciências Sociais (AVA)",
          geral: [item("guia", "Estudo completo", pagina("cienciassociais", ""))],
        },
        {
          id: "ava-hermeneutica",
          nome: "Hermenêutica (AVA)",
          geral: [item("guia", "Estudo completo", pagina("Hemeneutica", "Index.html"))],
        },
        { id: "ava-libras", nome: "Língua Brasileira de Sinais · Libras (AVA)" },
        { id: "ava-responsabilidade-civil", nome: "Responsabilidade Civil (AVA)" },
      ],
    },
    {
      id: "3",
      nome: "3º semestre",
      periodo: "2025.1",
      materias: [
        { id: "fatos-negocios-juridicos", nome: "Fatos e Negócios Jurídicos" },
        { id: "ilicitude-culpabilidade", nome: "Ilicitude e Culpabilidade" },
        { id: "teoria-geral-empresa", nome: "Teoria Geral da Empresa" },
        { id: "teoria-geral-processo", nome: "Teoria Geral do Processo" },
        { id: "ava-homem-sociedade", nome: "Homem e Sociedade (AVA)" },
        { id: "ava-organizacao-estado", nome: "Organização do Estado (AVA)" },
      ],
    },
    {
      id: "2",
      nome: "2º semestre",
      periodo: "2024.2",
      materias: [
        { id: "teoria-geral-crime", nome: "Teoria Geral do Crime" },
        { id: "teoria-geral-direito-civil", nome: "Teoria Geral do Direito Civil" },
        { id: "direitos-humanos", nome: "Direitos Humanos" },
        { id: "ava-ciencia-politica", nome: "Ciência Política (AVA)" },
        { id: "ava-comunicacao-expressao", nome: "Comunicação e Expressão (AVA)" },
        { id: "ava-historia-direito", nome: "História do Direito (AVA)" },
        { id: "ava-linguagem-juridica", nome: "Linguagem e Comunicação Jurídica (AVA)" },
      ],
    },
    {
      id: "1",
      nome: "1º semestre",
      periodo: "2024.1",
      materias: [
        { id: "economia", nome: "Economia" },
        { id: "filosofia", nome: "Filosofia" },
        { id: "psicologia-juridica", nome: "Psicologia Jurídica" },
        { id: "portugues", nome: "Português" },
        { id: "ij-etica", nome: "IJ e Ética" },
        { id: "ava-economia", nome: "Economia (AVA)" },
        { id: "ava-ipt", nome: "IPT (AVA)" },
      ],
    },
  ],
  ferramentas: [
    item("ferramenta", "Calculadora de notas", pagina("calculanota", "")),
  ],
};
