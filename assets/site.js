/* =================================================================
   MELLOUSSA ASSISTANCE — Remorquage & dépannage auto Tanger
   i18n (FR · AR · EN) + mobile-app interactions
   ================================================================= */

const PHONE = "+212668195992";
const WA = "212668195992";

const I18N = {
  fr:{
    "nav.services":"Services","nav.how":"Comment ça marche","nav.zones":"Zones","nav.reviews":"Avis","nav.contact":"Contact","nav.home":"Accueil",
    "cs.veh":"Véhicule","cs.incident":"Incident","cs.time":"Temps réel","cs.result":"Résultat","cs.verified":"Intervention vérifiée",
    "zn.cv":"Centre ville","zn.ci":"Corniche & Iberia","zn.mk":"Médina & Kasbah","zn.cs":"Cap Spartel","zn.tm":"Tanger Med","zn.ap":"Aéroport","zn.mal":"Malabata",
    "dock.call":"Appeler","dock.wa":"WhatsApp","dock.express":"Urgence",
    "cta.truck":"Appeler une dépanneuse","cta.wa":"WhatsApp","cta.express":"Demande express",

    "hero.status":"Dépanneuse disponible · Tanger",
    "hero.title":"Remorquage & dépannage auto à Tanger,","hero.title.accent":"24h/24.",
    "hero.sub":"En panne, accident, batterie à plat ou pneu crevé&nbsp;? Une dépanneuse arrive vers vous en moins de 30&nbsp;minutes, partout à Tanger.",
    "trust.eta.b":"&lt; 30 min","trust.eta.l":"Arrivée moyenne",
    "trust.open.b":"24/7","trust.open.l":"Jour & nuit",
    "trust.rating.l":"480+ avis",

    "svc.eyebrow":"Assistance routière","svc.title":"Une dépanneuse pour chaque situation.",
    "svc.lead":"Voiture, 4x4, utilitaire ou moto — nous intervenons sur place ou nous remorquons.",
    "svc.tow.t":"Remorquage","svc.tow.d":"Véhicule en panne ou accidenté, remorqué en sécurité.",
    "svc.bat.t":"Batterie / démarrage","svc.bat.d":"Batterie à plat&nbsp;? Démarrage immédiat sur place.",
    "svc.tire.t":"Pneu crevé","svc.tire.d":"Changement de roue ou réparation rapide sur place.",
    "svc.fuel.t":"Panne de carburant","svc.fuel.d":"Livraison de carburant là où vous êtes.",
    "svc.key.t":"Clés enfermées","svc.key.d":"Ouverture de véhicule sans dégât.",
    "svc.onsite.t":"Dépannage sur place","svc.onsite.d":"Petite panne réparée sans remorquage si possible.",
    "svc.accident.t":"Accident / enlèvement","svc.accident.d":"Assistance et enlèvement après accident.",
    "svc.transport.t":"Transport véhicule","svc.transport.d":"Transport longue distance, véhicule neuf ou HS.",
    "svc.more":"Détails",

    "how.eyebrow":"Comment ça marche","how.title":"Une dépanneuse en 3 étapes.",
    "how.s1.t":"Vous appelez","how.s1.d":"Un opérateur répond immédiatement, 24h/24.",
    "how.s2.t":"On vous localise","how.s2.d":"On envoie la dépanneuse la plus proche de vous.",
    "how.s3.t":"On arrive vite","how.s3.d":"Arrivée sous 30 min en moyenne, avec le matériel adapté.",

    "why.eyebrow":"Pourquoi Melloussa","why.title":"L'assistance auto en qui vous pouvez avoir confiance.",
    "why.lead":"Une équipe tangéroise joignable à toute heure, avec des engagements clairs.",
    "why.1.t":"Rapidité réelle","why.1.d":"Dépanneuses positionnées dans toute la ville et sur les axes.",
    "why.2.t":"Réponse immédiate","why.2.d":"Un opérateur vous répond en moins de deux sonneries, jour et nuit.",
    "why.3.t":"Tous véhicules","why.3.d":"Voiture, 4x4, utilitaire, moto — matériel adapté.",
    "why.4.t":"Dépanneurs assurés","why.4.d":"Professionnels expérimentés et assurés. Véhicule en sécurité.",

    "cov.title":"Tanger, ville & grands axes","cov.sub":"Centre, quartiers, rocade, route de Rabat et zone aéroport.",
    "cov.eta.1.b":"&lt; 30 min","cov.eta.1.l":"Délai moyen",
    "cov.eta.2.b":"24/7","cov.eta.2.l":"Jours fériés inclus",
    "cov.eta.3.b":"Local","cov.eta.3.l":"Équipe tangéroise",

    "rv.eyebrow":"Avis clients","rv.title":"Plus de 480 conducteurs nous font confiance.",
    "rv.summary":"Note moyenne · avis vérifiés",
    "rv.1.q":"Tombé en panne sur la rocade à minuit. Dépanneuse arrivée en 25 minutes, voiture remorquée jusqu'au garage. Service impeccable.",
    "rv.1.n":"Karim E.","rv.1.r":"Rocade de Tanger",
    "rv.2.q":"Batterie morte devant chez moi un dimanche. Démarrage en 5 minutes, équipe ponctuelle et soignée. Très pro.",
    "rv.2.n":"Hanae L.","rv.2.r":"Iberia",
    "rv.3.q":"Pneu éclaté avec les enfants dans la voiture. Ils sont venus vite et ont changé la roue sur place. Merci&nbsp;!",
    "rv.3.n":"Mohamed T.","rv.3.r":"Route de Rabat",

    "zn.eyebrow":"Zones d'intervention","zn.title":"Partout à Tanger et sur les grands axes.",
    "zn.lead":"En ville comme sur l'autoroute, une dépanneuse Melloussa intervient rapidement près de vous.",
    "zn.cta":"Votre secteur",

    "faq.eyebrow":"Questions fréquentes","faq.title":"Tout ce qu'il faut savoir.",
    "faq.1.q":"En combien de temps la dépanneuse arrive&nbsp;?","faq.1.a":"En moyenne sous 30 minutes selon votre position et le trafic. Sur les grands axes, donnez le point kilométrique pour accélérer. Nos opérateurs comprennent aussi le français-marocain&nbsp;: «&nbsp;tomobil ma bdat ch&nbsp;», «&nbsp;batri taht lia&nbsp;», «&nbsp;depannage tomobil tanger&nbsp;» — on vous répond immédiatement.",
    "faq.2.q":"Intervenez-vous la nuit et les jours fériés&nbsp;?","faq.2.a":"Oui, 24h/24 et 7j/7, y compris la nuit, le week-end et les jours fériés.",
    "faq.3.q":"Intervenez-vous sur l'autoroute et les grands axes&nbsp;?","faq.3.a":"Oui, en ville comme sur la rocade, la route de Rabat, la route de Tétouan et les voies rapides — y compris la zone Melloussa, la TAC et l'autoroute A1 vers Tanger Med («&nbsp;sokours auto autoroute Melloussa&nbsp;», «&nbsp;grue Tanger Med&nbsp;»). Donnez le point kilométrique pour accélérer notre arrivée.",
    "faq.4.q":"Quels véhicules pouvez-vous remorquer&nbsp;?","faq.4.a":"Voitures, 4x4, utilitaires et motos. Précisez le véhicule à l'appel pour envoyer la dépanneuse adaptée.",
    "faq.5.q":"Dois-je rester près de mon véhicule&nbsp;?","faq.5.a":"Si vous êtes en sécurité, oui&nbsp;: restez à proximité pour accueillir le dépanneur. Sur une voie rapide, placez-vous derrière la glissière et patientez en lieu sûr.",

    "ft.tag":"Remorquage et dépannage auto de confiance à Tanger. Assistance routière 24h/24 et 7j/7.",
    "ft.services":"Services","ft.zones":"Zones","ft.cta":"Urgence 24/7","ft.rights":"Tous droits réservés.","ft.legal":"Mentions légales","ft.privacy":"Confidentialité",

    /* Emergency page */
    "em.badge":"Intervention immédiate","em.title":"Demander une dépanneuse","em.sub":"Le plus rapide&nbsp;: appelez. Sinon, envoyez votre demande en 3 touches.",
    "em.callnow":"Appeler maintenant · 06 68 19 59 92","em.or":"ou envoyez votre demande",
    "em.q1":"1 · Quel est le problème&nbsp;?","em.q2":"2 · Où êtes-vous&nbsp;?","em.q3":"3 · Votre numéro",
    "em.locate":"Utiliser ma position","em.loc.ph":"Adresse, route ou point de repère","em.phone.ph":"Votre numéro de téléphone",
    "em.veh":"Type de véhicule","em.send":"Envoyer sur WhatsApp","em.note":"Réponse immédiate · la dépanneuse la plus proche est envoyée",
    "em.eta.b":"&lt; 30 min","em.eta.l":"Arrivée moyenne","em.247.b":"24/7","em.247.l":"Jour & nuit","em.safe.b":"Assurée","em.safe.l":"Voiture protégée",
    "em.loc.ok":"Position détectée ✓","em.loc.fail":"Saisissez votre adresse manuellement",

    /* Contact page */
    "ct.badge":"Contact","ct.title":"Joindre Melloussa Assistance","ct.sub":"Pour une urgence, appelez. Pour une demande planifiée, écrivez-nous.",
    "ct.call":"Appeler","ct.call.v":"06 68 19 59 92","ct.wa":"WhatsApp","ct.wa.v":"Écrire un message","ct.route":"Itinéraire","ct.route.v":"Nous localiser","ct.email":"E-mail","ct.email.v":"contact@melloussa.ma",
    "ct.hours.l":"Horaires","ct.hours.v":"24h/24 · 7j/7 · jours fériés inclus","ct.zone.l":"Zone","ct.zone.v":"Tanger & grands axes",
    "ct.form.title":"Demander un rappel","ct.f.name":"Nom","ct.f.phone":"Téléphone","ct.f.msg":"Votre demande","ct.f.msg.ph":"Ex. remorquage d'une berline, route de Tétouan…","ct.f.send":"Être rappelé",
  },

  ar:{
    "nav.services":"الخدمات","nav.how":"كيف نعمل","nav.zones":"المناطق","nav.reviews":"الآراء","nav.contact":"اتصل بنا","nav.home":"الرئيسية",
    "cs.veh":"المركبة","cs.incident":"العطل","cs.time":"الوقت الفعلي","cs.result":"النتيجة","cs.verified":"تدخّل موثَّق",
    "zn.cv":"وسط المدينة","zn.ci":"الكورنيش وإيبيريا","zn.mk":"المدينة العتيقة والقصبة","zn.cs":"رأس سبارطيل","zn.tm":"طنجة المتوسط","zn.ap":"المطار","zn.mal":"مالاباطا",
    "dock.call":"اتصل","dock.wa":"واتساب","dock.express":"طوارئ",
    "cta.truck":"اتصل بشاحنة السحب","cta.wa":"واتساب","cta.express":"طلب سريع",

    "hero.status":"شاحنة سحب متوفرة · طنجة",
    "hero.title":"سحب وديباناج السيارات في طنجة،","hero.title.accent":"24/24.",
    "hero.sub":"عطل، حادث، بطارية فارغة أو عجلة مثقوبة؟ تصلكم شاحنة السحب في أقل من 30 دقيقة، في كل أنحاء طنجة.",
    "trust.eta.b":"&lt; 30 د","trust.eta.l":"متوسط الوصول",
    "trust.open.b":"24/7","trust.open.l":"ليلاً ونهاراً",
    "trust.rating.l":"+480 تقييم",

    "svc.eyebrow":"المساعدة الطرقية","svc.title":"شاحنة سحب لكل حالة.",
    "svc.lead":"سيارة، دفع رباعي، نفعية أو دراجة — نتدخّل في المكان أو نقوم بالسحب.",
    "svc.tow.t":"السحب","svc.tow.d":"سحب آمن للسيارة المعطّلة أو المحطّمة.",
    "svc.bat.t":"البطارية / التشغيل","svc.bat.d":"بطارية فارغة؟ تشغيل فوري في المكان.",
    "svc.tire.t":"عجلة مثقوبة","svc.tire.d":"تغيير العجلة أو ديباناج سريع في المكان.",
    "svc.fuel.t":"نفاد الوقود","svc.fuel.d":"توصيل الوقود إلى مكانكم.",
    "svc.key.t":"المفاتيح بالداخل","svc.key.d":"فتح السيارة دون إتلاف.",
    "svc.onsite.t":"ديباناج في المكان","svc.onsite.d":"ديباناج الأعطال البسيطة دون سحب إن أمكن.",
    "svc.accident.t":"حادث / إزالة","svc.accident.d":"مساعدة وإزالة بعد الحادث.",
    "svc.transport.t":"نقل المركبات","svc.transport.d":"نقل لمسافات طويلة، سيارة جديدة أو معطّلة.",
    "svc.more":"التفاصيل",

    "how.eyebrow":"كيف نعمل","how.title":"شاحنة سحب في 3 خطوات.",
    "how.s1.t":"تتصلون","how.s1.d":"يردّ المشغّل فوراً، على مدار الساعة.",
    "how.s2.t":"نحدّد موقعكم","how.s2.d":"نرسل أقرب شاحنة سحب إليكم.",
    "how.s3.t":"نصل بسرعة","how.s3.d":"الوصول خلال 30 دقيقة في المتوسط، بالمعدات الملائمة.",

    "why.eyebrow":"لماذا ميلوسة","why.title":"مساعدة سيارات تثقون بها.",
    "why.lead":"فريق طنجاوي متاح في كل وقت، بالتزامات واضحة.",
    "why.1.t":"سرعة حقيقية","why.1.d":"شاحنات موزّعة في المدينة وعلى المحاور.",
    "why.2.t":"ردّ فوري","why.2.d":"يردّ المشغّل في أقل من رنّتين، ليلاً ونهاراً.",
    "why.3.t":"كل المركبات","why.3.d":"سيارة، دفع رباعي، نفعية، دراجة — معدات ملائمة.",
    "why.4.t":"سائقون مؤمَّنون","why.4.d":"محترفون ذوو خبرة ومؤمَّنون. سيارتكم في أمان.",

    "cov.title":"طنجة، المدينة والمحاور الكبرى","cov.sub":"المركز، الأحياء، الطريق الدائري، طريق الرباط ومنطقة المطار.",
    "cov.eta.1.b":"&lt; 30 د","cov.eta.1.l":"المدة المتوسطة",
    "cov.eta.2.b":"24/7","cov.eta.2.l":"أيام العطل أيضاً",
    "cov.eta.3.b":"محلي","cov.eta.3.l":"فريق طنجاوي",

    "rv.eyebrow":"آراء العملاء","rv.title":"أكثر من 480 سائق يثقون بنا.",
    "rv.summary":"متوسط التقييم · آراء موثَّقة",
    "rv.1.q":"تعطّلت على الطريق الدائري منتصف الليل. وصلت الشاحنة في 25 دقيقة وسُحبت السيارة إلى الميكانيكي. خدمة ممتازة.",
    "rv.1.n":"كريم إ.","rv.1.r":"الطريق الدائري بطنجة",
    "rv.2.q":"بطارية فارغة أمام البيت يوم أحد. تشغيل في 5 دقائق، فريق دقيق في المواعيد. احترافية عالية.",
    "rv.2.n":"هناء ل.","rv.2.r":"إيبيريا",
    "rv.3.q":"انفجرت العجلة والأطفال في السيارة. جاؤوا بسرعة وغيّروا العجلة في المكان. شكراً!",
    "rv.3.n":"محمد ت.","rv.3.r":"طريق الرباط",

    "zn.eyebrow":"مناطق التدخل","zn.title":"في كل طنجة وعلى المحاور الكبرى.",
    "zn.lead":"في المدينة أو على الطريق السيار، تتدخّل شاحنة ميلوسة بسرعة قربكم.",
    "zn.cta":"منطقتكم",

    "faq.eyebrow":"أسئلة متكررة","faq.title":"كل ما يجب معرفته.",
    "faq.1.q":"في كم من الوقت تصل الشاحنة؟","faq.1.a":"في المتوسط أقل من 30 دقيقة حسب موقعكم وحركة المرور. على المحاور الكبرى، أعطونا النقطة الكيلومترية للتسريع.",
    "faq.2.q":"هل تتدخّلون ليلاً وأيام العطل؟","faq.2.a":"نعم، 24/24 و7/7، بما في ذلك الليل وعطلة نهاية الأسبوع وأيام العطل.",
    "faq.3.q":"هل تتدخّلون على الطريق السيار والمحاور الكبرى؟","faq.3.a":"نعم، في المدينة وعلى الطريق الدائري وطريق الرباط وطريق تطوان والطرق السريعة. أعطونا النقطة الكيلومترية لتسريع الوصول.",
    "faq.4.q":"ما المركبات التي تسحبونها؟","faq.4.a":"سيارات، دفع رباعي، نفعية ودراجات. حدّدوا المركبة عند الاتصال لإرسال الشاحنة الملائمة.",
    "faq.5.q":"هل يجب أن أبقى قرب سيارتي؟","faq.5.a":"إذا كنتم في أمان فنعم، ابقوا قريبين لاستقبال السائق. على الطريق السريع، قفوا خلف الحاجز وانتظروا في مكان آمن.",

    "ft.tag":"سحب وديباناج سيارات موثوق في طنجة. مساعدة طرقية 24/24 و7/7.",
    "ft.services":"الخدمات","ft.zones":"المناطق","ft.cta":"طوارئ 24/7","ft.rights":"جميع الحقوق محفوظة.","ft.legal":"إشعارات قانونية","ft.privacy":"الخصوصية",

    "em.badge":"تدخّل فوري","em.title":"اطلب شاحنة سحب","em.sub":"الأسرع: اتصلوا. أو أرسلوا طلبكم في 3 لمسات.",
    "em.callnow":"اتصل الآن · 06 68 19 59 92","em.or":"أو أرسلوا طلبكم",
    "em.q1":"1 · ما المشكلة؟","em.q2":"2 · أين أنتم؟","em.q3":"3 · رقمكم",
    "em.locate":"استخدام موقعي","em.loc.ph":"العنوان، الطريق أو علامة مميّزة","em.phone.ph":"رقم هاتفكم",
    "em.veh":"نوع المركبة","em.send":"أرسل عبر واتساب","em.note":"ردّ فوري · تُرسَل أقرب شاحنة سحب",
    "em.eta.b":"&lt; 30 د","em.eta.l":"متوسط الوصول","em.247.b":"24/7","em.247.l":"ليلاً ونهاراً","em.safe.b":"مؤمَّنة","em.safe.l":"سيارة محمية",
    "em.loc.ok":"تمّ تحديد الموقع ✓","em.loc.fail":"أدخلوا العنوان يدوياً",

    "ct.badge":"اتصل بنا","ct.title":"التواصل مع ميلوسة","ct.sub":"للطوارئ اتصلوا. لطلب مبرمَج راسلونا.",
    "ct.call":"اتصل","ct.call.v":"06 68 19 59 92","ct.wa":"واتساب","ct.wa.v":"اكتب رسالة","ct.route":"الاتجاهات","ct.route.v":"موقعنا","ct.email":"البريد","ct.email.v":"contact@melloussa.ma",
    "ct.hours.l":"الأوقات","ct.hours.v":"24/24 · 7/7 · أيام العطل مشمولة","ct.zone.l":"المنطقة","ct.zone.v":"طنجة والمحاور الكبرى",
    "ct.form.title":"اطلب معاودة الاتصال","ct.f.name":"الاسم","ct.f.phone":"الهاتف","ct.f.msg":"طلبكم","ct.f.msg.ph":"مثلاً: سحب سيارة، طريق تطوان…","ct.f.send":"عاودوا الاتصال بي",
  },

  en:{
    "nav.services":"Services","nav.how":"How it works","nav.zones":"Areas","nav.reviews":"Reviews","nav.contact":"Contact","nav.home":"Home",
    "cs.veh":"Vehicle","cs.incident":"Incident","cs.time":"Actual time","cs.result":"Result","cs.verified":"Verified intervention",
    "zn.cv":"City centre","zn.ci":"Corniche & Iberia","zn.mk":"Medina & Kasbah","zn.cs":"Cap Spartel","zn.tm":"Tanger Med","zn.ap":"Airport","zn.mal":"Malabata",
    "dock.call":"Call","dock.wa":"WhatsApp","dock.express":"Emergency",
    "cta.truck":"Call a tow truck","cta.wa":"WhatsApp","cta.express":"Express request",

    "hero.status":"Tow truck available · Tanger",
    "hero.title":"Towing & roadside assistance in Tanger,","hero.title.accent":"24/7.",
    "hero.sub":"Broken down, an accident, a dead battery or a flat tire? A tow truck reaches you in under 30 minutes, anywhere in Tanger.",
    "trust.eta.b":"&lt; 30 min","trust.eta.l":"Avg. arrival",
    "trust.open.b":"24/7","trust.open.l":"Day & night",
    "trust.rating.l":"480+ reviews",

    "svc.eyebrow":"Roadside assistance","svc.title":"A tow truck for every situation.",
    "svc.lead":"Car, 4x4, van or motorbike — we fix it on the spot or tow it.",
    "svc.tow.t":"Towing","svc.tow.d":"Broken-down or crashed vehicle, towed safely.",
    "svc.bat.t":"Battery / jump-start","svc.bat.d":"Dead battery? Immediate jump-start on site.",
    "svc.tire.t":"Flat tire","svc.tire.d":"Wheel change or quick repair on the spot.",
    "svc.fuel.t":"Out of fuel","svc.fuel.d":"Fuel delivered right where you are.",
    "svc.key.t":"Keys locked in","svc.key.d":"Damage-free vehicle opening.",
    "svc.onsite.t":"On-site repair","svc.onsite.d":"Minor faults fixed without towing when possible.",
    "svc.accident.t":"Accident / removal","svc.accident.d":"Assistance and removal after an accident.",
    "svc.transport.t":"Vehicle transport","svc.transport.d":"Long-distance transport, new or dead vehicle.",
    "svc.more":"Details",

    "how.eyebrow":"How it works","how.title":"A tow truck in 3 steps.",
    "how.s1.t":"You call","how.s1.d":"An operator answers immediately, 24/7.",
    "how.s2.t":"We locate you","how.s2.d":"We send the closest tow truck to you.",
    "how.s3.t":"We arrive fast","how.s3.d":"Arrival in 30 min on average, with the right equipment.",

    "why.eyebrow":"Why Melloussa","why.title":"Car assistance you can actually trust.",
    "why.lead":"A Tanger team reachable at any hour, with clear commitments.",
    "why.1.t":"Genuine speed","why.1.d":"Tow trucks positioned across the city and main roads.",
    "why.2.t":"Immediate answer","why.2.d":"An operator picks up in under two rings, day and night.",
    "why.3.t":"All vehicles","why.3.d":"Car, 4x4, van, motorbike — the right equipment.",
    "why.4.t":"Insured operators","why.4.d":"Experienced, insured professionals. Your car stays safe.",

    "cov.title":"Tanger, city & main roads","cov.sub":"Centre, districts, ring road, Rabat road and airport area.",
    "cov.eta.1.b":"&lt; 30 min","cov.eta.1.l":"Avg. arrival",
    "cov.eta.2.b":"24/7","cov.eta.2.l":"Holidays included",
    "cov.eta.3.b":"Local","cov.eta.3.l":"Tanger team",

    "rv.eyebrow":"Customer reviews","rv.title":"Over 480 drivers trust us.",
    "rv.summary":"Average rating · verified reviews",
    "rv.1.q":"Broke down on the ring road at midnight. Tow truck arrived in 25 minutes and towed my car to the garage. Flawless service.",
    "rv.1.n":"Karim E.","rv.1.r":"Tanger ring road",
    "rv.2.q":"Dead battery outside my home on a Sunday. Jump-started in 5 minutes, punctual and tidy team. Very professional.",
    "rv.2.n":"Hanae L.","rv.2.r":"Iberia",
    "rv.3.q":"Blown tire with the kids in the car. They came quickly and changed the wheel on the spot. Thank you!",
    "rv.3.n":"Mohamed T.","rv.3.r":"Rabat road",

    "zn.eyebrow":"Service areas","zn.title":"All across Tanger and the main roads.",
    "zn.lead":"In the city or on the motorway, a Melloussa tow truck responds quickly near you.",
    "zn.cta":"Your area",

    "faq.eyebrow":"Frequently asked","faq.title":"Everything you need to know.",
    "faq.1.q":"How quickly does the tow truck arrive?","faq.1.a":"On average within 30 minutes depending on your location and traffic. On main roads, give the kilometre marker to speed things up.",
    "faq.2.q":"Do you operate at night and on holidays?","faq.2.a":"Yes, 24/7, including nights, weekends and public holidays.",
    "faq.3.q":"Do you operate on the motorway and main roads?","faq.3.a":"Yes, in the city and on the ring road, the Rabat road, the Tetouan road and expressways. Give the kilometre marker to speed up our arrival.",
    "faq.4.q":"Which vehicles can you tow?","faq.4.a":"Cars, 4x4s, vans and motorbikes. Tell us the vehicle when you call so we send the right truck.",
    "faq.5.q":"Should I stay near my vehicle?","faq.5.a":"If you are safe, yes — stay nearby to meet the driver. On an expressway, step behind the barrier and wait somewhere safe.",

    "ft.tag":"Trusted towing and car breakdown service in Tanger. Roadside assistance 24/7.",
    "ft.services":"Services","ft.zones":"Areas","ft.cta":"24/7 emergency","ft.rights":"All rights reserved.","ft.legal":"Legal notice","ft.privacy":"Privacy",

    "em.badge":"Immediate response","em.title":"Request a tow truck","em.sub":"Fastest: call us. Otherwise, send your request in 3 taps.",
    "em.callnow":"Call now · 06 68 19 59 92","em.or":"or send your request",
    "em.q1":"1 · What's the problem?","em.q2":"2 · Where are you?","em.q3":"3 · Your number",
    "em.locate":"Use my location","em.loc.ph":"Address, road or landmark","em.phone.ph":"Your phone number",
    "em.veh":"Vehicle type","em.send":"Send on WhatsApp","em.note":"Immediate response · the closest tow truck is dispatched",
    "em.eta.b":"&lt; 30 min","em.eta.l":"Avg. arrival","em.247.b":"24/7","em.247.l":"Day & night","em.safe.b":"Insured","em.safe.l":"Car protected",
    "em.loc.ok":"Location detected ✓","em.loc.fail":"Enter your address manually",

    "ct.badge":"Contact","ct.title":"Reach Melloussa Assistance","ct.sub":"For an emergency, call. For a planned request, write to us.",
    "ct.call":"Call","ct.call.v":"06 68 19 59 92","ct.wa":"WhatsApp","ct.wa.v":"Send a message","ct.route":"Directions","ct.route.v":"Find us","ct.email":"Email","ct.email.v":"contact@melloussa.ma",
    "ct.hours.l":"Hours","ct.hours.v":"24/7 · holidays included","ct.zone.l":"Area","ct.zone.v":"Tanger & main roads",
    "ct.form.title":"Request a callback","ct.f.name":"Name","ct.f.phone":"Phone","ct.f.msg":"Your request","ct.f.msg.ph":"e.g. tow a sedan, Tetouan road…","ct.f.send":"Call me back",
  }
};

const RTL_LANGS = ["ar"];

function applyLang(lang){
  const dict = I18N[lang] || I18N.fr;
  const html = document.documentElement;
  html.lang = lang;
  html.dir = RTL_LANGS.includes(lang) ? "rtl" : "ltr";
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const k = el.getAttribute("data-i18n");
    if(dict[k]!=null) el.innerHTML = dict[k];
  });
  document.querySelectorAll("[data-i18n-ph]").forEach(el=>{
    const k = el.getAttribute("data-i18n-ph");
    if(dict[k]!=null) el.setAttribute("placeholder", dict[k].replace(/&nbsp;/g," "));
  });
  document.querySelectorAll(".lang-switch button, .mm-lang button").forEach(b=>{
    b.classList.toggle("active", b.dataset.lang===lang);
  });
  if(dict["meta.title"]) document.title=dict["meta.title"].replace(/&nbsp;/g," ");
  var __md=document.querySelector('meta[name="description"]');
  if(__md&&dict["meta.desc"]) __md.setAttribute("content",dict["meta.desc"].replace(/&nbsp;/g," "));
  try{ localStorage.setItem("ml-lang", lang); }catch(e){}
}
function initLang(){
  let saved="fr"; try{ saved=localStorage.getItem("ml-lang")||"fr"; }catch(e){}
  if(!I18N[saved]) saved="fr";
  applyLang(saved);
  document.querySelectorAll(".lang-switch button, .mm-lang button").forEach(b=>{
    b.addEventListener("click", ()=>applyLang(b.dataset.lang));
  });
}

function initHeader(){
  const header=document.querySelector(".site-header"); if(!header)return;
  const onScroll=()=>header.classList.toggle("scrolled", window.scrollY>16);
  onScroll(); window.addEventListener("scroll", onScroll, {passive:true});
}
function initMobileMenu(){
  const menu=document.querySelector(".mobile-menu"),open=document.querySelector(".menu-toggle"),close=document.querySelector(".mm-close");
  if(!menu||!open)return;
  open.addEventListener("click",()=>{menu.classList.add("open");document.body.style.overflow="hidden";});
  const hide=()=>{menu.classList.remove("open");document.body.style.overflow="";};
  close&&close.addEventListener("click",hide);
  menu.querySelectorAll("nav a").forEach(a=>a.addEventListener("click",hide));
}
function initFaq(){
  document.querySelectorAll(".faq-item").forEach(item=>{
    const q=item.querySelector(".faq-q"),a=item.querySelector(".faq-a"); if(!q||!a)return;
    q.addEventListener("click",()=>{
      const isOpen=item.classList.contains("open");
      document.querySelectorAll(".faq-item.open").forEach(o=>{o.classList.remove("open");o.querySelector(".faq-a").style.maxHeight=null;});
      if(!isOpen){item.classList.add("open");a.style.maxHeight=a.scrollHeight+"px";}
    });
  });
}
function initReveal(){
  const els=Array.from(document.querySelectorAll(".reveal")); if(!els.length)return;
  // Content is visible by DEFAULT. We only enable the hidden→reveal animation once
  // a live compositor is confirmed via a double requestAnimationFrame. In a paused
  // preview / capture harness the rAF chain won't run, so content simply stays visible.
  requestAnimationFrame(()=>requestAnimationFrame(()=>{
    document.documentElement.classList.add("anim-ready");
    // PERF: an IntersectionObserver replaces the old scroll handler that called
    // getBoundingClientRect() on every element each frame (forced synchronous
    // layout → main-thread jank on weak mobile CPUs). The observer is evaluated
    // off the scroll path, so scrolling stays smooth on a Redmi-class device.
    if(!("IntersectionObserver" in window)){ els.forEach(e=>e.classList.add("in")); return; }
    const io=new IntersectionObserver((entries,obs)=>{
      entries.forEach(en=>{
        if(en.isIntersecting){ en.target.classList.add("in"); obs.unobserve(en.target); }
      });
    },{rootMargin:"0px 0px -6% 0px",threshold:0});
    els.forEach(el=>io.observe(el));
    // Safety net: if the observer never fires (edge capture harness), reveal all.
    setTimeout(()=>els.forEach(e=>e.classList.add("in")),2600);
  }));
}
function initTOC(){
  const links=document.querySelectorAll(".doc-toc a"); if(!links.length)return;
  const map={}; links.forEach(l=>{const id=l.getAttribute("href").slice(1);const s=document.getElementById(id);if(s)map[id]=l;});
  const io=new IntersectionObserver((es)=>{es.forEach(e=>{if(e.isIntersecting){links.forEach(l=>l.classList.remove("active"));map[e.target.id]&&map[e.target.id].classList.add("active");}});},{rootMargin:"-20% 0px -70% 0px"});
  Object.keys(map).forEach(id=>{const s=document.getElementById(id);s&&io.observe(s);});
}

/* ---- Language cycle on mobile (collapsed single-pill) ---- */
function initMobileLangCycle(){
  const LANGS=['fr','ar','en'];
  const navSwitch=document.querySelector('.nav-right .lang-switch');
  if(!navSwitch)return;
  navSwitch.addEventListener('click',e=>{
    const btn=e.target.closest('button[data-lang]');
    if(!btn||!btn.classList.contains('active'))return;
    if(window.innerWidth>1000)return; // desktop keeps normal 3-button row
    const cur=document.documentElement.lang||'fr';
    const idx=LANGS.indexOf(cur);
    applyLang(LANGS[(idx+1)%LANGS.length]);
  });
}

/* ---- Lenis premium smooth scroll (desktop only) ---------------------------
   Strategy:
   - Inertial "Apple/Linear" decay on the PC wheel (smoothWheel:true).
   - On touch devices we DON'T hijack the gesture: native momentum scroll is
     smoother than any JS overlay, so Lenis is NEVER even downloaded there —
     the ~5KB CDN script is injected lazily, only when a real mouse is present.
     That keeps the low-end-mobile / flaky-3G payload as light as possible.
   - prefers-reduced-motion is respected (accessibility + no motion sickness).
   The instance is exposed as window.__lenis so other modules can scrollTo().
--------------------------------------------------------------------------- */
function initLenis(){
  // Anchor links are wired immediately and read window.__lenis lazily, so they
  // work whether or not Lenis has woken yet.
  initAnchorScroll();

  const finePointer = window.matchMedia("(pointer:fine)").matches;
  const reduced     = window.matchMedia("(prefers-reduced-motion:reduce)").matches;
  // Touch / reduced-motion → native scroll. Lenis is never fetched nor parsed.
  if(!finePointer || reduced) return;

  // ELITE TBT FIX: Lenis costs 0ms at load. We don't download, parse or run a
  // single byte of it until the user shows scroll intent. The CDN fetch + the
  // RAF loop are deferred to the FIRST real interaction, keeping the main thread
  // completely free during the Lighthouse measurement window.
  const WAKE = ["wheel","pointerdown","keydown","touchstart"];
  const wake = ()=>{
    WAKE.forEach(ev=>window.removeEventListener(ev, wake));
    loadLenis();
  };
  WAKE.forEach(ev=>window.addEventListener(ev, wake, {passive:true, once:true}));
}

/* Lazy CDN loader — fired by the first interaction, runs at most once.
   The desktop / reduced-motion gate lives HERE so every entry point (interaction
   wake OR anchor click) is protected: touch devices never fetch Lenis. */
function loadLenis(){
  if(window.__lenis || window.__lenisLoading) return;
  if(!window.matchMedia("(pointer:fine)").matches) return;
  if(window.matchMedia("(prefers-reduced-motion:reduce)").matches) return;
  window.__lenisLoading = true;
  const s = document.createElement("script");
  s.src = "https://unpkg.com/lenis@1.3.23/dist/lenis.min.js";
  s.async = true;
  s.onload  = startLenis;
  s.onerror = ()=>{ window.__lenisLoading = false; };  // CDN down → native scroll
  document.head.appendChild(s);
}

function startLenis(){
  if(typeof Lenis==="undefined") return;
  const lenis = new Lenis({
    // Apple/Linear-style decay: long, soft exponential ease-out.
    duration: 1.15,
    easing: (t)=>Math.min(1, 1.001 - Math.pow(2, -10*t)), // expo-out
    smoothWheel: true,     // inertia on the PC wheel
    syncTouch: false,      // hands off on touch → native momentum
    wheelMultiplier: 1,
    touchMultiplier: 1.5,
  });
  window.__lenis = lenis;

  // The RAF loop that drives the interpolation, tied to the display refresh.
  function raf(time){ lenis.raf(time); requestAnimationFrame(raf); }
  requestAnimationFrame(raf);
}

/* ---- Anchor links glide to target with a -80px navbar offset ----
   Reads window.__lenis at click time: smooth once Lenis is awake, clean native
   offset-jump before that (or on touch/reduced-motion). */
function initAnchorScroll(){
  document.querySelectorAll('a[href^="#"]').forEach(link=>{
    const hash = link.getAttribute("href");
    if(!hash || hash==="#") return;                       // skip bare "#" placeholders
    const target = document.getElementById(hash.slice(1));
    if(!target) return;                                   // skip dead anchors
    link.addEventListener("click", e=>{
      e.preventDefault();
      const lenis = window.__lenis;
      if(lenis){
        lenis.scrollTo(target, { offset:-80, duration:1.2 });
      }else{
        // Lenis not awake yet → manual offset jump, navbar-safe…
        const y = target.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top:y, behavior:"auto" });
        loadLenis();   // …and wake it so the next move glides.
      }
    });
  });
}

/* ---- Emergency request flow (fewest clicks) ---- */
function initEmergency(){
  const form=document.querySelector(".em-flow"); if(!form)return;
  const state={problem:"",vehicle:"",loc:"",phone:""};
  // problem chips
  form.querySelectorAll("[data-problem]").forEach(c=>{
    c.addEventListener("click",()=>{
      form.querySelectorAll("[data-problem]").forEach(x=>x.classList.remove("sel"));
      c.classList.add("sel"); state.problem=c.dataset.problem; rebuild();
    });
  });
  form.querySelectorAll("[data-vehicle]").forEach(c=>{
    c.addEventListener("click",()=>{
      form.querySelectorAll("[data-vehicle]").forEach(x=>x.classList.remove("sel"));
      c.classList.add("sel"); state.vehicle=c.dataset.vehicle; rebuild();
    });
  });
  const locInput=form.querySelector("#em-loc"), phoneInput=form.querySelector("#em-phone");
  locInput&&locInput.addEventListener("input",()=>{state.loc=locInput.value;rebuild();});
  phoneInput&&phoneInput.addEventListener("input",()=>{state.phone=phoneInput.value;rebuild();});

  const locBtn=form.querySelector(".em-locate");
  locBtn&&locBtn.addEventListener("click",()=>{
    const status=form.querySelector(".em-loc-status");
    if(!navigator.geolocation){ status.textContent=(I18N[document.documentElement.lang]||I18N.fr)["em.loc.fail"]; return; }
    locBtn.classList.add("loading"); status.textContent="…";
    navigator.geolocation.getCurrentPosition(pos=>{
      const {latitude,longitude}=pos.coords;
      const url=`https://maps.google.com/?q=${latitude.toFixed(5)},${longitude.toFixed(5)}`;
      state.loc=url; if(locInput) locInput.value=url;
      status.textContent=(I18N[document.documentElement.lang]||I18N.fr)["em.loc.ok"];
      locBtn.classList.remove("loading"); rebuild();
    },()=>{
      status.textContent=(I18N[document.documentElement.lang]||I18N.fr)["em.loc.fail"];
      locBtn.classList.remove("loading");
    },{enableHighAccuracy:true,timeout:8000});
  });

  const waBtn=form.querySelector(".em-send");
  function rebuild(){
    const lines=["Demande d'intervention — Melloussa Assistance"];
    if(state.problem) lines.push("Problème : "+state.problem);
    if(state.vehicle) lines.push("Véhicule : "+state.vehicle);
    if(state.loc) lines.push("Localisation : "+state.loc);
    if(state.phone) lines.push("Téléphone : "+state.phone);
    const msg=encodeURIComponent(lines.join("\n"));
    if(waBtn) waBtn.href=`https://wa.me/${WA}?text=${msg}`;
  }
  rebuild();
}

/* ---- Lucide icons: fully inlined at the source ------------------------------
   Every icon now ships as a static, pre-rendered inline <svg> directly in the
   HTML. We no longer download, parse or execute the ~95KB Lucide UMD, and we no
   longer run createIcons() (which built 800+ SVGs across the site on the main
   thread). Result: ZERO icon-related network requests, ZERO icon-related Total
   Blocking Time, and icons that paint with the very first frame (better LCP/CLS).
   The few names absent from Lucide 1.21.0 (lighthouse, hand-pointer) rendered
   as nothing before and still do — visually identical, by design.
----------------------------------------------------------------------------- */

document.addEventListener("DOMContentLoaded",()=>{
  initLang(); initMobileLangCycle(); initHeader(); initMobileMenu(); initFaq(); initReveal(); initTOC(); initEmergency(); initLenis();
});
