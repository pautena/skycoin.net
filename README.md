![skycoin.net logo](https://user-images.githubusercontent.com/26845312/32426914-084fdf62-c283-11e7-9d7e-9f35568138b4.png)

# skycoin.net

[![Build Status](https://travis-ci.org/skycoin/skycoin.net.svg?branch=master)](https://travis-ci.org/skycoin/skycoin.net)

## Setup

1. Install [nvm](https://github.com/creationix/nvm).

2. Install and use the node version specified in `.nvmrc`:

  ```shell
  $ nvm install && nvm use
  ```

3. Install Yarn:

  ```shell
  $ npm install -g yarn
  ```

4. Install dependencies:

  ```shell
  $ yarn
  ```

## Development

Start the development server:

```shell
$ yarn start
```

Run tests:

```shell
$ yarn test

# Generate coverage report
$ yarn test -- --coverage
```

## Releasing to production

*This requires write access to the skycoin/skycoin.net repo, doing a PR from a fork doesn't carry over the tag.*

Commits on the master branch will be automatically released to https://staging.skycoin.net.

To release to production:

1. Bump the version number in `package.json`:

    ```diff
       "name": "skycoin.net",
    -  "version": "0.1.2",
    +  "version": "0.1.3",
       "private": true,
    ```
    
2. Commit, create a tag, and push:

    ```shell
    $ git commit -am "chore: bump version number"
    $ git tag v0.1.3
    $ git push origin master --tags
    ```

