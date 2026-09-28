/* =========================================================
   TRADE ACADEMY TJ
   JABORZODA and MUZAFARZODA
   Static GitHub Pages Trading Education Platform
   ========================================================= */

"use strict";

/* =========================================================
   GLOBAL STATE
   ========================================================= */

const APP = {
    lang: localStorage.getItem("tradeAcademyLang") || "tj",
    theme: localStorage.getItem("tradeAcademyTheme") || "dark",

    progress: JSON.parse(
        localStorage.getItem("tradeAcademyProgress") || "{}"
    ),

    journal: JSON.parse(
        localStorage.getItem("tradeAcademyJournal") || "[]"
    ),

    plan: JSON.parse(
        localStorage.getItem("tradeAcademyPlan") || "{}"
    ),

    balance: Number(
        localStorage.getItem("tradeAcademyBalance") || 10000
    ),

    positions: JSON.parse(
        localStorage.getItem("tradeAcademyPositions") || "[]"
    ),

    quizScore: Number(
        localStorage.getItem("tradeAcademyQuizScore") || 0
    )
};


/* =========================================================
   TRANSLATIONS
   ========================================================= */

const I18N = {

    tj: {

        brand: "TRADE ACADEMY TJ",

        navAcademy: "Академия",
        navTerminal: "Терминал",
        navRisk: "Риск",
        navJournal: "Журнал",
        navPlan: "План",
        navQuiz: "Тестҳо",
        navProgress: "Пешрафт",

        heroEyebrow: "TRADE EDUCATION PLATFORM",

        heroTitle:
            "Аз сифр омӯз. Бо нақша савдо кун. Бо интизом рушд намо.",

        heroText:
            "Платформаи таълимии муосир барои омӯзиши Forex, таҳлили техникӣ, идоракунии риск ва психологияи трейдинг.",

        startLearning: "Оғози омӯзиш",
        openTerminal: "Терминали Demo",

        liveMarket: "БОЗОР",
        demoMode: "DEMO MODE",

        coursesTitle: "Барномаи омӯзиш",
        coursesSubtitle:
            "Қадам ба қадам аз асосҳо то сохтани системаи шахсии трейдинг.",

        fundamentals: "Асосҳои трейдинг",
        candles: "Свечаҳо ва график",
        technical: "Таҳлили техникӣ",
        support: "Support & Resistance",
        indicators: "Индикаторҳо",
        risk: "Идоракунии риск",
        psychology: "Психология",
        strategy: "Стратегия ва Trading Plan",

        beginner: "Оғозкунанда",
        intermediate: "Миёна",
        advanced: "Пешрафта",

        lessons: "дарс",
        questions: "савол",
        completed: "анҷом ёфт",

        terminalTitle: "Demo Trading Terminal",
        terminalSubtitle:
            "Трейдингро бе истифодаи пули воқеӣ машқ кун.",

        buy: "BUY",
        sell: "SELL",

        marketOrder: "Market",
        limitOrder: "Limit",
        stopOrder: "Stop",

        balance: "Баланс",
        equity: "Equity",
        riskAmount: "Risk",
        position: "Position",

        riskTitle: "Risk Calculator",
        riskSubtitle:
            "Пеш аз ҳар як савдо ҳаҷми позиция ва рискро ҳисоб кун.",

        accountBalance: "Баланс",
        riskPercent: "Риск %",
        entryPrice: "Нархи Entry",
        stopLoss: "Stop Loss",
        takeProfit: "Take Profit",
        calculate: "Ҳисоб кардан",

        journalTitle: "Trading Journal",
        journalSubtitle:
            "Ҳар як савдоро сабт кун ва хатогиҳои худро таҳлил намо.",

        date: "Сана",
        symbol: "Symbol",
        direction: "Самт",
        result: "Натиҷа",
        notes: "Эзоҳ",
        saveTrade: "Сабт кардани савдо",
        delete: "Нест кардан",

        planTitle: "Trading Plan",
        planSubtitle:
            "Қоидаҳои шахсии худро навис ва ба онҳо риоя кун.",

        strategyName: "Номи стратегия",
        tradingSession: "Сессияи савдо",
        maxRisk: "Максимум риск",
        entryRules: "Қоидаи Entry",
        exitRules: "Қоидаи Exit",
        psychologyRules: "Қоидаҳои психология",
        savePlan: "Нигоҳ доштан",

        quizTitle: "Trading Quiz",
        quizSubtitle:
            "Дониши худро санҷ. 60+ саволи таълимӣ.",

        nextQuestion: "Саволи навбатӣ",
        finishQuiz: "Анҷом",
        correct: "Дуруст!",
        incorrect: "Ҷавоби нодуруст",

        progressTitle: "Пешрафти шумо",
        progressSubtitle:
            "Натиҷаи омӯзиш, тестҳо ва фаъолиятатон дар як ҷо.",

        achievements: "Дастовардҳо",

        footerDisclaimer:
            "Ин платформа танҳо барои омӯзиш ва Demo Trading мебошад. Ин маслиҳати молиявӣ ё сармоягузорӣ нест. Пеш аз истифодаи маблағи воқеӣ хавфҳоро мустақилона омӯзед.",

        author: "JABORZODA and MUZAFARZODA",

        noTrades: "Ҳоло савдо сабт нашудааст.",
        saved: "Бомуваффақият нигоҳ дошта шуд.",
        deleted: "Нест карда шуд.",

        level1: "Навкор",
        level2: "Омӯзанда",
        level3: "Трейдер",
        level4: "Discipline Trader",
        level5: "Pro Student"
    },

    ru: {

        brand: "TRADE ACADEMY TJ",

        navAcademy: "Академия",
        navTerminal: "Терминал",
        navRisk: "Риск",
        navJournal: "Журнал",
        navPlan: "План",
        navQuiz: "Тесты",
        navProgress: "Прогресс",

        heroEyebrow: "TRADE EDUCATION PLATFORM",

        heroTitle:
            "Учись с нуля. Торгуй по плану. Развивай дисциплину.",

        heroText:
            "Современная образовательная платформа для изучения Forex, технического анализа, управления рисками и психологии трейдинга.",

        startLearning: "Начать обучение",
        openTerminal: "Demo Терминал",

        liveMarket: "РЫНОК",
        demoMode: "DEMO MODE",

        coursesTitle: "Программа обучения",
        coursesSubtitle:
            "Пошаговый путь от основ до создания собственной торговой системы.",

        fundamentals: "Основы трейдинга",
        candles: "Свечи и графики",
        technical: "Технический анализ",
        support: "Support & Resistance",
        indicators: "Индикаторы",
        risk: "Управление рисками",
        psychology: "Психология",
        strategy: "Стратегия и Trading Plan",

        beginner: "Начальный",
        intermediate: "Средний",
        advanced: "Продвинутый",

        lessons: "уроков",
        questions: "вопросов",
        completed: "завершено",

        terminalTitle: "Demo Trading Terminal",
        terminalSubtitle:
            "Практикуй трейдинг без использования реальных денег.",

        buy: "BUY",
        sell: "SELL",

        marketOrder: "Market",
        limitOrder: "Limit",
        stopOrder: "Stop",

        balance: "Баланс",
        equity: "Equity",
        riskAmount: "Risk",
        position: "Position",

        riskTitle: "Risk Calculator",
        riskSubtitle:
            "Рассчитывай размер позиции и риск до открытия сделки.",

        accountBalance: "Баланс",
        riskPercent: "Риск %",
        entryPrice: "Цена Entry",
        stopLoss: "Stop Loss",
        takeProfit: "Take Profit",
        calculate: "Рассчитать",

        journalTitle: "Trading Journal",
        journalSubtitle:
            "Записывай сделки и анализируй свои ошибки.",

        date: "Дата",
        symbol: "Symbol",
        direction: "Направление",
        result: "Результат",
        notes: "Заметки",
        saveTrade: "Сохранить сделку",
        delete: "Удалить",

        planTitle: "Trading Plan",
        planSubtitle:
            "Создай собственные правила и следуй им.",

        strategyName: "Название стратегии",
        tradingSession: "Торговая сессия",
        maxRisk: "Максимальный риск",
        entryRules: "Правило Entry",
        exitRules: "Правило Exit",
        psychologyRules: "Правила психологии",
        savePlan: "Сохранить",

        quizTitle: "Trading Quiz",
        quizSubtitle:
            "Проверь знания. Более 60 образовательных вопросов.",

        nextQuestion: "Следующий вопрос",
        finishQuiz: "Завершить",
        correct: "Правильно!",
        incorrect: "Неправильный ответ",

        progressTitle: "Ваш прогресс",
        progressSubtitle:
            "Обучение, тесты и активность в одном месте.",

        achievements: "Достижения",

        footerDisclaimer:
            "Платформа предназначена только для обучения и Demo Trading. Это не финансовая или инвестиционная рекомендация. Перед использованием реальных денег самостоятельно изучите риски.",

        author: "JABORZODA and MUZAFARZODA",

        noTrades: "Пока нет сохранённых сделок.",
        saved: "Успешно сохранено.",
        deleted: "Удалено.",

        level1: "Новичок",
        level2: "Ученик",
        level3: "Трейдер",
        level4: "Discipline Trader",
        level5: "Pro Student"
    }
};


/* =========================================================
   COURSE DATA
   ========================================================= */

const COURSES = [

    {
        id: "fundamentals",
        icon: "📚",
        level: "beginner",
        lessons: 8,
        title: {
            tj: "Асосҳои трейдинг",
            ru: "Основы трейдинга"
        },
        description: {
            tj: "Forex чист, ҷуфтҳои асъорӣ, spread, leverage ва order.",
            ru: "Forex, валютные пары, spread, leverage и основные типы ордеров."
        }
    },

    {
        id: "candles",
        icon: "🕯️",
        level: "beginner",
        lessons: 8,
        title: {
            tj: "Свечаҳо ва график",
            ru: "Свечи и графики"
        },
        description: {
            tj: "OHLC, bullish/bearish candles ва сохтори график.",
            ru: "OHLC, bullish/bearish свечи и структура графика."
        }
    },

    {
        id: "technical",
        icon: "📈",
        level: "intermediate",
        lessons: 8,
        title: {
            tj: "Таҳлили техникӣ",
            ru: "Технический анализ"
        },
        description: {
            tj: "Trend, market structure, momentum ва price action.",
            ru: "Тренды, структура рынка, momentum и price action."
        }
    },

    {
        id: "support",
        icon: "🎯",
        level: "intermediate",
        lessons: 8,
        title: {
            tj: "Support & Resistance",
            ru: "Support & Resistance"
        },
        description: {
            tj: "Сатҳҳои муҳим, breakout ва retest.",
            ru: "Ключевые уровни, breakout и retest."
        }
    },

    {
        id: "indicators",
        icon: "📊",
        level: "intermediate",
        lessons: 8,
        title: {
            tj: "Индикаторҳо",
            ru: "Индикаторы"
        },
        description: {
            tj: "RSI, MACD, Moving Average ва истифодаи дурусти онҳо.",
            ru: "RSI, MACD, Moving Average и правильное применение."
        }
    },

    {
        id: "risk",
        icon: "🛡️",
        level: "advanced",
        lessons: 8,
        title: {
            tj: "Идоракунии риск",
            ru: "Управление рисками"
        },
        description: {
            tj: "Position sizing, risk/reward ва drawdown.",
            ru: "Position sizing, risk/reward и drawdown."
        }
    },

    {
        id: "psychology",
        icon: "🧠",
        level: "advanced",
        lessons: 8,
        title: {
            tj: "Психология",
            ru: "Психология"
        },
        description: {
            tj: "Fear, greed, revenge trading ва интизом.",
            ru: "Страх, жадность, revenge trading и дисциплина."
        }
    },

    {
        id: "strategy",
        icon: "⚡",
        level: "advanced",
        lessons: 8,
        title: {
            tj: "Стратегия ва Trading Plan",
            ru: "Стратегия и Trading Plan"
        },
        description: {
            tj: "Сохтани системаи шахсӣ ва қоидаҳои entry/exit.",
            ru: "Создание собственной системы и правил entry/exit."
        }
    }
];


/* =========================================================
   QUIZ DATABASE — 64 QUESTIONS
   ========================================================= */

const QUIZ = [

    {
        q: {
            tj: "Forex чист?",
            ru: "Что такое Forex?"
        },
        options: {
            tj: [
                "Бозори мубодилаи асъор",
                "Бозори телефонҳо",
                "Бонки марказӣ",
                "Барномаи мобилӣ"
            ],
            ru: [
                "Рынок обмена валют",
                "Рынок телефонов",
                "Центральный банк",
                "Мобильное приложение"
            ]
        },
        correct: 0
    },

    {
        q: {
            tj: "EUR/USD чӣ нишон медиҳад?",
            ru: "Что показывает EUR/USD?"
        },
        options: {
            tj: [
                "Қимати евро нисбат ба доллар",
                "Қимати доллар нисбат ба евро",
                "Нархи тилло",
                "Индекси саҳмияҳо"
            ],
            ru: [
                "Стоимость евро относительно доллара",
                "Стоимость доллара относительно евро",
                "Цену золота",
                "Фондовый индекс"
            ]
        },
        correct: 0
    },

    {
        q: {
            tj: "Spread чист?",
            ru: "Что такое Spread?"
        },
        options: {
            tj: [
                "Фарқи байни Bid ва Ask",
                "Андози давлат",
                "Баланс",
                "Stop Loss"
            ],
            ru: [
                "Разница между Bid и Ask",
                "Государственный налог",
                "Баланс",
                "Stop Loss"
            ]
        },
        correct: 0
    },

    {
        q: {
            tj: "Leverage чӣ мекунад?",
            ru: "Что делает Leverage?"
        },
        options: {
            tj: [
                "Имкони идора кардани позицияи калонтар бо сармояи хурдтар медиҳад",
                "Фоидаро кафолат медиҳад",
                "Зарарро нест мекунад",
                "Бозорро қатъ мекунад"
            ],
            ru: [
                "Позволяет контролировать большую позицию меньшим капиталом",
                "Гарантирует прибыль",
                "Убирает убытки",
                "Останавливает рынок"
            ]
        },
        correct: 0
    },

    {
        q: {
            tj: "Bullish чӣ маъно дорад?",
            ru: "Что означает Bullish?"
        },
        options: {
            tj: [
                "Ҳаракати болораванда",
                "Ҳаракати поёнраванда",
                "Бозори баста",
                "Набудани volatility"
            ],
            ru: [
                "Восходящее движение",
                "Нисходящее движение",
                "Закрытый рынок",
                "Отсутствие volatility"
            ]
        },
        correct: 0
    },

    {
        q: {
            tj: "Bearish чӣ маъно дорад?",
            ru: "Что означает Bearish?"
        },
        options: {
            tj: [
                "Ҳаракати поёнраванда",
                "Ҳаракати болораванда",
                "Баланс",
                "Spread"
            ],
            ru: [
                "Нисходящее движение",
                "Восходящее движение",
                "Баланс",
                "Spread"
            ]
        },
        correct: 0
    },

    {
        q: {
            tj: "Candlestick аз кадом маълумот иборат аст?",
            ru: "Из каких данных состоит Candlestick?"
        },
        options: {
            tj: [
                "Open, High, Low, Close",
                "Танҳо Close",
                "Танҳо Open",
                "Танҳо High"
            ],
            ru: [
                "Open, High, Low, Close",
                "Только Close",
                "Только Open",
                "Только High"
            ]
        },
        correct: 0
    },

    {
        q: {
            tj: "Stop Loss барои чӣ лозим аст?",
            ru: "Для чего нужен Stop Loss?"
        },
        options: {
            tj: [
                "Барои маҳдуд кардани зарар",
                "Барои зиёд кардани spread",
                "Барои кафолати фоида",
                "Барои кушодани ҳисоб"
            ],
            ru: [
                "Для ограничения убытка",
                "Для увеличения spread",
                "Для гарантии прибыли",
                "Для открытия счёта"
            ]
        },
        correct: 0
    },

    {
        q: {
            tj: "Take Profit чист?",
            ru: "Что такое Take Profit?"
        },
        options: {
            tj: [
                "Сатҳи пешакӣ муайяншуда барои гирифтани фоида",
                "Комиссияи брокер",
                "Зарари максималӣ",
                "Баланс"
            ],
            ru: [
                "Заранее установленный уровень фиксации прибыли",
                "Комиссия брокера",
                "Максимальный убыток",
                "Баланс"
            ]
        },
        correct: 0
    },

    {
        q: {
            tj: "Trend чист?",
            ru: "Что такое Trend?"
        },
        options: {
            tj: [
                "Самти умумии ҳаракати нарх",
                "Танҳо як свеча",
                "Spread",
                "Комиссия"
            ],
            ru: [
                "Общее направление движения цены",
                "Только одна свеча",
                "Spread",
                "Комиссия"
            ]
        },
        correct: 0
    },

    {
        q: {
            tj: "Uptrend одатан чӣ гуна сохтор дорад?",
            ru: "Как обычно выглядит Uptrend?"
        },
        options: {
            tj: [
                "Higher High ва Higher Low",
                "Lower High ва Lower Low",
                "Танҳо Flat",
                "Танҳо gap"
            ],
            ru: [
                "Higher High и Higher Low",
                "Lower High и Lower Low",
                "Только Flat",
                "Только gap"
            ]
        },
        correct: 0
    },

    {
        q: {
            tj: "Downtrend одатан чӣ гуна сохтор дорад?",
            ru: "Как обычно выглядит Downtrend?"
        },
        options: {
            tj: [
                "Lower High ва Lower Low",
                "Higher High ва Higher Low",
                "Танҳо consolidation",
                "Танҳо gap"
            ],
            ru: [
                "Lower High и Lower Low",
                "Higher High и Higher Low",
                "Только consolidation",
                "Только gap"
            ]
        },
        correct: 0
    },

    {
        q: {
            tj: "Support чист?",
            ru: "Что такое Support?"
        },
        options: {
            tj: [
                "Минтақае, ки нарх метавонад дастгирӣ ёбад",
                "Комиссия",
                "Баланс",
                "Indicator"
            ],
            ru: [
                "Зона, где цена может встретить поддержку",
                "Комиссия",
                "Баланс",
                "Indicator"
            ]
        },
        correct: 0
    },

    {
        q: {
            tj: "Resistance чист?",
            ru: "Что такое Resistance?"
        },
        options: {
            tj: [
                "Минтақае, ки нарх метавонад муқовимат ёбад",
                "Balance",
                "Spread",
                "Leverage"
            ],
            ru: [
                "Зона, где цена может встретить сопротивление",
                "Balance",
                "Spread",
                "Leverage"
            ]
        },
        correct: 0
    },

    {
        q: {
            tj: "Breakout чист?",
            ru: "Что такое Breakout?"
        },
        options: {
            tj: [
                "Шикастани сатҳи муҳим",
                "Бастани брокер",
                "Коҳиши balance",
                "Тағйири забон"
            ],
            ru: [
                "Пробой важного уровня",
                "Закрытие брокера",
                "Уменьшение balance",
                "Смена языка"
            ]
        },
        correct: 0
    },

    {
        q: {
            tj: "Retest чист?",
            ru: "Что такое Retest?"
        },
        options: {
            tj: [
                "Бозгашти нарх барои санҷиши сатҳи шикасташуда",
                "Кушодани ҳисоб",
                "Тағйири leverage",
                "Пӯшидани платформа"
            ],
            ru: [
                "Возврат цены для проверки пробитого уровня",
                "Открытие счёта",
                "Изменение leverage",
                "Закрытие платформы"
            ]
        },
        correct: 0
    },

    {
        q: {
            tj: "RSI асосан чиро чен мекунад?",
            ru: "Что в основном измеряет RSI?"
        },
        options: {
            tj: [
                "Momentum",
                "Balance",
                "Spread",
                "Комиссия"
            ],
            ru: [
                "Momentum",
                "Balance",
                "Spread",
                "Комиссию"
            ]
        },
        correct: 0
    },

    {
        q: {
            tj: "Moving Average барои чӣ истифода мешавад?",
            ru: "Для чего используют Moving Average?"
        },
        options: {
            tj: [
                "Барои ҳамвор кардани маълумоти нарх ва муайян кардани trend",
                "Барои зиёд кардани leverage",
                "Барои сохтани ҳисоб",
                "Барои пардохти spread"
            ],
            ru: [
                "Для сглаживания цены и анализа тренда",
                "Для увеличения leverage",
                "Для создания счёта",
                "Для оплаты spread"
            ]
        },
        correct: 0
    },

    {
        q: {
            tj: "MACD ба кадом гурӯҳ дохил мешавад?",
            ru: "К MACD относится к какой группе?"
        },
        options: {
            tj: [
                "Momentum / trend indicator",
                "Bank account",
                "Order type",
                "Payment system"
            ],
            ru: [
                "Momentum / trend indicator",
                "Банковский счёт",
                "Тип ордера",
                "Платёжная система"
            ]
        },
        correct: 0
    },

    {
        q: {
            tj: "Risk Management чист?",
            ru: "Что такое Risk Management?"
        },
        options: {
            tj: [
                "Системаи идора кардани хавфи савдо",
                "Системаи зиёд кардани зарар",
                "Танҳо интихоби broker",
                "Танҳо интихоби валют"
            ],
            ru: [
                "Система управления риском сделки",
                "Система увеличения убытков",
                "Только выбор брокера",
                "Только выбор валют"
            ]
        },
        correct: 0
    },

    {
        q: {
            tj: "Position sizing чист?",
            ru: "Что такое Position Sizing?"
        },
        options: {
            tj: [
                "Муайян кардани ҳаҷми мувофиқи позиция",
                "Интихоби забон",
                "Нархи брокер",
                "Номи стратегия"
            ],
            ru: [
                "Определение подходящего размера позиции",
                "Выбор языка",
                "Цена брокера",
                "Название стратегии"
            ]
        },
        correct: 0
    },

    {
        q: {
            tj: "Агар risk = 1% бошад, ин чӣ маъно дорад?",
            ru: "Что означает риск 1%?"
        },
        options: {
            tj: [
                "Зарари пешакӣ иҷозатдодашуда тақрибан 1% аз ҳисоб аст",
                "Фоидаи кафолатнок 1%",
                "Spread 1%",
                "Leverage 1:1"
            ],
            ru: [
                "Допустимый убыток примерно 1% от счёта",
                "Гарантированная прибыль 1%",
                "Spread 1%",
                "Leverage 1:1"
            ]
        },
        correct: 0
    },

    {
        q: {
            tj: "Risk/Reward 1:3 чӣ маъно дорад?",
            ru: "Что означает Risk/Reward 1:3?"
        },
        options: {
            tj: [
                "Барои 1 воҳид risk ҳадафи 3 воҳид reward аст",
                "3 воҳид risk ва 1 reward",
                "Танҳо 3% фоида",
                "Танҳо 1% зарар"
            ],
            ru: [
                "На 1 единицу риска приходится цель 3 единицы прибыли",
                "3 единицы риска и 1 прибыли",
                "Только 3% прибыли",
                "Только 1% убытка"
            ]
        },
        correct: 0
    },

    {
        q: {
            tj: "Drawdown чист?",
            ru: "Что такое Drawdown?"
        },
        options: {
            tj: [
                "Коҳиши ҳисоб аз нуқтаи баландтарини қаблӣ",
                "Фоидаи максималӣ",
                "Spread",
                "Leverage"
            ],
            ru: [
                "Снижение счёта от предыдущего максимума",
                "Максимальная прибыль",
                "Spread",
                "Leverage"
            ]
        },
        correct: 0
    },

    {
        q: {
            tj: "Overtrading чист?",
            ru: "Что такое Overtrading?"
        },
        options: {
            tj: [
                "Аз ҳад зиёд савдо кардан",
                "Кам савдо кардан",
                "Танҳо Demo trading",
                "Танҳо таҳлил кардан"
            ],
            ru: [
                "Слишком большое количество сделок",
                "Слишком мало сделок",
                "Только Demo trading",
                "Только анализ"
            ]
        },
        correct: 0
    },

    {
        q: {
            tj: "Revenge trading чист?",
            ru: "Что такое Revenge Trading?"
        },
        options: {
            tj: [
                "Кӯшиши ҷуброни зарар бо савдои эҳсосотӣ",
                "Trading plan",
                "Demo account",
                "Risk calculator"
            ],
            ru: [
                "Попытка отыграться после убытка эмоциональными сделками",
                "Trading plan",
                "Demo account",
                "Risk calculator"
            ]
        },
        correct: 0
    },

    {
        q: {
            tj: "FOMO дар трейдинг чист?",
            ru: "Что такое FOMO в трейдинге?"
        },
        options: {
            tj: [
                "Тарси аз даст додани имконият",
                "Номи broker",
                "Индикатор",
                "Тип свечи"
            ],
            ru: [
                "Страх упустить возможность",
                "Название брокера",
                "Индикатор",
                "Тип свечи"
            ]
        },
        correct: 0
    },

    {
        q: {
            tj: "Чаро Trading Journal муҳим аст?",
            ru: "Зачем нужен Trading Journal?"
        },
        options: {
            tj: [
                "Барои таҳлил кардани қарорҳо ва хатогиҳо",
                "Барои зиёд кардани leverage",
                "Барои нест кардани risk",
                "Барои кафолати фоида"
            ],
            ru: [
                "Для анализа решений и ошибок",
                "Для увеличения leverage",
                "Для удаления риска",
                "Для гарантии прибыли"
            ]
        },
        correct: 0
    },

    {
        q: {
            tj: "Trading Plan чист?",
            ru: "Что такое Trading Plan?"
        },
        options: {
            tj: [
                "Маҷмӯи қоидаҳои пешакӣ муайяншудаи савдо",
                "Танҳо номи broker",
                "Нархи market",
                "Танҳо индикатор"
            ],
            ru: [
                "Набор заранее определённых торговых правил",
                "Только название брокера",
                "Рыночная цена",
                "Только индикатор"
            ]
        },
        correct: 0
    },

    {
        q: {
            tj: "Price Action чист?",
            ru: "Что такое Price Action?"
        },
        options: {
            tj: [
                "Таҳлили ҳаракати нарх",
                "Пардохти комиссия",
                "Тағйири balance",
                "Номи биржа"
            ],
            ru: [
                "Анализ движения цены",
                "Оплата комиссии",
                "Изменение баланса",
                "Название биржи"
            ]
        },
        correct: 0
    },

    {
        q: {
            tj: "Volatility чист?",
            ru: "Что такое Volatility?"
        },
        options: {
            tj: [
                "Дараҷаи тағйирёбии нарх",
                "Баланс",
                "Spread",
                "Комиссия"
            ],
            ru: [
                "Степень изменения цены",
                "Баланс",
                "Spread",
                "Комиссия"
            ]
        },
        correct: 0
    },

    {
        q: {
            tj: "Liquidity чист?",
            ru: "Что такое Liquidity?"
        },
        options: {
            tj: [
                "Қобилияти харидуфурӯши дороӣ бо таъсири нисбатан кам ба нарх",
                "Танҳо фоида",
                "Танҳо зарар",
                "Leverage"
            ],
            ru: [
                "Способность покупать и продавать актив с относительно небольшим влиянием на цену",
                "Только прибыль",
                "Только убыток",
                "Leverage"
            ]
        },
        correct: 0
    },

    {
        q: {
            tj: "Market Order чист?",
            ru: "Что такое Market Order?"
        },
        options: {
            tj: [
                "Фармоиш барои иҷро дар шароити ҷории бозор",
                "Фармоиши оянда танҳо",
                "Stop Loss",
                "Take Profit"
            ],
            ru: [
                "Ордер на исполнение по текущим рыночным условиям",
                "Только будущий ордер",
                "Stop Loss",
                "Take Profit"
            ]
        },
        correct: 0
    },

    {
        q: {
            tj: "Limit Order чист?",
            ru: "Что такое Limit Order?"
        },
        options: {
            tj: [
                "Фармоиш бо нархи муайян ё беҳтар",
                "Фармоиш барои пӯшидани ҳама чиз",
                "Balance",
                "Spread"
            ],
            ru: [
                "Ордер с заданной ценой или лучше",
                "Ордер на закрытие всего",
                "Balance",
                "Spread"
            ]
        },
        correct: 0
    },

    {
        q: {
            tj: "Stop Order одатан барои чӣ истифода мешавад?",
            ru: "Для чего обычно используют Stop Order?"
        },
        options: {
            tj: [
                "Барои фаъол кардани ордер баъд аз расидан ба сатҳи муайян",
                "Барои нест кардани ҳисоб",
                "Барои ҳисоб кардани spread",
                "Барои иваз кардани забон"
            ],
            ru: [
                "Для активации ордера после достижения определённого уровня",
                "Для удаления счёта",
                "Для расчёта spread",
                "Для смены языка"
            ]
        },
        correct: 0
    },

    {
        q: {
            tj: "Чӣ чиз метавонад қарорҳои трейдерро вайрон кунад?",
            ru: "Что может ухудшить решения трейдера?"
        },
        options: {
            tj: [
                "Эҳсосоти идоранашуда",
                "Trading plan",
                "Journal",
                "Risk management"
            ],
            ru: [
                "Неуправляемые эмоции",
                "Trading plan",
                "Journal",
                "Risk management"
            ]
        },
        correct: 0
    },

    {
        q: {
            tj: "Discipline дар трейдинг чӣ маъно дорад?",
            ru: "Что означает Discipline в трейдинге?"
        },
        options: {
            tj: [
                "Риоя кардани қоидаҳои пешакӣ муайяншуда",
                "Ҳар рӯз савдо кардан",
                "Ҳар савдоро калон кардан",
                "Нодида гирифтани risk"
            ],
            ru: [
                "Соблюдение заранее определённых правил",
                "Торговать каждый день",
                "Увеличивать каждую сделку",
                "Игнорировать риск"
            ]
        },
        correct: 0
    },

    {
        q: {
            tj: "Demo Trading барои чӣ муфид аст?",
            ru: "Чем полезен Demo Trading?"
        },
        options: {
            tj: [
                "Барои машқ кардан бе истифодаи маблағи воқеӣ",
                "Барои кафолати фоида",
                "Барои нест кардани риск дар бозори воқеӣ",
                "Барои гирифтани қарз"
            ],
            ru: [
                "Для практики без использования реальных денег",
                "Для гарантии прибыли",
                "Для удаления риска на реальном рынке",
                "Для получения кредита"
            ]
        },
        correct: 0
    },

    {
        q: {
            tj: "Чаро Stop Loss бояд пешакӣ муайян шавад?",
            ru: "Почему Stop Loss стоит определить заранее?"
        },
        options: {
            tj: [
                "Барои идора кардани risk ва пешгирӣ аз қарорҳои эҳсосотӣ",
                "Барои зиёд кардани leverage",
                "Барои кафолати profit",
                "Барои кам кардани balance"
            ],
            ru: [
                "Для управления риском и снижения эмоциональных решений",
                "Для увеличения leverage",
                "Для гарантии прибыли",
                "Для уменьшения баланса"
            ]
        },
        correct: 0
    },

    {
        q: {
            tj: "Win Rate чист?",
            ru: "Что такое Win Rate?"
        },
        options: {
            tj: [
                "Фоизи савдоҳои фоидаовар",
                "Фоизи leverage",
                "Фоизи spread",
                "Фоизи комиссия"
            ],
            ru: [
                "Процент прибыльных сделок",
                "Процент leverage",
                "Процент spread",
                "Процент комиссии"
            ]
        },
        correct: 0
    },

    {
        q: {
            tj: "Edge дар трейдинг чист?",
            ru: "Что такое Edge в трейдинге?"
        },
        options: {
            tj: [
                "Бартарии омории стратегия дар маҷмӯи зиёди савдо",
                "Танҳо як савдои фоидаовар",
                "Leverage",
                "Spread"
            ],
            ru: [
                "Статистическое преимущество стратегии на серии сделок",
                "Только одна прибыльная сделка",
                "Leverage",
                "Spread"
            ]
        },
        correct: 0
    },

    {
        q: {
            tj: "Expectancy чист?",
            ru: "Что такое Expectancy?"
        },
        options: {
            tj: [
                "Натиҷаи миёнаи интизоршавандаи система дар як савдо",
                "Танҳо win rate",
                "Танҳо spread",
                "Танҳо leverage"
            ],
            ru: [
                "Ожидаемый средний результат системы на сделку",
                "Только win rate",
                "Только spread",
                "Только leverage"
            ]
        },
        correct: 0
    },

    {
        q: {
            tj: "Backtesting чист?",
            ru: "Что такое Backtesting?"
        },
        options: {
            tj: [
                "Санҷидани стратегия дар маълумоти таърихӣ",
                "Савдои воқеӣ",
                "Кушодани broker",
                "Иваз кардани password"
            ],
            ru: [
                "Проверка стратегии на исторических данных",
                "Реальная торговля",
                "Открытие брокера",
                "Смена пароля"
            ]
        },
        correct: 0
    },

    {
        q: {
            tj: "Forward testing чист?",
            ru: "Что такое Forward Testing?"
        },
        options: {
            tj: [
                "Санҷидани стратегия дар маълумоти нави бозор, одатан дар Demo",
                "Танҳо backtest",
                "Пардохти spread",
                "Leverage"
            ],
            ru: [
                "Проверка стратегии на новых рыночных данных, часто на Demo",
                "Только backtest",
                "Оплата spread",
                "Leverage"
            ]
        },
        correct: 0
    },

    {
        q: {
            tj: "Scalping чист?",
            ru: "Что такое Scalping?"
        },
        options: {
            tj: [
                "Савдои кӯтоҳмуддат бо мавқеъҳои зуд кушода ва баста",
                "Сармоягузории бисёрсола",
                "Танҳо Demo",
                "Танҳо таҳлил"
            ],
            ru: [
                "Краткосрочная торговля с быстрым открытием и закрытием позиций",
                "Многолетние инвестиции",
                "Только Demo",
                "Только анализ"
            ]
        },
        correct: 0
    },

    {
        q: {
            tj: "Swing Trading чист?",
            ru: "Что такое Swing Trading?"
        },
        options: {
            tj: [
                "Нигоҳ доштани позиция барои ҳаракатҳои нисбатан калонтар дар давоми рӯзҳо ё ҳафтаҳо",
                "Танҳо чанд сония",
                "Танҳо як свеча",
                "Танҳо cryptocurrency"
            ],
            ru: [
                "Удержание позиции ради более крупных движений в течение дней или недель",
                "Только несколько секунд",
                "Только одна свеча",
                "Только cryptocurrency"
            ]
        },
        correct: 0
    },

    {
        q: {
            tj: "Day Trading чист?",
            ru: "Что такое Day Trading?"
        },
        options: {
            tj: [
                "Кушодан ва бастани савдоҳо дар дохили як рӯзи савдо",
                "Нигоҳ доштани позиция солҳо",
                "Танҳо сармоягузорӣ",
                "Танҳо Demo"
            ],
            ru: [
                "Открытие и закрытие сделок в пределах торгового дня",
                "Удержание позиции годами",
                "Только инвестиции",
                "Только Demo"
            ]
        },
        correct: 0
    },

    {
        q: {
            tj: "Market Structure чист?",
            ru: "Что такое Market Structure?"
        },
        options: {
            tj: [
                "Тартиби High ва Low-ҳои бозор",
                "Танҳо spread",
                "Танҳо volume",
                "Номи broker"
            ],
            ru: [
                "Структура High и Low рынка",
                "Только spread",
                "Только volume",
                "Название брокера"
            ]
        },
        correct: 0
    },

    {
        q: {
            tj: "Consolidation чист?",
            ru: "Что такое Consolidation?"
        },
        options: {
            tj: [
                "Ҳаракати нисбатан паҳлӯӣ дар диапазон",
                "Trend-и қавӣ",
                "Stop Loss",
                "Take Profit"
            ],
            ru: [
                "Боковое движение цены в диапазоне",
                "Сильный тренд",
                "Stop Loss",
                "Take Profit"
            ]
        },
        correct: 0
    },

    {
        q: {
            tj: "Gap чист?",
            ru: "Что такое Gap?"
        },
        options: {
            tj: [
                "Фарқияти намоёни нарх байни ду нуқтаи савдо",
                "Spread",
                "Leverage",
                "Commission"
            ],
            ru: [
                "Заметный разрыв цены между двумя точками торговли",
                "Spread",
                "Leverage",
                "Commission"
            ]
        },
        correct: 0
    },

    {
        q: {
            tj: "Volume дар таҳлил чиро нишон дода метавонад?",
            ru: "Что может показывать Volume?"
        },
        options: {
            tj: [
                "Фаъолияти савдо дар бозор",
                "Баланс",
                "Leverage",
                "Password"
            ],
            ru: [
                "Торговую активность рынка",
                "Баланс",
                "Leverage",
                "Password"
            ]
        },
        correct: 0
    },

    {
        q: {
            tj: "Liquidity Zone чист?",
            ru: "Что такое Liquidity Zone?"
        },
        options: {
            tj: [
                "Минтақае, ки фармоишҳо ва фаъолият метавонанд ҷамъ шаванд",
                "Танҳо balance",
                "Танҳо commission",
                "Номи broker"
            ],
            ru: [
                "Зона, где может концентрироваться ликвидность и ордера",
                "Только balance",
                "Только commission",
                "Название брокера"
            ]
        },
        correct: 0
    },

    {
        q: {
            tj: "Чаро як савдои алоҳида натиҷаи стратегияро муайян намекунад?",
            ru: "Почему одна сделка не определяет качество стратегии?"
        },
        options: {
            tj: [
                "Зеро натиҷа бояд дар силсилаи кофии савдоҳо арзёбӣ шавад",
                "Зеро савдо муҳим нест",
                "Зеро Stop Loss вуҷуд надорад",
                "Зеро leverage муҳимтар аст"
            ],
            ru: [
                "Потому что систему оценивают на серии достаточного числа сделок",
                "Потому что сделки не важны",
                "Потому что нет Stop Loss",
                "Потому что leverage важнее"
            ]
        },
        correct: 0
    },

    {
        q: {
            tj: "Чӣ тавр эҳсосотро беҳтар идора кардан мумкин аст?",
            ru: "Как лучше управлять эмоциями?"
        },
        options: {
            tj: [
                "Бо қоидаҳои пешакӣ, risk-и муайян ва journal",
                "Бо зиёд кардани позиция",
                "Бо revenge trading",
                "Бо FOMO"
            ],
            ru: [
                "С заранее заданными правилами, риском и журналом",
                "Увеличением позиции",
                "Revenge trading",
                "FOMO"
            ]
        },
        correct: 0
    },

    {
        q: {
            tj: "Risk of Ruin ба чӣ вобаста аст?",
            ru: "От чего зависит Risk of Ruin?"
        },
        options: {
            tj: [
                "Аз risk per trade, edge, win/loss distribution ва дигар омилҳо",
                "Танҳо аз номи broker",
                "Танҳо аз график",
                "Танҳо аз забон"
            ],
            ru: [
                "От risk per trade, edge, распределения результатов и других факторов",
                "Только от брокера",
                "Только от графика",
                "Только от языка"
            ]
        },
        correct: 0
    },

    {
        q: {
            tj: "Кадом чиз метавонад risk-ро зиёд кунад?",
            ru: "Что может увеличить риск?"
        },
        options: {
            tj: [
                "Position-и аз ҳад калон",
                "Stop Loss",
                "Journal",
                "Demo account"
            ],
            ru: [
                "Слишком большой размер позиции",
                "Stop Loss",
                "Journal",
                "Demo account"
            ]
        },
        correct: 0
    },

    {
        q: {
            tj: "Чаро Revenge Trading хатарнок аст?",
            ru: "Почему Revenge Trading опасен?"
        },
        options: {
            tj: [
                "Зеро қарорҳо аз эҳсосот меоянд, на аз системаи санҷидашуда",
                "Зеро spread кам мешавад",
                "Зеро market баста мешавад",
                "Зеро chart нест мешавад"
            ],
            ru: [
                "Потому что решения принимаются эмоциями, а не проверенной системой",
                "Потому что spread уменьшается",
                "Потому что рынок закрывается",
                "Потому что график исчезает"
            ]
        },
        correct: 0
    },

    {
        q: {
            tj: "Чӣ бояд пеш аз Entry маълум бошад?",
            ru: "Что желательно знать до Entry?"
        },
        options: {
            tj: [
                "Entry, Stop Loss, Take Profit ва risk",
                "Танҳо номи broker",
                "Танҳо leverage",
                "Танҳо баланс"
            ],
            ru: [
                "Entry, Stop Loss, Take Profit и риск",
                "Только брокера",
                "Только leverage",
                "Только баланс"
            ]
        },
        correct: 0
    },

    {
        q: {
            tj: "Trading Checklist барои чӣ лозим аст?",
            ru: "Зачем нужен Trading Checklist?"
        },
        options: {
            tj: [
                "Барои санҷидани шартҳои савдо пеш аз Entry",
                "Барои зиёд кардани leverage",
                "Барои кафолати profit",
                "Барои нест кардани spread"
            ],
            ru: [
                "Для проверки условий сделки перед Entry",
                "Для увеличения leverage",
                "Для гарантии прибыли",
                "Для удаления spread"
            ]
        },
        correct: 0
    },

    {
        q: {
            tj: "Чаро Demo Trading бояд ҷиддӣ гирифта шавад?",
            ru: "Почему Demo Trading стоит воспринимать серьёзно?"
        },
        options: {
            tj: [
                "Барои санҷидани рафтор ва риояи қоидаҳо пеш аз risk кардани маблағи воқеӣ",
                "Барои кафолати profit",
                "Барои зиёд кардани leverage",
                "Барои бурдани lottery"
            ],
            ru: [
                "Чтобы проверить поведение и соблюдение правил до риска реальными деньгами",
                "Для гарантии прибыли",
                "Для увеличения leverage",
                "Для участия в лотерее"
            ]
        },
        correct: 0
    },

    {
        q: {
            tj: "Кадом муносибат ба омӯзиш дурусттар аст?",
            ru: "Какой подход к обучению наиболее практичен?"
        },
        options: {
            tj: [
                "Омӯзиш → Demo → Journal → таҳлил → такмил",
                "Пул гузоштан → савдо кардан → баъд омӯзиш",
                "Танҳо сигналҳо",
                "Танҳо видео тамошо кардан"
            ],
            ru: [
                "Обучение → Demo → Journal → анализ → улучшение",
                "Внести деньги → торговать → потом учиться",
                "Только сигналы",
                "Только смотреть видео"
            ]
        },
        correct: 0
    },

    {
        q: {
            tj: "Чаро signal бе контекст метавонад хатарнок бошад?",
            ru: "Почему сигнал без контекста может быть опасен?"
        },
        options: {
            tj: [
                "Зеро trader сабаб, risk ва шароити воридшавиро намедонад",
                "Зеро signal ҳамеша дуруст аст",
                "Зеро chart вуҷуд надорад",
                "Зеро balance нест"
            ],
            ru: [
                "Потому что трейдер может не знать причины, риска и условий входа",
                "Потому что сигнал всегда правильный",
                "Потому что нет графика",
                "Потому что нет баланса"
            ]
        },
        correct: 0
    },

    {
        q: {
            tj: "Чӣ чиз бояд дар Trading Journal бошад?",
            ru: "Что полезно записывать в Trading Journal?"
        },
        options: {
            tj: [
                "Entry, Exit, risk, результат ва сабаби савдо",
                "Танҳо profit",
                "Танҳо symbol",
                "Танҳо broker"
            ],
            ru: [
                "Entry, Exit, риск, результат и причину сделки",
                "Только profit",
                "Только symbol",
                "Только брокера"
            ]
        },
        correct: 0
    },

    {
        q: {
            tj: "Чӣ тавр strategy-ро беҳтар кардан мумкин аст?",
            ru: "Как улучшать стратегию?"
        },
        options: {
            tj: [
                "Бо маълумот, backtest, forward test ва journal",
                "Бо зиёд кардани risk",
                "Бо revenge trading",
                "Бо иваз кардани broker ҳар рӯз"
            ],
            ru: [
                "С помощью данных, backtest, forward test и журнала",
                "Увеличением риска",
                "Revenge trading",
                "Сменой брокера каждый день"
            ]
        },
        correct: 0
    },

    {
        q: {
            tj: "Чӣ бояд ҳангоми loss анҷом дода шавад?",
            ru: "Что делать после убытка?"
        },
        options: {
            tj: [
                "Сабабро таҳлил карда, мувофиқи plan амал кардан",
                "Дарҳол position-ро калон кардан",
                "Revenge trading",
                "Қоидаҳоро бекор кардан"
            ],
            ru: [
                "Проанализировать причину и следовать плану",
                "Сразу увеличить позицию",
                "Revenge trading",
                "Отменить правила"
            ]
        },
        correct: 0
    },

    {
        q: {
            tj: "Кадом чиз барои trader муҳим аст?",
            ru: "Что важно для трейдера?"
        },
        options: {
            tj: [
                "Система, риск, статистика ва интизом",
                "Танҳо lucky",
                "Танҳо leverage",
                "Танҳо сигнал"
            ],
            ru: [
                "Система, риск, статистика и дисциплина",
                "Только удача",
                "Только leverage",
                "Только сигнал"
            ]
        },
        correct: 0
    },

    {
        q: {
            tj: "Чаро '100% сигнали дақиқ' бояд бо эҳтиёт қабул шавад?",
            ru: "Почему обещания '100% точных сигналов' стоит воспринимать осторожно?"
        },
        options: {
            tj: [
                "Зеро натиҷаҳои бозор бо номуайянӣ ва риск алоқаманданд",
                "Зеро ҳама signal-ҳо scam мебошанд",
                "Зеро Forex вуҷуд надорад",
                "Зеро chart кор намекунад"
            ],
            ru: [
                "Потому что рыночные результаты связаны с неопределённостью и риском",
                "Потому что все сигналы являются scam",
                "Потому что Forex не существует",
                "Потому что график не работает"
            ]
        },
        correct: 0
    },

    {
        q: {
            tj: "Чӣ гуна trader метавонад discipline созад?",
            ru: "Как трейдер может развивать дисциплину?"
        },
        options: {
            tj: [
                "Бо checklist, trading plan ва journal",
                "Бо зиёд кардани савдо",
                "Бо нодида гирифтани loss",
                "Бо FOMO"
            ],
            ru: [
                "С помощью checklist, trading plan и journal",
                "Увеличением количества сделок",
                "Игнорированием убытков",
                "FOMO"
            ]
        },
        correct: 0
    },

    {
        q: {
            tj: "Чаро 'risk first' муҳим аст?",
            ru: "Почему принцип 'risk first' важен?"
        },
        options: {
            tj: [
                "Зеро ҳифзи сармоя барои идомаи омӯзиш ва савдо муҳим аст",
                "Зеро profit кафолат мешавад",
                "Зеро loss ғайриимкон мешавад",
                "Зеро leverage зиёд мешавад"
            ],
            ru: [
                "Потому что сохранение капитала важно для продолжения обучения и торговли",
                "Потому что прибыль гарантирована",
                "Потому что убыток становится невозможным",
                "Потому что leverage увеличивается"
            ]
        },
        correct: 0
    }
];


/* =========================================================
   DOM HELPERS
   ========================================================= */

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

function safeText(element, value) {
    if (element) element.textContent = value;
}


/* =========================================================
   LANGUAGE SYSTEM
   ========================================================= */

function t(key) {
    return I18N[APP.lang]?.[key] || I18N.ru[key] || key;
}

function applyLanguage() {

    document.documentElement.lang = APP.lang;

    $$("[data-i18n]").forEach(el => {

        const key = el.dataset.i18n;

        if (I18N[APP.lang][key]) {
            el.textContent = I18N[APP.lang][key];
        }

    });

    $$("[data-i18n-placeholder]").forEach(el => {

        const key = el.dataset.i18nPlaceholder;

        if (I18N[APP.lang][key]) {
            el.placeholder = I18N[APP.lang][key];
        }

    });

    const button = $("#languageToggle");

    if (button) {
        button.textContent =
            APP.lang === "tj" ? "RU" : "TJ";
    }

    renderCourses();
    renderQuiz();

    localStorage.setItem(
        "tradeAcademyLang",
        APP.lang
    );
}


function toggleLanguage() {

    APP.lang = APP.lang === "tj" ? "ru" : "tj";

    applyLanguage();

    showToast(
        APP.lang === "tj"
            ? "Забон: тоҷикӣ"
            : "Язык: русский"
    );
}


/* =========================================================
   THEME
   ========================================================= */

function applyTheme() {

    document.documentElement.dataset.theme =
        APP.theme;

    const button = $("#themeToggle");

    if (button) {
        button.textContent =
            APP.theme === "dark" ? "☀️" : "🌙";
    }

    localStorage.setItem(
        "tradeAcademyTheme",
        APP.theme
    );
}


function toggleTheme() {

    APP.theme =
        APP.theme === "dark"
            ? "light"
            : "dark";

    applyTheme();
}


/* =========================================================
   COURSES
   ========================================================= */

function renderCourses() {

    const container =
        $(".course-grid");

    if (!container) return;

    container.innerHTML = "";

    COURSES.forEach(course => {

        const completed =
            Number(APP.progress[course.id] || 0);

        const percentage =
            Math.min(
                100,
                Math.round(
                    completed /
                    course.lessons *
                    100
                )
            );

        const level =
            course.level === "beginner"
                ? t("beginner")
                : course.level === "intermediate"
                    ? t("intermediate")
                    : t("advanced");

        const card =
            document.createElement("article");

        card.className = "course-card";

        card.innerHTML = `
            <div class="course-icon">
                ${course.icon}
            </div>

            <div class="course-body">

                <div class="course-meta">
                    <span>${level}</span>
                    <span>${course.lessons} ${t("lessons")}</span>
                </div>

                <h3>
                    ${course.title[APP.lang]}
                </h3>

                <p>
                    ${course.description[APP.lang]}
                </p>

                <div class="course-progress">
                    <div class="progress-bar">
                        <span style="width:${percentage}%"></span>
                    </div>

                    <small>
                        ${percentage}% ${t("completed")}
                    </small>
                </div>

                <button
                    class="btn btn-primary course-open"
                    data-course="${course.id}"
                >
                    ${t("startLearning")}
                </button>

            </div>
        `;

        container.appendChild(card);
    });

    $$(".course-open").forEach(button => {

        button.addEventListener(
            "click",
            () => openCourse(button.dataset.course)
        );

    });
}


/* =========================================================
   COURSE OPEN
   ========================================================= */

function openCourse(courseId) {

    const course =
        COURSES.find(c => c.id === courseId);

    if (!course) return;

    const section =
        $("#academy");

    if (section) {
        section.scrollIntoView({
            behavior: "smooth"
        });
    }

    const lessonView =
        $("#lessonView");

    if (lessonView) {

        lessonView.classList.remove("hidden");

        lessonView.innerHTML = `

            <div class="lesson-card">

                <div class="lesson-card-head">

                    <div class="course-icon">
                        ${course.icon}
                    </div>

                    <div>
                        <span class="eyebrow">
                            ${course.level.toUpperCase()}
                        </span>

                        <h2>
                            ${course.title[APP.lang]}
                        </h2>
                    </div>

                </div>

                <p>
                    ${course.description[APP.lang]}
                </p>

                <div class="lesson-content">

                    <h3>
                        ${APP.lang === "tj"
                            ? "Чӣ меомӯзӣ?"
                            : "Что ты изучишь?"}
                    </h3>

                    <ul>
                        <li>
                            ${APP.lang === "tj"
                                ? "Фаҳмиши асосии мавзӯъ"
                                : "Базовое понимание темы"}
                        </li>

                        <li>
                            ${APP.lang === "tj"
                                ? "Намунаҳои практикӣ"
                                : "Практические примеры"}
                        </li>

                        <li>
                            ${APP.lang === "tj"
                                ? "Қоидаҳои асосӣ"
                                : "Основные правила"}
                        </li>

                        <li>
                            ${APP.lang === "tj"
                                ? "Машқи Demo"
                                : "Demo практика"}
                        </li>
                    </ul>

                    <button
                        class="btn btn-primary"
                        id="completeLessonBtn"
                    >
                        ✓ ${
                            APP.lang === "tj"
                                ? "Дарсро анҷом додам"
                                : "Урок завершён"
                        }
                    </button>

                </div>

            </div>
        `;

        $("#completeLessonBtn")
            ?.addEventListener(
                "click",
                () => completeLesson(courseId)
            );
    }
}


function completeLesson(courseId) {

    APP.progress[courseId] =
        Math.min(
            COURSES.find(c => c.id === courseId).lessons,
            Number(APP.progress[courseId] || 0) + 1
        );

    localStorage.setItem(
        "tradeAcademyProgress",
        JSON.stringify(APP.progress)
    );

    renderCourses();
    renderProgress();

    showToast(
        APP.lang === "tj"
            ? "Дарс анҷом ёфт! 🎉"
            : "Урок завершён! 🎉"
    );
}


/* =========================================================
   DEMO MARKET
   ========================================================= */

const MARKET = [

    {
        symbol: "EUR/USD",
        price: 1.1728,
        volatility: 0.0009
    },

    {
        symbol: "GBP/USD",
        price: 1.3425,
        volatility: 0.0012
    },

    {
        symbol: "USD/JPY",
        price: 148.62,
        volatility: 0.09
    },

    {
        symbol: "XAU/USD",
        price: 3752.4,
        volatility: 3.8
    },

    {
        symbol: "BTC/USD",
        price: 113842,
        volatility: 850
    }
];


function renderMarket() {

    const container =
        $(".market-strip");

    if (!container) return;

    container.innerHTML = "";

    MARKET.forEach(asset => {

        const movement =
            (Math.random() - 0.5) *
            asset.volatility;

        asset.price += movement;

        const change =
            movement >= 0
                ? "+" + movement.toFixed(
                    asset.symbol === "BTC/USD" ? 0 : 4
                )
                : movement.toFixed(
                    asset.symbol === "BTC/USD" ? 0 : 4
                );

        const card =
            document.createElement("div");

        card.className = "market-card";

        card.innerHTML = `

            <div class="market-symbol">
                ${asset.symbol}
            </div>

            <div class="market-price">
                ${formatPrice(
                    asset.price,
                    asset.symbol
                )}
            </div>

            <div class="market-change ${
                movement >= 0
                    ? "positive"
                    : "negative"
            }">
                ${change}
            </div>
        `;

        container.appendChild(card);
    });
}


function formatPrice(price, symbol) {

    if (symbol === "BTC/USD") {
        return price.toFixed(0);
    }

    if (symbol === "XAU/USD") {
        return price.toFixed(2);
    }

    if (symbol === "USD/JPY") {
        return price.toFixed(2);
    }

    return price.toFixed(4);
}


/* =========================================================
   CANVAS TRADING CHART
   ========================================================= */

function initChart() {

    const canvas =
        $("#tradingChart");

    if (!canvas) return;

    const ctx =
        canvas.getContext("2d");

    function resize() {

        const rect =
            canvas.getBoundingClientRect();

        const dpr =
            window.devicePixelRatio || 1;

        canvas.width =
            rect.width * dpr;

        canvas.height =
            rect.height * dpr;

        ctx.scale(dpr, dpr);

        drawChart(
            ctx,
            rect.width,
            rect.height
        );
    }

    function drawChart(ctx, width, height) {

        ctx.clearRect(
            0,
            0,
            width,
            height
        );

        const candles = [];

        let price = 100;

        for (
            let i = 0;
            i < 65;
            i++
        ) {

            const open = price;

            const movement =
                (Math.random() - 0.47) * 2.4;

            const close =
                open + movement;

            const high =
                Math.max(open, close) +
                Math.random() * 1.4;

            const low =
                Math.min(open, close) -
                Math.random() * 1.4;

            candles.push({
                open,
                close,
                high,
                low
            });

            price = close;
        }

        const min =
            Math.min(
                ...candles.map(c => c.low)
            );

        const max =
            Math.max(
                ...candles.map(c => c.high)
            );

        const padding = 28;

        const chartHeight =
            height - padding * 2;

        const chartWidth =
            width - padding * 2;

        const step =
            chartWidth / candles.length;

        /* grid */

        ctx.lineWidth = 1;
        ctx.strokeStyle =
            "rgba(255,255,255,.07)";

        for (
            let i = 0;
            i <= 5;
            i++
        ) {

            const y =
                padding +
                chartHeight *
                i /
                5;

            ctx.beginPath();

            ctx.moveTo(
                padding,
                y
            );

            ctx.lineTo(
                width - padding,
                y
            );

            ctx.stroke();
        }

        /* candles */

        candles.forEach(
            (candle, index) => {

                const x =
                    padding +
                    index * step +
                    step / 2;

                const mapY =
                    value =>
                        padding +
                        (
                            max - value
                        ) /
                        (
                            max - min
                        ) *
                        chartHeight;

                const openY =
                    mapY(candle.open);

                const closeY =
                    mapY(candle.close);

                const highY =
                    mapY(candle.high);

                const lowY =
                    mapY(candle.low);

                const bullish =
                    candle.close >=
                    candle.open;

                ctx.strokeStyle =
                    bullish
                        ? "#22c55e"
                        : "#ef4444";

                ctx.fillStyle =
                    bullish
                        ? "#22c55e"
                        : "#ef4444";

                ctx.beginPath();

                ctx.moveTo(
                    x,
                    highY
                );

                ctx.lineTo(
                    x,
                    lowY
                );

                ctx.stroke();

                const bodyTop =
                    Math.min(
                        openY,
                        closeY
                    );

                const bodyHeight =
                    Math.max(
                        2,
                        Math.abs(
                            closeY -
                            openY
                        )
                    );

                ctx.fillRect(
                    x - step * .28,
                    bodyTop,
                    step * .56,
                    bodyHeight
                );
            }
        );
    }

    window.addEventListener(
        "resize",
        resize
    );

    resize();

    setInterval(
        resize,
        5000
    );
}


/* =========================================================
   RISK CALCULATOR
   ========================================================= */

function initRiskCalculator() {

    const button =
        $("#calculateRisk");

    if (!button) return;

    button.addEventListener(
        "click",
        calculateRisk
    );
}


function calculateRisk() {

    const balance =
        Number(
            $("#riskBalance")?.value || 0
        );

    const riskPercent =
        Number(
            $("#riskPercent")?.value || 0
        );

    const entry =
        Number(
            $("#riskEntry")?.value || 0
        );

    const stop =
        Number(
            $("#riskStop")?.value || 0
        );

    if (
        balance <= 0 ||
        riskPercent <= 0 ||
        entry <= 0 ||
        stop <= 0
    ) {

        showToast(
            APP.lang === "tj"
                ? "Ҳамаи майдонҳоро дуруст пур кун."
                : "Заполни все поля корректно."
        );

        return;
    }

    const riskMoney =
        balance *
        riskPercent /
        100;

    const distance =
        Math.abs(
            entry - stop
        );

    const positionSize =
        riskMoney /
        distance;

    const result =
        $("#riskResult");

    if (!result) return;

    result.innerHTML = `

        <div class="result-item">
            <span>${t("riskAmount")}</span>
            <strong>
                $${riskMoney.toFixed(2)}
            </strong>
        </div>

        <div class="result-item">
            <span>
                ${APP.lang === "tj"
                    ? "Фосилаи SL"
                    : "Расстояние до SL"}
            </span>
            <strong>
                ${distance.toFixed(5)}
            </strong>
        </div>

        <div class="result-item">
            <span>
                ${APP.lang === "tj"
                    ? "Ҳаҷми ҳисобшуда"
                    : "Расчётный размер"}
            </span>
            <strong>
                ${positionSize.toFixed(4)}
            </strong>
        </div>

    `;
}


/* =========================================================
   TRADING TERMINAL
   ========================================================= */

function initTerminal() {

    const buy =
        $("#buyButton");

    const sell =
        $("#sellButton");

    buy?.addEventListener(
        "click",
        () => executeDemoTrade("BUY")
    );

    sell?.addEventListener(
        "click",
        () => executeDemoTrade("SELL")
    );

    updateBalanceUI();
}


function executeDemoTrade(direction) {

    const symbol =
        $("#terminalSymbol")?.value ||
        "EUR/USD";

    const asset =
        MARKET.find(
            item => item.symbol === symbol
        ) ||
        MARKET[0];

    const amount =
        Number(
            $("#tradeAmount")?.value || 100
        );

    if (
        amount <= 0 ||
        amount > APP.balance
    ) {

        showToast(
            APP.lang === "tj"
                ? "Маблағ нодуруст аст."
                : "Некорректная сумма."
        );

        return;
    }

    const position = {

        id:
            Date.now(),

        symbol,

        direction,

        amount,

        entry:
            asset.price,

        openedAt:
            new Date().toISOString()
    };

    APP.positions.push(position);

    APP.balance -= amount;

    localStorage.setItem(
        "tradeAcademyPositions",
        JSON.stringify(APP.positions)
    );

    localStorage.setItem(
        "tradeAcademyBalance",
        APP.balance
    );

    updateBalanceUI();
    renderPositions();

    showToast(
        `${direction} ${symbol} — DEMO`
    );
}


function updateBalanceUI() {

    const balance =
        $("#demoBalance");

    if (balance) {
        balance.textContent =
            "$" +
            APP.balance.toFixed(2);
    }
}


function renderPositions() {

    const container =
        $(".position-table");

    if (!container) return;

    if (!APP.positions.length) {

        container.innerHTML = `
            <div class="empty-state">
                ${t("noTrades")}
            </div>
        `;

        return;
    }

    container.innerHTML =
        APP.positions.map(
            position => `

                <div class="position-row">

                    <span>
                        ${position.symbol}
                    </span>

                    <span>
                        ${position.direction}
                    </span>

                    <span>
                        $${position.amount.toFixed(2)}
                    </span>

                    <button
                        class="btn btn-small close-position"
                        data-id="${position.id}"
                    >
                        ${APP.lang === "tj"
                            ? "Пӯшидан"
                            : "Закрыть"}
                    </button>

                </div>
            `
        ).join("");

    $$(".close-position")
        .forEach(button => {

            button.addEventListener(
                "click",
                () =>
                    closePosition(
                        Number(
                            button.dataset.id
                        )
                    )
            );

        });
}


function closePosition(id) {

    const index =
        APP.positions.findIndex(
            p => p.id === id
        );

    if (index === -1) return;

    const position =
        APP.positions[index];

    const asset =
        MARKET.find(
            item =>
                item.symbol ===
                position.symbol
        ) ||
        MARKET[0];

    const directionMultiplier =
        position.direction === "BUY"
            ? 1
            : -1;

    const priceDifference =
        asset.price -
        position.entry;

    const pnl =
        priceDifference *
        directionMultiplier *
        (
            position.amount /
            position.entry
        );

    APP.balance +=
        position.amount +
        pnl;

    APP.positions.splice(
        index,
        1
    );

    localStorage.setItem(
        "tradeAcademyPositions",
        JSON.stringify(APP.positions)
    );

    localStorage.setItem(
        "tradeAcademyBalance",
        APP.balance
    );

    updateBalanceUI();
    renderPositions();

    showToast(
        `${pnl >= 0 ? "+" : ""}$${pnl.toFixed(2)}`
    );
}


/* =========================================================
   JOURNAL
   ========================================================= */

function initJournal() {

    const form =
        $("#journalForm");

    if (!form) return;

    form.addEventListener(
        "submit",
        event => {

            event.preventDefault();

            const trade = {

                id: Date.now(),

                date:
                    $("#journalDate")?.value ||
                    new Date()
                        .toISOString()
                        .slice(0, 10),

                symbol:
                    $("#journalSymbol")?.value ||
                    "",

                direction:
                    $("#journalDirection")?.value ||
                    "BUY",

                result:
                    Number(
                        $("#journalResult")?.value ||
                        0
                    ),

                notes:
                    $("#journalNotes")?.value ||
                    ""
            };

            APP.journal.unshift(trade);

            localStorage.setItem(
                "tradeAcademyJournal",
                JSON.stringify(APP.journal)
            );

            form.reset();

            renderJournal();

            showToast(
                t("saved")
            );
        }
    );

    renderJournal();
}


function renderJournal() {

    const container =
        $(".journal-table");

    if (!container) return;

    if (!APP.journal.length) {

        container.innerHTML = `
            <div class="empty-state">
                ${t("noTrades")}
            </div>
        `;

        return;
    }

    container.innerHTML = `

        <div class="data-table-head">

            <span>${t("date")}</span>
            <span>${t("symbol")}</span>
            <span>${t("direction")}</span>
            <span>${t("result")}</span>
            <span></span>

        </div>

        ${APP.journal.map(
            trade => `

                <div class="data-table-row">

                    <span>
                        ${trade.date}
                    </span>

                    <span>
                        ${trade.symbol}
                    </span>

                    <span>
                        ${trade.direction}
                    </span>

                    <span class="${
                        trade.result >= 0
                            ? "positive"
                            : "negative"
                    }">
                        ${
                            trade.result >= 0
                                ? "+"
                                : ""
                        }${trade.result}
                    </span>

                    <button
                        class="btn btn-small delete-trade"
                        data-id="${trade.id}"
                    >
                        ×
                    </button>

                </div>
            `
        ).join("")}

    `;

    $$(".delete-trade")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    APP.journal =
                        APP.journal.filter(
                            trade =>
                                trade.id !==
                                Number(
                                    button.dataset.id
                                )
                        );

                    localStorage.setItem(
                        "tradeAcademyJournal",
                        JSON.stringify(
                            APP.journal
                        )
                    );

                    renderJournal();

                    showToast(
                        t("deleted")
                    );
                }
            );

        });
}


/* =========================================================
   TRADING PLAN
   ========================================================= */

function initTradingPlan() {

    const form =
        $("#planForm");

    if (!form) return;

    loadPlan();

    form.addEventListener(
        "submit",
        event => {

            event.preventDefault();

            APP.plan = {

                strategy:
                    $("#planStrategy")?.value ||
                    "",

                session:
                    $("#planSession")?.value ||
                    "",

                risk:
                    $("#planRisk")?.value ||
                    "",

                entry:
                    $("#planEntry")?.value ||
                    "",

                exit:
                    $("#planExit")?.value ||
                    "",

                psychology:
                    $("#planPsychology")?.value ||
                    ""
            };

            localStorage.setItem(
                "tradeAcademyPlan",
                JSON.stringify(
                    APP.plan
                )
            );

            showToast(
                t("saved")
            );
        }
    );
}


function loadPlan() {

    const fields = {

        planStrategy:
            APP.plan.strategy,

        planSession:
            APP.plan.session,

        planRisk:
            APP.plan.risk,

        planEntry:
            APP.plan.entry,

        planExit:
            APP.plan.exit,

        planPsychology:
            APP.plan.psychology
    };

    Object.entries(fields)
        .forEach(
            ([id, value]) => {

                const element =
                    document.getElementById(id);

                if (element) {
                    element.value =
                        value || "";
                }

            }
        );
}


/* =========================================================
   QUIZ ENGINE
   ========================================================= */

let quizIndex = 0;
let quizAnswered = false;
let currentQuizScore = 0;


function renderQuiz() {

    const container =
        $(".quiz-shell");

    if (!container) return;

    const question =
        QUIZ[quizIndex];

    if (!question) return;

    quizAnswered = false;

    const total =
        QUIZ.length;

    const progress =
        Math.round(
            (
                quizIndex /
                total
            ) * 100
        );

    container.innerHTML = `

        <div class="quiz-progress">

            <div class="progress-bar">
                <span
                    style="width:${progress}%"
                ></span>
            </div>

            <div class="quiz-progress-text">
                ${quizIndex + 1} / ${total}
            </div>

        </div>

        <div class="quiz-question">

            <span class="eyebrow">
                QUESTION ${quizIndex + 1}
            </span>

            <h3>
                ${question.q[APP.lang]}
            </h3>

        </div>

        <div class="quiz-options">

            ${question.options[APP.lang]
                .map(
                    (option, index) => `

                        <button
                            class="quiz-option"
                            data-answer="${index}"
                        >
                            <span>
                                ${String.fromCharCode(
                                    65 + index
                                )}
                            </span>

                            <strong>
                                ${option}
                            </strong>

                        </button>
                    `
                )
                .join("")}

        </div>

        <div class="quiz-actions">

            <button
                class="btn btn-primary"
                id="nextQuiz"
                disabled
            >
                ${
                    quizIndex === total - 1
                        ? t("finishQuiz")
                        : t("nextQuestion")
                }
            </button>

        </div>
    `;

    $$(".quiz-option")
        .forEach(button => {

            button.addEventListener(
                "click",
                () =>
                    answerQuiz(
                        Number(
                            button.dataset.answer
                        )
                    )
            );

        });

    $("#nextQuiz")
        ?.addEventListener(
            "click",
            nextQuiz
        );
}


function answerQuiz(answer) {

    if (quizAnswered) return;

    quizAnswered = true;

    const question =
        QUIZ[quizIndex];

    const buttons =
        $$(".quiz-option");

    buttons.forEach(
        (button, index) => {

            button.disabled = true;

            if (
                index ===
                question.correct
            ) {
                button.classList.add(
                    "correct"
                );
            }

            if (
                index === answer &&
                answer !==
                question.correct
            ) {
                button.classList.add(
                    "incorrect"
                );
            }

        }
    );

    if (
        answer ===
        question.correct
    ) {

        currentQuizScore++;

        APP.quizScore =
            Math.max(
                APP.quizScore,
                currentQuizScore
            );

        localStorage.setItem(
            "tradeAcademyQuizScore",
            APP.quizScore
        );
    }

    const next =
        $("#nextQuiz");

    if (next) {
        next.disabled = false;
    }
}


function nextQuiz() {

    if (
        quizIndex >=
        QUIZ.length - 1
    ) {

        showQuizResult();

        return;
    }

    quizIndex++;

    renderQuiz();
}


function showQuizResult() {

    const container =
        $(".quiz-shell");

    if (!container) return;

    const percentage =
        Math.round(
            currentQuizScore /
            QUIZ.length *
            100
        );

    container.innerHTML = `

        <div class="quiz-result">

            <div class="result-icon">
                🏆
            </div>

            <h2>
                ${
                    APP.lang === "tj"
                        ? "Тест анҷом ёфт!"
                        : "Тест завершён!"
                }
            </h2>

            <div class="quiz-score">
                ${currentQuizScore}
                /
                ${QUIZ.length}
            </div>

            <p>
                ${percentage}%
            </p>

            <button
                class="btn btn-primary"
                id="restartQuiz"
            >
                ${
                    APP.lang === "tj"
                        ? "Аз нав оғоз кардан"
                        : "Пройти заново"
                }
            </button>

        </div>
    `;

    $("#restartQuiz")
        ?.addEventListener(
            "click",
            () => {

                quizIndex = 0;
                currentQuizScore = 0;

                renderQuiz();
            }
        );

    renderProgress();
}


/* =========================================================
   PROGRESS
   ========================================================= */

function renderProgress() {

    const container =
        $("#progress");

    if (!container) return;

    const totalLessons =
        COURSES.reduce(
            (
                sum,
                course
            ) =>
                sum +
                course.lessons,
            0
        );

    const completedLessons =
        COURSES.reduce(
            (
                sum,
                course
            ) =>
                sum +
                Number(
                    APP.progress[
                        course.id
                    ] || 0
                ),
            0
        );

    const percentage =
        Math.round(
            completedLessons /
            totalLessons *
            100
        );

    const level =
        getLevel(
            completedLessons
        );

    const stats =
        $(".progress-grid");

    if (stats) {

        stats.innerHTML = `

            <div class="stat-card">

                <span>
                    ${
                        APP.lang === "tj"
                            ? "Дарсҳо"
                            : "Уроки"
                    }
                </span>

                <strong>
                    ${completedLessons}
                    /
                    ${totalLessons}
                </strong>

            </div>

            <div class="stat-card">

                <span>
                    ${
                        APP.lang === "tj"
                            ? "Пешрафт"
                            : "Прогресс"
                    }
                </span>

                <strong>
                    ${percentage}%
                </strong>

            </div>

            <div class="stat-card">

                <span>
                    Quiz
                </span>

                <strong>
                    ${APP.quizScore}
                </strong>

            </div>

            <div class="stat-card">

                <span>
                    Level
                </span>

                <strong>
                    ${level}
                </strong>

            </div>
        `;
    }

    renderAchievements(
        completedLessons,
        percentage
    );
}


function getLevel(lessons) {

    if (lessons >= 50)
        return t("level5");

    if (lessons >= 30)
        return t("level4");

    if (lessons >= 15)
        return t("level3");

    if (lessons >= 5)
        return t("level2");

    return t("level1");
}


function renderAchievements(
    lessons,
    percentage
) {

    const container =
        $(".achievement-grid");

    if (!container) return;

    const achievements = [

        {
            icon: "🌱",
            title:
                APP.lang === "tj"
                    ? "Оғоз"
                    : "Старт",
            unlocked:
                lessons >= 1
        },

        {
            icon: "📚",
            title:
                APP.lang === "tj"
                    ? "5 дарс"
                    : "5 уроков",
            unlocked:
                lessons >= 5
        },

        {
            icon: "🔥",
            title:
                APP.lang === "tj"
                    ? "10 дарс"
                    : "10 уроков",
            unlocked:
                lessons >= 10
        },

        {
            icon: "🧠",
            title:
                APP.lang === "tj"
                    ? "25 дарс"
                    : "25 уроков",
            unlocked:
                lessons >= 25
        },

        {
            icon: "🏆",
            title:
                APP.lang === "tj"
                    ? "50 дарс"
                    : "50 уроков",
            unlocked:
                lessons >= 50
        },

        {
            icon: "🎯",
            title:
                APP.lang === "tj"
                    ? "100% пешрафт"
                    : "100% прогресс",
            unlocked:
                percentage >= 100
        }
    ];

    container.innerHTML =
        achievements.map(
            achievement => `

                <div class="
                    achievement-card
                    ${
                        achievement.unlocked
                            ? "unlocked"
                            : "locked"
                    }
                ">

                    <div class="achievement-icon">
                        ${achievement.icon}
                    </div>

                    <strong>
                        ${achievement.title}
                    </strong>

                </div>
            `
        ).join("");
}


/* =========================================================
   MOBILE MENU
   ========================================================= */

function initMobileMenu() {

    const toggle =
        $("#mobileMenuToggle");

    const nav =
        $(".main-nav");

    if (!toggle || !nav) return;

    toggle.addEventListener(
        "click",
        () => {

            nav.classList.toggle(
                "is-open"
            );

            toggle.classList.toggle(
                "is-active"
            );

        }
    );

    $$(".nav-link")
        .forEach(link => {

            link.addEventListener(
                "click",
                () => {

                    nav.classList.remove(
                        "is-open"
                    );

                }
            );

        });
}


/* =========================================================
   SMOOTH NAVIGATION
   ========================================================= */

function initNavigation() {

    $$("a[href^='#']")
        .forEach(link => {

            link.addEventListener(
                "click",
                event => {

                    const id =
                        link.getAttribute(
                            "href"
                        );

                    if (!id || id === "#")
                        return;

                    const target =
                        document.querySelector(
                            id
                        );

                    if (!target) return;

                    event.preventDefault();

                    target.scrollIntoView({
                        behavior:
                            "smooth",
                        block:
                            "start"
                    });

                }
            );

        });
}


/* =========================================================
   TOAST
   ========================================================= */

function showToast(message) {

    let toast =
        $("#toast");

    if (!toast) {

        toast =
            document.createElement(
                "div"
            );

        toast.id =
            "toast";

        document.body.appendChild(
            toast
        );
    }

    toast.textContent =
        message;

    toast.classList.add(
        "show"
    );

    clearTimeout(
        showToast.timer
    );

    showToast.timer =
        setTimeout(
            () => {

                toast.classList.remove(
                    "show"
                );

            },
            2600
        );
}


/* =========================================================
   ACTIVE SECTION OBSERVER
   ========================================================= */

function initSectionObserver() {

    const sections =
        $$("section[id]");

    const links =
        $$(".nav-link");

    if (
        !sections.length ||
        !links.length
    ) return;

    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(
                    entry => {

                        if (
                            !entry.isIntersecting
                        )
                            return;

                        links.forEach(
                            link => {

                                link.classList.toggle(
                                    "is-active",
                                    link.getAttribute(
                                        "href"
                                    ) ===
                                    "#" +
                                    entry.target.id
                                );

                            }
                        );

                    }
                );

            },
            {
                threshold: 0.35
            }
        );

    sections.forEach(
        section =>
            observer.observe(
                section
            )
    );
}


/* =========================================================
   BUTTON EVENTS
   ========================================================= */

function initButtons() {

    $("#languageToggle")
        ?.addEventListener(
            "click",
            toggleLanguage
        );

    $("#themeToggle")
        ?.addEventListener(
            "click",
            toggleTheme
        );

    $("#startLearning")
        ?.addEventListener(
            "click",
            () => {

                $("#academy")
                    ?.scrollIntoView({
                        behavior:
                            "smooth"
                    });

            }
        );

    $("#openTerminal")
        ?.addEventListener(
            "click",
            () => {

                $("#terminal")
                    ?.scrollIntoView({
                        behavior:
                            "smooth"
                    });

            }
        );
}


/* =========================================================
   FOOTER YEAR
   ========================================================= */

function initFooter() {

    const year =
        $("#currentYear");

    if (year) {

        year.textContent =
            new Date()
                .getFullYear();

    }
}


/* =========================================================
   INITIALIZATION
   ========================================================= */

function initApp() {

    applyTheme();

    applyLanguage();

    initButtons();

    initMobileMenu();

    initNavigation();

    initSectionObserver();

    initChart();

    initRiskCalculator();

    initTerminal();

    initJournal();

    initTradingPlan();

    renderPositions();

    renderProgress();

    initFooter();

    setInterval(
        renderMarket,
        3500
    );

    renderMarket();

    console.log(
        "TRADE ACADEMY TJ initialized successfully."
    );
}


/* =========================================================
   START
   ========================================================= */

if (
    document.readyState ===
    "loading"
) {

    document.addEventListener(
        "DOMContentLoaded",
        initApp
    );

} else {

    initApp();

}
