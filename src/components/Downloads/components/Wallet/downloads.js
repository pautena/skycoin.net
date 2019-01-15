export const version = 'v0.25.0';
export const downloads = [
  {
    platform: 'downloads.wallet.windows',
    icon: 'windows',
    builds: [{
      name: 'downloads.wallet.withElectron',
      architectures: [{
        name: '64bit',
        download: 'https://downloads.skycoin.net/wallet/skycoin-0.25.0-gui-electron-win-setup.exe',
        signature: 'https://downloads.skycoin.net/wallet/skycoin-0.25.0-gui-electron-win-setup.exe.asc',
        filetype: '.exe',
        filesize: '68mb',
      }],
    }, {
      name: 'downloads.wallet.withoutElectron',
      architectures: [{
        name: '32bit',
        download: 'https://downloads.skycoin.net/wallet/skycoin-0.25.0-gui-standalone-win-x86.zip',
        signature: 'https://downloads.skycoin.net/wallet/skycoin-0.25.0-gui-standalone-win-x86.zip.asc',
        filetype: '.zip',
        filesize: '14mb',
      }, {
        name: '64bit',
        download: 'https://downloads.skycoin.net/wallet/skycoin-0.25.0-gui-standalone-win-x64.zip',
        signature: 'https://downloads.skycoin.net/wallet/skycoin-0.25.0-gui-standalone-win-x64.zip.asc',
        filetype: '.zip',
        filesize: '14mb',
      }],
    }],
  },
  {
    platform: 'downloads.wallet.macos',
    icon: 'macos',
    builds: [{
      name: 'downloads.wallet.withElectron',
      architectures: [{
        name: '',
        download: 'https://downloads.skycoin.net/wallet/skycoin-0.25.0-gui-electron-osx.dmg',
        signature: 'https://downloads.skycoin.net/wallet/skycoin-0.25.0-gui-electron-osx.dmg.asc',
        filetype: '.dmg',
        filesize: '51mb',
      }],
    }, {
      name: 'downloads.wallet.withoutElectron',
      architectures: [{
        name: '',
        download: 'https://downloads.skycoin.net/wallet/skycoin-0.25.0-gui-standalone-osx-darwin-x64.zip',
        signature: 'https://downloads.skycoin.net/wallet/skycoin-0.25.0-gui-standalone-osx-darwin-x64.zip.asc',
        filetype: '.zip',
        filesize: '14mb',
      }],
    }],
  },
  {
    platform: 'downloads.wallet.linux',
    icon: 'linux',
    builds: [{
      name: 'downloads.wallet.withElectron',
      architectures: [{
        name: '64bit',
        download: 'https://downloads.skycoin.net/wallet/skycoin-0.25.0-gui-electron-linux-x64.AppImage',
        signature: 'https://downloads.skycoin.net/wallet/skycoin-0.25.0-gui-electron-linux-x64.AppImage.asc',
        filetype: '.AppImage',
        filesize: '56mb',
      }],
    }, {
      name: 'downloads.wallet.withoutElectron',
      architectures: [{
        name: 'arm',
        download: 'https://downloads.skycoin.net/wallet/skycoin-0.25.0-gui-standalone-linux-arm.tar.gz',
        signature: 'https://downloads.skycoin.net/wallet/skycoin-0.25.0-gui-standalone-linux-arm.tar.gz.asc',
        filetype: '.tar.gz',
        filesize: '14mb',
      }, {
        name: '64bit',
        download: 'https://downloads.skycoin.net/wallet/skycoin-0.25.0-gui-standalone-linux-x64.tar.gz',
        signature: 'https://downloads.skycoin.net/wallet/skycoin-0.25.0-gui-standalone-linux-x64.tar.gz.asc',
        filetype: '.tar.gz',
        filesize: '14mb',
      }],
    }],
  },
  {
    platform: 'downloads.wallet.android',
    icon: 'android',
    builds: [
      {
        name: 'downloads.wallet.androidRecommended',
        architectures: [{
          name: '',
          download: 'https://play.google.com/store/apps/details?id=com.skycoin.wallet',
          signature: '',
          filetype: ' ',
          filesize: 'mb',
        }],
      },
      {
        name: 'downloads.wallet.androidAdvanced',
        architectures: [{
          name: '',
          download: 'https://downloads.skycoin.net/android/Skycoin-Wallet-v1.3.0.apk',
          signature: '',
          filetype: '.apk',
          filesize: 'mb',
        }],
      },
    ],
  },
  {
    platform: 'downloads.wallet.ios',
    icon: 'macos',
    builds: [
      {
        name: 'downloads.wallet.iosRecommended',
        architectures: [{
          name: '',
          download: 'https://itunes.apple.com/gb/app/skycoin/id1439949089?mt=8',
          signature: '',
          filetype: ' ',
          filesize: '',
        }],
      },
    ],
  },
];
