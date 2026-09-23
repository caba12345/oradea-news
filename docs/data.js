// Generat/actualizat automat de routine-ul „Radar Finanțări Oradea".
// Schema item: {date, sev: "rosu|portocaliu|galben|verde", cat: "sun|finantari|oradea|alte",
//               title, summary (max ~15 cuvinte, cifre concrete), why (max ~12 cuvinte),
//               url (DEEP LINK exact la articol/anunț — niciodată homepage), source, pub}
// Itemi noi se ADAUGĂ LA ÎNCEPUTUL listei. Dedup după url și subiect.
window.RADAR_ITEMS = [
  {
    "date": "2026-09-23", "sev": "galben", "cat": "sun",
    "title": "Taină (Min. Economiei): sesiunea 2 SUN „foarte probabil chiar în zilele următoare” pe site-ul ministerului",
    "summary": "22 sept: director general anunță lansare „în zilele următoare”, tot fără dată exactă; ~3.000 contracte sesiunea 1 semnate săptămâna asta.",
    "why": "Cel mai strâns termen anunțat până acum — verifică zilnic economie.gov.ro.",
    "url": "https://agerpres.ro/economic/2026/09/22/taina-ministerul-economiei-aproximativ-3-000-de-contracte-start-up-nation-vor-fi-lansate-in-aceasta---1595794", "source": "AGERPRES · declarație Camelia Taină", "pub": "2026-09-22"
  },
  {
    "date": "2026-09-18", "sev": "verde", "cat": "alte",
    "title": "Rubik Hub deschide Acceleratorul MVP cu Nucleo Ventures — investiție posibilă de 150.000 EUR, termen 30 sept",
    "summary": "Cere MVP funcțional + minim 2 co-fondatori cu tracțiune; program gratuit, deadline 30 septembrie 2026.",
    "why": "Neeligibil acum — nu ai MVP funcțional nici co-fondator, doar idee.",
    "url": "https://startupcafe.ro/inscrieri-2026-fondatori-startup-uri-prototipuri-functionale-romania-italia-accelerator-106875", "source": "StartupCafe · Rubik Hub / Nucleo Ventures", "pub": "2026-09-16"
  },
  {
    "date": "2026-09-16", "sev": "galben", "cat": "sun",
    "title": "Darău confirmă amploarea Sesiunii 2 SUN: ~10.000 locuri curs, ~2.000 granturi de 250.000 lei — tot fără dată",
    "summary": "Anunțat 14 sept la conferință de presă: ~10.000 locuri curs, ~2.000 granturi a 250.000 lei.",
    "why": "Confirmă scara reală a sesiunii, dar tot nu știi când te poți înscrie.",
    "url": "https://startupcafe.ro/startup-nation-2026-vom-lansa-si-a-doua-sesiune-in-toamna-aceasta-ministrul-economiei-106760", "source": "StartupCafe · declarație ministru Darău", "pub": "2026-09-14"
  },
  {
    "date": "2026-09-11", "sev": "galben", "cat": "finantari",
    "title": "Regio Nord-Vest deschide apelul 961 STEP (tehnologii strategice) — depunere până 12 oct 2026",
    "summary": "Buget 20,95 mil. EUR; grant 200.000–1.500.000 EUR/proiect; firma se poate înființa până la prima plată.",
    "why": "Prag minim 200.000 EUR, personal R&D propriu — greu accesibil fără capital.",
    "url": "https://regionordvest.ro/en/apelul-de-proiecte-dedicat-investitiilor-in-tehnologii-strategice-step-este-deschis-de-la-ora-1000/", "source": "regionordvest.ro · ADR Nord-Vest (Ghid 961)", "pub": "2026-08-28"
  },
  {
    "date": "2026-09-09", "sev": "portocaliu", "cat": "oradea",
    "title": "ADLO lansează Apelul de selecție nr. 8 pentru incubatorul CRESC Oradea Mare — termen 4 oct 2026",
    "summary": "Preincubare cu idee de afacere; depunere până 4 oct ora 23:00, rezultate 6 oct, interviuri 9 oct.",
    "why": "Aplici doar cu idee, fără firmă — verifică dacă CAEN tău e pe lista industrii creative.",
    "url": "https://crescoradea.ro/depunere-a-candidaturilor/", "source": "crescoradea.ro · ADLO", "pub": "2026-09-07"
  },
  {
    "date": "2026-08-21", "sev": "galben", "cat": "finantari",
    "title": "Apel Regio NV 112/2 „întreprinderi nou-înființate inovatoare” — estimat pentru toamna 2026",
    "summary": "Calendar MIPE estimează depunere aug-sept 2026; fără lansare oficială confirmată de ADR NV.",
    "why": "Cere 1 an istoric financiar — aplicabil abia după înființarea firmei.",
    "url": "https://www.fonduri-structurale.ro/stiri/39408/aproape-300-de-apeluri-ar-urma-sa-se-lanseze-in-2026-afla-cate-dintre-acestea-sunt-dedicate-imm-urilor", "source": "Fonduri-structurale.ro · calendar MIPE 2026", "pub": "2026-08"
  },
  {
    "date": "2026-08-21", "sev": "verde", "cat": "finantari",
    "title": "UPDATE: SME Eco-Tech elimină pragul de 2 mil. lei CA pentru microîntreprinderi (Ordin 1241/2026)",
    "summary": "13 aug: eliminat pragul de 2 mil. lei CA; termen depunere extins la 24 sept.",
    "why": "Tot neeligibil — cere firmă înființată până la 31 dec 2021.",
    "url": "https://startupcafe.ro/noua-concesie-la-sme-eco-tech-s-a-mai-eliminat-o-conditie-care-bloca-multe-firme-micro-la-fondurile-elvetiene-de-288-milioane-lei-105082", "source": "StartupCafe · Ordin MEDAT 1241/2026", "pub": "2026-08-13"
  },
  {
    "date": "2026-08-14", "sev": "verde", "cat": "finantari",
    "title": "Program nou: „Diaspora investește acasă” — 100 mil. EUR, doar pentru români reveniți din străinătate",
    "summary": "HG 601/2026 (12 aug): grant 200.000 EUR pentru diaspora, asociat cu 12 luni în străinătate.",
    "why": "Neeligibil — nu ești diasporă; arată doar apetit MEDAT pentru scheme noi.",
    "url": "https://startupcafe.ro/finantari-100-milioane-euro-romani-strainatate-firme-romania-descarca-hg-601-2026-reguli-program-diaspora-investeste-acasa-monitorul-oficial-105025", "source": "StartupCafe · HG 601/2026", "pub": "2026-08-12"
  },
  {
    "date": "2026-07-10", "sev": "galben", "cat": "sun",
    "title": "MEDAT a publicat listele Sesiunii 1: peste 5.800 locuri de finanțare, ierarhizate pe punctaj",
    "summary": "4 iulie: liste RUE cu firme înscrise — 2.561 locuri pt. 18-30 ani din regiuni mai puțin dezvoltate.",
    "why": "Semnal că Sesiunea 1 se încheie — Sesiunea 2 ar putea urma curând.",
    "url": "https://economie.gov.ro/medat-publica-listele-persoanelor-juridice-inscrise-la-finantare-in-cadrul-primei-sesiuni-a-editiei-a-iv-a-a-programului-start-up-nation-2/", "source": "economie.gov.ro · MEDAT", "pub": "2026-07-04"
  },
  {
    "date": "2026-07-10", "sev": "verde", "cat": "finantari",
    "title": "UPDATE: PR Nord-Vest 131.H — termen extins de la 10 la 15 iulie, tot doar preselectați",
    "summary": "Instrucțiunea 76/9 iulie 2026 prelungește depunerea până pe 15 iulie, exclusiv microîntreprinderi Crowd4SME.",
    "why": "Neeligibil — arată doar activitate constantă ADR Nord-Vest pe microîntreprinderi.",
    "url": "https://regionordvest.ro/instructiunea-76-09-07-2026-privind-actualizarea-ghidului-solicitantului-131-h-sprijin-pentru-microintreprinderile-selectate-prin-proiectul-crowd4sme-nw-in-cadrul-crowdfundmatch/", "source": "regionordvest.ro · ADR Nord-Vest", "pub": "2026-07-09"
  },
  {
    "date": "2026-07-07", "sev": "portocaliu", "cat": "oradea",
    "title": "Bright Labs a devenit „Startup Fortress” — program continuu, fără cohorte",
    "summary": "3 luni mentorat, cazare și coworking gratuite, grant până la 5.000 EUR, acces la investiții de 100–300k EUR.",
    "why": "Aplici oricând, doar cu ideea — fără firmă, fără să pierzi punctele de debut.",
    "url": "https://www.romania-insider.com/startup-fortress-oradea-oct-2025", "source": "Romania Insider · brightlabs.build", "pub": "2025-10"
  },
  {
    "date": "2026-07-07", "sev": "portocaliu", "cat": "finantari",
    "title": "Nucleo Ventures: fond de 34 mil. EUR pentru Nord-Vest, cu granturi pre-seed",
    "summary": "Lansat pe 23 iunie la Cluj; 1,7 mil. EUR granturi de validare pre-seed, fără cedare de acțiuni, prin rețeaua Make IT in Oradea.",
    "why": "Rută de validare a ideii IoT, complementară Start-Up Nation.",
    "url": "https://www.forbes.ro/fortech-ventures-devine-nucleo-ventures-si-lanseaza-un-fond-de-34-de-milioane-de-euro-pentru-regiunea-nord-vest-507982", "source": "Forbes.ro · ADR Nord-Vest", "pub": "2026-06-23"
  },
  {
    "date": "2026-07-07", "sev": "portocaliu", "cat": "sun",
    "title": "Ordinul MEDAT 922/2026: termen final 8 dec 2027 + Sesiunea 2 confirmată",
    "summary": "Implementarea proiectelor prelungită până la 8 decembrie 2027; ministerul confirmă pregătirea Sesiunii 2 de înscrieri la cursuri.",
    "why": "Programul continuă — Sesiunea 2 e drumul tău spre 250.000 lei.",
    "url": "https://startupcafe.ro/startup-nation-2026-modificat-procedura-accesare-granturi-imm-250000-lei-ordin-medat-922-monitorul-oficial-102394", "source": "StartupCafe · M.Of. 26 iun", "pub": "2026-06-26"
  },
  {
    "date": "2026-07-07", "sev": "galben", "cat": "sun",
    "title": "Sesiunea 2 Start-Up Nation: încă fără dată",
    "summary": "Din peste 16.000 de absolvenți de curs, doar ~5.500 de firme au cerut finanțare la >5.800 de locuri — restul se reportează.",
    "why": "Înscrierea la curs va fi primul-venit-primul-servit — ziua 1 contează.",
    "url": "https://startupcafe.ro/startup-nation-2026-ramas-locuri-libere-deschide-noua-sesiune-inscrieri-termen-29-mai-2026-absolventi-aplice-finantare-50000-eur-100085", "source": "StartupCafe", "pub": "2026-05-21"
  },
  {
    "date": "2026-07-07", "sev": "galben", "cat": "finantari",
    "title": "POCIDIF 2.1: granturi 200.000–3.000.000 EUR pentru produse AI/IoT — depunere până 30 sept",
    "summary": "Sesiune deschisă din 30 iunie în MySMIS; pentru IMM-uri cu CAEN ICT care dezvoltă produse AI, IoT, AR/VR, robotică.",
    "why": "Fix profilul tău IoT, dar prea mare pentru o firmă nouă — programul „anului 2”.",
    "url": "https://startupcafe.ro/granturi-imm-2026-200000-3-milioane-eur-proiecte-inteligenta-artificiala-roboti-tehnologii-varf-perioada-depunere-102814", "source": "StartupCafe · POCIDIF", "pub": "2026-06-30"
  },
  {
    "date": "2026-07-07", "sev": "galben", "cat": "finantari",
    "title": "PEO val 2: administratorii de grant se selectează până pe 31 iulie",
    "summary": "Apelurile PEO (antreprenoriat + întreprinderi sociale urban) sunt deschise pentru organizații; concursurile pentru persoane fizice urmează, probabil în 2027.",
    "why": "De aici vin viitoarele minimis-uri de 60–100k EUR în Nord-Vest.",
    "url": "https://mfe.gov.ro/consultare-publica-peo-ghidul-solicitantului-sprijin-pentru-infiintarea-de-intreprinderi-sociale-in-mediul-urban/", "source": "mfe.gov.ro", "pub": "2026-04-30"
  },
  {
    "date": "2026-07-07", "sev": "galben", "cat": "finantari",
    "title": "Innotech Student ediția 2 — anunțată, nedeschisă",
    "summary": "Granturi pentru firme înființate de studenți și masteranzi; la ediția 1: 40.000–100.000 EUR, în funcție de joburile create.",
    "why": "Ca masterand UBB ești exact grupul țintă — urmărește SAS UBB.",
    "url": "https://www.avocatnet.ro/articol_68975/", "source": "Avocatnet · MIPE", "pub": "2026-04-15"
  }
];
