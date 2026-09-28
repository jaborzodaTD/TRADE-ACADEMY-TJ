/* =========================================================
   TRADE ACADEMY
   Authors: JABORZODA and MUZAFARZODA
   RU / TJ
   Complete Quiz Engine
   ========================================================= */

"use strict";

/* =========================================================
   CONFIG
   ========================================================= */

const STORAGE_KEY = "tradeAcademyProgress";
const LANGUAGE_KEY = "tradeAcademyLanguage";

let currentLanguage =
    localStorage.getItem(LANGUAGE_KEY) || "ru";

/* =========================================================
   QUIZ DATABASE
   ========================================================= */

const questions = [

    /* =========================
       1. ОСНОВЫ
       ========================= */

    {
        category: "Основы трейдинга",
        categoryTJ: "Асосҳои трейдинг",

        question: "Что означает BUY в трейдинге?",
        questionTJ: "BUY дар трейдинг чӣ маъно дорад?",

        answers: [
            "Покупка актива",
            "Продажа актива",
            "Закрытие сделки",
            "Установка Stop-Loss"
        ],

        answersTJ: [
            "Харидани актив",
            "Фурӯхтани актив",
            "Пӯшидани муомила",
            "Гузоштани Stop-Loss"
        ],

        correct: 0,

        explanation:
            "BUY означает открытие позиции в расчёте на рост цены.",

        explanationTJ:
            "BUY маънои кушодани позицияро бо интизории боло рафтани нарх дорад."
    },

    {
        category: "Основы трейдинга",
        categoryTJ: "Асосҳои трейдинг",

        question: "Что означает SELL?",
        questionTJ: "SELL чӣ маъно дорад?",

        answers: [
            "Покупку",
            "Продажу",
            "Ожидание",
            "Установку индикатора"
        ],

        answersTJ: [
            "Харид",
            "Фурӯш",
            "Интизор шудан",
            "Гузоштани индикатор"
        ],

        correct: 1,

        explanation:
            "SELL используется, когда трейдер ожидает падения цены.",

        explanationTJ:
            "SELL вақте истифода мешавад, ки трейдер паст шудани нархро интизор аст."
    },

    {
        category: "Основы трейдинга",
        categoryTJ: "Асосҳои трейдинг",

        question: "Что такое торговая позиция?",
        questionTJ: "Позицияи савдо чист?",

        answers: [
            "Открытая сделка на рынке",
            "График",
            "Индикатор",
            "Новости"
        ],

        answersTJ: [
            "Муомилаи кушода дар бозор",
            "График",
            "Индикатор",
            "Хабарҳо"
        ],

        correct: 0,

        explanation:
            "Позиция — это открытая сделка BUY или SELL.",

        explanationTJ:
            "Позиция — ин муомилаи кушодаи BUY ё SELL мебошад."
    },

    /* =========================
       2. RISK MANAGEMENT
       ========================= */

    {
        category: "Risk Management",
        categoryTJ: "Идоракунии хавф",

        question: "Что такое Stop-Loss?",
        questionTJ: "Stop-Loss чист?",

        answers: [
            "Автоматическое ограничение убытка",
            "Увеличение прибыли",
            "Индикатор",
            "Тип графика"
        ],

        answersTJ: [
            "Маҳдуд кардани автоматии зарар",
            "Зиёд кардани фоида",
            "Индикатор",
            "Навъи график"
        ],

        correct: 0,

        explanation:
            "Stop-Loss автоматически закрывает сделку при достижении определённого уровня убытка.",

        explanationTJ:
            "Stop-Loss ҳангоми расидани нарх ба сатҳи муайяни зарар муомиларо автоматӣ мебандад."
    },

    {
        category: "Risk Management",
        categoryTJ: "Идоракунии хавф",

        question: "Что такое Take-Profit?",
        questionTJ: "Take-Profit чист?",

        answers: [
            "Автоматическое закрытие сделки с целью прибыли",
            "Остановка убытка",
            "Индикатор",
            "Новости"
        ],

        answersTJ: [
            "Бастани автоматии муомила дар сатҳи фоида",
            "Қатъ кардани зарар",
            "Индикатор",
            "Хабарҳо"
        ],

        correct: 0,

        explanation:
            "Take-Profit закрывает сделку, когда цена достигает заранее установленной цели.",

        explanationTJ:
            "Take-Profit муомиларо вақте мебандад, ки нарх ба ҳадафи пешакӣ муайяншуда мерасад."
    },

    {
        category: "Risk Management",
        categoryTJ: "Идоракунии хавф",

        question: "Какой риск на одну сделку часто используют начинающие трейдеры?",
        questionTJ: "Трейдерҳои навкор одатан дар як муомила чӣ қадар хавф мегиранд?",

        answers: [
            "1–2% капитала",
            "20–30%",
            "50%",
            "100%"
        ],

        answersTJ: [
            "1–2% аз капитал",
            "20–30%",
            "50%",
            "100%"
        ],

        correct: 0,

        explanation:
            "Консервативный подход часто ограничивает риск одной сделки примерно 1–2% капитала.",

        explanationTJ:
            "Дар усули эҳтиёткорона хавфи як муомила аксар вақт тақрибан 1–2%-и капитал маҳдуд карда мешавад."
    },

    {
        category: "Risk Management",
        categoryTJ: "Идоракунии хавф",

        question: "Почему нельзя открывать слишком большую позицию?",
        questionTJ: "Чаро кушодани позицияи аз ҳад калон хатарнок аст?",

        answers: [
            "Можно быстро потерять большую часть капитала",
            "График станет красивее",
            "Индикаторы исчезнут",
            "Цена перестанет двигаться"
        ],

        answersTJ: [
            "Метавон қисми зиёди капиталро зуд аз даст дод",
            "График зеботар мешавад",
            "Индикаторҳо нопадид мешаванд",
            "Нарх ҳаракат карданро қатъ мекунад"
        ],

        correct: 0,

        explanation:
            "Большой размер позиции увеличивает потенциальный убыток.",

        explanationTJ:
            "Ҳаҷми калони позиция зарари эҳтимолиро зиёд мекунад."
    },

    /* =========================
       3. TECHNICAL ANALYSIS
       ========================= */

    {
        category: "Технический анализ",
        categoryTJ: "Таҳлили техникӣ",

        question: "Что такое Support?",
        questionTJ: "Support чист?",

        answers: [
            "Уровень, где цена может получить поддержку покупателей",
            "Индикатор объёма",
            "Новость",
            "Stop-Loss"
        ],

        answersTJ: [
            "Сатҳе, ки дар он харидорон метавонанд нархро дастгирӣ кунанд",
            "Индикатори ҳаҷм",
            "Хабар",
            "Stop-Loss"
        ],

        correct: 0,

        explanation:
            "Support — область, где покупательский интерес может остановить или замедлить падение цены.",

        explanationTJ:
            "Support — минтақаест, ки талаботи харидорон метавонад пастшавии нархро боздорад ё суст кунад."
    },

    {
        category: "Технический анализ",
        categoryTJ: "Таҳлили техникӣ",

        question: "Что такое Resistance?",
        questionTJ: "Resistance чист?",

        answers: [
            "Уровень, где цена может встретить продавцов",
            "Покупка актива",
            "Размер позиции",
            "Стоп-лосс"
        ],

        answersTJ: [
            "Сатҳе, ки нарх метавонад бо фурӯшандагон рӯ ба рӯ шавад",
            "Харидани актив",
            "Ҳаҷми позиция",
            "Stop-Loss"
        ],

        correct: 0,

        explanation:
            "Resistance — область, где давление продавцов может остановить рост цены.",

        explanationTJ:
            "Resistance — минтақаест, ки фишори фурӯшандагон метавонад болоравии нархро боздорад."
    },

    {
        category: "Технический анализ",
        categoryTJ: "Таҳлили техникӣ",

        question: "Что такое тренд?",
        questionTJ: "Trend чист?",

        answers: [
            "Основное направление движения цены",
            "Размер депозита",
            "Новости",
            "Комиссия брокера"
        ],

        answersTJ: [
            "Самти асосии ҳаракати нарх",
            "Ҳаҷми депозит",
            "Хабарҳо",
            "Комиссияи брокер"
        ],

        correct: 0,

        explanation:
            "Тренд показывает основное направление движения рынка.",

        explanationTJ:
            "Trend самти асосии ҳаракати бозорро нишон медиҳад."
    },

    /* =========================
       4. CANDLE ANALYSIS
       ========================= */

    {
        category: "Свечной анализ",
        categoryTJ: "Таҳлили шамъҳо",

        question: "Что показывает зелёная свеча?",
        questionTJ: "Шамъи сабз чиро нишон медиҳад?",

        answers: [
            "Цена закрылась выше открытия",
            "Цена закрылась ниже открытия",
            "Рынок закрыт",
            "Нет движения"
        ],

        answersTJ: [
            "Нарх болотар аз кушодашавӣ баста шуд",
            "Нарх поёнтар аз кушодашавӣ баста шуд",
            "Бозор баста аст",
            "Ҳаракат вуҷуд надорад"
        ],

        correct: 0,

        explanation:
            "В стандартном представлении зелёная свеча означает рост от открытия к закрытию.",

        explanationTJ:
            "Дар намоиши стандартӣ шамъи сабз нишон медиҳад, ки нарх аз кушодашавӣ то басташавӣ боло рафтааст."
    },

    {
        category: "Свечной анализ",
        categoryTJ: "Таҳлили шамъҳо",

        question: "Что показывает красная свеча?",
        questionTJ: "Шамъи сурх чиро нишон медиҳад?",

        answers: [
            "Цена закрылась ниже открытия",
            "Цена обязательно вырастет",
            "Нет рынка",
            "Прибыль"
        ],

        answersTJ: [
            "Нарх поёнтар аз кушодашавӣ баста шуд",
            "Нарх ҳатман боло меравад",
            "Бозор вуҷуд надорад",
            "Фоида"
        ],

        correct: 0,

        explanation:
            "Красная свеча обычно показывает снижение цены за выбранный период.",

        explanationTJ:
            "Шамъи сурх одатан паст шудани нархро дар давраи интихобшуда нишон медиҳад."
    },

    {
        category: "Свечной анализ",
        categoryTJ: "Таҳлили шамъҳо",

        question: "Что такое тело свечи?",
        questionTJ: "Тани шамъ чист?",

        answers: [
            "Расстояние между ценой открытия и закрытия",
            "Максимум рынка",
            "Минимум рынка",
            "Объём"
        ],

        answersTJ: [
            "Фосила байни нархи кушодашавӣ ва басташавӣ",
            "Максимуми бозор",
            "Минимуми бозор",
            "Ҳаҷм"
        ],

        correct: 0,

        explanation:
            "Тело свечи показывает разницу между Open и Close.",

        explanationTJ:
            "Тани шамъ фарқи байни Open ва Close-ро нишон медиҳад."
    },

    /* =========================
       5. TRADING LOGIC
       ========================= */

    {
        category: "Торговая логика",
        categoryTJ: "Мантиқи савдо",

        question: "Что важнее перед входом в сделку?",
        questionTJ: "Пеш аз ворид шудан ба муомила чӣ муҳимтар аст?",

        answers: [
            "Торговый план",
            "Эмоции",
            "Случайность",
            "Совет друга"
        ],

        answersTJ: [
            "Нақшаи савдо",
            "Эҳсосот",
            "Тасодуф",
            "Маслиҳати дӯст"
        ],

        correct: 0,

        explanation:
            "Торговый план помогает определить точку входа, риск и выход.",

        explanationTJ:
            "Нақшаи савдо барои муайян кардани нуқтаи воридшавӣ, хавф ва баромад кӯмак мекунад."
    },

    {
        category: "Торговая логика",
        categoryTJ: "Мантиқи савдо",

        question: "Что нужно сделать после серии убыточных сделок?",
        questionTJ: "Пас аз якчанд муомилаи зараровар чӣ бояд кард?",

        answers: [
            "Остановиться и проанализировать ошибки",
            "Увеличить лот",
            "Открыть ещё больше сделок",
            "Торговать без Stop-Loss"
        ],

        answersTJ: [
            "Истодан ва хатоҳоро таҳлил кардан",
            "Ҳаҷми лотро зиёд кардан",
            "Муомилаҳои бештар кушодан",
            "Бе Stop-Loss савдо кардан"
        ],

        correct: 0,

        explanation:
            "После серии убытков важно сделать паузу и провести анализ.",

        explanationTJ:
            "Пас аз силсилаи зарарҳо таваққуф карда, сабаби хатоҳоро таҳлил кардан муҳим аст."
    },

    {
        category: "Торговая логика",
        categoryTJ: "Мантиқи савдо",

        question: "Что такое Risk/Reward?",
        questionTJ: "Risk/Reward чист?",

        answers: [
            "Соотношение потенциального риска и прибыли",
            "Индикатор",
            "Комиссия",
            "Тип брокера"
        ],

        answersTJ: [
            "Таносуби хавфи эҳтимолӣ ва фоида",
            "Индикатор",
            "Комиссия",
            "Навъи брокер"
        ],

        correct: 0,

        explanation:
            "Risk/Reward сравнивает потенциальный убыток с потенциальной прибылью.",

        explanationTJ:
            "Risk/Reward зарари эҳтимолиро бо фоидаи эҳтимолӣ муқоиса мекунад."
    },

    /* =========================
       6. PSYCHOLOGY
       ========================= */

    {
        category: "Психология",
        categoryTJ: "Психология",

        question: "Что такое FOMO?",
        questionTJ: "FOMO чист?",

        answers: [
            "Страх упустить возможность",
            "Тип индикатора",
            "Стратегия",
            "Вид графика"
        ],

        answersTJ: [
            "Тарси аз даст додани имконият",
            "Навъи индикатор",
            "Стратегия",
            "Навъи график"
        ],

        correct: 0,

        explanation:
            "FOMO может заставить трейдера входить в рынок без нормального анализа.",

        explanationTJ:
            "FOMO метавонад трейдерро маҷбур кунад, ки бе таҳлили дуруст ба бозор ворид шавад."
    },

    {
        category: "Психология",
        categoryTJ: "Психология",

        question: "Что такое Revenge Trading?",
        questionTJ: "Revenge Trading чист?",

        answers: [
            "Попытка быстро вернуть убытки эмоциональными сделками",
            "Правильный риск-менеджмент",
            "Анализ рынка",
            "Долгосрочное инвестирование"
        ],

        answersTJ: [
            "Кӯшиши зуд баргардонидани зарар бо муомилаҳои эҳсосӣ",
            "Идоракунии дурусти хавф",
            "Таҳлили бозор",
            "Сармоягузории дарозмуддат"
        ],

        correct: 0,

        explanation:
            "Revenge Trading обычно возникает после убытка и сопровождается эмоциональными решениями.",

        explanationTJ:
            "Revenge Trading одатан баъд аз зарар пайдо мешавад ва бо қарорҳои эҳсосӣ вобаста аст."
    },

    {
        category: "Психология",
        categoryTJ: "Психология",

        question: "Что помогает контролировать эмоции?",
        questionTJ: "Чӣ барои назорати эҳсосот кӯмак мекунад?",

        answers: [
            "Торговый план и дисциплина",
            "Увеличение риска",
            "Торговля без правил",
            "Постоянное открытие сделок"
        ],

        answersTJ: [
            "Нақшаи савдо ва интизом",
            "Зиёд кардани хавф",
            "Савдо бе қоида",
            "Доимо кушодани муомилаҳо"
        ],

        correct: 0,

        explanation:
            "План, дисциплина и заранее определённые правила помогают уменьшить эмоциональные решения.",

        explanationTJ:
            "Нақша, интизом ва қоидаҳои пешакӣ муайяншуда ба кам кардани қарорҳои эҳсосӣ кӯмак мекунанд."
    },

    /* =========================
       7. FOREX
       ========================= */

    {
        category: "Forex",
        categoryTJ: "Forex",

        question: "Что такое Forex?",
        questionTJ: "Forex чист?",

        answers: [
            "Международный валютный рынок",
            "Социальная сеть",
            "Криптокошелёк",
            "Индикатор"
        ],

        answersTJ: [
            "Бозори байналмилалии асъор",
            "Шабакаи иҷтимоӣ",
            "Криптоҳамён",
            "Индикатор"
        ],

        correct: 0,

        explanation:
            "Forex — глобальный рынок торговли валютными парами.",

        explanationTJ:
            "Forex — бозори ҷаҳонии савдои ҷуфтҳои асъорӣ мебошад."
    },

    {
        category: "Forex",
        categoryTJ: "Forex",

        question: "Что такое валютная пара?",
        questionTJ: "Ҷуфти асъорӣ чист?",

        answers: [
            "Две валюты, сравниваемые друг с другом",
            "Две акции",
            "Два индикатора",
            "Два брокера"
        ],

        answersTJ: [
            "Ду асъоре, ки нисбат ба ҳам муқоиса мешаванд",
            "Ду саҳмия",
            "Ду индикатор",
            "Ду брокер"
        ],

        correct: 0,

        explanation:
            "Например EUR/USD показывает отношение евро к доллару США.",

        explanationTJ:
            "Масалан EUR/USD муносибати евро нисбат ба доллари ИМА-ро нишон медиҳад."
    },

    {
        category: "Forex",
        categoryTJ: "Forex",

        question: "Что такое Spread?",
        questionTJ: "Spread чист?",

        answers: [
            "Разница между ценой покупки и продажи",
            "Прибыль трейдера",
            "Stop-Loss",
            "Размер депозита"
        ],

        answersTJ: [
            "Фарқи байни нархи харид ва фурӯш",
            "Фоидаи трейдер",
            "Stop-Loss",
            "Ҳаҷми депозит"
        ],

        correct: 0,

        explanation:
            "Spread — разница между Bid и Ask.",

        explanationTJ:
            "Spread — фарқи байни Bid ва Ask мебошад."
    },

    /* =========================
       8. STRATEGY
       ========================= */

    {
        category: "Стратегия",
        categoryTJ: "Стратегия",

        question: "Что такое торговая стратегия?",
        questionTJ: "Стратегияи савдо чист?",

        answers: [
            "Набор правил для принятия торговых решений",
            "Один индикатор",
            "Случайная сделка",
            "Новости"
        ],

        answersTJ: [
            "Маҷмӯи қоидаҳо барои қабули қарорҳои савдо",
            "Як индикатор",
            "Муомилаи тасодуфӣ",
            "Хабарҳо"
        ],

        correct: 0,

        explanation:
            "Стратегия определяет условия входа, выхода и управления риском.",

        explanationTJ:
            "Стратегия шартҳои воридшавӣ, баромад ва идоракунии хавфро муайян мекунад."
    },

    {
        category: "Стратегия",
        categoryTJ: "Стратегия",

        question: "Что такое Breakout?",
        questionTJ: "Breakout чист?",

        answers: [
            "Пробой важного уровня",
            "Закрытие брокера",
            "Индикатор",
            "Размер депозита"
        ],

        answersTJ: [
            "Шикастани сатҳи муҳим",
            "Басташавии брокер",
            "Индикатор",
            "Ҳаҷми депозит"
        ],

        correct: 0,

        explanation:
            "Breakout происходит, когда цена выходит за важный уровень поддержки или сопротивления.",

        explanationTJ:
            "Breakout вақте рух медиҳад, ки нарх аз сатҳи муҳими Support ё Resistance мегузарад."
    },

    {
        category: "Стратегия",
        categoryTJ: "Стратегия",

        question: "Что такое Pullback?",
        questionTJ: "Pullback чист?",

        answers: [
            "Временное движение цены против основного направления",
            "Новый индикатор",
            "Комиссия",
            "Закрытие счёта"
        ],

        answersTJ: [
            "Ҳаракати муваққатии нарх бар зидди самти асосӣ",
            "Индикатори нав",
            "Комиссия",
            "Бастани ҳисоб"
        ],

        correct: 0,

        explanation:
            "Pullback — временный откат цены внутри более крупного движения.",

        explanationTJ:
            "Pullback — бозгашти муваққатии нарх дар дохили ҳаракати калонтар мебошад."
    },

    /* =========================
       9. INDICATORS
       ========================= */

    {
        category: "Индикаторы",
        categoryTJ: "Индикаторҳо",

        question: "Для чего используется Moving Average?",
        questionTJ: "Moving Average барои чӣ истифода мешавад?",

        answers: [
            "Для сглаживания цены и анализа направления движения",
            "Для открытия банковского счёта",
            "Для перевода денег",
            "Для регистрации брокера"
        ],

        answersTJ: [
            "Барои ҳамвор кардани нарх ва таҳлили самти ҳаракат",
            "Барои кушодани суратҳисоби бонкӣ",
            "Барои интиқоли пул",
            "Барои сабти брокер"
        ],

        correct: 0,

        explanation:
            "Moving Average помогает сгладить ценовые колебания и оценить направление рынка.",

        explanationTJ:
            "Moving Average барои ҳамвор кардани тағйироти нарх ва муайян кардани самти бозор кӯмак мекунад."
    },

    {
        category: "Индикаторы",
        categoryTJ: "Индикаторҳо",

        question: "Что показывает RSI?",
        questionTJ: "RSI чиро нишон медиҳад?",

        answers: [
            "Силу и скорость изменения цены",
            "Размер депозита",
            "Комиссию брокера",
            "Новости"
        ],

        answersTJ: [
            "Қувва ва суръати тағйирёбии нарх",
            "Ҳаҷми депозит",
            "Комиссияи брокер",
            "Хабарҳо"
        ],

        correct: 0,

        explanation:
            "RSI — осциллятор, который используется для оценки импульса цены и зон перекупленности/перепроданности.",

        explanationTJ:
            "RSI — оссиляторест, ки барои баҳодиҳии импулси нарх ва минтақаҳои аз ҳад зиёд харидшуда ё фурӯхташуда истифода мешавад."
    },

    {
        category: "Индикаторы",
        categoryTJ: "Индикаторҳо",

        question: "Для чего может использоваться MACD?",
        questionTJ: "MACD барои чӣ истифода шуда метавонад?",

        answers: [
            "Для анализа импульса и тренда",
            "Для хранения денег",
            "Для регистрации аккаунта",
            "Для установки Stop-Loss автоматически всегда"
        ],

        answersTJ: [
            "Барои таҳлили импулс ва тренд",
            "Барои нигоҳ доштани пул",
            "Барои сабти аккаунт",
            "Барои ҳамеша автоматӣ гузоштани Stop-Loss"
        ],

        correct: 0,

        explanation:
            "MACD часто используется для анализа импульса, тренда и пересечений линий.",

        explanationTJ:
            "MACD аксар вақт барои таҳлили импулс, тренд ва буриши хатҳо истифода мешавад."
    },

    /* =========================
       10. PRACTICE
       ========================= */

    {
        category: "Практика",
        categoryTJ: "Амалия",

        question: "Что лучше сделать перед использованием реальных денег?",
        questionTJ: "Пеш аз истифодаи пули воқеӣ чӣ беҳтар аст?",

        answers: [
            "Потренироваться на демо и изучить риск",
            "Сразу вложить всё",
            "Взять кредит",
            "Торговать без Stop-Loss"
        ],

        answersTJ: [
            "Дар демо машқ кардан ва хавфро омӯхтан",
            "Ҳама пулро фавран гузоштан",
            "Қарз гирифтан",
            "Бе Stop-Loss савдо кардан"
        ],

        correct: 0,

        explanation:
            "Демо-счёт позволяет практиковаться без риска потери реального капитала.",

        explanationTJ:
            "Ҳисоби демо имкон медиҳад бе хавфи аз даст додани капитали воқеӣ машқ кунед."
    },

    {
        category: "Практика",
        categoryTJ: "Амалия",

        question: "Что нужно записывать в торговом журнале?",
        questionTJ: "Дар журнали савдо чӣ бояд сабт кард?",

        answers: [
            "Вход, выход, риск, результат и причину сделки",
            "Только прибыль",
            "Только убытки",
            "Ничего"
        ],

        answersTJ: [
            "Воридшавӣ, баромад, хавф, натиҷа ва сабаби муомила",
            "Танҳо фоида",
            "Танҳо зарар",
            "Ҳеҷ чиз"
        ],

        correct: 0,

        explanation:
            "Торговый журнал помогает анализировать ошибки и улучшать систему.",

        explanationTJ:
            "Журнали савдо барои таҳлили хатогиҳо ва беҳтар кардани системаи савдо кӯмак мекунад."
    },

    {
        category: "Практика",
        categoryTJ: "Амалия",

        question: "Можно ли гарантировать прибыль в трейдинге?",
        questionTJ: "Оё дар трейдинг фоидаи кафолатнок вуҷуд дорад?",

        answers: [
            "Нет",
            "Да, всегда",
            "Да, если использовать один индикатор",
            "Да, если увеличить депозит"
        ],

        answersTJ: [
            "Не",
            "Бале, ҳамеша",
            "Бале, агар як индикатор истифода шавад",
            "Бале, агар депозит зиёд карда шавад"
        ],

        correct: 0,

        explanation:
            "Торговля связана с рыночным риском, поэтому гарантировать прибыль нельзя.",

        explanationTJ:
            "Савдо бо хавфи бозор вобаста аст, бинобар ин фоидаи кафолатнок вуҷуд надорад."
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

let DOM = {};

function cacheElements() {

    DOM.question =
        document.getElementById("question");

    DOM.category =
        document.getElementById("quiz-category");

    DOM.progressText =
        document.getElementById("quiz-progress-text");

    DOM.answerList =
        document.getElementById("answer-list");

    DOM.explanation =
        document.getElementById("explanation");

    DOM.explanationText =
        document.getElementById("explanation-text");

    DOM.nextButton =
        document.getElementById("next-question");

    DOM.progressFill =
        document.getElementById("progress-fill");

    DOM.currentScore =
        document.getElementById("current-score");

    DOM.totalQuestions =
        document.getElementById("total-questions");

    DOM.answeredCount =
        document.getElementById("answered-count");

    DOM.accuracy =
        document.getElementById("accuracy");

    DOM.results =
        document.getElementById("results");

    DOM.resultScore =
        document.getElementById("result-score");

    DOM.resultTitle =
        document.getElementById("result-title");

    DOM.resultDescription =
        document.getElementById("result-description");

    DOM.resultBadge =
        document.getElementById("result-badge");

    DOM.recommendations =
        document.getElementById("recommendations");

    DOM.restartQuiz =
        document.getElementById("restart-quiz");
}

/* =========================================================
   LANGUAGE UI
   ========================================================= */

const interfaceText = {

    ru: {
        next: "Следующий вопрос",
        finish: "Завершить тест",
        explanation: "Объяснение",
        result: "Результат",
        score: "Баллы",
        answered: "Отвечено",
        accuracy: "Точность",
        recommendations: "Что изучить",
        restart: "Пройти тест снова",

        excellent: "Очень сильная база",
        good: "Хорошая база",
        basic: "Базовый уровень",
        practice: "Есть фундамент, но нужна практика",
        beginner: "Начинающий уровень",

        excellentDesc:
            "Отличный результат. У тебя уже есть хорошее понимание основных принципов трейдинга.",

        goodDesc:
            "Хороший результат. Основы понятны, но некоторые темы стоит повторить.",

        basicDesc:
            "База уже есть. Теперь важно укрепить знания и больше практиковаться.",

        practiceDesc:
            "Есть фундамент, но необходимо системно изучить слабые темы.",

        beginnerDesc:
            "Начни с основ, риск-менеджмента и торговой дисциплины."
    },

    tj: {
        next: "Саволи навбатӣ",
        finish: "Тестро анҷом додан",
        explanation: "Шарҳ",
        result: "Натиҷа",
        score: "Холҳо",
        answered: "Ҷавоб дода шуд",
        accuracy: "Дақиқӣ",
        recommendations: "Чиро омӯзӣ",
        restart: "Тестро аз нав гузаштан",

        excellent: "Сатҳи хеле хуб",
        good: "Сатҳи хуб",
        basic: "Сатҳи асосӣ",
        practice: "Асос ҳаст, аммо амалия лозим аст",
        beginner: "Сатҳи навкор",

        excellentDesc:
            "Натиҷаи олӣ. Ту аллакай принсипҳои асосии трейдингро хуб мефаҳмӣ.",

        goodDesc:
            "Натиҷаи хуб. Асосҳо фаҳмоанд, аммо баъзе мавзӯъҳоро такрор кардан лозим аст.",

        basicDesc:
            "Асосҳо дорӣ. Ҳоло муҳим аст, ки донишро мустаҳкам карда, бештар машқ кунӣ.",

        practiceDesc:
            "Асос ҳаст, аммо мавзӯъҳои суст бояд системавӣ омӯхта шаванд.",

        beginnerDesc:
            "Аз асосҳо, идоракунии хавф ва интизоми савдо оғоз кун."
    }
};

/* =========================================================
   LANGUAGE BUTTON
   ========================================================= */

function getLanguageButtons() {

    return Array.from(
        document.querySelectorAll(
            ".language-btn, [data-language]"
        )
    );
}

function updateLanguageButtons() {

    const buttons = getLanguageButtons();

    buttons.forEach(button => {

        const lang =
            button.dataset.language ||
            button.getAttribute("data-lang");

        if (!lang) return;

        button.classList.toggle(
            "active",
            lang === currentLanguage
        );

        button.setAttribute(
            "aria-pressed",
            lang === currentLanguage ? "true" : "false"
        );
    });
}

/* =========================================================
   STATIC TEXT TRANSLATION
   ========================================================= */

function translateStaticInterface() {

    const t = interfaceText[currentLanguage];

    if (!t) return;

    const elements = {

        "#next-question": t.next,
        "#restart-quiz": t.restart
    };

    Object.entries(elements).forEach(
        ([selector, text]) => {

            const element =
                document.querySelector(selector);

            if (element) {
                element.textContent = text;
            }
        }
    );

    updateLanguageButtons();
}

/* =========================================================
   SET LANGUAGE
   ========================================================= */

function setLanguage(language) {

    if (
        language !== "ru" &&
        language !== "tj"
    ) {
        language = "ru";
    }

    currentLanguage = language;

    localStorage.setItem(
        LANGUAGE_KEY,
        language
    );

    document.documentElement.lang =
        language === "tj" ? "tg" : "ru";

    translateStaticInterface();

    if (state.completed) {
        renderResults();
    } else {
        renderQuestion();
    }

    showNotification(
        language === "tj"
            ? "Забон ба тоҷикӣ иваз шуд 🇹🇯"
            : "Язык изменён на русский 🇷🇺"
    );
}

function initializeLanguage() {

    const buttons = getLanguageButtons();

    buttons.forEach(button => {

        button.addEventListener(
            "click",
            event => {

                event.preventDefault();

                const language =
                    button.dataset.language ||
                    button.getAttribute("data-lang");

                if (language) {
                    setLanguage(language);
                }
            }
        );
    });

    translateStaticInterface();
}

/* =========================================================
   CURRENT QUESTION TEXT
   ========================================================= */

function getCurrentQuestionText(question) {

    return currentLanguage === "tj"
        ? question.questionTJ
        : question.question;
}

function getCurrentAnswers(question) {

    return currentLanguage === "tj"
        ? question.answersTJ
        : question.answers;
}

function getCurrentCategory(question) {

    return currentLanguage === "tj"
        ? question.categoryTJ
        : question.category;
}

function getCurrentExplanation(question) {

    return currentLanguage === "tj"
        ? question.explanationTJ
        : question.explanation;
}

/* =========================================================
   QUIZ INITIALIZATION
   ========================================================= */

function initializeQuiz() {

    state.currentQuestion = 0;
    state.score = 0;
    state.answered = 0;
    state.selectedAnswer = null;
    state.answers = [];
    state.startedAt = Date.now();
    state.finishedAt = null;
    state.completed = false;

    if (DOM.results) {
        DOM.results.style.display = "none";
    }

    updateStats();
    renderQuestion();
}

/* =========================================================
   RENDER QUESTION
   ========================================================= */

function renderQuestion() {

    if (state.completed) return;

    const question =
        questions[state.currentQuestion];

    if (!question) return;

    state.selectedAnswer = null;

    if (DOM.question) {

        DOM.question.textContent =
            getCurrentQuestionText(question);
    }

    if (DOM.category) {

        DOM.category.textContent =
            getCurrentCategory(question);
    }

    if (DOM.progressText) {

        DOM.progressText.textContent =
            `${state.currentQuestion + 1} / ${questions.length}`;
    }

    if (DOM.answerList) {

        DOM.answerList.innerHTML = "";

        const answers =
            getCurrentAnswers(question);

        answers.forEach((answer, index) => {

            const button =
                document.createElement("button");

            button.type = "button";

            button.className =
                "answer-option";

            button.dataset.index =
                String(index);

            button.textContent =
                answer;

            button.addEventListener(
                "click",
                () => handleAnswer(index)
            );

            DOM.answerList.appendChild(button);
        });
    }

    if (DOM.explanation) {

        DOM.explanation.style.display =
            "none";
    }

    if (DOM.nextButton) {

        DOM.nextButton.disabled = true;

        DOM.nextButton.textContent =
            state.currentQuestion ===
            questions.length - 1
                ? interfaceText[currentLanguage].finish
                : interfaceText[currentLanguage].next;
    }

    updateProgress();
    updateStats();
}

/* =========================================================
   HANDLE ANSWER
   ========================================================= */

function handleAnswer(index) {

    if (
        state.selectedAnswer !== null ||
        state.completed
    ) {
        return;
    }

    const question =
        questions[state.currentQuestion];

    const answerButtons =
        document.querySelectorAll(
            ".answer-option"
        );

    state.selectedAnswer = index;

    const isCorrect =
        index === question.correct;

    if (isCorrect) {
        state.score++;
    }

    state.answered++;

    state.answers.push({
        question:
            state.currentQuestion,
        selected: index,
        correct: question.correct,
        isCorrect,
        category:
            question.category
    });

    answerButtons.forEach(
        (button, buttonIndex) => {

            button.disabled = true;

            if (
                buttonIndex ===
                question.correct
            ) {
                button.classList.add(
                    "correct"
                );
            }

            if (
                buttonIndex === index &&
                index !== question.correct
            ) {
                button.classList.add(
                    "wrong"
                );
            }
        }
    );

    showExplanation();

    if (DOM.nextButton) {
        DOM.nextButton.disabled = false;
    }

    updateStats();
    saveProgress();
}

/* =========================================================
   EXPLANATION
   ========================================================= */

function showExplanation() {

    const question =
        questions[state.currentQuestion];

    if (!DOM.explanation) return;

    DOM.explanation.style.display =
        "block";

    if (DOM.explanationText) {

        DOM.explanationText.textContent =
            getCurrentExplanation(question);
    }
}

/* =========================================================
   NEXT QUESTION
   ========================================================= */

function nextQuestion() {

    if (
        state.selectedAnswer === null
    ) {
        return;
    }

    if (
        state.currentQuestion <
        questions.length - 1
    ) {

        state.currentQuestion++;

        renderQuestion();

        saveProgress();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    } else {

        finishQuiz();
    }
}

/* =========================================================
   PROGRESS
   ========================================================= */

function updateProgress() {

    if (!DOM.progressFill) return;

    const percent =
        ((state.currentQuestion + 1) /
            questions.length) *
        100;

    DOM.progressFill.style.width =
        `${percent}%`;
}

/* =========================================================
   STATS
   ========================================================= */

function updateStats() {

    if (DOM.currentScore) {

        DOM.currentScore.textContent =
            String(state.score);
    }

    if (DOM.totalQuestions) {

        DOM.totalQuestions.textContent =
            String(questions.length);
    }

    if (DOM.answeredCount) {

        DOM.answeredCount.textContent =
            String(state.answered);
    }

    if (DOM.accuracy) {

        const accuracy =
            state.answered > 0
                ? Math.round(
                    (state.score /
                        state.answered) *
                    100
                )
                : 0;

        DOM.accuracy.textContent =
            `${accuracy}%`;
    }
}

/* =========================================================
   FINISH QUIZ
   ========================================================= */

function finishQuiz() {

    state.completed = true;
    state.finishedAt = Date.now();

    saveProgress();

    renderResults();

    if (DOM.results) {

        DOM.results.style.display =
            "block";

        DOM.results.scrollIntoView({
            behavior: "smooth"
        });
    }
}

/* =========================================================
   RESULT LEVEL
   ========================================================= */

function getResultLevel() {

    const percentage =
        Math.round(
            (state.score /
                questions.length) *
            100
        );

    if (percentage >= 90) {

        return {
            title:
                interfaceText[currentLanguage]
                    .excellent,

            description:
                interfaceText[currentLanguage]
                    .excellentDesc,

            badge: "90+"
        };

    }

    if (percentage >= 75) {

        return {
            title:
                interfaceText[currentLanguage]
                    .good,

            description:
                interfaceText[currentLanguage]
                    .goodDesc,

            badge: "75+"
        };

    }

    if (percentage >= 60) {

        return {
            title:
                interfaceText[currentLanguage]
                    .basic,

            description:
                interfaceText[currentLanguage]
                    .basicDesc,

            badge: "60+"
        };

    }

    if (percentage >= 40) {

        return {
            title:
                interfaceText[currentLanguage]
                    .practice,

            description:
                interfaceText[currentLanguage]
                    .practiceDesc,

            badge: "40+"
        };

    }

    return {

        title:
            interfaceText[currentLanguage]
                .beginner,

        description:
            interfaceText[currentLanguage]
                .beginnerDesc,

        badge: "<40"
    };
}

/* =========================================================
   RESULTS
   ========================================================= */

function renderResults() {

    const level =
        getResultLevel();

    const percentage =
        Math.round(
            (state.score /
                questions.length) *
            100
        );

    if (DOM.resultScore) {

        DOM.resultScore.textContent =
            `${state.score} / ${questions.length}`;
    }

    if (DOM.resultTitle) {

        DOM.resultTitle.textContent =
            level.title;
    }

    if (DOM.resultDescription) {

        DOM.resultDescription.textContent =
            level.description;
    }

    if (DOM.resultBadge) {

        DOM.resultBadge.textContent =
            `${percentage}%`;
    }

    renderRecommendations();
}

/* =========================================================
   RECOMMENDATIONS
   ========================================================= */

function renderRecommendations() {

    if (!DOM.recommendations) return;

    const categoryStats = {};

    questions.forEach(question => {

        if (!categoryStats[question.category]) {

            categoryStats[question.category] = {
                total: 0,
                correct: 0
            };
        }

        categoryStats[
            question.category
        ].total++;
    });

    state.answers.forEach(answer => {

        const category =
            answer.category;

        if (!categoryStats[category]) return;

        if (answer.isCorrect) {

            categoryStats[
                category
            ].correct++;
        }
    });

    const weakCategories =
        Object.entries(categoryStats)
            .map(([category, data]) => {

                const accuracy =
                    data.total > 0
                        ? data.correct /
                          data.total
                        : 0;

                return {
                    category,
                    accuracy
                };
            })
            .sort(
                (a, b) =>
                    a.accuracy -
                    b.accuracy
            )
            .slice(0, 3);

    DOM.recommendations.innerHTML = "";

    const title =
        document.createElement("h3");

    title.textContent =
        interfaceText[currentLanguage]
            .recommendations;

    DOM.recommendations.appendChild(
        title
    );

    weakCategories.forEach(item => {

        const card =
            document.createElement("div");

        card.className =
            "recommendation-item";

        const categoryName =
            currentLanguage === "tj"
                ? translateCategory(
                    item.category
                )
                : item.category;

        const percent =
            Math.round(
                item.accuracy * 100
            );

        card.innerHTML = `
            <strong>${escapeHTML(
                categoryName
            )}</strong>
            <span>${percent}%</span>
        `;

        DOM.recommendations.appendChild(
            card
        );
    });
}

/* =========================================================
   CATEGORY TRANSLATION
   ========================================================= */

function translateCategory(category) {

    const map = {

        "Основы трейдинга":
            "Асосҳои трейдинг",

        "Risk Management":
            "Идоракунии хавф",

        "Технический анализ":
            "Таҳлили техникӣ",

        "Свечной анализ":
            "Таҳлили шамъҳо",

        "Торговая логика":
            "Мантиқи савдо",

        "Психология":
            "Психология",

        "Forex":
            "Forex",

        "Стратегия":
            "Стратегия",

        "Индикаторы":
            "Индикаторҳо",

        "Практика":
            "Амалия"
    };

    return map[category] || category;
}

/* =========================================================
   RESTART
   ========================================================= */

function restartQuiz() {

    localStorage.removeItem(
        STORAGE_KEY
    );

    initializeQuiz();

    if (DOM.results) {

        DOM.results.style.display =
            "none";
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function initializeRestart() {

    if (!DOM.restartQuiz) return;

    DOM.restartQuiz.addEventListener(
        "click",
        restartQuiz
    );
}

/* =========================================================
   NAVIGATION
   ========================================================= */

function initializeNavigation() {

    const links =
        document.querySelectorAll(
            'a[href^="#"]'
        );

    links.forEach(link => {

        link.addEventListener(
            "click",
            event => {

                const href =
                    link.getAttribute("href");

                if (
                    !href ||
                    href === "#"
                ) {
                    return;
                }

                const target =
                    document.querySelector(
                        href
                    );

                if (!target) return;

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        );
    });
}

/* =========================================================
   START BUTTON
   ========================================================= */

function initializeStartButton() {

    const buttons =
        document.querySelectorAll(
            "[data-start-quiz], #start-quiz, .start-quiz"
        );

    buttons.forEach(button => {

        button.addEventListener(
            "click",
            event => {

                event.preventDefault();

                const quiz =
                    document.querySelector(
                        "#quiz"
                    ) ||
                    document.querySelector(
                        ".quiz-section"
                    ) ||
                    document.querySelector(
                        "#quiz-section"
                    );

                if (quiz) {

                    quiz.scrollIntoView({
                        behavior: "smooth"
                    });
                }
            }
        );
    });
}

/* =========================================================
   NOTIFICATION
   ========================================================= */

function showNotification(message) {

    let notification =
        document.getElementById(
            "trade-notification"
        );

    if (!notification) {

        notification =
            document.createElement(
                "div"
            );

        notification.id =
            "trade-notification";

        notification.style.position =
            "fixed";

        notification.style.bottom =
            "24px";

        notification.style.right =
            "24px";

        notification.style.zIndex =
            "99999";

        notification.style.padding =
            "14px 18px";

        notification.style.borderRadius =
            "12px";

        notification.style.background =
            "#111827";

        notification.style.color =
            "#ffffff";

        notification.style.boxShadow =
            "0 10px 30px rgba(0,0,0,.25)";

        notification.style.fontSize =
            "14px";

        notification.style.transition =
            "opacity .3s ease";

        document.body.appendChild(
            notification
        );
    }

    notification.textContent =
        message;

    notification.style.opacity = "1";

    clearTimeout(
        notification._timeout
    );

    notification._timeout =
        setTimeout(() => {

            notification.style.opacity =
                "0";

        }, 1800);
}

/* =========================================================
   SAVE PROGRESS
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

            selectedAnswer:
                state.selectedAnswer,

            answers:
                state.answers,

            startedAt:
                state.startedAt,

            finishedAt:
                state.finishedAt,

            completed:
                state.completed,

            language:
                currentLanguage
        };

        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(data)
        );

    } catch (error) {

        console.warn(
            "Unable to save progress:",
            error
        );
    }
}

/* =========================================================
   LOAD PROGRESS
   ========================================================= */

function loadSavedProgress() {

    try {

        const saved =
            localStorage.getItem(
                STORAGE_KEY
            );

        if (!saved) return false;

        const data =
            JSON.parse(saved);

        if (!data) return false;

        if (
            typeof data.currentQuestion ===
            "number"
        ) {
            state.currentQuestion =
                data.currentQuestion;
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

        state.startedAt =
            data.startedAt ||
            Date.now();

        state.finishedAt =
            data.finishedAt ||
            null;

        state.completed =
            Boolean(data.completed);

        state.selectedAnswer =
            data.selectedAnswer ??
            null;

        if (
            data.language === "ru" ||
            data.language === "tj"
        ) {
            currentLanguage =
                data.language;

            localStorage.setItem(
                LANGUAGE_KEY,
                currentLanguage
            );
        }

        return true;

    } catch (error) {

        console.warn(
            "Unable to load progress:",
            error
        );

        return false;
    }
}

/* =========================================================
   ESCAPE HTML
   ========================================================= */

function escapeHTML(value) {

    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

/* =========================================================
   CLEAR PROGRESS
   ========================================================= */

function clearProgress() {

    localStorage.removeItem(
        STORAGE_KEY
    );

    state.currentQuestion = 0;
    state.score = 0;
    state.answered = 0;
    state.selectedAnswer = null;
    state.answers = [];
    state.startedAt = Date.now();
    state.finishedAt = null;
    state.completed = false;

    renderQuestion();
    updateStats();
}

/* =========================================================
   GLOBAL API
   ========================================================= */

window.TradeAcademy = {

    getQuestions: () =>
        questions,

    getState: () =>
        ({ ...state }),

    getLanguage: () =>
        currentLanguage,

    setLanguage,

    restart:
        restartQuiz,

    clearProgress:
        clearProgress
};

/* =========================================================
   INITIALIZATION
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        cacheElements();

        const loaded =
            loadSavedProgress();

        initializeLanguage();

        initializeNavigation();

        initializeStartButton();

        initializeRestart();

        if (
            loaded &&
            state.completed
        ) {

            updateStats();
            renderResults();

            if (DOM.results) {
                DOM.results.style.display =
                    "block";
            }

        } else {

            if (!state.startedAt) {
                state.startedAt =
                    Date.now();
            }

            renderQuestion();
            updateStats();
        }

        if (DOM.nextButton) {

            DOM.nextButton.addEventListener(
                "click",
                nextQuestion
            );
        }

        console.log(
            "Trade Academy loaded successfully."
        );

        console.log(
            "Authors: JABORZODA and MUZAFARZODA"
        );

        console.log(
            "Language:",
            currentLanguage
        );
    }
);
