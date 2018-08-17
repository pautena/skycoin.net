export const version = 'v0.24.1';
export const downloads = [
  {
    platform: 'downloads.wallet.windows',
    icon: 'windows',
    builds: [{
      name: 'downloads.wallet.withElectron',
      architectures: [{
        name: '64bit',
        download: 'https://downloads.skycoin.net/wallet/skycoin-0.24.1-gui-win-setup.exe',
        signature: 'https://downloads.skycoin.net/wallet/skycoin-0.24.1-gui-win-setup.exe.asc',
        filetype: '.exe',
        filesize: '68mb',
      }],
    }, {
      name: 'downloads.wallet.withoutElectron',
      architectures: [{
        name: '32bit',
        download: 'https://downloads.skycoin.net/wallet/skycoin-0.24.1-bin-win-x86.zip',
        signature: 'https://downloads.skycoin.net/wallet/skycoin-0.24.1-bin-win-x86.zip.asc',
        filetype: '.zip',
        filesize: '14mb',
      }, {
        name: '64bit',
        download: 'https://downloads.skycoin.net/wallet/skycoin-0.24.1-bin-win-x64.zip',
        signature: 'https://downloads.skycoin.net/wallet/skycoin-0.24.1-bin-win-x64.zip.asc',
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
        download: 'https://downloads.skycoin.net/wallet/skycoin-0.24.1-gui-osx.dmg',
        signature: 'https://downloads.skycoin.net/wallet/skycoin-0.24.1-gui-osx.dmg.asc',
        filetype: '.dmg',
        filesize: '51mb',
      }],
    }, {
      name: 'downloads.wallet.withoutElectron',
      architectures: [{
        name: '',
        download: 'https://downloads.skycoin.net/wallet/skycoin-0.24.1-bin-osx-darwin-x64.zip',
        signature: 'https://downloads.skycoin.net/wallet/skycoin-0.24.1-bin-osx-darwin-x64.zip.asc',
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
        download: 'https://downloads.skycoin.net/wallet/skycoin-0.24.1-gui-linux-x64.AppImage',
        signature: 'https://downloads.skycoin.net/wallet/skycoin-0.24.1-gui-linux-x64.AppImage.asc',
        filetype: '.AppImage',
        filesize: '56mb',
      }],
    }, {
      name: 'downloads.wallet.withoutElectron',
      architectures: [{
        name: 'arm',
        download: 'https://downloads.skycoin.net/wallet/skycoin-0.24.1-bin-linux-arm.tar.gz',
        signature: 'https://downloads.skycoin.net/wallet/skycoin-0.24.1-bin-linux-arm.tar.gz.asc',
        filetype: '.tar.gz',
        filesize: '14mb',
      }, {
        name: '64bit',
        download: 'https://downloads.skycoin.net/wallet/skycoin-0.24.1-bin-linux-x64.tar.gz',
        signature: 'https://downloads.skycoin.net/wallet/skycoin-0.24.1-bin-linux-x64.tar.gz.asc',
        filetype: '.tar.gz',
        filesize: '14mb',
      }],
    }],
  },
  {
    platform: 'downloads.wallet.android',
    icon: 'android',
    builds: [
      // {
      //   name: 'downloads.wallet.androidRecommended',
      //   architectures: [{
      //     name: '',
      //     download: '',
      //     signature: '',
      //     filetype: ' ',
      //     filesize: 'mb',
      //   }],
      // },
      {
        name: 'downloads.wallet.androidAdvanced',
        architectures: [{
          name: '',
          download: 'https://downloads.skycoin.net/android/Skycoin-Wallet-v0.1.0.apk',
          signature: '',
          filetype: '.apk',
          filesize: 'mb',
        }],
      },
    ],
  },
];
