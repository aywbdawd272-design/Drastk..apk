# FSRS Study — Android APK build

This package is the corrected Android build source for the FSRS Study app.

## Important fixes
- `ts-fsrs@5.4.2` is a normal npm dependency and is bundled by Vite at build time.
- The app does not load FSRS from `esm.sh` at runtime.
- Capacitor 8 is pinned to matching package versions.
- GitHub Actions creates the Android project, syncs the local web assets, and builds `app-debug.apk`.
- The APK therefore keeps the FSRS scheduler inside the app and can run the study logic offline after installation.

## GitHub Actions
1. Upload the contents of this folder to the repository root, including `.github/workflows/android-apk.yml`.
2. Open **Actions**.
3. Select **Build Android APK**.
4. Choose **Run workflow**.
5. After the green check, open the run and download the artifact **fsrs-study-debug-apk**.
6. Inside it is `app-debug.apk`.

Capacitor's Android build uses the generated `android/` project and the web assets from `dist`.
