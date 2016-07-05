# react-ipld

[![](https://img.shields.io/badge/made%20by-Protocol%20Labs-blue.svg?style=flat-square)](http://ipn.io)
[![](https://img.shields.io/badge/project-IPFS-blue.svg?style=flat-square)](http://ipfs.io/)
[![](https://img.shields.io/badge/freenode-%23ipfs-blue.svg?style=flat-square)](http://webchat.freenode.net/?channels=%23ipfs)
[![Travis CI](https://travis-ci.org/ipfs/react-ipld.svg?branch=master)](https://travis-ci.org/ipfs/react-ipld)
[![Dependency Status](https://david-dm.org/ipfs/react-ipld.svg?style=flat-square)](https://david-dm.org/ipfs/react-ipld) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/feross/standard)

> React components for IPLD

## React Components

### IPLDEditor

Editor based on [codemirror](http://codemirror.net/) to edit IPLD objects.

### IPLDStoreList

Display existing IPLD objects and delete them.

## Helpers

### IPLDStore

Setup storage and resolution for IPLD objects in the browser.

Available methods:

- `add(obj) -> Promise`: Add the given JavaScript.
- `resolve(path) -> Promise`: Resolve the given IPLD path agains all stored objects.


## Development

```bash
# Run
$ npm start
# Build
$ npm run build
# Lint
$ npm run lint
```
