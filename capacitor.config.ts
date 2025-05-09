import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'pokedex',
  webDir: '.output/public',
  plugins:{
    SplashScreen :{
      launchShowDuration: 0,
      androidScaleType: 'CENTER_CROP',
      showSpinner: false,
      launchAutoHide: true,
      backgroundColor: '#ef6467',
      androidSplashResourceName: 'splash',
      iosSplashResourceName: 'splash',
    }
  }
};

export default config;
