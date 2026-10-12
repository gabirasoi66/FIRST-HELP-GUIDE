FIRST HELP GUIDE V1.20 — PWA Android

1. NU șterge versiunea V1.19 și NU șterge datele Chrome.
2. Din V1.19: Istoric > Exportă backup cu fotografii. Apoi Verifică backup și fotografii, verificând toate imaginile.
3. Publică TOATE fișierele din acest director la rădăcina aceluiași site HTTPS (de exemplu Netlify Drop, dacă ai acces gratuit). Nu încărca doar index.html.
4. Deschide adresa HTTPS în Chrome Android. Meniu ⋮ > Adaugă pe ecranul de pornire / Instalează aplicația.
5. Deschide aplicația instalată; Istoric > Importă backup și selectează fișierul JSON exportat. Confirmă doar după ce verifici numărul cazurilor.
6. Verifică toate cazurile, observațiile și fotografiile. Păstrează V1.19 și JSON până când verificarea este completă.

IMPORTANT: Datele localStorage din content:// NU sunt transferate automat în PWA HTTPS. Importul nu suprascrie ID-uri existente. Dacă versiunea HTTPS conține deja cazuri cu aceleași ID-uri, importul le va ignora.

Limitări: PWA necesită HTTPS pentru instalare și cache offline; deschiderea index.html din ZIP/content:// NU instalează PWA. Analiza AI a imaginilor nu este implementată. Verificarea funcțională pe telefon și restaurarea într-o instalare nouă rămân de făcut.
