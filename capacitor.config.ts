import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.fsrsstudy.app',
  appName: 'FSRS Study',
  webDir: 'dist',
  android: {
    allowMixedContent: false
  }
};

export default config;
