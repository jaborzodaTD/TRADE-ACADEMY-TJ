/* =========================================================
   TRADE ACADEMY
   Quiz Engine
   Authors: JABORZODA and MUZAFARZODA
   ========================================================= */

"use strict";

/* =========================================================
   SETTINGS
========================================================= */

const STORAGE_KEY = "tradeAcademyProgress";
const LANGUAGE_KEY = "tradeAcademyLanguage";

/* =========================================================
   QUESTIONS
========================================================= */

const questions = [

    {
        category: "Основы трейдинга",
        question: "Что означает BUY в трейдинге?",
        answers: [
            "Открытие сделки на покупку",
            "Открытие сделки на продажу",
            "Закрытие терминала",
            "Установка Stop-Loss"
        ],
        correct: 0,
        explanation:
            "BUY означает открытие позиции на покупку. Трейдер рассчитывает на рост цены."
    },

    {
        category: "Основы трейдинга",
        question: "Что означает SELL?",
        answers: [
            "Покупка актива",
            "Продажа или открытие короткой позиции",
            "Установка Take-Profit",
            "Пополнение счёта"
        ],
        correct: 1,
        explanation:
            "SELL используется для продажи. В зависимости от инструмента это может быть открытие короткой позиции."
    },

    {
        category: "Risk Management",
        question: "Что такое Stop-Loss?",
        answers: [
            "Уровень автоматического ограничения убытка",
            "Уровень гарантированной прибыли",
            "Комиссия брокера",
            "Размер депозита"
        ],
        correct: 0,
        explanation:
            "Stop-Loss закрывает сделку при достижении заданного уровня, помогая ограничить потенциальный убыток."
    },

    {
        category: "Risk Management",
        question: "Что такое Take-Profit?",
        answers: [
            "Максимальный размер депозита",
            "Уровень автоматической фиксации прибыли",
            "Комиссия",
            "Индикатор"
        ],
        correct: 1,
        explanation:
            "Take-Profit позволяет автоматически закрыть позицию при достижении заранее установленной цели по прибыли."
    },

    {
        category: "Risk Management",
        question: "Почему риск-менеджмент важен?",
        answers: [
            "Чтобы гарантировать прибыль",
            "Чтобы контролировать потенциальные потери",
            "Чтобы всегда открывать больше сделок",
            "Чтобы не использовать Stop-Loss"
        ],
        correct: 1,
        explanation:
            "Риск-менеджмент не гарантирует прибыль. Его задача — контролировать потенциальный ущерб от отдельных сделок."
    },

    {
        category: "Risk Management",
        question: "Что произойдёт, если трейдер рискует слишком большой частью депозита в одной сделке?",
        answers: [
            "Риск существенно увеличится",
            "Прибыль станет гарантированной",
            "Комиссия исчезнет",
            "Рынок перестанет двигаться"
        ],
        correct: 0,
        explanation:
            "Чем больше капитала подвергается риску в одной сделке, тем сильнее одна неудача может повлиять на весь счёт."
    },

    {
        category: "Технический анализ",
        question: "Что такое Support?",
        answers: [
            "Уровень, возле которого цена может встретить спрос",
            "Всегда максимальная цена",
            "Размер позиции",
            "Комиссия"
        ],
        correct: 0,
        explanation:
            "Поддержка — область, где исторически может появляться спрос и замедляться падение цены."
    },

    {
        category: "Технический анализ",
        question: "Что такое Resistance?",
        answers: [
            "Область потенциального сопротивления росту цены",
            "Минимальный депозит",
            "Размер Stop-Loss",
            "Торговая комиссия"
        ],
        correct: 0,
        explanation:
            "Сопротивление — область, где рост цены может замедляться из-за повышенного предложения."
    },

    {
        category: "Технический анализ",
        question: "Что показывает тренд?",
        answers: [
            "Общее направление движения цены",
            "Пароль аккаунта",
            "Размер комиссии",
            "Время работы биржи"
        ],
        correct: 0,
        explanation:
            "Тренд описывает преобладающее направление движения цены: восходящее, нисходящее или боковое."
    },

    {
        category: "Технический анализ",
        question: "Что такое восходящий тренд?",
        answers: [
            "Последовательность более высоких максимумов и минимумов",
            "Только падение цены",
            "Полное отсутствие движения",
            "Всегда боковое движение"
        ],
        correct: 0,
        explanation:
            "В классическом техническом анализе восходящий тренд характеризуется повышающимися максимумами и минимумами."
    },

    {
        category: "Свечной анализ",
        question: "Что показывает японская свеча?",
        answers: [
            "Ценовое движение за определённый период",
            "Только прибыль трейдера",
            "Размер депозита",
            "Комиссию брокера"
        ],
        correct: 0,
        explanation:
            "Свеча показывает Open, High, Low и Close за выбранный период."
    },

    {
        category: "Свечной анализ",
        question: "Что такое тело свечи?",
        answers: [
            "Расстояние между ценами открытия и закрытия",
            "Только максимальная цена",
            "Комиссия",
            "Объём депозита"
        ],
        correct: 0,
        explanation:
            "Тело свечи показывает разницу между Open и Close."
    },

    {
        category: "Свечной анализ",
        question: "Что такое тень свечи?",
        answers: [
            "Часть свечи выше или ниже тела, показывающая экстремумы",
            "Торговый баланс",
            "Размер позиции",
            "Комиссия"
        ],
        correct: 0,
        explanation:
            "Тени показывают максимальные и минимальные значения цены за период."
    },

    {
        category: "Торговая логика",
        question: "Что такое торговый план?",
        answers: [
            "Набор заранее определённых правил торговли",
            "Список случайных сделок",
            "Пароль от брокера",
            "Только график"
        ],
        correct: 0,
        explanation:
            "Торговый план определяет условия входа, выхода, риск и другие правила стратегии."
    },

    {
        category: "Торговая логика",
        question: "Почему не стоит входить в сделку только потому, что цена быстро растёт?",
        answers: [
            "Сильное движение само по себе не является гарантией продолжения",
            "Потому что BUY запрещён",
            "Потому что график перестанет работать",
            "Потому что прибыль невозможна"
        ],
        correct: 0,
        explanation:
            "Импульс может продолжиться, а может закончиться разворотом. Нужна торговая логика и управление риском."
    },

    {
        category: "Психология",
        question: "Что такое FOMO?",
        answers: [
            "Страх упустить движение или возможность",
            "Индикатор тренда",
            "Вид Stop-Loss",
            "Тип ордера"
        ],
        correct: 0,
        explanation:
            "FOMO может заставлять трейдера входить импульсивно из-за страха пропустить движение."
    },

    {
        category: "Психология",
        question: "Что такое revenge trading?",
        answers: [
            "Попытка отыграть убыток эмоциональными сделками",
            "Стратегия долгосрочного инвестирования",
            "Вид графика",
            "Тип свечи"
        ],
        correct: 0,
        explanation:
            "Revenge trading — эмоциональная торговля после убытка с целью быстро вернуть потерянные деньги."
    },

    {
        category: "Психология",
        question: "Что лучше делать после серии убыточных сделок?",
        answers: [
            "Остановиться и проанализировать причины",
            "Увеличить риск в несколько раз",
            "Открыть максимальное количество сделок",
            "Игнорировать риск"
        ],
        correct: 0,
        explanation:
            "После серии убытков полезно остановиться, проверить торговый план и собственные ошибки."
    },

    {
        category: "Forex",
        question: "Что такое Forex?",
        answers: [
            "Международный рынок обмена валют",
            "Только рынок акций",
            "Только рынок криптовалют",
            "Программа для рисования"
        ],
        correct: 0,
        explanation:
            "Forex — глобальный внебиржевой рынок, на котором торгуются валютные пары."
    },

    {
        category: "Forex",
        question: "Что такое валютная пара?",
        answers: [
            "Сочетание двух валют, например EUR/USD",
            "Две акции одной компании",
            "Два индикатора",
            "Два Stop-Loss"
        ],
        correct: 0,
        explanation:
            "В валютной паре первая валюта является базовой, а вторая — котируемой."
    },

    {
        category: "Forex",
        question: "Что означает EUR/USD?",
        answers: [
            "Стоимость евро выраженная в долларах США",
            "Стоимость доллара в евро всегда",
            "Цена золота",
            "Индекс акций"
        ],
        correct: 0,
        explanation:
            "EUR/USD показывает, сколько долларов США требуется для покупки одной единицы евро."
    },

    {
        category: "Стратегия",
        question: "Что такое торговая стратегия?",
        answers: [
            "Набор правил для принятия торговых решений",
            "Случайный вход",
            "Только индикатор",
            "Название брокера"
        ],
        correct: 0,
        explanation:
            "Стратегия задаёт условия, при которых трейдер рассматривает вход, выход и управление риском."
    },

    {
        category: "Стратегия",
        question: "Почему стратегию нужно тестировать на исторических данных?",
        answers: [
            "Чтобы изучить её поведение в разных рыночных условиях",
            "Чтобы гарантировать будущую прибыль",
            "Чтобы отменить риск",
            "Чтобы рынок двигался по стратегии"
        ],
        correct: 0,
        explanation:
            "Историческое тестирование помогает оценить поведение метода, но не гарантирует будущий результат."
    },

    {
        category: "Индикаторы",
        question: "Для чего используются технические индикаторы?",
        answers: [
            "Для анализа данных о цене и/или объёме",
            "Для гарантии прибыли",
            "Для изменения рынка",
            "Для пополнения счёта"
        ],
        correct: 0,
        explanation:
            "Индикаторы являются инструментами анализа. Они не гарантируют правильность прогноза."
    },

    {
        category: "Индикаторы",
        question: "Что показывает Moving Average?",
        answers: [
            "Среднее значение цены за выбранный период",
            "Только размер прибыли",
            "Пароль",
            "Комиссию"
        ],
        correct: 0,
        explanation:
            "Moving Average сглаживает ценовой ряд и помогает анализировать направление движения."
    },

    {
        category: "Индикаторы",
        question: "Что такое RSI?",
        answers: [
            "Индикатор относительной силы",
            "Торговый счёт",
            "Тип ордера",
            "Валютная пара"
        ],
        correct: 0,
        explanation:
            "RSI — осциллятор, который измеряет относительную силу ценового движения."
    },

    {
        category: "Практика",
        question: "Что нужно сделать перед открытием сделки?",
        answers: [
            "Определить идею, уровень риска и условия выхода",
            "Просто нажать BUY",
            "Увеличить плечо до максимума",
            "Не смотреть график"
        ],
        correct: 0,
        explanation:
            "Перед сделкой желательно определить торговую идею, риск, вход и условия выхода."
    },

    {
        category: "Практика",
        question: "Что такое торговый журнал?",
        answers: [
            "Запись сделок и их анализа",
            "Пароль от брокера",
            "График без данных",
            "Тип индикатора"
        ],
        correct: 0,
        explanation:
            "Журнал помогает анализировать сделки, ошибки, результаты и соблюдение торгового плана."
    },

    {
        category: "Практика",
        question: "Что делать после завершения сделки?",
        answers: [
            "Проанализировать результат и соблюдение плана",
            "Сразу открыть новую сделку любой ценой",
            "Увеличить риск",
            "Удалить историю"
        ],
        correct: 0,
        explanation:
            "Пост-анализ помогает выявлять повторяющиеся ошибки и улучшать дисциплину."
    },

    {
        category: "Практика",
        question: "Что является главным принципом управления риском?",
        answers: [
            "Сначала контролировать риск, а затем искать возможность",
            "Всегда использовать максимальное плечо",
            "Рисковать всем депозитом",
            "Игнорировать Stop-Loss"
        ],
        correct: 0,
        explanation:
            "Контроль риска — фундаментальная часть торгового процесса. Ни одна сделка не должна ставить под угрозу весь капитал."
    }

];

/* =========================================================
   STATE
========================================================= */

const state = {
    currentQuestion: 0,
    score: 0,
    answered: 0,
    selectedAnswer: null,
    answers: [],
    startedAt: null,
    finishedAt: null,
    completed: false
};

/* =========================================================
   DOM
========================================================= */

const elements = {};

function cacheElements() {

    elements.question =
        document.getElementById("question");

    elements.category =
        document.getElementById("quiz-category");

    elements.progressText =
        document.getElementById("quiz-progress-text");

    elements.answerList =
        document.getElementById("answer-list");

    elements.explanation =
        document.getElementById("explanation");

    elements.explanationText =
        document.getElementById("explanation-text");

    elements.next =
        document.getElementById("next-question");

    elements.progress =
        document.getElementById("progress-fill");

    elements.score =
        document.getElementById("current-score");

    elements.total =
        document.getElementById("total-questions");

    elements.answered =
        document.getElementById("answered-count");

    elements.accuracy =
        document.getElementById("accuracy");

    elements.results =
        document.getElementById("results");

    elements.resultScore =
        document.getElementById("result-score");

    elements.resultTitle =
        document.getElementById("result-title");

    elements.resultDescription =
        document.getElementById("result-description");

    elements.resultBadge =
        document.getElementById("result-badge");

    elements.recommendations =
        document.getElementById("recommendations");

    elements.restart =
        document.getElementById("restart-quiz");
}

/* =========================================================
   INITIALIZATION
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    cacheElements();

    initializeQuiz();

    initializeNavigation();

    initializeLanguage();

    initializeRestart();

    initializeStartButton();

});

/* =========================================================
   QUIZ INIT
========================================================= */

function initializeQuiz() {

    if (!elements.question) {
        return;
    }

    elements.total.textContent =
        questions.length;

    loadSavedProgress();

    if (!state.startedAt) {
        state.startedAt =
            new Date().toISOString();
    }

    renderQuestion();

    updateStats();

}

/* =========================================================
   RENDER QUESTION
========================================================= */

function renderQuestion() {

    if (
        !elements.question ||
        !elements.answerList
    ) {
        return;
    }

    const question =
        questions[state.currentQuestion];

    if (!question) {
        finishQuiz();
        return;
    }

    state.selectedAnswer = null;

    elements.question.textContent =
        question.question;

    elements.category.textContent =
        question.category;

    elements.progressText.textContent =
        `${state.currentQuestion + 1} / ${questions.length}`;

    elements.answerList.innerHTML = "";

    elements.explanation.hidden = true;

    elements.next.disabled = true;

    question.answers.forEach(
        (answer, index) => {

            const button =
                document.createElement("button");

            button.type = "button";

            button.className =
                "answer-option";

            button.dataset.answer =
                index;

            button.innerHTML = `
                <span class="answer-letter">
                    ${String.fromCharCode(65 + index)}
                </span>

                <span class="answer-text">
                    ${escapeHTML(answer)}
                </span>
            `;

            button.addEventListener(
                "click",
                () => handleAnswer(index)
            );

            elements.answerList.appendChild(button);

        }
    );

    updateProgress();

}

/* =========================================================
   ANSWER
========================================================= */

function handleAnswer(answerIndex) {

    if (state.selectedAnswer !== null) {
        return;
    }

    const question =
        questions[state.currentQuestion];

    state.selectedAnswer =
        answerIndex;

    state.answered++;

    const isCorrect =
        answerIndex === question.correct;

    if (isCorrect) {
        state.score++;
    }

    state.answers.push({
        question:
            state.currentQuestion,

        category:
            question.category,

        selected:
            answerIndex,

        correct:
            question.correct,

        isCorrect
    });

    const options =
        elements.answerList.querySelectorAll(
            ".answer-option"
        );

    options.forEach(
        (option, index) => {

            option.disabled = true;

            if (index === question.correct) {

                option.classList.add(
                    "correct"
                );

            }

            if (
                index === answerIndex &&
                !isCorrect
            ) {

                option.classList.add(
                    "wrong"
                );

            }

        }
    );

    showExplanation(
        question.explanation,
        isCorrect
    );

    elements.next.disabled = false;

    updateStats();

    saveProgress();

}

/* =========================================================
   EXPLANATION
========================================================= */

function showExplanation(
    explanation,
    isCorrect
) {

    elements.explanation.hidden = false;

    elements.explanationText.textContent =
        explanation;

    elements.explanation.classList.remove(
        "correct-explanation",
        "wrong-explanation"
    );

    elements.explanation.classList.add(
        isCorrect
            ? "correct-explanation"
            : "wrong-explanation"
    );
}

/* =========================================================
   NEXT QUESTION
========================================================= */

if (document.getElementById("next-question")) {

    document
        .getElementById("next-question")
        .addEventListener(
            "click",
            nextQuestion
        );

}

function nextQuestion() {

    if (state.selectedAnswer === null) {
        return;
    }

    state.currentQuestion++;

    if (
        state.currentQuestion >=
        questions.length
    ) {

        finishQuiz();

        return;
    }

    renderQuestion();

    updateStats();

    saveProgress();

    const quizSection =
        document.getElementById("quiz");

    if (quizSection) {

        quizSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }
}

/* =========================================================
   PROGRESS
========================================================= */

function updateProgress() {

    if (!elements.progress) {
        return;
    }

    const percentage =
        (
            state.currentQuestion /
            questions.length
        ) * 100;

    elements.progress.style.width =
        `${percentage}%`;
}

/* =========================================================
   STATS
========================================================= */

function updateStats() {

    if (elements.score) {
        elements.score.textContent =
            state.score;
    }

    if (elements.answered) {
        elements.answered.textContent =
            state.answered;
    }

    if (elements.total) {
        elements.total.textContent =
            questions.length;
    }

    if (elements.accuracy) {

        const accuracy =
            state.answered === 0
                ? 0
                : Math.round(
                    (
                        state.score /
                        state.answered
                    ) * 100
                );

        elements.accuracy.textContent =
            `${accuracy}%`;
    }

    updateProgress();
}

/* =========================================================
   FINISH
========================================================= */

function finishQuiz() {

    state.completed = true;

    state.finishedAt =
        new Date().toISOString();

    const percentage =
        Math.round(
            (
                state.score /
                questions.length
            ) * 100
        );

    renderResults(percentage);

    saveProgress();

    if (elements.results) {

        elements.results.hidden = false;

        elements.results.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }
}

/* =========================================================
   RESULT LEVEL
========================================================= */

function getResultLevel(score) {

    if (score >= 90) {

        return {
            title: "Очень сильная база",
            description:
                "Ты хорошо понимаешь основные принципы трейдинга. Следующий этап — углублять практику и работать над системностью.",
            badge: "🏆"
        };

    }

    if (score >= 75) {

        return {
            title: "Хорошая база",
            description:
                "У тебя уже есть хорошее понимание основных понятий. Обрати внимание на темы, где были ошибки.",
            badge: "🥇"
        };

    }

    if (score >= 60) {

        return {
            title: "Базовый уровень",
            description:
                "Основы уже знакомы, но некоторые важные концепции требуют повторения.",
            badge: "📚"
        };

    }

    if (score >= 40) {

        return {
            title:
                "Есть фундамент, но нужна практика",
            description:
                "Ты уже знаешь часть терминов, однако стоит системно повторить основы и риск-менеджмент.",
            badge: "🎯"
        };

    }

    return {
        title: "Начинающий уровень",
        description:
            "Начни с основных понятий: BUY/SELL, Stop-Loss, Take-Profit, риск и структура рынка.",
        badge: "🚀"
    };
}

/* =========================================================
   RENDER RESULTS
========================================================= */

function renderResults(score) {

    const result =
        getResultLevel(score);

    if (elements.resultScore) {

        elements.resultScore.textContent =
            `${score}%`;

    }

    if (elements.resultTitle) {

        elements.resultTitle.textContent =
            result.title;

    }

    if (elements.resultDescription) {

        elements.resultDescription.textContent =
            result.description;

    }

    if (elements.resultBadge) {

        elements.resultBadge.textContent =
            result.badge;

    }

    renderRecommendations();
}

/* =========================================================
   RECOMMENDATIONS
========================================================= */

function renderRecommendations() {

    if (!elements.recommendations) {
        return;
    }

    const categories = {};

    questions.forEach(
        question => {

            if (!categories[question.category]) {

                categories[question.category] = {
                    total: 0,
                    wrong: 0
                };

            }

            categories[question.category].total++;

        }
    );

    state.answers.forEach(
        answer => {

            if (!answer.isCorrect) {

                if (
                    categories[answer.category]
                ) {

                    categories[
                        answer.category
                    ].wrong++;

                }

            }

        }
    );

    const weakCategories =
        Object.entries(categories)
            .filter(
                ([, data]) =>
                    data.wrong > 0
            )
            .sort(
                (a, b) =>
                    b[1].wrong -
                    a[1].wrong
            );

    if (weakCategories.length === 0) {

        elements.recommendations.innerHTML = `
            <div class="recommendation-item">
                <span>✓</span>
                <div>
                    <strong>Отличная работа!</strong>
                    <p>
                        В этой попытке ошибок нет.
                        Можно переходить к более сложным задачам.
                    </p>
                </div>
            </div>
        `;

        return;
    }

    elements.recommendations.innerHTML =
        weakCategories
            .slice(0, 5)
            .map(
                ([category, data]) => `

                <div class="recommendation-item">

                    <span>
                        📖
                    </span>

                    <div>

                        <strong>
                            ${escapeHTML(category)}
                        </strong>

                        <p>
                            Ошибок:
                            ${data.wrong}
                            из
                            ${data.total}.
                            Повтори эту тему.
                        </p>

                    </div>

                </div>
            `
            )
            .join("");
}

/* =========================================================
   RESTART
========================================================= */

function initializeRestart() {

    if (!elements.restart) {
        return;
    }

    elements.restart.addEventListener(
        "click",
        restartQuiz
    );
}

function restartQuiz() {

    state.currentQuestion = 0;
    state.score = 0;
    state.answered = 0;
    state.selectedAnswer = null;
    state.answers = [];
    state.startedAt =
        new Date().toISOString();
    state.finishedAt = null;
    state.completed = false;

    localStorage.removeItem(
        STORAGE_KEY
    );

    if (elements.results) {
        elements.results.hidden = true;
    }

    renderQuestion();

    updateStats();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

/* =========================================================
   LOCAL STORAGE
========================================================= */

function saveProgress() {

    try {

        const data = {
            currentQuestion:
                state.currentQuestion,

            score:
                state.score,

            answered:
                state.answered,

            answers:
                state.answers,

            startedAt:
                state.startedAt,

            finishedAt:
                state.finishedAt,

            completed:
                state.completed
        };

        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(data)
        );

    } catch (error) {

        console.error(
            "Не удалось сохранить прогресс:",
            error
        );

    }
}

function loadSavedProgress() {

    try {

        const saved =
            localStorage.getItem(
                STORAGE_KEY
            );

        if (!saved) {
            return;
        }

        const data =
            JSON.parse(saved);

        if (
            typeof data.currentQuestion ===
            "number"
        ) {

            state.currentQuestion =
                Math.min(
                    data.currentQuestion,
                    questions.length - 1
                );

        }

        if (
            typeof data.score ===
            "number"
        ) {

            state.score =
                data.score;

        }

        if (
            typeof data.answered ===
            "number"
        ) {

            state.answered =
                data.answered;

        }

        if (
            Array.isArray(data.answers)
        ) {

            state.answers =
                data.answers;

        }

        if (data.startedAt) {

            state.startedAt =
                data.startedAt;

        }

        if (data.finishedAt) {

            state.finishedAt =
                data.finishedAt;

        }

        state.completed =
            Boolean(data.completed);

        /*
         * Если тест уже завершён,
         * начинаем его заново при загрузке,
         * чтобы пользователь мог сразу пройти новую попытку.
         */

        if (state.completed) {

            state.currentQuestion = 0;
            state.score = 0;
            state.answered = 0;
            state.answers = [];
            state.completed = false;
            state.finishedAt = null;

        }

    } catch (error) {

        console.error(
            "Ошибка загрузки прогресса:",
            error
        );

    }
}

/* =========================================================
   NAVIGATION
========================================================= */

function initializeNavigation() {

    const menuToggle =
        document.getElementById(
            "menu-toggle"
        );

    const navMenu =
        document.getElementById(
            "nav-menu"
        );

    if (!menuToggle || !navMenu) {
        return;
    }

    menuToggle.addEventListener(
        "click",
        () => {

            navMenu.classList.toggle(
                "active"
            );

            menuToggle.classList.toggle(
                "active"
            );

        }
    );

    const links =
        navMenu.querySelectorAll(
            "a"
        );

    links.forEach(
        link => {

            link.addEventListener(
                "click",
                () => {

                    navMenu.classList.remove(
                        "active"
                    );

                    menuToggle.classList.remove(
                        "active"
                    );

                }
            );

        }
    );
}

/* =========================================================
   LANGUAGE
========================================================= */

function initializeLanguage() {

    const buttons =
        document.querySelectorAll(
            ".language-btn"
        );

    const savedLanguage =
        localStorage.getItem(
            LANGUAGE_KEY
        );

    const language =
        savedLanguage || "ru";

    buttons.forEach(
        button => {

            button.classList.toggle(
                "active",
                button.dataset.language ===
                language
            );

            button.addEventListener(
                "click",
                () => {

                    const selected =
                        button.dataset.language;

                    localStorage.setItem(
                        LANGUAGE_KEY,
                        selected
                    );

                    buttons.forEach(
                        item => {

                            item.classList.toggle(
                                "active",
                                item.dataset.language ===
                                selected
                            );

                        }
                    );

                    /*
                     * Пока переключаем интерфейсный
                     * индикатор языка.
                     *
                     * Полную базу вопросов на таджикском
                     * добавим отдельным обновлением.
                     */

                    showNotification(
                        selected === "tj"
                            ? "Забон: тоҷикӣ"
                            : "Язык: русский",
                        "success"
                    );

                }
            );

        }
    );
}

/* =========================================================
   START BUTTON
========================================================= */

function initializeStartButton() {

    const button =
        document.getElementById(
            "start-quiz"
        );

    if (!button) {
        return;
    }

    button.addEventListener(
        "click",
        event => {

            event.preventDefault();

            const quiz =
                document.getElementById(
                    "quiz"
                );

            if (quiz) {

                quiz.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        }
    );
}

/* =========================================================
   NOTIFICATIONS
========================================================= */

function showNotification(
    message,
    type = "info"
) {

    let container =
        document.getElementById(
            "notifications"
        );

    if (!container) {

        container =
            document.createElement(
                "div"
            );

        container.id =
            "notifications";

        document.body.appendChild(
            container
        );

    }

    const notification =
        document.createElement(
            "div"
        );

    notification.className =
        `notification notification-${type}`;

    notification.textContent =
        message;

    container.appendChild(
        notification
    );

    setTimeout(
        () => {

            notification.classList.add(
                "hide"
            );

            setTimeout(
                () => {

                    notification.remove();

                },
                300
            );

        },
        2500
    );
}

/* =========================================================
   SECURITY
========================================================= */

function escapeHTML(value) {

    if (
        value === null ||
        value === undefined
    ) {

        return "";

    }

    return String(value)
        .replace(
            /&/g,
            "&amp;"
        )
        .replace(
            /</g,
            "&lt;"
        )
        .replace(
            />/g,
            "&gt;"
        )
        .replace(
            /"/g,
            "&quot;"
        )
        .replace(
            /'/g,
            "&#039;"
        );
}

/* =========================================================
   PUBLIC API
========================================================= */

window.TradeAcademy = {

    getQuestions() {
        return questions;
    },

    getState() {
        return {
            ...state
        };
    },

    restart() {
        restartQuiz();
    },

    clearProgress() {

        localStorage.removeItem(
            STORAGE_KEY
        );

        window.location.reload();

    }

};

console.log(
    "Trade Academy loaded successfully."
);

console.log(
    "Authors: JABORZODA and MUZAFARZODA"
);
