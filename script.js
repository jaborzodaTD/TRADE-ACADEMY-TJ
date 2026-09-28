/* ==========================================================================
   TRADE ACADEMY PRO MAX - CORE ENGINE & INTERACTION LOGIC
   Authors: JABORZODA & MUZAFARZODA
   ========================================================================== */

// --- 1. TRANSLATION DICTIONARY (i18n) ---
const I18N = {
    tj: {
        disclaimer_title: "TRADE ACADEMY",
        disclaimer_text: "платформаи таълимӣ аст. Demo trading танҳо барои омӯзиш буда, тавсияи молиявӣ нест.",
        nav_home: "🏠 Асосӣ",
        nav_courses: "📚 Курсҳо",
        nav_demo: "📊 Демо Практика",
        nav_journal: "📒 Журнал",
        nav_plan: "📋 План",
        nav_test: "🧠 Тест",
        nav_progress: "📈 Прогресс",
        nav_about: "ℹ️ Дар бора",
        hero_badge: "Платформаи №1 омӯзиши трейдинг",
        hero_title: "Трейдингро аз сифр ба таври касбӣ омӯзед",
        hero_subtitle: "Дарсҳои амалӣ, таҳлили техникӣ, риск-менеҷмент, психология ва симулятори Demo дар як платформа.",
        hero_btn_start: "🚀 Оғози омӯзиш",
        hero_btn_demo: "📊 Демо Терминал",
        market_overview: "📊 Бозори зинда (Симуляция)",
        live_status: "ONLINE",
        feat_1_title: "6+ Модули калон",
        feat_1_desc: "Аз асосҳои Forex ва Крипто то стратегияҳои мураккаби техникӣ.",
        feat_2_title: "Demo Графикаи Canvas",
        feat_2_desc: "Графикаи мукаммали свечаҳо бо имконияти гузоштани ордерҳои BUY/SELL.",
        feat_3_title: "Калькулятори Риск",
        feat_3_desc: "Ҳисоби дақиқи Stop Loss, Take Profit ва андозаи лот барои ҳар як сделка.",
        feat_4_title: "Трейдинг План & Журнал",
        feat_4_desc: "Ташаккули интизом ва сабти ҳамаи сделкаҳо дар хотираи маҳаллӣ.",
        courses_title: "Курсҳои таълимӣ",
        courses_sub: "Модулҳоро пайдарпай омӯзед ва дониши худро мустаҳкам кунед.",
        demo_balance_label: "Баланси Демо:",
        asset_select: "Инструмент:",
        pos_size: "Андозаи позиция (Лот):",
        btn_buy: "🟢 BUY (Харид)",
        btn_sell: "🔴 SELL (Фурӯш)",
        interactive_chart: "Свечной График Live Simulation",
        open_positions: "Позицияҳои кушод",
        trade_history: "Таърихи сделкаҳо",
        th_asset: "Инструмент",
        th_type: "Намуд",
        th_size: "Андоза",
        th_entry: "Вход",
        th_current: "Нарх",
        th_action: "Амал",
        th_result: "Натиҷа",
        th_time: "Вақт",
        journal_title: "Журнали Трейдер",
        journal_sub: "Ҳар як сделкуро таҳлил кунед, хатогиҳоро сабт намоед.",
        add_journal_entry: "Сабти нав",
        j_emotion: "Эмоция / Ҳолат",
        j_notes: "Эзоҳ / Дарс",
        btn_save_entry: "💾 Сабт кардан",
        j_history_title: "Таърихи Журнал",
        plan_title: "Трейдинг План Builder",
        plan_sub: "Қоидаҳои шахсии худро барои савдои беэҳсосот муқаррар кунед.",
        plan_market: "Бозорҳои асосӣ:",
        plan_session: "Сессияи савдо:",
        plan_tf: "Таймфрейми асосӣ:",
        plan_max_risk: "Макс Риск ба як сделка (%):",
        plan_max_daily_loss: "Максималӣ зарари рӯзона ($):",
        plan_max_trades: "Макс шумораи сделкаҳо дар як рӯз:",
        plan_rules: "Қоидаҳои асосии ман:",
        btn_save_plan: "💾 Сабти Трейдинг План",
        risk_calc_title: "🧮 Интерактивӣ Калькулятори Риск",
        calc_risk_amt: "Манбаи риск ($):",
        calc_lot_size: "Андозаи лоти тавсияшаванда:",
        calc_tip: "💡 Огоҳӣ: Ҳеҷ гоҳ дар як сделка аз 1-2% бештари баланси худро ба хатар нагузоред!",
        test_title: "Тести имтиҳонӣ",
        test_sub: "Дониши худро аз рӯи дарсҳо санҷед ва дараҷаи худро муайян кунед.",
        progress_title: "Дастгоҳи Прогресс ва Натиҷаҳо",
        progress_sub: "Омори омӯзиш, натиҷаҳои Demo ва дастовардҳои худро пайгирӣ кунед.",
        stat_lessons: "Дарсҳои хатмшуда",
        stat_test: "Натиҷаи беҳтарини тест",
        stat_winrate: "Win Rate (Демо)",
        stat_total_pl: "Умумии P/L",
        achieve_title: "🏆 Дастовардҳо (Achievements)",
        reset_title: "⚠️ Тоза кардани маълумот",
        reset_desc: "Ҳамаи прогресси омӯзиш, баланси Демо ва Журнал пурра тоза карда мешаванд.",
        btn_reset: "🗑️ Тоза кардани ҳама маълумот",
        about_lead: "TRADE ACADEMY — лоиҳаи касбии таълимӣ барои омӯзиши бозорҳои молиявӣ ва психологияи савдо мебошад.",
        authors_title: "Муаллифон ва Муассисон:",
        financial_disclaimer_title: "⚠️ Огоҳӣ аз хатарҳо (Financial Disclaimer)",
        financial_disclaimer_text: "TRADE ACADEMY лоиҳаи танҳо таълимӣ аст. Demo trading дар платформа савдои ҳақиқӣ набуда, ягон пули реалӣ истифода намешавад."
    },
    ru: {
        disclaimer_title: "TRADE ACADEMY",
        disclaimer_text: "— образовательная платформа. Demo trading предназначен только для обучения и не является финансовой рекомендацией.",
        nav_home: "🏠 Главная",
        nav_courses: "📚 Курсы",
        nav_demo: "📊 Демо Практика",
        nav_journal: "📒 Журнал",
        nav_plan: "📋 План",
        nav_test: "🧠 Тест",
        nav_progress: "📈 Прогресс",
        nav_about: "ℹ️ О платформе",
        hero_badge: "Платформа №1 для обучения трейдингу",
        hero_title: "Изучай трейдинг с нуля до профессионала",
        hero_subtitle: "Практические уроки, технический анализ, риск-менеджмент, психология и Demo-симулятор в одной платформе.",
        hero_btn_start: "🚀 Начать обучение",
        hero_btn_demo: "📊 Демо Терминал",
        market_overview: "📊 Живой рынок (Симуляция)",
        live_status: "ONLINE",
        feat_1_title: "6+ Больших модулей",
        feat_1_desc: "От основ Forex и Crypto до сложных технических стратегий.",
        feat_2_title: "Demo График Canvas",
        feat_2_desc: "Полноценный свечной график с возможностью исполнения BUY/SELL ордеров.",
        feat_3_title: "Калькулятор Риска",
        feat_3_desc: "Точный расчет Stop Loss, Take Profit и размера лота для каждой сделки.",
        feat_4_title: "Трейдинг План & Журнал",
        feat_4_desc: "Формирование дисциплины и запись всех сделок в локальное хранилище.",
        courses_title: "Учебные курсы",
        courses_sub: "Изучайте модули последовательно и закрепляйте знания.",
        demo_balance_label: "Демо Баланс:",
        asset_select: "Инструмент:",
        pos_size: "Размер позиции (Лот):",
        btn_buy: "🟢 BUY (Покупка)",
        btn_sell: "🔴 SELL (Продажа)",
        interactive_chart: "Интерактивный свечной график",
        open_positions: "Открытые позиции",
        trade_history: "История сделок",
        th_asset: "Инструмент",
        th_type: "Тип",
        th_size: "Размер",
        th_entry: "Вход",
        th_current: "Цена",
        th_action: "Действие",
        th_result: "Результат",
        th_time: "Время",
        journal_title: "Журнал Трейдера",
        journal_sub: "Анализируйте каждую сделку и фиксируйте ошибки.",
        add_journal_entry: "Новая запись",
        j_emotion: "Эмоция / Состояние",
        j_notes: "Заметка / Урок",
        btn_save_entry: "💾 Сохранить",
        j_history_title: "История Журнала",
        plan_title: "Трейдинг План Builder",
        plan_sub: "Установите личные правила для торговли без эмоций.",
        plan_market: "Основные рынки:",
        plan_session: "Торговая сессия:",
        plan_tf: "Основной таймфрейм:",
        plan_max_risk: "Макс Риск на сделку (%):",
        plan_max_daily_loss: "Макс дневной убыток ($):",
        plan_max_trades: "Макс сделок в день:",
        plan_rules: "Мои основные правила:",
        btn_save_plan: "💾 Сохранить План",
        risk_calc_title: "🧮 Интерактивный Калькулятор Риска",
        calc_risk_amt: "Сумма риска ($):",
        calc_lot_size: "Рекомендуемый лот:",
        calc_tip: "💡 Совет: Никогда не рискуйте более 1-2% от баланса в одной сделке!",
        test_title: "Экзаменационный Тест",
        test_sub: "Проверьте свои знания по урокам и определите свой уровень.",
        progress_title: "Панель Прогресса",
        progress_sub: "Отслеживайте статистику обучения и свои достижения.",
        stat_lessons: "Пройдено уроков",
        stat_test: "Лучший тест",
        stat_winrate: "Win Rate (Демо)",
        stat_total_pl: "Общий P/L",
        achieve_title: "🏆 Достижения (Achievements)",
        reset_title: "⚠️ Сброс данных",
        reset_desc: "Весь прогресс обучения, демо-баланс и журнал будут полностью сброшены.",
        btn_reset: "🗑️ Сбросить все данные",
        about_lead: "TRADE ACADEMY — профессиональный образовательный проект для изучения финансовых рынков и психологии торговли.",
        authors_title: "Авторы и Создатели:",
        financial_disclaimer_title: "⚠️ Предупреждение о рисках (Financial Disclaimer)",
        financial_disclaimer_text: "TRADE ACADEMY является исключительно образовательным проектом. Demo trading на платформе не является реальной торговлей."
    }
};

// --- 2. INITIAL APPLICATION STATE & LOCALSTORAGE ---
const DEFAULT_STATE = {
    lang: 'tj',
    theme: 'dark',
    completedLessons: [],
    testScore: 0,
    demoBalance: 10000.00,
    positions: [],
    history: [],
    journal: [],
    tradingPlan: null,
    achievements: ['first_visit']
};

let AppState = JSON.parse(localStorage.getItem('TRADE_ACADEMY_STATE')) || DEFAULT_STATE;

function saveState() {
    localStorage.setItem('TRADE_ACADEMY_STATE', JSON.stringify(AppState));
    updateUIOverview();
}

// --- 3. COURSES DATA ---
const COURSES = [
    {
        id: "c1",
        title_tj: "COURSE 01: Основы трейдинга",
        title_ru: "КУРС 01: Основы трейдинга",
        desc_tj: "Мафҳумҳои асосӣ: Forex, Crypto, Stocks, Buy/Sell, Spread ва Ордерҳо.",
        desc_ru: "Базовые понятия: Forex, Crypto, Акции, Buy/Sell, Спред и типы ордеров.",
        topics: ["Forex", "Crypto", "Buy/Sell", "Bid/Ask", "Spread", "Market Order", "Limit Order"],
        lessons: [
            { id: "l1_1", title_tj: "Трейдинг чист?", title_ru: "Что такое трейдинг?", content_tj: "Трейдинг — ин савдои активҳои молиявӣ бо мақсади гирифтани фоида аз тағйирёбии нарх мебошад.", content_ru: "Трейдинг — это торговля финансовыми активами с целью получения прибыли от изменения цен." },
            { id: "l1_2", title_tj: "Намудҳои бозор: Forex vs Crypto", title_ru: "Рынки: Forex vs Crypto", content_tj: "Бозори Forex бозори асъорӣ буда, Crypto бозори активҳои рақамӣ мебошад.", content_ru: "Рынок Forex является валютным рынком, а Crypto — рынком цифровых активов." }
        ]
    },
    {
        id: "c2",
        title_tj: "COURSE 02: Candlestick & Chart",
        title_ru: "КУРС 02: Японские свечи и графики",
        desc_tj: "Сохтори свечаҳо: OHLC, Timeframe (M1-D1), Быки ва Медведи.",
        desc_ru: "Структура свечей: OHLC, Таймфреймы (M1-D1), Быки и Медведи.",
        topics: ["Open", "High", "Low", "Close", "Bullish", "Bearish", "Timeframes"],
        lessons: [
            { id: "l2_1", title_tj: "Сохтори Японская Свеча", title_ru: "Анатомия японской свечи", content_tj: "Ҳар як свеча аз Body (бадан) ва Wicks (сояҳо) иборат буда, нархҳои Open, High, Low, Close-ро нишон медиҳад.", content_ru: "Каждая свеча состоит из тела (Body) и теней (Wicks), отображая цены Open, High, Low, Close." }
        ]
    },
    {
        id: "c3",
        title_tj: "COURSE 03: Technical Analysis",
        title_ru: "КУРС 03: Технический анализ",
        desc_tj: "Трендҳо, Support/Resistance, Breakout, Retest, Moving Average, RSI, MACD.",
        desc_ru: "Тренды, Уровни Поддержки/Сопротивления, Индикаторы Moving Average, RSI, MACD.",
        topics: ["Uptrend", "Downtrend", "Support", "Resistance", "RSI", "MACD"],
        lessons: [
            { id: "l3_1", title_tj: "Уровни Поддержки ва Сопротивления", title_ru: "Уровни Поддержки и Сопротивления", content_tj: "Support — ин сатҳест, ки нархро аз афтидан нигоҳ медорад. Resistance — нархро аз афзоиш бозмедорад.", content_ru: "Support — уровень, удерживающий цену от падения. Resistance — удерживает от роста." }
        ]
    },
    {
        id: "c4",
        title_tj: "COURSE 04: Risk Management",
        title_ru: "КУРС 04: Риск-менеджмент",
        desc_tj: "Stop Loss, Take Profit, Position Size, Risk/Reward (R:R), Drawdown.",
        desc_ru: "Stop Loss, Take Profit, Размер позиции, Risk/Reward (R:R), Мани-менеджмент.",
        topics: ["Risk per Trade", "Stop Loss", "Take Profit", "Position Size", "Risk/Reward"],
        lessons: [
            { id: "l4_1", title_tj: "Қоидаи 1% Риск", title_ru: "Правило 1% Риска", content_tj: "Ҳеҷ гоҳ дар як сделка аз 1% бештари капитали худро ба хатар нагузоред.", content_ru: "Никогда не рискуйте более 1% своего депозита в одной сделке." }
        ]
    },
    {
        id: "c5",
        title_tj: "COURSE 05: Trading Psychology",
        title_ru: "КУРС 05: Психология трейдинга",
        desc_tj: "Мубориза бо FOMO, Тарс, Офкандагӣ (Greed) ва Revenge Trading.",
        desc_ru: "Борьба с FOMO, Страхом, Жадностью и Тильтом (Revenge Trading).",
        topics: ["FOMO", "Fear", "Greed", "Discipline", "Emotional Control"],
        lessons: [
            { id: "l5_1", title_tj: "Идоракунии Эмоцияҳо", title_ru: "Управление эмоциями", content_tj: "Интизом калиди муваффақият дар трейдинг аст. Планро бидуни эмоция иҷро кунед.", content_ru: "Дисциплина — ключ к успеху. Следуйте торговому плану без эмоций." }
        ]
    },
    {
        id: "c6",
        title_tj: "COURSE 06: Trading Plan",
        title_ru: "КУРС 06: Торговый план",
        desc_tj: "Сохтани системаи шахсии савдо ва риояи интизоми рӯзона.",
        desc_ru: "Создание персональной торговой системы и дневная дисциплина.",
        topics: ["Trading Rules", "Daily Loss Limit", "Journaling"],
        lessons: [
            { id: "l6_1", title_tj: "Чӣ тавр Трейдинг План созем?", title_ru: "Как составить торговый план?", content_tj: "Трейдинг план дорои вақти савдо, макс риск ва қоидаҳои вуруд ба сделка мебошад.", content_ru: "Торговый план содержит время торговли, макс риск и правила входа в сделку." }
        ]
    }
];

// --- 4. QUIZ QUESTIONS DATA (12 QUESTIONS) ---
const QUIZ_QUESTIONS = [
    { q_tj: "1. Трейдинг чист?", q_ru: "1. Что такое трейдинг?", opts_tj: ["Савдои активҳо барои фоида", "Ойни онлайн", "Кафолати даромади 100%", "Амонат дар бонк"], opts_ru: ["Торговля активами ради прибыли", "Онлайн игра", "Гарантия 100% дохода", "Депозит в банке"], correct: 0 },
    { q_tj: "2. Bullish candle (Свечаи бычий) чӣ маъно дорад?", q_ru: "2. Что означает бычья свеча (Bullish)?", opts_tj: ["Нарх афзуд", "Нарх кам шуд", "Бозор баста аст", "Сделка зарар дид"], opts_ru: ["Цена выросла", "Цена упала", "Рынок закрыт", "Сделка убыточна"], correct: 0 },
    { q_tj: "3. Stop Loss барои чӣ лозим аст?", q_ru: "3. Для чего нужен Stop Loss?", opts_tj: ["Барои маҳдуд кардани зарар", "Барои гирифтани фоида", "Барои баланд кардани спред", "Барои бастани аккаунт"], opts_ru: ["Для ограничения убытка", "Для фиксации прибыли", "Для увеличения спреда", "Для закрытия аккаунта"], correct: 0 },
    { q_tj: "4. Спред (Spread) чист?", q_ru: "4. Что такое спред (Spread)?", opts_tj: ["Фарқи байни нархи Bid ва Ask", "Фоидаи трейдер", "Намуди графика", "Нишондиҳандаи индикатор"], opts_ru: ["Разница между ценой Bid и Ask", "Прибыль трейдера", "Тип графика", "Показатель индикатора"], correct: 0 },
    { q_tj: "5. Максималӣ риски тавсияшаванда ба як сделка чанд аст?", q_ru: "5. Какой максимальный рекомендуемый риск на сделку?", opts_tj: ["1% - 2%", "50%", "100%", "25%"], opts_ru: ["1% - 2%", "50%", "100%", "25%"], correct: 0 },
    { q_tj: "6. Support (Уровень поддержки) чист?", q_ru: "6. Что такое уровень поддержки (Support)?", opts_tj: ["Сатҳе, ки нархро аз афтидан нигоҳ медорад", "Сатҳе, ки нархро ба боло намемонад", "Вақти ёрии техникӣ", "Формулаи RSI"], opts_ru: ["Уровень, удерживающий цену от падения", "Уровень, не пускающий цену вверх", "Служба поддержки", "Формула RSI"], correct: 0 },
    { q_tj: "7. FOMO чист?", q_ru: "7. Что такое FOMO?", opts_tj: ["Тарси ақиб мондан аз фоида (Fear of missing out)", "Стратегияи савдо", "Формулаи калькулятор", "Номи брокер"], opts_ru: ["Страх упущенной выгоды", "Торговая стратегия", "Формула калькулятора", "Имя брокера"], correct: 0 },
    { q_tj: "8. Индикатори RSI барои чӣ истифода мешавад?", q_ru: "8. Для чего используется индикатор RSI?", opts_tj: ["Муайян кардани перекупленность / перепроданность", "Ҳисоби баланси демо", "Сохтани графика", "Гузоштани Stop Loss"], opts_ru: ["Определение перекупленности / перепроданности", "Расчет демо-баланса", "Построение графика", "Установка Stop Loss"], correct: 0 },
    { q_tj: "9. Revenge Trading (Қасдгирӣ) чист?", q_ru: "9. Что такое Revenge Trading?", opts_tj: ["Кӯшиши фаврии барқарор кардани зарар бо эмоция", "Савдои ором мувофиқи план", "Истифодаи калькулятор", "Пӯшидани ордер"], opts_ru: ["Эмоциональная попытка отторговать убыток", "Спокойная торговля по плану", "Использование калькулятора", "Закрытие ордера"], correct: 0 },
    { q_tj: "10. Timeframe H1 чиро нишон медиҳад?", q_ru: "10. Что показывает таймфрейм H1?", opts_tj: ["Ҳар як свеча = 1 соат", "1 дақиқа", "1 ҳафта", "1 сония"], opts_ru: ["Каждая свеча = 1 час", "1 минута", "1 неделя", "1 секунда"], correct: 0 },
    { q_tj: "11. Risk to Reward 1:3 чӣ маъно дорад?", q_ru: "11. Что означает Risk to Reward 1:3?", opts_tj: ["Барои $10 риск, $30 потенциалӣ фоида", "Барои $30 риск, $10 фоида", "1% риск, 3 сделка", "Танҳо 3 лот"], opts_ru: ["Риск $10 ради потенциальной прибыли $30", "Риск $30 ради $10 прибыли", "1% риска, 3 сделки", "Только 3 лота"], correct: 0 },
    { q_tj: "12. Сабаби асосии афтидани депозити трейдерони навкор чист?", q_ru: "12. Главная причина слива депозита новичками?", opts_tj: ["Набудани риск-менеҷмент ва эмоцияҳо", "Хатогии индикатори RSI", "Брокер", "Свечаҳои сурх"], opts_ru: ["Отсутствие риск-менеджмента и эмоции", "Ошибка индикатора RSI", "Брокер", "Красные свечи"], correct: 0 }
];

// --- 5. ACHIEVEMENTS SYSTEM ---
const ACHIEVEMENTS_DEF = [
    { id: 'first_visit', title_tj: "🎓 Қадами аввал", title_ru: "🎓 Первый шаг", desc_tj: "Оғози истифодаи TRADE ACADEMY", desc_ru: "Начало работы с TRADE ACADEMY" },
    { id: 'lesson_1', title_tj: "📚 Донишҷӯ", title_ru: "📚 Студент", desc_tj: "Хатми 1 дарс", desc_ru: "Завершение 1 урока" },
    { id: 'first_trade', title_tj: "📊 Аввалин Демо Сделка", title_ru: "📊 Первая Демо Сделка", desc_tj: "Кушодани сделка дар Демо Терминал", desc_ru: "Открытие сделки в Демо Терминале" },
    { id: 'journal_1', title_tj: "📒 Дисциплина", title_ru: "📒 Дисциплина", desc_tj: "Илова кардани сабт дар Журнал", desc_ru: "Запись в Журнал Трейдера" },
    { id: 'quiz_master', title_tj: "🧠 Мастери Тест", title_ru: "🧠 Мастер Тестов", desc_tj: "Натиҷаи беш аз 80% дар тест", desc_ru: "Результат выше 80% в тесте" }
];

// --- 6. LIVE CHART CANVAS ENGINE ---
let canvas, ctx;
let candles = [];
let currentPrice = 1.10500;
let currentSymbol = "EUR/USD";
let chartInterval = null;

function initChart() {
    canvas = document.getElementById('tradingChart');
    if (!canvas) return;
    ctx = canvas.getContext('2d');
    
    // Resize Canvas
    const rect = canvas.parentElement.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height || 380;

    // Generate initial synthetic candles
    candles = [];
    let price = currentPrice;
    for (let i = 0; i < 40; i++) {
        let open = price;
        let change = (Math.random() - 0.49) * 0.0010;
        let close = open + change;
        let high = Math.max(open, close) + Math.random() * 0.0005;
        let low = Math.min(open, close) - Math.random() * 0.0005;
        candles.push({ open, high, low, close });
        price = close;
    }
    currentPrice = price;

    if (chartInterval) clearInterval(chartInterval);
    chartInterval = setInterval(updateChart, 1000);
}

function updateChart() {
    if (!ctx) return;
    
    // Update latest candle or add new
    let lastCandle = candles[candles.length - 1];
    let tick = (Math.random() - 0.49) * 0.0003;
    lastCandle.close += tick;
    if (lastCandle.close > lastCandle.high) lastCandle.high = lastCandle.close;
    if (lastCandle.close < lastCandle.low) lastCandle.low = lastCandle.close;
    currentPrice = lastCandle.close;

    // Update UI elements for symbol price
    const pEl = document.getElementById('currentSymbolPrice');
    if (pEl) pEl.innerText = currentPrice.toFixed(currentSymbol.includes('USD/') || currentSymbol.includes('EUR/') ? 5 : 2);

    // Render Canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const padding = 40;
    const chartWidth = canvas.width - padding;
    const chartHeight = canvas.height - padding;

    // Find min and max price
    let minP = Math.min(...candles.map(c => c.low));
    let maxP = Math.max(...candles.map(c => c.high));
    let range = (maxP - minP) || 1;

    const candleWidth = chartWidth / candles.length;

    // Draw Grid
    ctx.strokeStyle = "rgba(255, 255, 255, 0.05)";
    ctx.lineWidth = 1;
    for (let i = 0; i < 5; i++) {
        let y = (chartHeight / 4) * i;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(chartWidth, y);
        ctx.stroke();
    }

    // Draw Candles
    candles.forEach((c, i) => {
        let x = i * candleWidth + candleWidth / 2;
        let openY = chartHeight - ((c.open - minP) / range) * chartHeight;
        let closeY = chartHeight - ((c.close - minP) / range) * chartHeight;
        let highY = chartHeight - ((c.high - minP) / range) * chartHeight;
        let lowY = chartHeight - ((c.low - minP) / range) * chartHeight;

        let isBull = c.close >= c.open;
        let color = isBull ? "#10b981" : "#ef4444";

        // Draw Wick
        ctx.strokeStyle = color;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(x, highY);
        ctx.lineTo(x, lowY);
        ctx.stroke();

        // Draw Body
        ctx.fillStyle = color;
        let bodyY = Math.min(openY, closeY);
        let bodyH = Math.max(Math.abs(closeY - openY), 2);
        ctx.fillRect(x - candleWidth * 0.35, bodyY, candleWidth * 0.7, bodyH);
    });

    // Update Open Positions P/L real-time
    updatePositionsPL();
}

// --- 7. DEMO TRADING ENGINE ---
function changeSymbol(val) {
    currentSymbol = val;
    document.getElementById('currentSymbolName').innerText = val;
    if (val === 'EUR/USD') currentPrice = 1.10500;
    else if (val === 'GBP/USD') currentPrice = 1.27200;
    else if (val === 'USD/JPY') currentPrice = 155.20;
    else if (val === 'XAU/USD') currentPrice = 2650.50;
    else if (val === 'BTC/USD') currentPrice = 88500.00;
    initChart();
}

function executeTrade(type) {
    const lot = parseFloat(document.getElementById('orderLot').value) || 0.1;
    const pos = {
        id: Date.now(),
        symbol: currentSymbol,
        type: type,
        lot: lot,
        entry: currentPrice,
        current: currentPrice,
        pl: 0
    };

    AppState.positions.push(pos);
    unlockAchievement('first_trade');
    saveState();
    renderPositions();
    showToast(`✓ Ордери ${type} ${currentSymbol} кушода шуд!`);
}

function updatePositionsPL() {
    let totalPL = 0;
    AppState.positions.forEach(p => {
        let diff = currentPrice - p.entry;
        if (p.type === 'SELL') diff = -diff;
        
        let multiplier = p.symbol.includes('BTC') ? 1 : p.symbol.includes('XAU') ? 100 : 10000;
        p.current = currentPrice;
        p.pl = diff * p.lot * multiplier;
        totalPL += p.pl;
    });

    const plEl = document.getElementById('demoPL');
    const eqEl = document.getElementById('demoEquity');
    if (plEl) {
        plEl.innerText = `$${totalPL.toFixed(2)}`;
        plEl.className = totalPL >= 0 ? 'text-success' : 'text-danger';
    }
    if (eqEl) {
        eqEl.innerText = `$${(AppState.demoBalance + totalPL).toFixed(2)}`;
    }

    renderPositionsTable();
}

function closePosition(id) {
    const idx = AppState.positions.findIndex(p => p.id === id);
    if (idx !== -1) {
        const p = AppState.positions[idx];
        AppState.demoBalance += p.pl;
        AppState.history.unshift({
            symbol: p.symbol,
            type: p.type,
            result: p.pl >= 0 ? 'WIN' : 'LOSS',
            pl: p.pl,
            time: new Date().toLocaleTimeString()
        });
        AppState.positions.splice(idx, 1);
        saveState();
        renderPositions();
        renderTradeHistory();
        showToast(`✓ Позиция баста шуд! P/L: $${p.pl.toFixed(2)}`);
    }
}

function renderPositions() {
    renderPositionsTable();
    document.getElementById('demoBalance').innerText = `$${AppState.demoBalance.toFixed(2)}`;
}

function renderPositionsTable() {
    const tbody = document.getElementById('openPositionsTable');
    if (!tbody) return;
    if (AppState.positions.length === 0) {
        tbody.innerHTML = `<tr><td colspan="7" style="text-align:center; color:var(--text-muted)">Ягон позицияи кушод нест</td></tr>`;
        return;
    }
    tbody.innerHTML = AppState.positions.map(p => `
        <tr>
            <td><strong>${p.symbol}</strong></td>
            <td><span class="badge ${p.type === 'BUY' ? 'badge-success' : 'badge-primary'}">${p.type}</span></td>
            <td>${p.lot}</td>
            <td>${p.entry.toFixed(2)}</td>
            <td>${p.current.toFixed(2)}</td>
            <td class="${p.pl >= 0 ? 'text-success' : 'text-danger'}">$${p.pl.toFixed(2)}</td>
            <td><button class="btn btn-outline" style="padding:2px 8px; font-size:0.75rem;" onclick="closePosition(${p.id})">Close</button></td>
        </tr>
    `).join('');
}

function renderTradeHistory() {
    const tbody = document.getElementById('tradeHistoryTable');
    if (!tbody) return;
    if (AppState.history.length === 0) {
        tbody.innerHTML = `<tr><td colspan="5" style="text-align:center; color:var(--text-muted)">Таърихи сделкаҳо холӣ аст</td></tr>`;
        return;
    }
    tbody.innerHTML = AppState.history.map(h => `
        <tr>
            <td><strong>${h.symbol}</strong></td>
            <td>${h.type}</td>
            <td><span class="badge ${h.result === 'WIN' ? 'badge-success' : 'badge-primary'}">${h.result}</span></td>
            <td class="${h.pl >= 0 ? 'text-success' : 'text-danger'}">$${h.pl.toFixed(2)}</td>
            <td style="color:var(--text-muted); font-size:0.75rem;">${h.time}</td>
        </tr>
    `).join('');
}

// --- 8. TRADING JOURNAL LOGIC ---
function saveJournalEntry(e) {
    e.preventDefault();
    const entry = {
        id: Date.now(),
        asset: document.getElementById('jAsset').value,
        type: document.getElementById('jType').value,
        result: parseFloat(document.getElementById('jResult').value),
        emotion: document.getElementById('jEmotion').value,
        notes: document.getElementById('jNotes').value,
        date: new Date().toLocaleDateString()
    };
    AppState.journal.unshift(entry);
    unlockAchievement('journal_1');
    saveState();
    renderJournal();
    document.getElementById('journalForm').reset();
    showToast("✓ Сабт дар Журнал нигоҳ дошта шуд!");
}

function renderJournal() {
    const list = document.getElementById('journalEntriesList');
    if (!list) return;
    if (AppState.journal.length === 0) {
        list.innerHTML = `<p style="color:var(--text-muted); text-align:center;">Журнал холӣ аст. Сабти аввалини худро илова кунед!</p>`;
        return;
    }
    list.innerHTML = AppState.journal.map(j => `
        <div class="journal-card-item">
            <div>
                <strong>${j.asset} (${j.type})</strong> — <span class="${j.result >= 0 ? 'text-success' : 'text-danger'}">$${j.result}</span>
                <div style="font-size:0.8rem; color:var(--text-muted); margin-top:4px;">${j.emotion} | ${j.date}</div>
                <p style="font-size:0.85rem; margin-top:6px;">${j.notes}</p>
            </div>
            <button class="btn btn-outline" style="padding:4px 8px;" onclick="deleteJournal(${j.id})">🗑️</button>
        </div>
    `).join('');
}

function deleteJournal(id) {
    AppState.journal = AppState.journal.filter(j => j.id !== id);
    saveState();
    renderJournal();
}

// --- 9. TRADING PLAN & RISK CALCULATOR ---
function saveTradingPlan(e) {
    e.preventDefault();
    AppState.tradingPlan = {
        market: document.getElementById('planMarket').value,
        session: document.getElementById('planSession').value,
        tf: document.getElementById('planTF').value,
        risk: document.getElementById('planRisk').value,
        maxDailyLoss: document.getElementById('planMaxDailyLoss').value,
        maxTrades: document.getElementById('planMaxTrades').value,
        rules: document.getElementById('planRules').value
    };
    saveState();
    showToast("✓ Трейдинг План сабт шуд!");
}

function calculateRisk() {
    const balance = parseFloat(document.getElementById('calcBalance').value) || 0;
    const riskPct = parseFloat(document.getElementById('calcRiskPercent').value) || 0;
    const slPoints = parseFloat(document.getElementById('calcSLPoints').value) || 1;

    const riskAmt = (balance * (riskPct / 100));
    const lotSize = (riskAmt / (slPoints * 10)).toFixed(2);

    document.getElementById('resRiskAmount').innerText = `$${riskAmt.toFixed(2)}`;
    document.getElementById('resLotSize').innerText = `${lotSize} Lot`;
}

// --- 10. QUIZ / TEST SYSTEM ENGINE ---
let currentQuizAnswers = {};

function renderQuiz() {
    const container = document.getElementById('quizContainer');
    if (!container) return;
    const isRu = AppState.lang === 'ru';

    container.innerHTML = `
        <h3 style="margin-bottom:16px;">${isRu ? 'Тестовые вопросы (12)' : 'Саволҳои тестӣ (12)'}</h3>
        <form id="quizForm" onsubmit="submitQuiz(event)">
            ${QUIZ_QUESTIONS.map((q, idx) => `
                <div style="margin-bottom:20px; padding-bottom:16px; border-bottom:1px solid var(--border-color);">
                    <p style="font-weight:700; margin-bottom:10px;">${isRu ? q.q_ru : q.q_tj}</p>
                    <div style="display:grid; gap:8px;">
                        ${(isRu ? q.opts_ru : q.opts_tj).map((opt, oIdx) => `
                            <label style="display:flex; align-items:center; gap:8px; cursor:pointer; font-size:0.9rem;">
                                <input type="radio" name="q_${idx}" value="${oIdx}" required>
                                ${opt}
                            </label>
                        `).join('')}
                    </div>
                </div>
            `).join('')}
            <button type="submit" class="btn btn-primary btn-block">${isRu ? 'Завершить тест' : 'Супоридани тест'}</button>
        </form>
    `;
}

function submitQuiz(e) {
    e.preventDefault();
    let score = 0;
    QUIZ_QUESTIONS.forEach((q, idx) => {
        const selected = document.querySelector(`input[name="q_${idx}"]:checked`);
        if (selected && parseInt(selected.value) === q.correct) {
            score++;
        }
    });

    const percent = Math.round((score / QUIZ_QUESTIONS.length) * 100);
    AppState.testScore = Math.max(AppState.testScore, percent);
    if (percent >= 80) unlockAchievement('quiz_master');
    saveState();

    const isRu = AppState.lang === 'ru';
    let level = percent >= 85 ? 'Advanced' : percent >= 70 ? 'Intermediate' : percent >= 50 ? 'Basic' : 'Beginner';

    document.getElementById('quizContainer').innerHTML = `
        <div style="text-align:center; padding:30px 10px;">
            <h2 style="font-size:2rem; margin-bottom:10px;">🏆 Натиҷа: ${percent}%</h2>
            <p style="color:var(--text-muted); margin-bottom:20px;">Дараҷаи шумо: <strong>${level}</strong> (${score}/${QUIZ_QUESTIONS.length} саволи дуруст)</p>
            <button class="btn btn-primary" onclick="renderQuiz()">${isRu ? 'Пройти снова' : 'Оғози дубора'}</button>
        </div>
    `;
}

// --- 11. COURSES & LESSON MODAL ---
function renderCourses() {
    const list = document.getElementById('coursesList');
    if (!list) return;
    const isRu = AppState.lang === 'ru';

    list.innerHTML = COURSES.map(c => `
        <div class="glass-card course-card">
            <div>
                <div class="course-meta">
                    <span>MODULE</span>
                    <span>• ${c.topics.length} TOPICS</span>
                </div>
                <h3 class="course-title">${isRu ? c.title_ru : c.title_tj}</h3>
                <p class="course-desc">${isRu ? c.desc_ru : c.desc_tj}</p>
                <div class="topics-pills">
                    ${c.topics.map(t => `<span class="pill">${t}</span>`).join('')}
                </div>
            </div>
            <div>
                <button class="btn btn-outline" onclick="openLessonModal('${c.id}')">${isRu ? 'Открыть' : 'Омӯхтан'}</button>
            </div>
        </div>
    `).join('');
}

function openLessonModal(courseId) {
    const course = COURSES.find(c => c.id === courseId);
    if (!course) return;
    const isRu = AppState.lang === 'ru';
    const modal = document.getElementById('lessonModal');
    const body = document.getElementById('lessonModalBody');

    body.innerHTML = `
        <h2 style="margin-bottom:12px;">${isRu ? course.title_ru : course.title_tj}</h2>
        <div style="display:flex; flex-direction:column; gap:16px; margin-top:20px;">
            ${course.lessons.map(l => `
                <div style="background:rgba(0,0,0,0.2); padding:16px; border-radius:12px; border:1px solid var(--border-color);">
                    <h4>${isRu ? l.title_ru : l.title_tj}</h4>
                    <p style="font-size:0.9rem; color:var(--text-muted); margin:8px 0;">${isRu ? l.content_ru : l.content_tj}</p>
                    <button class="btn btn-primary" style="padding:6px 12px; font-size:0.8rem;" onclick="completeLesson('${l.id}')">
                        ${AppState.completedLessons.includes(l.id) ? '✓ Хатм шуд' : 'Complete Lesson'}
                    </button>
                </div>
            `).join('')}
        </div>
    `;

    modal.classList.add('active');
}

function closeLessonModal() {
    document.getElementById('lessonModal').classList.remove('active');
}

function completeLesson(id) {
    if (!AppState.completedLessons.includes(id)) {
        AppState.completedLessons.push(id);
        unlockAchievement('lesson_1');
        saveState();
        showToast("✓ Дарс хатм шуд!");
        closeLessonModal();
    }
}

// --- 12. ACHIEVEMENTS & OVERVIEW STATS ---
function unlockAchievement(id) {
    if (!AppState.achievements.includes(id)) {
        AppState.achievements.push(id);
        saveState();
        const a = ACHIEVEMENTS_DEF.find(item => item.id === id);
        if (a) showToast(`🏆 Дастоварди нав: ${AppState.lang === 'ru' ? a.title_ru : a.title_tj}`);
    }
}

function renderAchievements() {
    const grid = document.getElementById('achievementsGrid');
    if (!grid) return;
    const isRu = AppState.lang === 'ru';

    grid.innerHTML = ACHIEVEMENTS_DEF.map(a => {
        const unlocked = AppState.achievements.includes(a.id);
        return `
            <div class="achievement-card ${unlocked ? 'unlocked' : ''}">
                <div style="font-weight:700; margin-bottom:4px;">${isRu ? a.title_ru : a.title_tj}</div>
                <div style="font-size:0.75rem; color:var(--text-muted);">${isRu ? a.desc_ru : a.desc_tj}</div>
            </div>
        `;
    }).join('');
}

function updateUIOverview() {
    // Stats elements
    const compEl = document.getElementById('statLessonsComp');
    const scoreEl = document.getElementById('statTestScore');
    const winrateEl = document.getElementById('statWinRate');
    const plEl = document.getElementById('statTotalPL');

    if (compEl) compEl.innerText = `${AppState.completedLessons.length} / 18`;
    if (scoreEl) scoreEl.innerText = `${AppState.testScore}%`;

    const totalTrades = AppState.history.length;
    const wins = AppState.history.filter(h => h.result === 'WIN').length;
    const winrate = totalTrades > 0 ? Math.round((wins / totalTrades) * 100) : 0;
    if (winrateEl) winrateEl.innerText = `${winrate}%`;

    const totalPL = AppState.history.reduce((acc, h) => acc + h.pl, 0);
    if (plEl) {
        plEl.innerText = `$${totalPL.toFixed(2)}`;
        plEl.className = `stat-value ${totalPL >= 0 ? 'text-success' : 'text-danger'}`;
    }

    renderAchievements();
}

// --- 13. UI INTERACTION CONTROL (TAB SWITCHING, LANG & THEME) ---
function switchTab(tabId) {
    document.querySelectorAll('.tab-page').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.bottom-nav-btn').forEach(b => b.classList.remove('active'));

    const targetPage = document.getElementById(`tab-${tabId}`);
    if (targetPage) targetPage.classList.add('active');

    document.querySelectorAll(`[data-tab="${tabId}"]`).forEach(b => b.classList.add('active'));

    if (tabId === 'demo') {
        setTimeout(initChart, 100);
    }
}

function toggleLanguage() {
    AppState.lang = AppState.lang === 'tj' ? 'ru' : 'tj';
    saveState();
    applyLanguage();
}

function applyLanguage() {
    const lang = AppState.lang;
    document.getElementById('currentLangFlag').innerText = lang === 'tj' ? '🇹🇯' : '🇷🇺';
    document.getElementById('currentLangCode').innerText = lang.toUpperCase();

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (I18N[lang] && I18N[lang][key]) {
            el.innerText = I18N[lang][key];
        }
    });

    renderCourses();
    renderQuiz();
    renderJournal();
    renderAchievements();
}

function toggleTheme() {
    AppState.theme = AppState.theme === 'dark' ? 'light' : 'dark';
    saveState();
    applyTheme();
}

function applyTheme() {
    document.documentElement.setAttribute('data-theme', AppState.theme);
}

function showToast(msg) {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerText = msg;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}

function confirmResetAllData() {
    if (confirm("Оё шумо мутмаин ҳастед, ки мехоҳед ҳамаи маълумотро тоза кунед?")) {
        localStorage.removeItem('TRADE_ACADEMY_STATE');
        AppState = DEFAULT_STATE;
        saveState();
        location.reload();
    }
}

// Mini Market Ticker Initializer
function initMiniTickers() {
    const grid = document.getElementById('miniTickerGrid');
    if (!grid) return;
    const items = [
        { symbol: "EUR/USD", price: "1.10500", change: "+0.32%" },
        { symbol: "GBP/USD", price: "1.27200", change: "+0.15%" },
        { symbol: "XAU/USD", price: "2650.50", change: "+1.05%" },
        { symbol: "BTC/USD", price: "88500.00", change: "-0.80%" }
    ];
    grid.innerHTML = items.map(i => `
        <div class="ticker-item">
            <div class="ticker-symbol">${i.symbol}</div>
            <div class="ticker-price">${i.price}</div>
            <div class="ticker-change ${i.change.startsWith('+') ? 'text-success' : 'text-danger'}">${i.change}</div>
        </div>
    `).join('');
}

// --- 14. APPLICATION INITIALIZATION ---
window.addEventListener('DOMContentLoaded', () => {
    applyTheme();
    applyLanguage();
    renderCourses();
    renderQuiz();
    renderPositions();
    renderTradeHistory();
    renderJournal();
    initMiniTickers();
    calculateRisk();
    updateUIOverview();

    // Auto load plan if exists
    if (AppState.tradingPlan) {
        document.getElementById('planMarket').value = AppState.tradingPlan.market || '';
        document.getElementById('planSession').value = AppState.tradingPlan.session || '';
        document.getElementById('planTF').value = AppState.tradingPlan.tf || '';
        document.getElementById('planRisk').value = AppState.tradingPlan.risk || 1;
        document.getElementById('planMaxDailyLoss').value = AppState.tradingPlan.maxDailyLoss || '';
        document.getElementById('planMaxTrades').value = AppState.tradingPlan.maxTrades || '';
        document.getElementById('planRules').value = AppState.tradingPlan.rules || '';
    }
});
