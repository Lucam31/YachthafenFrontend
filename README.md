# yachthafen

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).



Buchen boot anlegen und suchen --> alle Boote des Users werden schon gehohlt
Verbesserung an der UI
Start Enddatum machen
Gesamtpreis in der Buchen Ansicht --> Ausrechen mit dem Tagespreis und der Buchungsdauer --> Rechnung im Frontend
Abmelden Button

In HomeView werden jetzt alle Buchungen angezeigt. Jedoch klappen alle gleichzeit auf

Daten Struktur der Buchung wie folgt

  {
    "m_BuchungsId": 1,
    "m_Buchungsdatum": "2023-01-23T00:00:00",
    "m_Startdatum": "2023-01-23T00:00:00",
    "m_Enddatum": "2023-01-27T00:00:00",
    "m_Tagespreis": 50,
    "m_NebenkostenGeaendert": false,
    "m_Kunde": {
      "m_KundenId": 1,
      "m_Name": "Werner",
      "m_Vorname": "Malte",
      "m_Email": "test@test.de",
      "m_Passwort": "MarcelStinkt",
      "m_Rolle": 1
    },
    "m_Boot": {
      "m_RegistrierungsId": 1,
      "m_Name": "Boot1",
      "m_Laenge": 2,
      "m_Breite": 1,
      "m_Tiefgang": 30
    },
    "m_Liegeplatz": {
      "m_LiegeplatzId": 1,
      "m_Bezeichnung": "Platz 1",
      "m_Laenge": 10,
      "m_Breite": 5,
      "m_Tiefgang": 100,
      "m_Tagespreis": 50
    },
    "m_Nebenkosten": [
      {
        "m_NebenkostenId": 1,
        "m_Name": "Strom",
        "m_Preis": 10,
        "m_Startdatum": "2022-01-23T00:00:00",
        "m_Enddatum": "2024-01-23T00:00:00",
        "m_Buchungsdatum": "2023-01-23T00:00:00"
      }
    ]
  },
