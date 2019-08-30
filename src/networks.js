module.exports = {
  bitcoin: {
    messagePrefix: '\x18Bitcoin Signed Message:\n',
    bech32: 'bc',
    bip32: {
      public: 0x022d2533,
      private: 0x0221312b
    },
    pubKeyHash: 0x10,
    scriptHash: 0x4c,
    wif: 0x7e
  },
  testnet: {
    messagePrefix: '\x18Bitcoin Signed Message:\n',
    bech32: 'tb',
    bip32: {
      public: 0x043587cf,
      private: 0x04358394
    },
    pubKeyHash: 0x41,
    scriptHash: 0x15,
    wif: 0xc1
  },
}
