# Maikiuants · Kampuntin – Website

Zweisprachige Website (Spanisch/Englisch) für Kampuntin und die Shuar-Gemeinschaft Maikiuants.
Sie läuft kostenlos auf **GitHub Pages** und wird mit **Jekyll** gebaut. Das übernimmt GitHub
automatisch, man muss nichts installieren.

| Seite | Spanisch | Englisch |
|---|---|---|
| Start (Shuar, Maikiuants, Kampuntin, Mission, Karte) | `/` | `/en/` |
| Touren (10 Tage, max. 12 Personen) | `/tours/` | `/en/tours/` |
| Volunteering | `/voluntariado/` | `/en/volunteering/` |
| Wissenschaft / Paraecología, Tiere, Buch | `/ciencia/` | `/en/science/` |
| Blog / Live-Updates | `/novedades/` | `/en/updates/` |
| Fotos & Videos | `/galeria/` | `/en/gallery/` |
| Team | `/equipo/` | `/en/people/` |
| Kontakt | `/contacto/` | `/en/contact/` |
| Impressum & Datenschutz | `/aviso-legal/` | `/en/legal/` |

---

## 1. Veröffentlichen (einmalig)

1. Auf github.com ein **öffentliches** Repository anlegen, z. B. `maikiuants`.
   (Im kostenlosen Plan funktioniert GitHub Pages nur mit öffentlichen Repositories.)
2. Alle Dateien dieses Ordners hochladen, **außer** dem Ordner `_archiv`.
   Dort liegt nur die alte Version.
3. Im Repository: **Settings → Pages → Build and deployment → Deploy from a branch**,
   Branch `main`, Ordner `/ (root)` → **Save**.
4. Nach 1–2 Minuten ist die Seite unter `https://BENUTZERNAME.github.io/maikiuants/` online.

Eigene Domain (z. B. `kampuntin.org`): unter **Settings → Pages → Custom domain** eintragen und
in `_config.yml` bei `url:` die Adresse ergänzen.

---

## 2. Inhalte bearbeiten

Jede Änderung geht direkt auf github.com: Datei öffnen → Stift-Symbol → ändern → **Commit changes**.
Nach 1–2 Minuten ist die Änderung online.

| Was | Wo |
|---|---|
| Texte jeder Seite | `_data/es/*.yml` (Spanisch) und `_data/en/*.yml` (Englisch), eine Datei pro Seite |
| Menü, Buttons, Fußzeile | `_data/es/ui.yml`, `_data/en/ui.yml` |
| E-Mail, WhatsApp, Instagram, Facebook, WWOOF | `_config.yml` |
| Tour-Termine | `_data/tour_dates.yml` |
| Team (Namen, Rollen, Fotos) | `_data/team.yml` |
| Bedrohte Arten | `_data/species.yml` |
| Neue Froschart, Flusstiere, Buch | `_data/es/science.yml`, `_data/en/science.yml` |
| Fotos „Leben in der Jea“, Erfahrungsberichte, FAQ | `_data/es/volunteering.yml`, `_data/en/volunteering.yml` |
| Menü-Reihenfolge | `_data/navigation.yml` |
| YouTube-Videos | `_data/videos.yml` |
| Design (Farben, Schriften) | `assets/css/style.css`, ganz oben unter `:root` |

**Fotos einbauen:** Bild hochladen (z. B. nach `assets/img/fotos/`). Dann im passenden
Text-File bei `image: ""` den Pfad eintragen, z. B. `image: "/assets/img/fotos/inicio.jpg"`.
Solange kein Bild eingetragen ist, erscheint ein grüner Platzhalter mit Bildbeschreibung.

**Galerie:** Fotos/Videos einfach in den Ordner `assets/galeria/` hochladen, sie erscheinen
automatisch. Die Reihenfolge richtet sich nach dem Dateinamen, das Neueste steht vorne. Deshalb
Dateinamen **mit Datum beginnen**, z. B. `2026-10-14-minga.jpg`. Fotos von Touren in
`assets/galeria/tours/` hochladen, dann erscheinen sie zusätzlich auf der Tour-Seite unter
„Tours pasados“. Bildunterschriften optional in `_data/gallery_captions.yml`.

> Bilder vorher verkleinern (ca. 1600 px breit, unter 500 KB). GitHub Pages empfiehlt höchstens
> 1 GB pro Website. Längere Videos besser auf YouTube hochladen und in `_data/videos.yml` eintragen.

**Tipp für YAML-Dateien:** Einrückung (Leerzeichen) beibehalten. Enthält ein Text einen
Doppelpunkt mit Leerzeichen dahinter, den ganzen Text in "Anführungszeichen" setzen.

---

## 3. Blog ohne Programmieren

Jeder Blogeintrag ist eine kleine Textdatei im Ordner `_posts`. Er erscheint automatisch auf der
Novedades-Seite (neueste zuerst) und auf der Startseite. Drei Wege, von einfach bis komfortabel:

### A) Direkt auf github.com (sofort nutzbar)

1. Ordner `_posts` öffnen → **Add file → Create new file**.
2. Dateiname: `JJJJ-MM-TT-titel-ohne-leerzeichen.md`, z. B. `2026-11-02-nueva-minga.md`.
3. Diesen Inhalt einfügen und anpassen:

   ```markdown
   ---
   title: Nueva minga de siembra
   lang: es                  # es oder en
   tags: [comunidad, vivero] # tours, voluntariado, ciencia, comunidad, vivero
   summary: Ein bis zwei Sätze für die Übersicht.
   image: /assets/img/novedades/minga.jpg   # optional
   ---

   Hier steht der Text. **Fett**, *kursiv*, [Link](https://...) und Listen gehen mit Markdown.
   ```

4. **Commit changes**. Fotos vorher über **Add file → Upload files** nach
   `assets/img/novedades/` hochladen. Das geht auch mit der GitHub-App auf dem Handy.

### B) Mit Pages CMS (empfohlen für das Team vor Ort)

[Pages CMS](https://pagescms.org) ist ein kostenloser Editor mit Formular-Oberfläche: Titel,
Datum, Foto hochladen, Text schreiben, speichern. Die Konfiguration liegt schon bei (`.pages.yml`).

1. Auf [app.pagescms.org](https://app.pagescms.org) mit dem GitHub-Konto anmelden.
2. Repository auswählen. Es erscheinen **„Novedades (Blog)“** und **„Fechas de tours“**.
3. Weitere Personen lassen sich als Mitarbeitende einladen.

### C) Facebook & Instagram

- **Facebook:** Auf der Novedades-Seite gibt es je einen Kasten für die Facebook-Seiten von
  Kampuntin und Maikiuants. Er zeigt die Chronik und lädt erst nach einem Klick (Datenschutz). Was
  auf Facebook gepostet wird, erscheint dort automatisch. Die Seiten stehen in `_config.yml` unter
  `facebook:`. Hinweis: Facebook zeigt diese Chronik nur für öffentliche Seiten an, nicht für
  private Profile.
- **Instagram:** Einen automatischen Instagram-Feed gibt es seit Ende 2024 nur noch über
  Drittanbieter-Widgets (z. B. Behold, SnapWidget, meist mit Gratis-Kontingent). Einzelne Posts
  lassen sich in einem Blogeintrag einbetten, ebenfalls erst nach Klick:

  ```liquid
  {% include embed.html type="instagram" url="https://www.instagram.com/p/XXXXXXXX/" %}
  ```

  Genauso für `type="facebook"` (ein einzelner Post) und `type="youtube" id="VIDEO-ID"`.

**Empfehlung:** Kurze Alltagsfotos auf Instagram/Facebook posten. Wichtigere Neuigkeiten
(neue Termine, Monitoring-Ergebnisse, Tour-Rückblicke) als Blogeintrag über Pages CMS.

---

## 4. Was GitHub Pages (kostenlos) kann – und was nicht

GitHub Pages liefert nur fertige Seiten aus. Es gibt keinen Server und keine Datenbank. Deshalb:

| Funktion | Lösung in dieser Website |
|---|---|
| Kontaktformular | Öffnet ohne weitere Einrichtung das E-Mail-Programm der Besucher. Für echten Versand: kostenloses Konto bei [Formspree](https://formspree.io) (50 Nachrichten/Monat) anlegen und die Adresse in `_config.yml` bei `form_endpoint` eintragen. |
| Buchung & Zahlung | Läuft über Kontakt/WhatsApp. Für Online-Zahlung wäre ein externer Dienst nötig. |
| Kommentare, Logins, Newsletter | Nicht eingebaut. Bei Bedarf über externe Dienste möglich. |
| Statistiken | Keine, also auch kein Cookie-Banner nötig. |
| Karte auf der Startseite | Eigene Grafik (`_includes/map-ecuador.html`, Umrisse von Natural Earth), kein Google Maps, keine Daten an Dritte. Der Link führt zu OpenStreetMap mit den genauen Koordinaten. |

Grenzen laut GitHub: Website bis 1 GB, ca. 100 GB Datenvolumen pro Monat, öffentliches
Repository. GitHub Pages ist nicht für Websites gedacht, die hauptsächlich dem Online-Verkauf
dienen. Eine Informationsseite mit Buchung per Kontakt ist üblich. Wenn später Online-Zahlung
dazukommen soll, lohnt sich ein anderer Hoster (z. B. Netlify oder Cloudflare Pages, beide mit
kostenlosem Plan).

---

## 5. Vor dem Start: Checkliste

- [ ] Alle Platzhalter ersetzen. Sie stehen in **[eckigen Klammern]**, z. B. `[ciudad de encuentro]`,
      `[XXX] USD`, `[Nombre]`. Auf GitHub findet die Suche (Taste `/`) alle Stellen.
- [ ] E-Mail, WhatsApp, Instagram und Facebook in `_config.yml` eintragen.
- [ ] Echte Tour-Termine in `_data/tour_dates.yml`.
- [ ] Die Liste bedrohter Arten (`_data/species.yml`) mit den echten Monitoring-Daten abgleichen.
- [ ] Name, Foto und Geschichte der neuen Froschart sowie die Angaben zum Buch eintragen.
- [ ] Mission von Kampuntin ausformulieren (`_data/es/home.yml`, `_data/en/home.yml`).
- [ ] Erfahrungsberichte durch echte ersetzen (mit Einverständnis).
- [ ] Alle Texte über Kultur, Wissen und Territorium **von der Gemeinschaft Maikiuants prüfen lassen**.
- [ ] Für jedes Foto und jede Personenbeschreibung das Einverständnis der Personen einholen.
- [ ] Impressum & Datenschutz (`_data/*/legal.yml`) rechtlich prüfen lassen.
- [ ] Die Beispiel-Blogeinträge in `_posts/` löschen oder ersetzen.

---

## 6. Lokale Vorschau (optional, für Technik-Interessierte)

Braucht Ruby 3.x (z. B. `brew install ruby`), dann im Projektordner:

```bash
bundle install
bundle exec jekyll serve
```

Danach unter http://localhost:4000 ansehen.

---

## Guía rápida (español): publicar una novedad

1. Entra en [app.pagescms.org](https://app.pagescms.org) con tu cuenta de GitHub y elige el sitio.
2. Abre **Novedades (Blog)** → **Añadir**.
3. Escribe el título, elige la fecha, el idioma y los temas, sube una foto y escribe el texto.
4. Guarda. En uno o dos minutos la novedad aparece en la web.

Sin Pages CMS: en github.com abre la carpeta `_posts` → **Add file → Create new file** y copia el
ejemplo del punto 3A. Las fotos van en `assets/img/novedades/`.
