import Portis from '@portis/web3';
import Web3 from 'web3';
import hackJson from './hack_abi.json'

// const hack_addr = '0x53F3aDAE090E49d289fFdD21c8E2B66FA3412631';
const hack_addr = '0x9d65584E9869eb54644D175215658b8C5de43004';

const portis = new Portis('2ad8a801-9c7e-43da-8916-96adf7022bcb', 'ropsten');
const web3 = new Web3(portis.provider || "http://127.0.0.1:8545");
const hack = new web3.eth.Contract(hackJson.hack_abi, hack_addr);

export { portis, web3, hack }