# FSRS Study
Mobile-first MCQ study app using the real `ts-fsrs@5.4.2` scheduler (FSRS-6). The scheduler receives the persisted FSRS card, current timestamp and Again/Hard/Good/Easy rating, then persists the returned state. Desired retention is passed into the scheduler.

Implemented: dashboard, decks, card CRUD, due/overdue selection, review flow, FSRS state/history, statistics, retention setting, dark mode, JSON backup/import/export, persistent localStorage.

No `.apkg` compatibility is claimed. Genuine Anki package support requires a separate adapter for Anki's package/database structure.

The browser imports `ts-fsrs@5.4.2` as an ES module. To ship as APK, wrap this web app in a native Android build tool after deployment; this source does not falsely claim to already be an APK.
