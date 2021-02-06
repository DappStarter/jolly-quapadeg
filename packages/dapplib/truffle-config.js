require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy kiwi brand venture strike rival magic around good clinic slot genuine'; 
let testAccounts = [
"0x085197427aced7be433523c4c8c41651350e28e7327301835e123d79ec10cd9f",
"0x1d4bc866f39891b6b6fdfefcc2b418c773dc73921f137f08c1dd9c8bf93c9ecf",
"0x10c41d1d66a0e1a96349fa41fa0f34f8f825c7951f4a74cfb690d3f52262bcb5",
"0x40e040e8531d161cbd03581338155c3060326ab3fc21fcd47fc62386d0ecec2d",
"0x6e875f8f0260c738dd9b576c741ca9600ce4f7b1d501e05291e1b196f4f9a407",
"0x2976a2f2e8042c20a55fc96f31f2cd12cb932967b42a3c5c3d7538da092c6a4a",
"0x0d62150c1aa622874700ec6a057c3f2d43122fbcd901951c4d462b551baee679",
"0x9e5b751602fef99248f8b31c6efe8c258a2cf046a181be2178e8be0029569f16",
"0xc14527f9f8c159b5b99682ec97bb5a912c78e8a7754f14b2ba02662031dc4ba9",
"0x9412fbfa46c48fd9c0edf2f0b6116c010e292fd52d0689e1423e3719fb49cd46"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
