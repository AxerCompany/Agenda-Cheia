import { DeliverableItem, ScriptExample, CalendarDayPreview } from '../types';

export const CHECKOUT_URL = 'https://pay.wiapy.com/6a89026e3f863c746381b055';

export interface SocialProofItem {
  id: number;
  name: string;
  city: string;
  avatar: string;
  role: string;
  message: string;
  highlight: string;
  timeAgo: string;
  salesResult: string;
}

export const SOCIAL_PROOF_STATS = {
  studentsCount: '+3.840',
  satisfactionRate: '98,7%',
  averageTimeFirstSale: '24 a 48 horas',
  rating: '4.9/5'
};

export const TESTIMONIALS: SocialProofItem[] = [
  {
    id: 1,
    name: 'Mariana Costa',
    city: 'Belo Horizonte, MG',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=160&h=160&q=80',
    role: 'Confeiteira Autônoma',
    message: 'Mulher do céu, vim aqui agradecer! Apliquei a campanha de recompra com as pessoas que tinham comprado semana passada... Fechei 16 potes só hoje de manhã! Minha agenda de sexta já tá lotada!',
    highlight: '16 potes vendidos em uma única manhã',
    timeAgo: 'Hoje às 11:42',
    salesResult: 'R$ 224 faturados no dia'
  },
  {
    id: 2,
    name: 'Fernanda Lima',
    city: 'Campinas, SP',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=160&h=160&q=80',
    role: 'Iniciou com bolos no pote há 3 semanas',
    message: 'Eu travava inteira quando perguntavam "quanto custa?". Quase dava o bolo de graça de vergonha. Usei o script do fechamento valorizando o brigadeiro belga e a cliente pegou o combo de 3 potes na hora sem pedir 1 centavo de desconto!',
    highlight: 'Fechou combo de 3 potes sem dar desconto',
    timeAgo: 'Ontem às 16:15',
    salesResult: 'Combo fechado na hora'
  },
  {
    id: 3,
    name: 'Juliana Mendes',
    city: 'Curitiba, PR',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=160&h=160&q=80',
    role: 'Vende em casa e sob encomenda',
    message: 'Antes sobrava bolo na geladeira e virava prejuízo... eu tinha que dar pra família comer pra não azedar. Segui o calendário de 30 dias certinho: 0 potes parados e fechei o mês com R$ 2.450 de lucro! O Agenda Cheia se pagou no primeiro dia.',
    highlight: 'Zero potes sobrando e R$ 2.450 de lucro no mês',
    timeAgo: 'Há 2 dias',
    salesResult: 'Agenda cheia de terça a sábado'
  }
];

export const EXACT_DELIVERABLES: DeliverableItem[] = [
  {
    id: 1,
    title: 'Calendário de vendas de 30 dias',
    subtitle: 'Saiba o que postar e oferecer todo dia',
    description: 'Saiba o que postar e oferecer todo dia. Chega de acordar sem saber o que postar nos stories ou no status: você recebe a rotina diária de posts, fotos de bastidores e chamadas de desejo prontas.',
    iconName: 'CalendarCheck',
    badge: 'Rotina de 30 Dias',
    highlights: [
      'Planejamento de segunda a domingo para aquecer e vender',
      'O que postar de manhã, tarde e noite para despertar desejo',
      'Formatos rápidos: fotos de colheradas, bastidores e fornada fresca',
      'Adaptação para qualquer sabor de bolo no pote'
    ]
  },
  {
    id: 2,
    title: 'Campanhas prontas para WhatsApp',
    subtitle: 'Copie, cole e envie',
    description: 'Copie, cole e envie. Textos prontos para status, direct e mensagens diretas que chamam a atenção das pessoas certas e geram pedidos rápidos sem você parecer chata ou inconveniente.',
    iconName: 'MessageSquareShare',
    badge: 'Copiar e Colar',
    highlights: [
      'Textos persuasivos com gatilhos de água na boca e exclusividade',
      'Avisos de fornada fresca do dia para disparar pedidos',
      'Combos de 2 ou 3 potes para dobrar seu faturamento por cliente',
      'Mensagens estratégicas para status que fazem o celular apitar'
    ]
  },
  {
    id: 3,
    title: 'Scripts para fechar pedidos',
    subtitle: 'Saiba o que responder quando perguntam "quanto é?"',
    description: 'Saiba o que responder quando perguntam "quanto é?". Modelos de resposta que valorizam seu bolo, tiram o foco do preço, desarmam o "vou ver e te aviso" e transformam curiosas em clientes pagantes.',
    iconName: 'Sparkles',
    badge: 'Anti-Vácuo & Fechamento',
    highlights: [
      'Como passar o preço valorizando a cremosidade e os ingredientes',
      'Como reverter o "vou ver e te aviso" em pedido confirmado',
      'O que responder quando a cliente diz "achei caro na padaria"',
      'Roteiro simples para fechar endereço, Pix e horário de entrega'
    ]
  },
  {
    id: 4,
    title: 'Sistema de recompra',
    subtitle: 'Faça as clientes antigas comprarem de novo',
    description: 'Faça as clientes antigas comprarem de novo. Não gaste energia caçando novos clientes todos os dias. Ative quem já provou seu bolo e faça ela pedir toda semana com mensagens de retorno programadas.',
    iconName: 'RotateCcw',
    badge: 'Vendas Recorrentes',
    highlights: [
      'Mensagem de pós-venda 24h para coletar elogio e fidelizar',
      'Lembrete automático para sobremesa de quinta e sexta-feira',
      'Aviso VIP de novos sabores para clientes especiais',
      'Como criar uma rotina de pedidos recorrentes sem esforço'
    ]
  },
  {
    id: 5,
    title: 'Campanha de indicação',
    subtitle: 'Suas clientes trazendo novas clientes',
    description: 'Suas clientes trazendo novas clientes. Um método prático para suas clientes divulgarem seus bolos para vizinhas, amigas de trabalho e familiares através de um incentivo simples.',
    iconName: 'UsersRound',
    badge: 'Multiplicação de Pedidos',
    highlights: [
      'Script para incentivar indicações em empresas, salões e escritórios',
      'Ação "Sobremesa Compartilhada" que gera boca a boca',
      'Como fazer as clientes tirarem fotos dos potes e marcarem você',
      'Novos clientes chegando toda semana de graça'
    ]
  },
  {
    id: 6,
    title: 'Passo a passo para pedidos',
    subtitle: 'Um plano para buscar seus primeiros pedidos',
    description: 'Um plano para buscar seus primeiros pedidos. O caminho prático para quem está começando do zero ou quer destravar a agenda nos próximos dias sem ficar perdida ou esperando a sorte.',
    iconName: 'Target',
    badge: 'Plano Direto ao Ponto',
    highlights: [
      'Roteiro de ação para as primeiras 24h a 48h',
      'Como garantir os primeiros 10 a 20 pedidos antes de produzir',
      'Plano de emergência para girar potes e evitar sobras',
      'Rotina semanal equilibrada para manter pedidos constantes'
    ]
  }
];

export const SCRIPT_EXAMPLES: ScriptExample[] = [
  {
    id: 'price',
    objection: 'Quando perguntam: "Quanto é?"',
    customerQuery: 'Oi! Quanto tá o bolo de ninho com nutella no pote?',
    recommendedResponse: 'Oi, [Nome]! Tudo bem? 🥰 O nosso pote é bem caprichado de 250ml, com camadas generosas de ninho cremoso e Nutella pura original! Ele sai por apenas R$ 14,00 cada. E se você levar a duplinha hoje (1 de Ninho + 1 de Brigadeiro Belga), o combo especial sai por R$ 25,00! Quer que eu reserve o seu na rota de entrega das 15h?',
    salesTip: 'Nunca solte apenas o número frio. Fale do sensorial (camadas, cremosidade, Nutella pura) e ofereça um combo de 2 unidades logo em seguida.',
    tag: 'Pergunta de Preço'
  },
  {
    id: 'thinking',
    objection: 'Quando falam: "Vou ver e te aviso"',
    customerQuery: 'Entendi! Vou dar uma olhada aqui e qualquer coisa te chamo, tá?',
    recommendedResponse: 'Super combinada, [Nome]! Só um aviso com carinho: como montamos os potinhos frescos hoje de manhã, sobraram apenas 4 unidades desse sabor para a entrega de hoje. Se quiser que eu deixe um guardadinho com o seu nome até às 16h, me avisa que já separo aqui!',
    salesTip: 'Aplique escassez gentil e tire o peso da decisão. Mostra que o produto tem alta demanda sem pressionar.',
    tag: 'Objeção do Vácuo'
  },
  {
    id: 'recompra',
    objection: 'Sistema de Recompra (Quinta/Sexta)',
    customerQuery: 'Disparo para quem comprou na semana passada:',
    recommendedResponse: 'Oi, [Nome]! Passando pra saber: como foi a experiência com aquele bolinho no pote da semana passada? Aprovado? 🥰 Avisando em primeira mão que hoje saíram potinhos frescos de Cenoura com Brigadeiro Quentinho e Ninho com Morango para o final de semana! Separo um para adoçar sua tarde?',
    salesTip: 'A cliente já confia no seu sabor. Ela só precisa ser lembrada no momento certo (quinta/sexta à tarde).',
    tag: 'Recompra Recorrente'
  },
  {
    id: 'expensive',
    objection: 'Quando acham caro ou comparam',
    customerQuery: 'Nossa, mas na padaria aqui perto o potinho tá R$ 8...',
    recommendedResponse: 'Super entendo, [Nome]! A diferença é que a gente não usa massa pronta nem recheio hidrogenado: nosso creme leva leite condensado de verdade, chocolate nobre e morangos frescos selecionados do dia. Quem prova sente o sabor caseiro na primeira colherada! Quem conhece não troca.',
    salesTip: 'Valide a cliente e posicione o bolo como artesanal e nobre, sem rebaixar a concorrência.',
    tag: 'Defesa de Valor'
  }
];

export const CALENDAR_SAMPLE: CalendarDayPreview[] = [
  {
    day: 'Segunda-feira',
    theme: 'Planejamento & Bastidores de Água na Boca',
    action: 'Foto da calda de chocolate fervendo ou panelas de brigadeiro: "A semana começa doce por aqui! Qual sabor você merece hoje?"',
    format: 'Stories + Caixa de Respostas'
  },
  {
    day: 'Terça-feira',
    theme: 'Foco no Carro-Chefe (A Colherada)',
    action: 'Vídeo curto da colher entrando no pote cremoso por volta das 11h30. "Aquela sobremesa que salva sua terça-feira. Entregas às 14h!"',
    format: 'Status WhatsApp + Vídeo Curto'
  },
  {
    day: 'Quarta-feira',
    theme: 'Combo Especial do Meio de Semana',
    action: 'Oferta relâmpago: "Leve 2 sabores favoritos e o segundo sai com condição especial para dividir com quem você gosta!"',
    format: 'Lista de Transmissão / Status'
  },
  {
    day: 'Quinta-feira',
    theme: 'Aquecimento para o Fim de Semana',
    action: 'Aviso antecipado de encomendas para sexta/sábado: "Quem reserva antes não corre o risco de ficar sem o sabor favorito!"',
    format: 'Feed + Status de Escassez'
  },
  {
    day: 'Sexta-feira',
    theme: 'Dia do Pedido Rápido & Rotas',
    action: 'Foto da geladeira ou caixas embaladas com laço: "Últimas vagas na rota das 16h! Garanta sua sobremesa do fim de semana."',
    format: 'Status com link direto para pedir'
  }
];

export const FAQS = [
  {
    q: 'O que é exatamente o Agenda Cheia?',
    a: 'O Agenda Cheia é um sistema simples e direto de vendas para confeitaria artesanal. Ele entrega um calendário com o que postar dia a dia, mensagens e scripts prontos para copiar e colar no WhatsApp, estratégias para reativar clientes antigas e um passo a passo para fechar pedidos constantes durante a semana.'
  },
  {
    q: 'O Agenda Cheia serve apenas para bolo no pote ou para outros doces também?',
    a: 'Serve para qualquer tipo de doce artesanal! Se você vende bolo no pote, brownies, copos da felicidade, fatias gourmet, brigadeiros, cones trufados ou tortas, a lógica de venda é exatamente a mesma. Os horários de postagem, as campanhas de WhatsApp, as respostas para "quanto custa?" e as mensagens de recompra funcionam perfeitamente para qualquer produto da sua confeitaria.'
  },
  {
    q: 'Eu já comprei as receitas. Por que preciso do Agenda Cheia agora?',
    a: 'Porque aprender a fazer o doce é apenas a primeira etapa. Existe uma diferença enorme entre saber preparar e conseguir vender. Sem um plano prático, você investe em ingredientes, prepara os doces e eles ficam parados na geladeira virando prejuízo. O Agenda Cheia garante que você transforme o que aprendeu em pedidos reais toda semana.'
  },
  {
    q: 'E se eu tiver vergonha de vender ou não souber o que postar?',
    a: 'Você não precisa gravar vídeos, aparecer na câmera nem ser influenciadora. O Agenda Cheia foi criado especialmente para quem tem vergonha: o material já traz as mensagens redigidas para você só copiar e colar, além de orientações simples de como fotografar o seu doce de forma irresistível.'
  },
  {
    q: 'Como vou receber o acesso ao material?',
    a: 'Assim que você confirmar o acréscimo de R$ 37 nesta página, os dados de acesso serão enviados imediatamente para o seu e-mail. Você poderá acessar no mesmo minuto pelo seu celular, computador ou tablet.'
  },
  {
    q: 'Como funciona a garantia de 7 dias?',
    a: 'O risco é 100% nosso. Você tem 7 dias para acessar o Agenda Cheia, testar o calendário e colocar os scripts para rodar no WhatsApp. Se você achar que o sistema não te ajudou a destravar pedidos ou não serviu para a sua rotina, basta pedir o reembolso e devolveremos cada centavo.'
  }
];

export const DELIVERABLES = EXACT_DELIVERABLES;
