import IPFSRepo from 'ipfs-repo'
import store from 'idb-plus-blob-store'
import {IPLDService} from 'ipfs-ipld'
import BlockService from 'ipfs-block-service'
import ipld from 'ipld'

export default class IPLDStore {
  constructor () {
    this._repo = new IPFSRepo('react-ipld', {stores: store})
    this._blockService = new BlockService(this._repo)
    this._ipldService = new IPLDService(this._blockService)
    this._elements = []
  }

  add (obj) {
    return new Promise((resolve, reject) => {
      this._ipldService.add(obj, (err) => {
        if (err) return reject(err)
        const hash = ipld.multihash(ipld.marshal(obj))
        this._elements.push(hash)
        resolve(hash)
      })
    })
  }

  ls () {
    return this._elements
  }
}
