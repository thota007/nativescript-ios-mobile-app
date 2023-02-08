import { NativeScriptConfig } from '@nativescript/core';

export default {
  id: 'org.nativescript.helloworld',
  appPath: 'src',
  appResourcesPath: 'App_Resources',
  android: {
    v8Flags: '--expose_gc',
    markingMode: 'none'
  }
} as NativeScriptConfig;