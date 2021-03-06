const BCHN_MAINNET = 'https://bchn.fullstack.cash/v5/'
const BCHJS = require('@psf/bch-js')
const bchjs = new BCHJS({ restURL: BCHN_MAINNET })

export class BitcoinCashService {

  async getBalance(address: string) {
    try {
      const balanceResponse = await bchjs.Electrumx.balance(address)
      return balanceResponse?.balance?.confirmed
    } catch (err) {
      throw err
    }
  }

}
