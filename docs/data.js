// Generat/actualizat automat de routine-ul „Radar Finanțări Oradea".
// Schema item: {date, sev: "rosu|portocaliu|galben|verde", cat: "sun|finantari|oradea|alte",
//               title, summary (max ~15 cuvinte, cifre concrete), why (max ~12 cuvinte),
//               url (DEEP LINK exact la articol/anunț — niciodată homepage), source, pub}
// Itemi noi se ADAUGĂ LA ÎNCEPUTUL listei. Dedup după url și subiect.
window.RADAR_ITEMS = [
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
  },
  {
    "date": "2026-07-07", "sev": "verde", "cat": "finantari",
    "title": "SME Eco-Tech (fonduri elvețiene): deschis până pe 24 iulie — nu pentru firme noi",
    "summary": "Grant de minimis max 267.240 lei + credit bancar, doar pentru IMM-uri cu 10–249 angajați și investiții eco-energetice.",
    "why": "Neeligibil (cere 10+ angajați) — doar context.",
    "url": "https://sme-ecotech.gov.ro", "source": "sme-ecotech.gov.ro · MEDAT", "pub": "2026-05-26"
  }
];
