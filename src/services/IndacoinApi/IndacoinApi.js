import HttpClient from '../HttpClient/HttpClient';

export default class IndacoinApi {
  constructor() {
    this.url = 'https://indacoin.com/';
    this.partnerName = 'skycoin';
    this.secret = 'XXXXX';
    this.http = new HttpClient(this.url);
  }

  get headers() {
    return {
      'gw-partner': this.partnerName,
      'gw-nonce': IndacoinApi.nonce,
      'gw-sign': this.sign,
    };
  }

  /**
   * Random number
   * @returns {number}
   */
  static get nonce() {
    const min = 1000000;
    const max = 9999999;

    return Math.floor(Math.random() * ((max - min) + 1)) + min;
  }

  /**
   * $nonce = 1000000;
   $partnername=;//ask for it
   $string=$partnername."_".$nonce;
   $secret= ; //ask for it
   $sig = base64_encode(hash_hmac('sha256', $string, $secret,true));
   * @returns {string}
   */
  get sign() {
    return '';
  }

  /**
   * Create a new transaction
   * @param email
   * @param amount
   * @param currency
   * @param walletAddress
   */
  createTransaction(email, amount, currency, walletAddress) {
    console.log(`createTransaction(${amount}, ${currency}, ${walletAddress}`);
    return this.http.post('/api/exgw_createTransaction', this.transactionData(email, amount, currency, walletAddress));
  }

  transactionData(email, amount, currency, walletAddress) {
    return {
      user_id: email,
      cur_in: currency,
      cur_out: 'SKY',
      target_address: walletAddress,
      amount_in: amount,
    };
  }

  /**
   * $transaction_id =; //get it from previous method
   $string=$partnername."_".$transaction_id;
   $secret="secret";
   $sig = base64_encode(base64_encode(hash_hmac('sha256', $string, $secret,true)));
   * @param transactionId
   */
  getTransactionUrl(transactionId) {
    const url = 'https://indacoin.com/gw/payment_form';
    return `${url}?transaction_id=${transactionId}&partner=${this.partnerName}&cnfhash=${this.transactionUrlHash(transactionId)}`;
  }

  base64Encode(data) {
    // TODO: implement this
    return data;
  }

  hashHmac256(data, secret) {
    // TODO: implement this
    return data;
  }

  transactionUrlHash(transactionId) {
    const data = `${(this.partnerName)}_${transactionId}`;
    return this.base64Encode(this.base64Encode(this.hashHmac256(data, this.secret)));
  }
}
