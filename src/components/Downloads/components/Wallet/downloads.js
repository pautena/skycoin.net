export const version = 'v0.22.0';
export const downloads = [{
  platform: 'downloads.wallet.macos',
  icon: 'macos',
  builds: [{
    name: 'downloads.wallet.withElectron',
    architectures: [{
      name: '',
      download: 'https://downloads.skycoin.net/wallet/skycoin-0.22.0-gui-osx.dmg',
      signature: 'https://downloads.skycoin.net/wallet/skycoin-0.22.0-gui-osx.dmg.asc',
      filetype: '.dmg',
      filesize: '51mb',
    }],
  }, {
    name: 'downloads.wallet.withoutElectron',
    architectures: [{
      name: '',
      download: 'https://downloads.skycoin.net/wallet/skycoin-0.22.0-bin-osx-darwin-x64.zip',
      signature: 'https://downloads.skycoin.net/wallet/skycoin-0.22.0-bin-osx-darwin-x64.zip.asc',
      filetype: '.zip',
      filesize: '14mb',
    }],
  }],
}, {
  platform: 'downloads.wallet.windows',
  icon: 'windows',
  builds: [{
    name: 'downloads.wallet.withElectron',
    architectures: [{
      name: '64bit',
      download: 'https://downloads.skycoin.net/wallet/skycoin-0.22.0-gui-win-setup.exe',
      signature: 'https://downloads.skycoin.net/wallet/skycoin-0.22.0-gui-win-setup.exe.asc',
      filetype: '.exe',
      filesize: '68mb',
    }],
  }, {
    name: 'downloads.wallet.withoutElectron',
    architectures: [{
      name: '32bit',
      download: 'https://downloads.skycoin.net/wallet/skycoin-0.22.0-bin-win-x86.zip',
      signature: 'https://downloads.skycoin.net/wallet/skycoin-0.22.0-bin-win-x86.zip.asc',
      filetype: '.zip',
      filesize: '14mb',
    }, {
      name: '64bit',
      download: 'https://downloads.skycoin.net/wallet/skycoin-0.22.0-bin-win-x64.zip',
      signature: 'https://downloads.skycoin.net/wallet/skycoin-0.22.0-bin-win-x64.zip.asc',
      filetype: '.zip',
      filesize: '14mb',
    }],
  }],
}, {
  platform: 'downloads.wallet.linux',
  icon: 'linux',
  builds: [{
    name: 'downloads.wallet.withElectron',
    architectures: [{
      name: '64bit',
      download: 'https://downloads.skycoin.net/wallet/skycoin-0.22.0-gui-linux-x64.AppImage',
      signature: 'https://downloads.skycoin.net/wallet/skycoin-0.22.0-gui-linux-x64.AppImage.asc',
      filetype: '.AppImage',
      filesize: '56mb',
    }],
  }, {
    name: 'downloads.wallet.withoutElectron',
    architectures: [{
      name: 'arm',
      download: 'https://downloads.skycoin.net/wallet/skycoin-0.22.0-bin-linux-arm.tar.gz',
      signature: 'https://downloads.skycoin.net/wallet/skycoin-0.22.0-bin-linux-arm.tar.gz.asc',
      filetype: '.tar.gz',
      filesize: '14mb',
    }, {
      name: '64bit',
      download: 'https://downloads.skycoin.net/wallet/skycoin-0.22.0-bin-linux-x64.tar.gz',
      signature: 'https://downloads.skycoin.net/wallet/skycoin-0.22.0-bin-linux-x64.tar.gz.asc',
      filetype: '.tar.gz',
      filesize: '14mb',
    }],
  }],
}];
