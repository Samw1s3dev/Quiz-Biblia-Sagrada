document.addEventListener('DOMContentLoaded', () => {
  const questionsBank = [
    {
      question: "Quem foi o primeiro homem criado por Deus?",
      options: shuffle(["Adão", "Noé", "Moisés", "Abraão"]),
      answer: "Adão"
    },
    {
      question: "Qual é o nome do jardim onde Deus colocou Adão e Eva?",
      options: shuffle(["Éden", "Babilônia", "Gólgota", "Jerusalém"]),
      answer: "Éden"
    },
    {
      question: "Quem construiu a arca para sobreviver ao dilúvio?",
      options: shuffle(["Noé", "Abraão", "Moisés", "Davi"]),
      answer: "Noé"
    },
    {
      question: "Qual é o livro que está no início da Bíblia?",
      options: shuffle(["Gênesis", "Êxodo", "Levítico", "Mateus"]),
      answer: "Gênesis"
    },
    {
      question: "Quem libertou os israelitas da escravidão no Egito?",
      options: shuffle(["Moisés", "Josué", "Davi", "Samuel"]),
      answer: "Moisés"
    },
    {
      question: "Qual era o nome do monte onde Moisés recebeu os Dez Mandamentos?",
      options: shuffle(["Sinai", "Sião", "Ararat", "Olives"]),
      answer: "Sinai"
    },
    {
      question: "Quem foi o rei conhecido por sua sabedoria?",
      options: shuffle(["Salomão", "Davi", "Saul", "Ezequias"]),
      answer: "Salomão"
    },
    {
      question: "Qual é o último livro do Novo Testamento?",
      options: shuffle(["Apocalipse", "João", "Atos", "Hebreus"]),
      answer: "Apocalipse"
    },
    {
      question: "Quem foi lançado na cova dos leões e sobreviveu?",
      options: shuffle(["Daniel", "Elias", "Ezequiel", "Jeremias"]),
      answer: "Daniel"
    },
    {
      question: "Qual discípulo negou Jesus três vezes?",
      options: shuffle(["Pedro", "Tiago", "João", "Tomé"]),
      answer: "Pedro"
    },
    {
      question: "Qual o nome do profeta que foi levado ao céu em um redemoinho?",
      options: shuffle(["Elias", "Eliseu", "Isaías", "Jeremias"]),
      answer: "Elias"
    },
    {
      question: "Em qual cidade Jesus nasceu?",
      options: shuffle(["Belém", "Nazaré", "Jerusalém", "Canaã"]),
      answer: "Belém"
    },
    {
      question: "Qual o nome do discípulo conhecido como 'o incrédulo'?",
      options: shuffle(["Tomé", "Bartolomeu", "Mateus", "André"]),
      answer: "Tomé"
    },
    {
      question: "Quem traiu Jesus entregando-o aos soldados?",
      options: shuffle(["Judas Iscariotes", "Pedro", "João", "Tiago"]),
      answer: "Judas Iscariotes"
    },
    {
      question: "Qual é o maior livro poético da Bíblia?",
      options: shuffle(["Salmos", "Provérbios", "Cânticos", "Eclesiastes"]),
      answer: "Salmos"
    },
    {
      question: "Quem é conhecido como o 'apóstolo dos gentios'?",
      options: shuffle(["Paulo", "Pedro", "João", "Tiago"]),
      answer: "Paulo"
    },
    {
      question: "Quantos dias e noites durou o dilúvio na época de Noé?",
      options: shuffle(["40", "7", "21", "50"]),
      answer: "40"
    },
    {
      question: "Quem foi o primeiro rei de Israel?",
      options: shuffle(["Saul", "Davi", "Salomão", "Josué"]),
      answer: "Saul"
    },
    {
      question: "Qual apóstolo era cobrador de impostos antes de seguir Jesus?",
      options: shuffle(["Mateus", "Pedro", "Tomé", "Tiago"]),
      answer: "Mateus"
    },
    {
      question: "Qual é o nome do pai de José no Antigo Testamento?",
      options: shuffle(["Jacó", "Isaac", "Abraão", "Isaque"]),
      answer: "Jacó"
    },
    {
      question: "Qual é o nome do profeta que desafiou os profetas de Baal no Monte Carmelo?",
      options: shuffle(["Elias", "Eliseu", "Isaías", "Jeremias"]),
      answer: "Elias"
    },
    {
      question: "Quem foi jogado no mar e salvo por um grande peixe?",
      options: shuffle(["Jonas", "Noé", "Moisés", "Davi"]),
      answer: "Jonas"
    },
    {
      question: "Quem sucedeu Moisés como líder dos israelitas?",
      options: shuffle(["Josué", "Calebe", "Arão", "Eli"]),
      answer: "Josué"
    },
    {
      question: "Qual discípulo era irmão de André?",
      options: shuffle(["Pedro", "Tiago", "João", "Bartolomeu"]),
      answer: "Pedro"
    },
    {
      question: "Qual das bem-aventuranças está no Sermão do Monte?",
      options: shuffle([
        "Bem-aventurados os humildes de espírito",
        "Bem-aventurados os ricos",
        "Bem-aventurados os fortes",
        "Bem-aventurados os líderes"
      ]),
      answer: "Bem-aventurados os humildes de espírito"
    }
  ];
  // Função shuffle já está definida abaixo no seu código

  const totalRounds = 5;
  const questionsPerRound = 5;

  let currentRound = 1;
  let currentQuestionIndex = 0;
  let selectedOption = null;
  let questionsThisRound = [];
  let correctCount = 0;
  let wrongAnswers = [];

  const quizContainer = document.getElementById('quiz-container');
  const roundInfo = document.getElementById('round-info');
  const questionEl = document.getElementById('question');
  const optionsEl = document.getElementById('options');
  const nextBtn = document.getElementById('next-btn');

  // Function to shuffle array items in place - Fisher-Yates shuffle
  function shuffle(array) {
    for(let i = array.length -1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  // Pick random questions for this round
  function pickQuestions() {
    // Shuffle the full question bank and get the first 5
    const shuffled = shuffle([...questionsBank]);
    return shuffled.slice(0, questionsPerRound);
  }

  function loadRound() {
    roundInfo.textContent = `Rodada ${currentRound} de ${totalRounds}`;
    questionsThisRound = pickQuestions();
    currentQuestionIndex = 0;
    loadQuestion();
  }

  function loadQuestion() {
    selectedOption = null;
    nextBtn.disabled = true;
    const currentQ = questionsThisRound[currentQuestionIndex];
    questionEl.textContent = currentQ.question;
    optionsEl.innerHTML = '';
    currentQ.options.forEach(option => {
      const li = document.createElement('li');
      li.textContent = option;
      li.tabIndex = 0;
      li.addEventListener('click', () => {
        selectOption(li);
      });
      li.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          selectOption(li);
        }
      });
      optionsEl.appendChild(li);
    });
  }

  function selectOption(li) {
    const options = optionsEl.querySelectorAll('li');
    options.forEach(o => o.classList.remove('selected'));
    li.classList.add('selected');
    selectedOption = li.textContent;
    nextBtn.disabled = false;
  }

  function showResults() {
    quizContainer.innerHTML = '';
    const resultsDiv = document.createElement('div');
    resultsDiv.className = 'results';

    const h2 = document.createElement('h2');
    h2.textContent = 'Resultado Final';
    resultsDiv.appendChild(h2);

    const p1 = document.createElement('p');
    p1.textContent = `Você acertou ${correctCount} de ${totalRounds * questionsPerRound} perguntas.`;
    resultsDiv.appendChild(p1);

    if (wrongAnswers.length > 0) {
      const wrongTitle = document.createElement('p');
      wrongTitle.textContent = 'Respostas erradas:';
      resultsDiv.appendChild(wrongTitle);

      const ul = document.createElement('ul');
      ul.className = 'wrong-list';

      wrongAnswers.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>Pergunta:</strong> ${item.question}<br>
                        <strong>Sua resposta:</strong> ${item.selected}<br>
                        <strong>Resposta correta:</strong> ${item.correct}`;
        ul.appendChild(li);
      });
      resultsDiv.appendChild(ul);
    } else {
      const p = document.createElement('p');
      p.textContent = 'Parabéns! Você acertou todas as perguntas!';
      resultsDiv.appendChild(p);
    }

    quizContainer.appendChild(resultsDiv);
  }

  nextBtn.addEventListener('click', () => {
    if (!selectedOption) return; // just in case
    const currentQ = questionsThisRound[currentQuestionIndex];
    if (selectedOption === currentQ.answer) {
      correctCount++;
    } else {
      wrongAnswers.push({
        question: currentQ.question,
        selected: selectedOption,
        correct: currentQ.answer
      });
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questionsPerRound) {
      loadQuestion();
    } else {
      currentRound++;
      if (currentRound <= totalRounds) {
        loadRound();
      } else {
        showResults();
      }
    }
  });

  loadRound();
});

