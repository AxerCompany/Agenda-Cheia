import { DeliverableItem, ScriptExample, CalendarDayPreview } from '../types';

export const CHECKOUT_URL = 'https://pay.wiapy.com/6a89026e3f863c746381b055';

export const DELIVERABLES: DeliverableItem[] = [
  {
    id: 1,
    title: '1. Calendário de Vendas de 30 Dias',
    subtitle: 'O que postar, quando postar e como divulgar',
    description: 'Um calendário pronto para você saber o que postar, quando postar e como divulgar seus bolos durante o mês. Você não precisa ficar pensando: “o que eu vou postar hoje?”. É só seguir o calendário e adaptar para seus sabores.',
    iconName: 'CalendarCheck',
    badge: 'Rotina Diária Pronta',
    highlights: [
      'Planejamento de segunda a domingo para aquecer e vender',
      'Datas estratégicas e melhores horários para postar nos stories',
      'Formatos rápidos: fotos de bastidor, fatias, recheios e escassez',
      'Adapte facilmente para brigadeiro, ninho com nutella, cenoura e outros'
    ]
  },
  {
    id: 2,
    title: '2. Campanhas Prontas para WhatsApp',
    subtitle: 'Divulgação rápida no status e no direct',
    description: 'Mensagens prontas para divulgar no status, chamar clientes, avisar sabores disponíveis, oferecer combos e criar desejo nas pessoas. Ideal para quem trava na hora de escrever ou não sabe como oferecer.',
    iconName: 'MessageSquareShare',
    badge: 'Copiar e Colar',
    highlights: [
      'Textos persuasivos com gatilhos de água na boca e exclusividade',
      'Modelos de aviso de fornada fresca do dia',
      'Combos de 2 ou 3 potes para aumentar o ticket médio',
      'Mensagens para status que geram respostas imediatas'
    ]
  },
  {
    id: 3,
    title: '3. Scripts para Fechar Pedidos',
    subtitle: 'Respostas elegantes para todas as objeções',
    description: 'Respostas prontas para quando a cliente pergunta: “qual valor?”, “tem entrega?”, “quais sabores?”, “vou ver e te aviso”, “achei caro”. Você aprende como responder de um jeito simples, natural e vendedor.',
    iconName: 'Sparkles',
    badge: 'Anti-Vácuo & Fechamento',
    highlights: [
      'Como passar o preço valorizando os ingredientes nobres',
      'Como reverter o clássico "vou ver e te aviso" em venda imediata',
      'Script para quando acham caro sem você precisar dar desconto',
      'Roteiro de confirmação de endereço, pagamento e entrega'
    ]
  },
  {
    id: 4,
    title: '4. Sistema de Recompra para Clientes Antigas',
    subtitle: 'Faça quem já comprou pedir toda semana',
    description: 'Aprenda como chamar quem já comprou uma vez para comprar de novo. Porque muitas vezes a próxima venda não está em uma cliente nova. Está em alguém que já provou seu bolo e só precisa ser lembrada.',
    iconName: 'RotateCcw',
    badge: 'Vendas Recorrentes',
    highlights: [
      'Mensagem de pós-venda 24h para colher elogio e fidelizar',
      'Lembrete de sobremesa de final de semana (quinta e sexta-feira)',
      'Aviso VIP de sabores especiais para quem já é cliente',
      'Como criar uma lista de transmissão sem ser chata'
    ]
  },
  {
    id: 5,
    title: '5. Campanha de Indicação',
    subtitle: 'Multiplique clientes pelo boca a boca guiado',
    description: 'Um modelo simples para fazer suas clientes indicarem seus bolos para amigas, vizinhas, familiares e colegas de trabalho. Assim você consegue divulgar sem depender apenas de postagem.',
    iconName: 'UsersRound',
    badge: 'Multiplicação de Pedidos',
    highlights: [
      'Script de incentivo à indicação em empresas e escritórios',
      'Estratégia "Sobremesa da Família" com bônus na próxima compra',
      'Como fazer clientes postarem fotos nos stories marcando você',
      'Boca a boca estimulado sem gastar com anúncios'
    ]
  },
  {
    id: 6,
    title: '6. Plano de Ação para Primeiros ou Novos Pedidos',
    subtitle: 'Passo a passo prático para destravar nos próximos dias',
    description: 'Um passo a passo para você saber o que fazer nos próximos dias para buscar pedidos com mais direção. Serve para quem está começando do zero e também para quem já vende, mas quer movimentar mais as encomendas.',
    iconName: 'Target',
    badge: 'Comece em 24h',
    highlights: [
      'Checklist dos 3 primeiros dias de preparação e lançamento',
      'Como levantar de 5 a 15 encomendas antes mesmo de montar a bancada',
      'Plano de ação emergencial para girar estoque de potes parados',
      'Cronograma semanal para manter a agenda cheia de segunda a sábado'
    ]
  }
];

export const SCRIPT_EXAMPLES: ScriptExample[] = [
  {
    id: 'price',
    objection: '“Qual o valor?”',
    customerQuery: 'Oi! Quanto tá o bolo de ninho com morango no pote?',
    recommendedResponse: 'Oi, [Nome]! Tudo bem? 🥰 O nosso pote é bem caprichado de 250ml, com camadas generosas de ninho cremoso e morangos frescos selecionados do dia! Ele sai por apenas R$ 14,00 cada. E se você levar a duplinha hoje (1 de Ninho + 1 de Brigadeiro Belga), o combo fica por R$ 25,00! Quer que eu separe o seu para a entrega da tarde?',
    salesTip: 'Nunca jogue apenas o número solto. Descreva o sensorial (fresco, cremoso, camadas) e apresente uma opção de combo imediatamente.',
    tag: 'Apresentação de Preço'
  },
  {
    id: 'thinking',
    objection: '“Vou ver e te aviso”',
    customerQuery: 'Entendi! Vou dar uma olhadinha aqui e qualquer coisa te aviso, tá?',
    recommendedResponse: 'Super combinada, [Nome]! Só um detalhe: como preparamos os potes fresquinhos hoje de manhã, restaram apenas 4 unidades de Ninho com Morango para a rota de hoje. Se quiser que eu garanta o seu guardadinho até às 17h, é só me dar um toque!',
    salesTip: 'Aplique escassez real e gentil. Mostre que os potes saem rápido e tire o peso da decisão.',
    tag: 'Reversão de Dúvida'
  },
  {
    id: 'expensive',
    objection: '“Achei caro”',
    customerQuery: 'Nossa, mas R$ 15 no potinho? Na padaria aqui perto é R$ 8.',
    recommendedResponse: 'Eu entendo perfeitamente, [Nome]! A diferença é que a gente não usa massa industrializada nem gordura vegetal: nosso recheio leva leite condensado Moça, chocolate nobre e frutas frescas, sem conservantes. Quem prova sempre nota a diferença logo na primeira colherada! Se quiser experimentar, posso te mandar um tamanho mini degustação junto no seu primeiro pedido!',
    salesTip: 'Valide a percepção sem diminuir a concorrência, destacando a qualidade dos insumos nobres.',
    tag: 'Defesa de Valor'
  },
  {
    id: 'delivery',
    objection: '“Tem entrega?”',
    customerQuery: 'Vocês entregam aqui no bairro Centro?',
    recommendedResponse: 'Entregamos sim! 🛵 Nossos entregadores saem em duas rotas: às 14h e às 17h para chegar bem geladinho. Para o Centro a taxa é fixa de apenas R$ 5, ou se você pedir acima de R$ 40 a entrega sai com 50% de desconto! Qual o seu endereço para eu calcular a rota?',
    salesTip: 'Dê segurança sobre a temperatura e use a entrega para incentivar o cliente a pedir mais unidades.',
    tag: 'Logística & Aumento de Pedido'
  }
];

export const CALENDAR_SAMPLE: CalendarDayPreview[] = [
  {
    day: 'Segunda-feira',
    theme: 'Planejamento & Bastidores',
    action: 'Foto da calda de chocolate fervendo ou panelas de brigadeiro com a legenda: “A semana começa doce por aqui! O que você merece hoje?”',
    format: 'Stories + Caixa de Perguntas'
  },
  {
    day: 'Terça-feira',
    theme: 'Foco no Carro-Chefe',
    action: 'Vídeo da colher afundando no bolo de pote bem recheado ao meio-dia. Script de chamada para sobremesa da tarde.',
    format: 'Status WhatsApp + Vídeo Curto'
  },
  {
    day: 'Quarta-feira',
    theme: 'Combo do Meio da Semana',
    action: 'Oferta relâmpago: “Leve 2 sabores e o segundo sai com valor especial para adoçar sua quarta”.',
    format: 'Lista de Transmissão / Status'
  },
  {
    day: 'Quinta-feira',
    theme: 'Aquecimento de Fim de Semana',
    action: 'Aviso de encomendas para sábado/domingo. “Quem garante antes não fica sem o sabor favorito!”',
    format: 'Feed + Status de Escassez'
  },
  {
    day: 'Sexta-feira',
    theme: 'Dia do Pedido Rápido',
    action: 'Mostre a geladeira com os potes embalados com etiquetas e fitinhas: “Rotas saindo às 14h e 17h. Poucas vagas!”',
    format: 'Status com link direto'
  }
];

export const FAQS = [
  {
    q: 'O que é exatamente o Agenda Cheia?',
    a: 'É um sistema prático de vendas específico para bolos no pote. Ele inclui calendário de postagens de 30 dias, mensagens e campanhas prontas para WhatsApp e Instagram, scripts para responder clientes e fechar pedidos, e estratégias comprovadas de recompra e indicação.'
  },
  {
    q: 'Eu já comprei o Bolos Lucrativos. Por que preciso do Agenda Cheia?',
    a: 'O Bolos Lucrativos te ensina o que preparar (receitas, custos, precificação e montagem). O Agenda Cheia é o passo seguinte: ele te ensina a vender, atrair clientes, divulgar todos os dias e fazer as pessoas pedirem de verdade.'
  },
  {
    q: 'Como vou receber o acesso?',
    a: 'Assim que você confirmar o acréscimo de R$ 37, o Agenda Cheia será adicionado imediatamente à sua mesma área de membros do Bolos Lucrativos. Você receberá o acesso instantâneo por e-mail e WhatsApp.'
  },
  {
    q: 'E se eu tiver vergonha de vender ou não souber mexer no Instagram?',
    a: 'O Agenda Cheia foi feito justamente para quem tem vergonha ou trava na hora de postar. Você não precisa aparecer em vídeos nem ser blogueira: você usa fotos simples dos seus potes e mensagens de texto prontas no WhatsApp e nos status.'
  },
  {
    q: 'Qual é a garantia?',
    a: 'Você tem 7 dias de garantia incondicional. Se você acessar o material e achar que não te ajudou a conseguir mais pedidos, basta enviar uma mensagem e devolveremos 100% dos seus R$ 37.'
  }
];
