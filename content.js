// Сгенерировано tools/build_webapp.py — не редактируйте вручную
window.CGB_CONTENT = {
 "texts": {
  "ru": {
   "product_name": "CHAIN GOLD BOT EA",
   "welcome": "Здравствуйте! Это бот CHAIN GOLD BOT EA — торговых советников для MetaTrader 5: для золота (XAUUSD) и новинка — для биткоина (BTCUSD).\n\nЗдесь можно узнать о продукте, посмотреть ответы на частые вопросы, оставить заявку на покупку или написать в поддержку. Выберите раздел в меню ниже 👇",
   "about": "🥇 CHAIN GOLD BOT EA — торговый советник (Expert Advisor) для автоматической торговли золотом.\n\nТорговая платформа: MetaTrader 5\nТорговый инструмент: XAUUSD (золото / доллар США)\nТаймфрейм: M1 (одноминутный график)\nСистемные требования: терминал MetaTrader 5 на Windows; рекомендуется VPS, чтобы терминал работал круглосуточно без перерывов\nРекомендуемый депозит: от 1500 $ на стандартном счёте либо центовый счёт у вашего брокера\nЛицензия: бессрочная, на один счёт MetaTrader 5\n\nПринцип работы:\nСоветник торгует по пробойной логике: выставляет отложенный ордер BUY STOP выше и SELL STOP ниже текущей цены. Когда срабатывает один ордер, второй удаляется. У каждой сделки есть начальный Stop Loss. Когда цена идёт в прибыль, советник переносит стоп в безубыток (к цене входа), а затем ведёт позицию трейлинг-стопом. Фиксированный Take Profit в стандартных настройках выключен.\nФактические параметры зависят от настроек советника и ограничений брокера.\n\nНазвание отсылает к образу цепи — связанных между собой звеньев.\n\n━━━━━━━━━━━━━━━━\n🆕 BTC SWING BREAKOUT EA — советник для биткоина\n\nТорговая платформа: MetaTrader 5\nТорговый инструмент: BTCUSD\nТаймфрейм уровней: M30\nСтатус: ранний доступ — тестирование продолжается\n\nПринцип работы:\nСоветник находит последние подтверждённые точки разворота (swing high / swing low по индикатору ZigZag) на графике M30 и выставляет отложенный ордер BUY STOP на уровне максимума и SELL STOP на уровне минимума. У каждой сделки есть Stop Loss и Take Profit (по умолчанию 150 и 1000 USD от цены входа). Когда прибыль достигает 50 USD, включается трейлинг-стоп. Неисполненные отложенные ордера удаляются через 72 часа, при слишком широком спреде новые ордера не выставляются. Лот — фиксированный или рассчитывается от процента риска.\nФактические параметры зависят от настроек советника и ограничений брокера.",
   "features": "🥇 CHAIN GOLD BOT EA (XAUUSD):\n• Автоматическая торговля XAUUSD в MetaTrader 5\n• Работа на минутном графике (M1)\n• Пробойная логика: пара отложенных ордеров BUY STOP / SELL STOP, лишний ордер удаляется после срабатывания\n• Начальный Stop Loss для каждой сделки\n• Перенос стопа в безубыток и трейлинг-стоп\n• Фиксированный Take Profit — по желанию (в стандартных настройках выключен)\n• Бессрочная лицензия на один счёт MT5 и бесплатные обновления в течение года\n\n🆕 BTC Swing Breakout EA (BTCUSD):\n• Пробой уровней разворота ZigZag на M30: BUY STOP / SELL STOP\n• Stop Loss и Take Profit для каждой сделки\n• Трейлинг-стоп после 50 USD прибыли\n• Срок жизни отложенных ордеров и фильтр спреда\n• Лот фиксированный или по проценту риска",
   "getting_started": "1. Изучите раздел «О продукте» и предупреждение о рисках.\n2. Оставьте заявку в разделе «Цена и покупка».\n3. Оплатите заказ в USDT (TRC20) или BTC по инструкции и дождитесь подтверждения.\n4. После подтверждения оплаты администратор (@GOLD_CHAIN_EA) пришлёт вам файл советника и инструкцию в личные сообщения.\n5. Установите советник в MetaTrader 5: «Файл → Открыть каталог данных → MQL5 → Experts», скопируйте туда файл и перезапустите терминал.\n6. Откройте график нужного инструмента — XAUUSD M1 для золотого советника или BTCUSD M30 для биткоин-советника, — перетащите советник на график и включите «Алгоритмическую торговлю».\n7. Рекомендуем VPS, чтобы терминал работал круглосуточно.\n8. Начните с демо-счёта и разберитесь в настройках, прежде чем работать с реальными средствами.\n\n🔒 Мы никогда не просим пароли от торгового счёта, личного кабинета брокера, банковских карт, seed-фразы или коды из SMS. Не отправляйте их никому — ни в этот бот, ни в поддержку.",
   "payment_info": "Способы оплаты: криптовалюта.\n\nUSDT (сеть TRON, TRC20):\nTCMJFg58b4wt1wusBQwnwiWJPQuBrrAvae\n\nBitcoin (BTC, сеть Bitcoin):\nbc1qc9pjdnjgrwknsrchtu0z2lvuqtn2fhrsyy9drn\n\n⚠️ Отправляйте USDT только в сети TRON (TRC20), а BTC — только в сети Bitcoin: перевод в другой сети может быть утерян. Сумму в BTC уточните у @GOLD_CHAIN_EA перед оплатой.\nПосле перевода напишите @GOLD_CHAIN_EA номер заявки и хэш транзакции (TxID).",
   "contacts": "Поддержка: @GOLD_CHAIN_EA\nЧасы работы: 08:00–22:00 (UTC+1)",
   "privacy": "Для заявки мы сохраняем только: имя или Telegram-профиль, выбранный тариф, контакт для связи и ваш Telegram ID. Эти данные используются только для обработки заявки и связи с вами и не передаются третьим лицам. Чтобы удалить свои данные, напишите @GOLD_CHAIN_EA. Срок хранения: 1 год, удаление — по запросу.",
   "risk_warning": "⚠️ Торговля на финансовых рынках сопряжена с высоким риском потери средств. Прошлые результаты не гарантируют будущих. Продукт — программный инструмент, а не инвестиционная рекомендация; мы не являемся брокером или инвестиционным консультантом. Решения о торговле и риске вы принимаете самостоятельно."
  },
  "en": {
   "product_name": "CHAIN GOLD BOT EA",
   "welcome": "Hello! This is the bot of CHAIN GOLD BOT EA — Expert Advisors for MetaTrader 5: for gold (XAUUSD) and, new, for bitcoin (BTCUSD).\n\nHere you can learn about the product, read answers to frequently asked questions, place an order or contact support. Choose a section in the menu below 👇",
   "about": "🥇 CHAIN GOLD BOT EA is an Expert Advisor for automated gold trading.\n\nTrading platform: MetaTrader 5\nInstrument: XAUUSD (gold / US dollar)\nTimeframe: M1 (one-minute chart)\nSystem requirements: MetaTrader 5 terminal on Windows; a VPS is recommended so the terminal runs 24/7 without interruptions\nRecommended deposit: from $1,500 on a standard account, or a cent account with your broker\nLicense: lifetime, for one MetaTrader 5 account\n\nHow it works:\nThe EA uses breakout logic: it places a BUY STOP pending order above and a SELL STOP below the current price. When one order is triggered, the other is deleted. Every trade has an initial Stop Loss. When the price moves into profit, the EA moves the stop to breakeven (the entry price) and then manages the position with a trailing stop. A fixed Take Profit is disabled in the default settings.\nActual parameters depend on the EA settings and your broker's limitations.\n\nThe name refers to the image of a chain — links connected to each other.\n\n━━━━━━━━━━━━━━━━\n🆕 BTC SWING BREAKOUT EA — an Expert Advisor for bitcoin\n\nTrading platform: MetaTrader 5\nInstrument: BTCUSD\nLevel timeframe: M30\nStatus: early access — testing is ongoing\n\nHow it works:\nThe EA finds the latest confirmed swing points (swing high / swing low by the ZigZag indicator) on the M30 chart and places a BUY STOP pending order at the high and a SELL STOP at the low. Every trade has a Stop Loss and a Take Profit (150 and 1,000 USD from the entry price by default). Once the profit reaches 50 USD, a trailing stop kicks in. Unfilled pending orders are deleted after 72 hours; no new orders are placed when the spread is too wide. The lot is fixed or calculated from a risk percentage.\nActual parameters depend on the EA settings and your broker's limitations.",
   "features": "🥇 CHAIN GOLD BOT EA (XAUUSD):\n• Automated XAUUSD trading in MetaTrader 5\n• Works on the one-minute chart (M1)\n• Breakout logic: a pair of BUY STOP / SELL STOP pending orders, the remaining order is deleted once one is triggered\n• Initial Stop Loss for every trade\n• Breakeven stop and trailing stop\n• Fixed Take Profit — optional (disabled in the default settings)\n• Lifetime license for one MT5 account and free updates for one year\n\n🆕 BTC Swing Breakout EA (BTCUSD):\n• Breakout of ZigZag swing levels on M30: BUY STOP / SELL STOP\n• Stop Loss and Take Profit for every trade\n• Trailing stop after 50 USD of profit\n• Pending order expiry and spread filter\n• Fixed lot or risk-percentage lot",
   "getting_started": "1. Read the About section and the risk warning.\n2. Place an order in Price & purchase.\n3. Pay in USDT (TRC20) or BTC following the instructions and wait for confirmation.\n4. Once the payment is confirmed, the administrator (@GOLD_CHAIN_EA) will send you the EA file and instructions in a private message.\n5. Install the EA in MetaTrader 5: File → Open Data Folder → MQL5 → Experts, copy the file there and restart the terminal.\n6. Open the chart of the right instrument — XAUUSD M1 for the gold EA or BTCUSD M30 for the bitcoin EA — drag the EA onto the chart and enable Algo Trading.\n7. We recommend a VPS so the terminal runs 24/7.\n8. Start on a demo account and get familiar with the settings before trading real money.\n\n🔒 We never ask for passwords to your trading account, broker account or bank cards, seed phrases or SMS codes. Never send them to anyone — neither to this bot nor to support.",
   "payment_info": "Payment methods: cryptocurrency.\n\nUSDT (TRON network, TRC20):\nTCMJFg58b4wt1wusBQwnwiWJPQuBrrAvae\n\nBitcoin (BTC, Bitcoin network):\nbc1qc9pjdnjgrwknsrchtu0z2lvuqtn2fhrsyy9drn\n\n⚠️ Send USDT only via the TRON (TRC20) network and BTC only via the Bitcoin network: a transfer on another network may be lost. Please check the BTC amount with @GOLD_CHAIN_EA before paying.\nAfter the transfer, send @GOLD_CHAIN_EA your order number and the transaction hash (TxID).",
   "contacts": "Support: @GOLD_CHAIN_EA\nWorking hours: 08:00–22:00 (UTC+1)",
   "privacy": "For an order we store only: your name or Telegram profile, the selected plan, a contact for communication and your Telegram ID. This data is used only to process your order and contact you, and is not shared with third parties. To delete your data, write to @GOLD_CHAIN_EA. Retention period: 1 year; deletion on request.",
   "risk_warning": "⚠️ Trading on financial markets involves a high risk of losing money. Past results do not guarantee future results. The product is a software tool, not an investment recommendation; we are not a broker or an investment adviser. You make your own trading and risk decisions."
  },
  "it": {
   "product_name": "CHAIN GOLD BOT EA",
   "welcome": "Ciao! Questo è il bot di CHAIN GOLD BOT EA: Expert Advisor per MetaTrader 5 per l'oro (XAUUSD) e, novità, per il bitcoin (BTCUSD).\n\nQui puoi conoscere il prodotto, leggere le risposte alle domande frequenti, inviare una richiesta di acquisto o scrivere all'assistenza. Scegli una sezione dal menu qui sotto 👇",
   "about": "🥇 CHAIN GOLD BOT EA è un Expert Advisor per il trading automatico dell'oro.\n\nPiattaforma: MetaTrader 5\nStrumento: XAUUSD (oro / dollaro USA)\nTimeframe: M1 (grafico a un minuto)\nRequisiti di sistema: terminale MetaTrader 5 su Windows; si consiglia un VPS affinché il terminale funzioni 24 ore su 24 senza interruzioni\nDeposito consigliato: da 1.500 $ su un conto standard oppure un conto cent presso il tuo broker\nLicenza: a vita, per un conto MetaTrader 5\n\nCome funziona:\nL'EA opera con una logica di breakout: piazza un ordine pendente BUY STOP sopra e un SELL STOP sotto il prezzo attuale. Quando un ordine viene eseguito, l'altro viene cancellato. Ogni operazione ha uno Stop Loss iniziale. Quando il prezzo va in profitto, l'EA sposta lo stop a pareggio (al prezzo di ingresso) e poi gestisce la posizione con un trailing stop. Il Take Profit fisso è disattivato nelle impostazioni predefinite.\nI parametri effettivi dipendono dalle impostazioni dell'EA e dalle limitazioni del broker.\n\nIl nome richiama l'immagine di una catena: anelli collegati tra loro.\n\n━━━━━━━━━━━━━━━━\n🆕 BTC SWING BREAKOUT EA — Expert Advisor per il bitcoin\n\nPiattaforma: MetaTrader 5\nStrumento: BTCUSD\nTimeframe dei livelli: M30\nStato: accesso anticipato — i test sono in corso\n\nCome funziona:\nL'EA individua gli ultimi punti di inversione confermati (swing high / swing low con l'indicatore ZigZag) sul grafico M30 e piazza un ordine pendente BUY STOP sul massimo e un SELL STOP sul minimo. Ogni operazione ha Stop Loss e Take Profit (per impostazione predefinita 150 e 1.000 USD dal prezzo di ingresso). Quando il profitto raggiunge 50 USD si attiva il trailing stop. Gli ordini pendenti non eseguiti vengono cancellati dopo 72 ore; con uno spread troppo ampio non vengono piazzati nuovi ordini. Il lotto è fisso o calcolato da una percentuale di rischio.\nI parametri effettivi dipendono dalle impostazioni dell'EA e dalle limitazioni del broker.",
   "features": "🥇 CHAIN GOLD BOT EA (XAUUSD):\n• Trading automatico su XAUUSD in MetaTrader 5\n• Funziona sul grafico a un minuto (M1)\n• Logica di breakout: una coppia di ordini pendenti BUY STOP / SELL STOP, l'ordine rimanente viene cancellato dopo l'esecuzione\n• Stop Loss iniziale per ogni operazione\n• Stop a pareggio e trailing stop\n• Take Profit fisso facoltativo (disattivato nelle impostazioni predefinite)\n• Licenza a vita per un conto MT5 e aggiornamenti gratuiti per un anno\n\n🆕 BTC Swing Breakout EA (BTCUSD):\n• Breakout dei livelli di inversione ZigZag su M30: BUY STOP / SELL STOP\n• Stop Loss e Take Profit per ogni operazione\n• Trailing stop dopo 50 USD di profitto\n• Scadenza degli ordini pendenti e filtro sullo spread\n• Lotto fisso o in percentuale di rischio",
   "getting_started": "1. Leggi la sezione Il prodotto e l'avvertenza sui rischi.\n2. Invia una richiesta in Prezzo e acquisto.\n3. Paga in USDT (TRC20) o BTC seguendo le istruzioni e attendi la conferma.\n4. Dopo la conferma del pagamento, l'amministratore (@GOLD_CHAIN_EA) ti invierà in privato il file dell'EA e le istruzioni.\n5. Installa l'EA in MetaTrader 5: File → Apri cartella dati → MQL5 → Experts, copia lì il file e riavvia il terminale.\n6. Apri il grafico dello strumento giusto — XAUUSD M1 per l'EA sull'oro o BTCUSD M30 per l'EA sul bitcoin — trascina l'EA sul grafico e attiva il Trading algoritmico.\n7. Consigliamo un VPS affinché il terminale funzioni 24 ore su 24.\n8. Inizia con un conto demo e prendi confidenza con le impostazioni prima di usare denaro reale.\n\n🔒 Non chiediamo mai password del conto di trading, dell'area personale del broker o delle carte bancarie, seed phrase o codici SMS. Non inviarli a nessuno: né a questo bot né all'assistenza.",
   "payment_info": "Metodi di pagamento: criptovalute.\n\nUSDT (rete TRON, TRC20):\nTCMJFg58b4wt1wusBQwnwiWJPQuBrrAvae\n\nBitcoin (BTC, rete Bitcoin):\nbc1qc9pjdnjgrwknsrchtu0z2lvuqtn2fhrsyy9drn\n\n⚠️ Invia USDT solo sulla rete TRON (TRC20) e BTC solo sulla rete Bitcoin: un trasferimento su un'altra rete potrebbe andare perso. Verifica l'importo in BTC con @GOLD_CHAIN_EA prima di pagare.\nDopo il trasferimento, invia a @GOLD_CHAIN_EA il numero della richiesta e l'hash della transazione (TxID).",
   "contacts": "Assistenza: @GOLD_CHAIN_EA\nOrari: 08:00–22:00 (UTC+1)",
   "privacy": "Per una richiesta conserviamo solo: nome o profilo Telegram, piano scelto, un contatto e il tuo ID Telegram. Questi dati servono solo a gestire la richiesta e a contattarti e non vengono ceduti a terzi. Per cancellare i tuoi dati scrivi a @GOLD_CHAIN_EA. Periodo di conservazione: 1 anno; cancellazione su richiesta.",
   "risk_warning": "⚠️ Il trading sui mercati finanziari comporta un elevato rischio di perdita del capitale. I risultati passati non garantiscono quelli futuri. Il prodotto è uno strumento software, non una raccomandazione di investimento; non siamo un broker né un consulente finanziario. Le decisioni di trading e di rischio sono solo tue."
  },
  "de": {
   "product_name": "CHAIN GOLD BOT EA",
   "welcome": "Hallo! Das ist der Bot von CHAIN GOLD BOT EA – Expert Advisors für MetaTrader 5: für Gold (XAUUSD) und, neu, für Bitcoin (BTCUSD).\n\nHier erfahren Sie mehr über das Produkt, finden Antworten auf häufige Fragen, können eine Kaufanfrage senden oder den Support kontaktieren. Wählen Sie einen Bereich im Menü unten 👇",
   "about": "🥇 CHAIN GOLD BOT EA ist ein Expert Advisor für den automatisierten Goldhandel.\n\nHandelsplattform: MetaTrader 5\nInstrument: XAUUSD (Gold / US-Dollar)\nZeitrahmen: M1 (Ein-Minuten-Chart)\nSystemanforderungen: MetaTrader-5-Terminal unter Windows; ein VPS wird empfohlen, damit das Terminal rund um die Uhr ohne Unterbrechung läuft\nEmpfohlene Einlage: ab 1.500 $ auf einem Standardkonto oder ein Cent-Konto bei Ihrem Broker\nLizenz: unbefristet, für ein MetaTrader-5-Konto\n\nFunktionsweise:\nDer EA handelt nach einer Breakout-Logik: Er platziert eine BUY-STOP-Order oberhalb und eine SELL-STOP-Order unterhalb des aktuellen Preises. Wird eine Order ausgelöst, wird die andere gelöscht. Jeder Trade hat einen anfänglichen Stop Loss. Läuft der Preis ins Plus, verschiebt der EA den Stop auf Break-even (Einstiegspreis) und führt die Position anschließend mit einem Trailing Stop. Ein fester Take Profit ist in den Standardeinstellungen deaktiviert.\nDie tatsächlichen Parameter hängen von den EA-Einstellungen und den Einschränkungen des Brokers ab.\n\nDer Name verweist auf das Bild einer Kette – miteinander verbundene Glieder.\n\n━━━━━━━━━━━━━━━━\n🆕 BTC SWING BREAKOUT EA – ein Expert Advisor für Bitcoin\n\nHandelsplattform: MetaTrader 5\nInstrument: BTCUSD\nZeitrahmen der Levels: M30\nStatus: Early Access – die Tests laufen noch\n\nFunktionsweise:\nDer EA ermittelt die letzten bestätigten Umkehrpunkte (Swing High / Swing Low per ZigZag-Indikator) auf dem M30-Chart und platziert eine BUY-STOP-Order am Hoch und eine SELL-STOP-Order am Tief. Jeder Trade hat Stop Loss und Take Profit (standardmäßig 150 und 1.000 USD vom Einstiegspreis). Ab 50 USD Gewinn greift ein Trailing Stop. Nicht ausgeführte Pending Orders werden nach 72 Stunden gelöscht; bei zu großem Spread werden keine neuen Orders platziert. Die Lotgröße ist fest oder wird aus einem Risikoprozentsatz berechnet.\nDie tatsächlichen Parameter hängen von den EA-Einstellungen und den Einschränkungen des Brokers ab.",
   "features": "🥇 CHAIN GOLD BOT EA (XAUUSD):\n• Automatisierter XAUUSD-Handel in MetaTrader 5\n• Arbeitet auf dem Ein-Minuten-Chart (M1)\n• Breakout-Logik: ein Paar BUY-STOP- / SELL-STOP-Orders, die verbleibende Order wird nach Auslösung gelöscht\n• Anfänglicher Stop Loss für jeden Trade\n• Break-even-Stop und Trailing Stop\n• Fester Take Profit optional (in den Standardeinstellungen deaktiviert)\n• Unbefristete Lizenz für ein MT5-Konto und kostenlose Updates für ein Jahr\n\n🆕 BTC Swing Breakout EA (BTCUSD):\n• Ausbruch über ZigZag-Umkehrlevels auf M30: BUY STOP / SELL STOP\n• Stop Loss und Take Profit für jeden Trade\n• Trailing Stop ab 50 USD Gewinn\n• Ablaufzeit für Pending Orders und Spread-Filter\n• Feste Lotgröße oder nach Risikoprozent",
   "getting_started": "1. Lesen Sie den Bereich „Über das Produkt“ und den Risikohinweis.\n2. Senden Sie eine Anfrage unter „Preis & Kauf“.\n3. Bezahlen Sie in USDT (TRC20) oder BTC gemäß der Anleitung und warten Sie auf die Bestätigung.\n4. Nach der Zahlungsbestätigung sendet Ihnen der Administrator (@GOLD_CHAIN_EA) die EA-Datei und die Anleitung per Privatnachricht.\n5. Installieren Sie den EA in MetaTrader 5: Datei → Dateiordner öffnen → MQL5 → Experts, kopieren Sie die Datei dorthin und starten Sie das Terminal neu.\n6. Öffnen Sie den Chart des passenden Instruments – XAUUSD M1 für den Gold-EA oder BTCUSD M30 für den Bitcoin-EA –, ziehen Sie den EA auf den Chart und aktivieren Sie „Algo Trading“.\n7. Wir empfehlen einen VPS, damit das Terminal rund um die Uhr läuft.\n8. Beginnen Sie mit einem Demokonto und machen Sie sich mit den Einstellungen vertraut, bevor Sie mit echtem Geld handeln.\n\n🔒 Wir fragen niemals nach Passwörtern für Ihr Handelskonto, Ihr Broker-Konto oder Bankkarten, nach Seed-Phrasen oder SMS-Codes. Senden Sie diese niemandem – weder an diesen Bot noch an den Support.",
   "payment_info": "Zahlungsmethoden: Kryptowährung.\n\nUSDT (TRON-Netzwerk, TRC20):\nTCMJFg58b4wt1wusBQwnwiWJPQuBrrAvae\n\nBitcoin (BTC, Bitcoin-Netzwerk):\nbc1qc9pjdnjgrwknsrchtu0z2lvuqtn2fhrsyy9drn\n\n⚠️ Senden Sie USDT nur über das TRON-Netzwerk (TRC20) und BTC nur über das Bitcoin-Netzwerk: Eine Überweisung in einem anderen Netzwerk kann verloren gehen. Klären Sie den BTC-Betrag vor der Zahlung mit @GOLD_CHAIN_EA.\nSenden Sie @GOLD_CHAIN_EA nach der Überweisung Ihre Anfragenummer und den Transaktions-Hash (TxID).",
   "contacts": "Support: @GOLD_CHAIN_EA\nErreichbarkeit: 08:00–22:00 (UTC+1)",
   "privacy": "Für eine Anfrage speichern wir nur: Ihren Namen oder Ihr Telegram-Profil, den gewählten Tarif, einen Kontakt und Ihre Telegram-ID. Diese Daten werden nur zur Bearbeitung der Anfrage und zur Kontaktaufnahme verwendet und nicht an Dritte weitergegeben. Um Ihre Daten zu löschen, schreiben Sie an @GOLD_CHAIN_EA. Speicherdauer: 1 Jahr; Löschung auf Anfrage.",
   "risk_warning": "⚠️ Der Handel an den Finanzmärkten ist mit einem hohen Verlustrisiko verbunden. Vergangene Ergebnisse garantieren keine zukünftigen Ergebnisse. Das Produkt ist ein Software-Werkzeug und keine Anlageempfehlung; wir sind weder Broker noch Anlageberater. Handels- und Risikoentscheidungen treffen Sie selbst."
  }
 },
 "faq": {
  "ru": [
   {
    "q": "Гарантирует ли советник прибыль?",
    "a": "Нет. Никакой торговый советник не может гарантировать прибыль или отсутствие убытков. Торговля сопряжена с риском потери средств, прошлые результаты не гарантируют будущих."
   },
   {
    "q": "Для какой платформы и инструмента предназначен советник?",
    "a": "Оба советника работают в MetaTrader 5. CHAIN GOLD BOT EA торгует только XAUUSD (золото) на графике M1, BTC Swing Breakout EA — BTCUSD (биткоин), уровни строятся на графике M30."
   },
   {
    "q": "Нужен ли VPS?",
    "a": "Рекомендуется. Советник работает, только пока запущен терминал MetaTrader 5, поэтому VPS позволяет торговать круглосуточно без зависимости от вашего компьютера и интернета."
   },
   {
    "q": "Как проходит оплата?",
    "a": "Вы оставляете заявку и оплачиваете её в USDT (TRC20) или BTC по инструкции. После проверки платежа администратор подтверждает заявку и присылает советник с инструкцией в личные сообщения."
   },
   {
    "q": "Какой нужен депозит и тип счёта?",
    "a": "Рекомендуется от 1500 $ на стандартном счёте либо центовый счёт у вашего брокера. Учитывайте условия и ограничения своего брокера."
   },
   {
    "q": "Как торгует золотой советник (XAUUSD) и есть ли Stop Loss?",
    "a": "Советник работает по пробойной логике: ставит BUY STOP выше и SELL STOP ниже цены, после срабатывания одного ордера второй удаляется. У каждой сделки есть начальный Stop Loss; при движении в прибыль стоп переносится в безубыток, затем работает трейлинг-стоп. Фиксированный Take Profit по умолчанию выключен. Фактические параметры зависят от настроек и брокера."
   },
   {
    "q": "Как торгует советник для BTCUSD?",
    "a": "BTC Swing Breakout EA ищет на графике M30 последние подтверждённые точки разворота (индикатор ZigZag) и ставит BUY STOP на максимуме и SELL STOP на минимуме. У каждой сделки есть Stop Loss и Take Profit (по умолчанию 150 и 1000 USD), после 50 USD прибыли работает трейлинг-стоп. Это ранний доступ: тестирование продолжается. Начинайте с демо-счёта и небольшого риска."
   },
   {
    "q": "На сколько счетов лицензия и есть ли обновления?",
    "a": "CHAIN GOLD BOT EA: лицензия бессрочная, на один счёт MetaTrader 5, обновления бесплатны в течение года. Условия лицензии BTC Swing Breakout EA уточняйте у @GOLD_CHAIN_EA."
   },
   {
    "q": "Нужно ли передавать пароль от торгового счёта?",
    "a": "Нет. Мы никогда не просим пароли, seed-фразы, коды из SMS или доступ к вашему счёту. Если кто-то просит их от нашего имени — это мошенники."
   },
   {
    "q": "Можно ли получить индивидуальную рекомендацию, как торговать?",
    "a": "Нет. Мы не даём индивидуальных финансовых или инвестиционных рекомендаций. Поддержка помогает только с покупкой, установкой и работой продукта."
   },
   {
    "q": "Как отписаться от рассылки?",
    "a": "Отправьте команду /stop — и мы перестанем присылать новости."
   }
  ],
  "en": [
   {
    "q": "Does the EA guarantee profit?",
    "a": "No. No Expert Advisor can guarantee profit or the absence of losses. Trading involves a risk of losing money; past results do not guarantee future results."
   },
   {
    "q": "Which platform and instrument is the EA for?",
    "a": "Both EAs run in MetaTrader 5. CHAIN GOLD BOT EA trades only XAUUSD (gold) on the M1 chart; BTC Swing Breakout EA trades BTCUSD (bitcoin) with levels built on the M30 chart."
   },
   {
    "q": "Do I need a VPS?",
    "a": "It is recommended. The EA works only while the MetaTrader 5 terminal is running, so a VPS lets it trade 24/7 regardless of your computer and internet connection."
   },
   {
    "q": "How does payment work?",
    "a": "You place an order and pay in USDT (TRC20) or BTC following the instructions. After verifying the payment, the administrator confirms the order and sends you the EA with instructions in a private message."
   },
   {
    "q": "What deposit and account type do I need?",
    "a": "From $1,500 on a standard account, or a cent account with your broker, is recommended. Take your broker's conditions and limitations into account."
   },
   {
    "q": "How does the gold EA (XAUUSD) trade, and is there a Stop Loss?",
    "a": "The EA uses breakout logic: it places a BUY STOP above and a SELL STOP below the price; once one order is triggered, the other is deleted. Every trade has an initial Stop Loss; when the price moves into profit, the stop is moved to breakeven and then a trailing stop takes over. A fixed Take Profit is disabled by default. Actual parameters depend on the settings and the broker."
   },
   {
    "q": "How does the BTCUSD EA trade?",
    "a": "BTC Swing Breakout EA looks for the latest confirmed swing points (ZigZag indicator) on the M30 chart and places a BUY STOP at the high and a SELL STOP at the low. Every trade has a Stop Loss and a Take Profit (150 and 1,000 USD by default); after 50 USD of profit a trailing stop takes over. This is early access: testing is ongoing. Start on a demo account with low risk."
   },
   {
    "q": "How many accounts does the license cover, and are updates included?",
    "a": "CHAIN GOLD BOT EA: lifetime license for one MetaTrader 5 account, free updates for one year. For BTC Swing Breakout EA license terms, ask @GOLD_CHAIN_EA."
   },
   {
    "q": "Do I need to share my trading account password?",
    "a": "No. We never ask for passwords, seed phrases, SMS codes or access to your account. If someone asks for them on our behalf, they are scammers."
   },
   {
    "q": "Can I get personal advice on how to trade?",
    "a": "No. We do not provide individual financial or investment advice. Support only helps with purchasing, installing and running the product."
   },
   {
    "q": "How do I unsubscribe from news?",
    "a": "Send the /stop command and we will stop sending you news."
   }
  ],
  "it": [
   {
    "q": "L'EA garantisce profitti?",
    "a": "No. Nessun Expert Advisor può garantire profitti o l'assenza di perdite. Il trading comporta il rischio di perdere denaro; i risultati passati non garantiscono quelli futuri."
   },
   {
    "q": "Per quale piattaforma e strumento è pensato l'EA?",
    "a": "Entrambi gli EA funzionano in MetaTrader 5. CHAIN GOLD BOT EA opera solo su XAUUSD (oro) sul grafico M1; BTC Swing Breakout EA opera su BTCUSD (bitcoin) con livelli costruiti sul grafico M30."
   },
   {
    "q": "Serve un VPS?",
    "a": "È consigliato. L'EA funziona solo finché il terminale MetaTrader 5 è in esecuzione, quindi un VPS permette di operare 24 ore su 24 indipendentemente dal tuo computer e dalla connessione."
   },
   {
    "q": "Come funziona il pagamento?",
    "a": "Invii una richiesta e paghi in USDT (TRC20) o BTC seguendo le istruzioni. Dopo aver verificato il pagamento, l'amministratore conferma la richiesta e ti invia in privato l'EA con le istruzioni."
   },
   {
    "q": "Quale deposito e tipo di conto servono?",
    "a": "Si consigliano almeno 1.500 $ su un conto standard oppure un conto cent presso il tuo broker. Tieni conto delle condizioni e dei limiti del tuo broker."
   },
   {
    "q": "Come opera l'EA sull'oro (XAUUSD) e c'è uno Stop Loss?",
    "a": "L'EA usa una logica di breakout: piazza un BUY STOP sopra e un SELL STOP sotto il prezzo; quando un ordine viene eseguito, l'altro viene cancellato. Ogni operazione ha uno Stop Loss iniziale; quando il prezzo va in profitto lo stop viene spostato a pareggio, poi entra in funzione il trailing stop. Il Take Profit fisso è disattivato per impostazione predefinita. I parametri effettivi dipendono dalle impostazioni e dal broker."
   },
   {
    "q": "Come opera l'EA su BTCUSD?",
    "a": "BTC Swing Breakout EA cerca sul grafico M30 gli ultimi punti di inversione confermati (indicatore ZigZag) e piazza un BUY STOP sul massimo e un SELL STOP sul minimo. Ogni operazione ha Stop Loss e Take Profit (per impostazione predefinita 150 e 1.000 USD); dopo 50 USD di profitto entra in funzione il trailing stop. È un accesso anticipato: i test sono in corso. Inizia con un conto demo e un rischio basso."
   },
   {
    "q": "Per quanti conti vale la licenza e gli aggiornamenti sono inclusi?",
    "a": "CHAIN GOLD BOT EA: licenza a vita per un conto MetaTrader 5, aggiornamenti gratuiti per un anno. Per le condizioni di licenza di BTC Swing Breakout EA chiedi a @GOLD_CHAIN_EA."
   },
   {
    "q": "Devo fornire la password del conto di trading?",
    "a": "No. Non chiediamo mai password, seed phrase, codici SMS o accesso al tuo conto. Se qualcuno li chiede a nostro nome, si tratta di truffatori."
   },
   {
    "q": "Posso ricevere consigli personalizzati su come fare trading?",
    "a": "No. Non forniamo consulenza finanziaria o di investimento personalizzata. L'assistenza aiuta solo con l'acquisto, l'installazione e il funzionamento del prodotto."
   },
   {
    "q": "Come annullo l'iscrizione alle novità?",
    "a": "Invia il comando /stop e smetteremo di inviarti novità."
   }
  ],
  "de": [
   {
    "q": "Garantiert der EA Gewinne?",
    "a": "Nein. Kein Expert Advisor kann Gewinne oder das Ausbleiben von Verlusten garantieren. Trading ist mit dem Risiko von Verlusten verbunden; vergangene Ergebnisse garantieren keine zukünftigen."
   },
   {
    "q": "Für welche Plattform und welches Instrument ist der EA gedacht?",
    "a": "Beide EAs laufen in MetaTrader 5. CHAIN GOLD BOT EA handelt ausschließlich XAUUSD (Gold) auf dem M1-Chart; BTC Swing Breakout EA handelt BTCUSD (Bitcoin) mit Levels aus dem M30-Chart."
   },
   {
    "q": "Brauche ich einen VPS?",
    "a": "Er wird empfohlen. Der EA arbeitet nur, solange das MetaTrader-5-Terminal läuft – mit einem VPS kann er rund um die Uhr handeln, unabhängig von Ihrem Computer und Ihrer Internetverbindung."
   },
   {
    "q": "Wie funktioniert die Bezahlung?",
    "a": "Sie senden eine Anfrage und bezahlen in USDT (TRC20) oder BTC gemäß der Anleitung. Nach Prüfung der Zahlung bestätigt der Administrator die Anfrage und sendet Ihnen den EA mit Anleitung per Privatnachricht."
   },
   {
    "q": "Welche Einlage und welcher Kontotyp sind nötig?",
    "a": "Empfohlen werden ab 1.500 $ auf einem Standardkonto oder ein Cent-Konto bei Ihrem Broker. Berücksichtigen Sie die Bedingungen und Einschränkungen Ihres Brokers."
   },
   {
    "q": "Wie handelt der Gold-EA (XAUUSD) und gibt es einen Stop Loss?",
    "a": "Der EA nutzt eine Breakout-Logik: Er platziert eine BUY-STOP-Order oberhalb und eine SELL-STOP-Order unterhalb des Preises; wird eine ausgelöst, wird die andere gelöscht. Jeder Trade hat einen anfänglichen Stop Loss; läuft der Preis ins Plus, wird der Stop auf Break-even gesetzt, danach greift ein Trailing Stop. Ein fester Take Profit ist standardmäßig deaktiviert. Die tatsächlichen Parameter hängen von den Einstellungen und vom Broker ab."
   },
   {
    "q": "Wie handelt der BTCUSD-EA?",
    "a": "BTC Swing Breakout EA sucht auf dem M30-Chart die letzten bestätigten Umkehrpunkte (ZigZag-Indikator) und platziert eine BUY-STOP-Order am Hoch und eine SELL-STOP-Order am Tief. Jeder Trade hat Stop Loss und Take Profit (standardmäßig 150 und 1.000 USD); ab 50 USD Gewinn greift ein Trailing Stop. Dies ist Early Access: Die Tests laufen noch. Beginnen Sie mit einem Demokonto und geringem Risiko."
   },
   {
    "q": "Für wie viele Konten gilt die Lizenz und sind Updates enthalten?",
    "a": "CHAIN GOLD BOT EA: unbefristete Lizenz für ein MetaTrader-5-Konto, kostenlose Updates für ein Jahr. Lizenzbedingungen für BTC Swing Breakout EA bei @GOLD_CHAIN_EA erfragen."
   },
   {
    "q": "Muss ich das Passwort meines Handelskontos weitergeben?",
    "a": "Nein. Wir fragen niemals nach Passwörtern, Seed-Phrasen, SMS-Codes oder Zugang zu Ihrem Konto. Wer in unserem Namen danach fragt, ist ein Betrüger."
   },
   {
    "q": "Kann ich eine persönliche Empfehlung zum Trading bekommen?",
    "a": "Nein. Wir geben keine individuelle Finanz- oder Anlageberatung. Der Support hilft nur beim Kauf, bei der Installation und beim Betrieb des Produkts."
   },
   {
    "q": "Wie bestelle ich die News ab?",
    "a": "Senden Sie den Befehl /stop, und wir senden Ihnen keine News mehr."
   }
  ]
 },
 "tariffs": [
  {
   "code": "basic",
   "price": "199",
   "currency": "USD",
   "title": {
    "ru": "Лицензия CHAIN GOLD BOT EA (XAUUSD)",
    "en": "CHAIN GOLD BOT EA license (XAUUSD)",
    "it": "Licenza CHAIN GOLD BOT EA (XAUUSD)",
    "de": "CHAIN GOLD BOT EA Lizenz (XAUUSD)"
   },
   "description": {
    "ru": "Бессрочная лицензия на один счёт MetaTrader 5 (XAUUSD), бесплатные обновления в течение года",
    "en": "Lifetime license for one MetaTrader 5 account (XAUUSD), free updates for one year",
    "it": "Licenza a vita per un conto MetaTrader 5 (XAUUSD), aggiornamenti gratuiti per un anno",
    "de": "Unbefristete Lizenz für ein MetaTrader-5-Konto (XAUUSD), kostenlose Updates für ein Jahr"
   }
  },
  {
   "code": "btc",
   "price": "399",
   "currency": "USD",
   "title": {
    "ru": "Лицензия BTC Swing Breakout EA (BTCUSD)",
    "en": "BTC Swing Breakout EA license (BTCUSD)",
    "it": "Licenza BTC Swing Breakout EA (BTCUSD)",
    "de": "BTC Swing Breakout EA Lizenz (BTCUSD)"
   },
   "description": {
    "ru": "Советник для MetaTrader 5 (BTCUSD). Ранний доступ: тестирование продолжается. Условия лицензии уточняйте у @GOLD_CHAIN_EA",
    "en": "Expert Advisor for MetaTrader 5 (BTCUSD). Early access: testing is ongoing. Ask @GOLD_CHAIN_EA for license terms",
    "it": "Expert Advisor per MetaTrader 5 (BTCUSD). Accesso anticipato: i test sono in corso. Condizioni di licenza: chiedi a @GOLD_CHAIN_EA",
    "de": "Expert Advisor für MetaTrader 5 (BTCUSD). Early Access: Die Tests laufen noch. Lizenzbedingungen bei @GOLD_CHAIN_EA erfragen"
   }
  }
 ],
 "wallets": [
  {
   "label": "USDT · TRON (TRC20)",
   "address": "TCMJFg58b4wt1wusBQwnwiWJPQuBrrAvae"
  },
  {
   "label": "Bitcoin · BTC",
   "address": "bc1qc9pjdnjgrwknsrchtu0z2lvuqtn2fhrsyy9drn"
  }
 ],
 "bot_username": "Gold_chain_ea_bot"
};
