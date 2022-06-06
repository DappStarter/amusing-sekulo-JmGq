require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture hill fresh spot toy note snow pulp install gloom slot gauge'; 
let testAccounts = [
"0x9d545b36e2e8d1ceff0d84a80d926b36f650a2cdec9c9c20ed795aae01a0f863",
"0xd4e470d0545db8ede877beafe2980bf13fb1666cb7b2c71724e5bb447159f4ed",
"0xd67de034b56899a6bdeb6ffe1e917b41fcd9a2350a25b0a4e504720629d71e31",
"0x07fbf32ca18d3cc612402cc1a030a15199cd8dfbd5d9b5a842409f705ec0a39e",
"0x358c6353114e1f18768edd1fdfb24bad0f641d276d15d185dee10798833da8cf",
"0xcf024c3b23db9fb8fbf1d17500c8375f20487bd6c9bf8422d8aa2aa8216c3544",
"0x04b22656064668cd6724e57cfd25d87b169c7deacc59214bd98973a99b6b623f",
"0x771596c03cd772a763c2c529e16bfad37a6d8f2e720385fa801cd599a0ea510d",
"0xaa26930adf8acefdd54175fd007b5d58a67c5ba1fd7e03c33f3be61fb8c8f13f",
"0xc634d44f347e5cdde6c65d231adf98da782bd78f0b5efd837ac7acdb02c8b421"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

